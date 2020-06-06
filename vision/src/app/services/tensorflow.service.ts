import { CountriesModel } from './../components/sidebar/countries.model';
import { Subscription } from 'rxjs';
import { TrendsapiService } from './trendsapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable, OnDestroy, AfterContentInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs'
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class TensorflowService implements OnDestroy {
  // store imported model
  private Model: tf.LayersModel

  // subscription from trendsapi
  private receivedData_sub: Subscription

  // store data from subscription
  public presentData: {[key: string]: any}

  // data from selected country
  selectedData: number[]

  // training parameters
  epochs: number = 45
  split: number = 40
  windowSize: number = 8
  batchSize: number = 3

  // finished dataset
  trainSet: tf.Tensor
  validateSet: tf.Tensor

  constructor(private TrendsapiService: TrendsapiService) {


    // subscribe to trendsapi calls
    this.receivedData_sub = this.TrendsapiService.receivedData.subscribe(data => {
      this.presentData = data
      this.selectCountry('US')
      this.createDataset()
      this.train()
    })
  }

  loadModel() {
    // import keras model from backend w/o weights
    tf.loadLayersModel(environment.backend.Tfmodel, {strict:false})
    .then((layerModel) => {
      console.log('model imported successfully')
      this.Model = layerModel
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // setup training data for selected country
  selectCountry(country: string) {
    if (this.Model && this.presentData) {
      // get all values for 1 country
      let selected = []
      this.presentData.data.forEach(element => {
        if (element.country == country) {
          this.presentData.data[this.presentData.data.indexOf(element)].data.forEach(element => {
            selected.push(element.value)
          });
          this.selectedData = selected
          console.log(this.selectedData)
        }
      });
    }
  }

  // creates dataset for training
  createDataset() {
    if (this.selectedData) {
      let _train: number[] = this.selectedData.slice(0, this.split)
      let _validate: number[] = this.selectedData.slice(this.split)
      this.trainSet = tf.tensor(this.sliceArr(_train))
      this.validateSet = tf.tensor(this.sliceArr(_validate))
    }

  }

  // slice arrays for createDataset
  sliceArr(arr: any[]): any {
    let tensor: any[] = []
    for (let x = 0; x < arr.length; x++) {
      if (x+this.windowSize > arr.length) {
        break
      } else {
        tensor.push([arr.slice(x, (x+this.windowSize -1)), [arr[x+(this.windowSize - 1)]]])
      }
    }
    console.log(tensor)
    return tensor
  }

  // compile & train the model
  train() {
    if (this.Model) {
      this.Model.compile({
        optimizer: tf.train.adam(0.0001),
        loss: tf.losses.meanSquaredError,
        metrics: ['accuracy']
      })
      this.Model.fit(this.trainSet, this.validateSet, {
        epochs: this.epochs,
        batchSize: this.batchSize,
        callbacks: []
      })
      .then((info) => {
        console.log('complete', info.history.acc)
      })
      .catch((err) => {
        console.log(err)
        console.log(err)
      })
    }
  }

  predict() {

  }

  ngOnDestroy() {
    this.receivedData_sub.unsubscribe()
  }
}

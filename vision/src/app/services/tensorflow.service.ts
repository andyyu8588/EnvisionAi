import { CountriesModel } from './../components/sidebar/countries.model';
import { Subscription } from 'rxjs';
import { TrendsapiService } from './trendsapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable, OnDestroy, AfterContentInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs'
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { model } from '@tensorflow/tfjs';

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
  selectedData: number[] =[61, 59, 63, 66, 67, 71, 63, 74, 77, 71, 87, 80, 82, 86, 78, 81, 76, 73, 81, 93, 86, 76, 86, 91, 90, 74, 81, 100, 88, 85, 85, 86, 81, 72, 75, 73, 74, 75, 76, 77, 68, 71, 66, 73, 67, 61, 52, 55, 59, 48, 49, 56]
  // selectedData: number[] = [0,1,2,3,4,5,6,7,8,9]

  // training parameters
  epochs: number = 45
  split: number = 6
  windowSize: number = 8
  batchSize: number = 3

  // finished dataset
  trainSet = tf.ones([2,3])
  targetSet = tf.ones([2,1])
  // trainSet
  // targetSet

  validateInput
  validateTarget

  constructor(private TrendsapiService: TrendsapiService) {
    // subscribe to trendsapi calls
    this.receivedData_sub = this.TrendsapiService.receivedData.subscribe(data => {
      this.presentData = data
      this.selectCountry('US')
      // this.createDataset()
      // this.train()
    })
  }

  loadModel() {
    // import keras model from backend w/o weights
    tf.loadLayersModel(environment.backend.Tfmodel, {strict:false})
    .then((layerModel) => {
      console.log('model imported successfully')
      this.Model = layerModel
      // this.createDataset()
      // .then(() => {
        console.log(this.trainSet)
        console.log(this.targetSet)
      //   this.train()
      // })
      // .catch(() => {
      //   console.log('dfda')
      // })
      this.train()
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
          // console.log(this.selectedData)
        }
      });
    }
  }

  // slice arrays for createDataset 
  sliceArr(arr: any[]): any {
    let inputs: any[] = []
    let targets: any[] = []
    for (let x = 0; x < arr.length; x++) {
      if (x+this.windowSize > arr.length) {
        break
      } else {
        let input = (arr.slice(x, (x+this.windowSize - 1)))
        let target = ([arr[x+this.windowSize]])
        inputs.push(input)
        targets.push(target)
        // tensor.push([tf.tensor1d(arr.slice(x, (x+this.windowSize -1))), tf.tensor1d([arr[x+(this.windowSize - 1)]])])
      }
    }
    // console.log(tensor)
    return [inputs, targets]
  }
  
  // creates dataset for training
  createDataset() {
    return new Promise((resolve, reject) => {
      if (this.selectedData) {
        let _train: number[] = this.selectedData.slice(0, this.split)
        let _validate: number[] = this.selectedData.slice(this.split)

        // this.validateSet = tf.data.array(this.sliceArr(_validate))

        // this.validateSet = tf.data.generator(this.sliceArr(_validate))
        
        let _trainSet = this.sliceArr(_train)
        this.trainSet = tf.tensor(_trainSet[0])
        this.targetSet = tf.tensor(_trainSet[1])

        let _validateSet = this.sliceArr(_validate)
        this.validateInput = tf.tensor(_validateSet[0])
        this.validateTarget = tf.tensor(_validateSet[1])
        resolve()
        // let _trainBatch = ([[], []])

        // _trainSet.forEach(element => {
        //   _trainBatch[0].push(element[0])
        //   _trainBatch[1].push(element[1])
        // });

        // let _validateBatch = [[], []]

        // _validateSet.forEach(element => {
        //   _validateBatch[0].push(element[0])
        //   _validateBatch[1].push(element[1])
        // });

        // this.trainSet = tf.tensor2d(_trainBatch)
        // this.validateSet = tf.tensor2d(_validateBatch)
      } else {
        reject()
      }  
    })
  }


  // compile & train the model
  train() {
    if (this.Model) {
      this.Model.compile({
        optimizer: tf.train.adam(0.0001),
        loss: tf.losses.meanSquaredError,
        metrics: ['accuracy']
      })
      console.log('model compiled')
      this.Model.fit(this.trainSet, this.targetSet, {
        epochs: this.epochs,
        batchSize: this.batchSize,
        callbacks: [],
        // validationData: [this.validateInput, this.validateTarget]
      })
      .then((info) => {
        console.log('complete', info)
        console.log('predict' + this.Model.predict(tf.ones([1, 3])))
      })
      .catch((err) => {
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

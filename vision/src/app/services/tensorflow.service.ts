import { CountriesModel } from './../components/sidebar/countries.model';
import { Subscription } from 'rxjs';
import { TrendsapiService } from './trendsapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable, OnDestroy, AfterContentInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs'

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
  epochs: number = 50
  split: number = Math.floor(this.selectedData.length*1)
  windowSize: number = 4
  batchSize: number = 3

  // finished dataset
  // trainSet = [tf.ones([2,3])]
  // targetSet = [tf.ones([2,1])]
  inputSet
  targetSet

  validateInput
  validateTarget

  constructor(private TrendsapiService: TrendsapiService) {
    // subscribe to trendsapi calls
    this.receivedData_sub = this.TrendsapiService.receivedData.subscribe(data => {
      // this.presentData = data
      // this.selectCountry('US')
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
      this.createDataset()
      .then(() => {
        console.log(this.inputSet)
        console.log(this.targetSet)
        this.train()
      })
      .catch(() => {
        console.log('dfda')
      })
      // this.train()
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
  sliceArr(arr: any[]): Promise<{[key: string]: any}> {
    return new Promise((resolve, reject) => {
      let inputs: any[] = []
      let targets: any[] = []
      for (let x = 0; x < arr.length; x++) {
        if (x+this.windowSize > arr.length) {
          resolve({inputs: inputs, targets: targets})
          break
        } else {
          let input = (arr.slice(x, (x+this.windowSize - 1)))
          let target = ([arr[x+this.windowSize]])
          inputs.push(input)
          targets.push(target)
          // console.log(inputs, targets)
          // tensor.push([tf.tensor1d(arr.slice(x, (x+this.windowSize -1))), tf.tensor1d([arr[x+(this.windowSize - 1)]])])
        }
      }
      // console.log(tensor)
      resolve({inputs: inputs, targets: targets})
    })

  }
  
  // creates dataset for training
  createDataset(): any {
    return new Promise((resolve, reject) => {
      if (this.selectedData) {
        let _train: number[] = this.selectedData.slice(0, this.split)
        // _train = _train.slice((Math.floor(_train.length/(this.windowSize-1))))
        let _validate: number[] = this.selectedData.slice(this.split)
        // _validate = _validate.slice((Math.floor(_validate.length/this.windowSize)))


        this.sliceArr(_train)
        .then((res) => {
          let _inputSet: number[] = []
          res.inputs.forEach((element: number[]) => {
            _inputSet = _inputSet.concat(element)
          })
          let _inputTargets: number[] = []
          res.targets.forEach((element: number[]) => {
            _inputTargets = _inputTargets.concat(element)
          })
          console.log(_inputSet.length, _inputTargets.length)
          this.inputSet = tf.tensor2d(_inputSet, [(_inputSet.length/(this.windowSize-1)), this.windowSize -1], 'int32')
          this.targetSet = tf.tensor2d(_inputTargets, [_inputTargets.length, 1], 'int32')
          
          
          this.sliceArr(_validate)
          .then((res) => {
            let _inputSet: number[] = []
            res.inputs.forEach((element: number[]) => {
              _inputSet = _inputSet.concat(element)
            })
            let _inputTargets: number[] = []
            res.targets.forEach((element: number[]) => {
              _inputTargets = _inputTargets.concat(element)
            })
            console.log(_inputSet.length, _inputTargets.length)
            this.validateInput = tf.tensor2d(_inputSet, [Math.floor((_inputSet.length/(this.windowSize - 1))), this.windowSize -1], 'int32')
            this.validateTarget = tf.tensor2d(_inputTargets, [_inputTargets.length, 1], 'int32')
            resolve()
          })
        })
      } else {
        console.log('bruh')
        reject()
      }  
    })
  }


  // compile & train the model
  train() {
    if (this.Model) {
      this.Model.compile({
        optimizer: tf.train.adam(0.005),
        loss: tf.losses.meanSquaredError,
        metrics: ['mae']
      })
      console.log('model compiled')
      this.Model.fit(this.inputSet, this.targetSet, {
        epochs: this.epochs,
        batchSize: this.batchSize,
        callbacks: [],
        validationSplit: 0.7
      })
      .then((info) => {
        console.log('training complete', info)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  predict() {
    console.log('predict' + this.Model.predict(tf.tensor2d([87,80,82], [1, 3])))
  }

  ngOnDestroy() {
    this.receivedData_sub.unsubscribe()
  }
}

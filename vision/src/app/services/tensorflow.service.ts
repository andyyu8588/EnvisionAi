import { Subscription } from 'rxjs';
import { TrendsapiService } from './trendsapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable, OnDestroy, AfterContentInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
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
  selectedData: number[] = [61, 59, 63, 66, 67, 71, 63, 74, 77, 71, 87, 80, 82, 86, 78, 81, 76, 73, 81, 93, 86, 76, 86, 91, 90, 74, 81, 100, 88, 85, 85, 86, 81, 72, 75, 73, 74, 75, 76, 77, 68, 71, 66, 73, 67, 61, 52, 55, 59, 48, 49, 56]

  // training parameters
  epochs: number = 28
  split: number = Math.floor(this.selectedData.length*1)
  windowSize: number = 4
  batchSize: number = 3

  // finished dataset
  // trainSet = [tf.ones([2,2])]
  // targetSet = [tf.ones([2,1])]
  inputSet: tf.Tensor
  targetSet: tf.Tensor

  constructor(private TrendsapiService: TrendsapiService) {
    // subscribe to trendsapi calls
    this.receivedData_sub = this.TrendsapiService.receivedData.subscribe(data => {
      // this.presentData = data
      // this.selectCountry('US')
      // this.createDataset()
      // this.train()
    })
  }

  inputValues(values: any) {
    return new Promise((resolve, reject) => {
      this.selectedData = []
      values[0].series.forEach((week) => {
        this.selectedData.push(week.value)
      })
      resolve(this.selectedData)
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
      //   console.log(this.inputSet)
      //   console.log(this.targetSet)
        this.train()
      })
      // .catch(() => {
      //   console.log('dfda')
      // })
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
          // console.log(_inputSet.length, _inputTargets.length)
          this.inputSet = tf.tensor2d(_inputSet, [(_inputSet.length/(this.windowSize-1)), this.windowSize -1], 'int32')
          this.targetSet = tf.tensor2d(_inputTargets, [_inputTargets.length, 1], 'int32')
          
          resolve()
          // this.sliceArr(_validate)
          // .then((res) => {
          //   let _inputSet: number[] = []
          //   res.inputs.forEach((element: number[]) => {
          //     _inputSet = _inputSet.concat(element)
          //   })
          //   let _inputTargets: number[] = []
          //   res.targets.forEach((element: number[]) => {
          //     _inputTargets = _inputTargets.concat(element)
          //   })
          //   console.log(_inputSet.length, _inputTargets.length)
          //   this.validateInput = tf.tensor2d(_inputSet, [Math.floor((_inputSet.length/(this.windowSize - 1))), this.windowSize -1], 'int32')
          //   this.validateTarget = tf.tensor2d(_inputTargets, [_inputTargets.length, 1], 'int32')
          //   resolve()
          // })
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
        optimizer: tf.train.adam(0.001),
        loss: tf.losses.huberLoss,
        metrics: ['mse']
      })
      console.log('model compiled')
      $("body").find("*").attr("disabled", "disabled");
      $("body").find("a").click(function (e) { e.preventDefault(); });
      this.Model.fit(this.inputSet, this.targetSet, {
        epochs: this.epochs,
        batchSize: this.batchSize,
        callbacks: [],
        validationSplit: 0.6
      })
      .then((info) => {
        $("body").find("*").removeAttr("disabled");
        $("body").find("a").unbind("click");
        console.log(info)
        console.log('training complete: mae:', info.history.mse.slice(-1))
        console.log(this.Model.predict(tf.tensor([12])).toString())
        return this.predict()
      })
      .catch((err) => {
        $("body").find("*").removeAttr("disabled");
        $("body").find("a").unbind("click");
        console.log(err)
      })
    }
  }

  predict() {
    let x_axis: number = this.selectedData.slice(-1)[0]
    let predictions: any[] = []
    for (let x=0; x<6; x++) {
      let pred = this.Model.predict(tf.tensor(x_axis, [1,1]))
      let ok = pred.toString().substring(14, pred.toString().length - 4)
      predictions.push(parseFloat(ok))
      x_axis = parseFloat(ok)
    }
    console.log(predictions)
    return predictions
  }

  ngOnDestroy() {
    this.receivedData_sub.unsubscribe()
  }
}

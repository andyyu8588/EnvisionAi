import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs'

@Injectable({
  providedIn: 'root'
})
export class TensorflowService {
  private Model: tf.LayersModel

  constructor() {
    tf.loadLayersModel(environment.backend.Tfmodel)
    .then((layerModel) => {
      console.log('model imported successfully')
      this.Model = layerModel
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

import { TensorflowService } from './services/tensorflow.service';
import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
  title = 'EnVision';

  constructor(private TensorflowService: TensorflowService) {

  }

  ngAfterContentInit() {
    // call tf service to import model
    this.TensorflowService.loadModel()
  }
}

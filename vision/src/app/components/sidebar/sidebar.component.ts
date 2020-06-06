import { TrendsapiService } from './../../services/trendsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private trendsapiService: TrendsapiService) { }

  ngOnInit(): void {
  }

}

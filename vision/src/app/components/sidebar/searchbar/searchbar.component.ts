import { TrendsapiService } from './../../../services/trendsapi.service';
import { Event } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SidebarService } from  './../../../services/sidebar.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup

  constructor(private trendsapiService: TrendsapiService,
              private sidebarService: SidebarService
    ) {}
  byDate: any = []
  private arraybyDate: Subscription

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'keyword': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required)
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.trendsapiService.getData({
      keyword: this.searchForm.get('keyword').value,
      year: 2019
    }).then((res) => {
      // this.sidebarService.parseCountries(res)
      // this.byDate = this.sidebarService.byDate.subscribe((byDate)=>this.byDate = byDate)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

}

import { TrendsapiService } from './../../../services/trendsapi.service';
import { Event } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup

  constructor(private trendsapiService: TrendsapiService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'keyword': new FormControl(null)
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.trendsapiService.getData({
      keyword: 'Donald Trump',
      year: 2019
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

}

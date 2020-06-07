import { TrendsapiService } from './../../../services/trendsapi.service';
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
  clicked: boolean = false
  loading: boolean = false
  constructor(private trendsapiService: TrendsapiService,
              private sidebarService: SidebarService) {}
  byDate: any = []
  private arraybyDate: Subscription

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'keyword': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
    })
  }

  // search is performed either by button or enter
  onSubmit(event) {
    // stop page refresh
    event.preventDefault()
    this.clicked = true

    // check if form is complete
    if (this.searchForm.valid) {

      // use getData to get backend information
      this.sidebarService.setLoading(true)
      this.loading = true
      this.trendsapiService.getData({
        keyword: this.searchForm.get('keyword').value,
        year: this.searchForm.get('year').value,
      }).then((res) => {
        //save to new observable
        this.sidebarService.saveOriginal(res)
        // parse by week
        this.arraybyDate = this.sidebarService.byDate.subscribe((byDate) => this.byDate = byDate)
        this.sidebarService.parseCountries(res)
        this.sidebarService.setLoading(false)
        this.loading = false
      }).catch((err) => {
        console.log(err)
      })
    } else {
      // look for invalid year
      if (!this.searchForm.get('year').valid) {
        // this.searchForm.patchValue({
        //   keyword: 'Must envision a year!'
        // })
      }

      // look for invalid keyword
      if (!this.searchForm.get('keyword').valid) {
        // this.searchForm.patchValue({
        //   keyword: 'Must envision something!'
        // })
      }
    }
  }
}

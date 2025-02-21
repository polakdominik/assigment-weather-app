import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country/country.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => console.log(data));
  }

}

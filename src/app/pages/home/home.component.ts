import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country/country.service';
import { of } from 'rxjs';
import { Country } from '../../country/country.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  countries$ = of<Country[]>([]);

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries();
  }

}

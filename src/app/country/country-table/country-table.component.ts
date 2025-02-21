import { Component, Input } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {
  @Input()
  dataSource: Country[] = [];

  displayedColumns = ['iso2', 'iso3', 'country', 'cities'];
}

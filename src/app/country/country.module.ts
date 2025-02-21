import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  providers: [
    CountryService,
  ],
  exports: [
    CountryTableComponent
  ]
})
export class CountryModule { }

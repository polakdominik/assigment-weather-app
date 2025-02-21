import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink,
  ],
  providers: [
    CountryService,
  ],
  exports: [
    CountryTableComponent
  ]
})
export class CountryModule { }

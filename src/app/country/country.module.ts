import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CountryService,
  ],
})
export class CountryModule { }

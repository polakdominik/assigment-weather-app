import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Country } from '../country.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent implements AfterViewInit {

  // could probably be solved better, time was issue here
  @Input() set dataSource(data: Country[]) {
    this.tableDataSource = new MatTableDataSource(data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['iso2', 'iso3', 'country', 'cities', 'actions'];
  tableDataSource = new MatTableDataSource<Country>([]);

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }
}

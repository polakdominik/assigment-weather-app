import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  params$: ActivatedRoute['params'];

  constructor(private route: ActivatedRoute) {
    this.params$ = route.params;
  }

}

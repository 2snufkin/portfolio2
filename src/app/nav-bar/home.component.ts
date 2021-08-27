import {Component, OnInit} from '@angular/core';
import {NavService} from '../services/nav.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titles: any []  = [];

  constructor(private navService: NavService) {
  }

  ngOnInit(): void {
    this.titles = this.navService.titles;
  }

}

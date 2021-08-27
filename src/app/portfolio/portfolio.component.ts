import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {
  portfolio: any  =  [];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.portfolio = this.portfolioService.portfolio;
  }

}

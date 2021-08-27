import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.scss']
})
export class PortfolioSingleComponent implements OnInit {
  @Input() title?: string;
  @Input() image?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

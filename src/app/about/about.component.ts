import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})

export class AboutComponent implements OnInit {
  img = 'assets/me.jpg';
  title = 'Front-End Developer';
  desc = `Good knowledge of the Angular framework, I am passionate about interface development
            as well as the user experience.`;


  constructor() {
  }

  ngOnInit(): void {
  }

}

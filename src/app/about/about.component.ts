import {Component, OnInit} from '@angular/core';
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})

export class AboutComponent implements OnInit {
  img = 'assets/pini.png';
  title = 'Front-End Developer';
  desc = ` I am passionate about interface development
            as well as the user experience.  I have very good knowledge of`;
  list =[`  Angular, TypeScript, JavaScript, HTML and CSS.`]
  faPersonBooth = faPersonBooth;


    constructor(library: FaIconLibrary) {
      // Add multiple icons to the library
      library.addIcons(fasStar);
  }

  ngOnInit(): void {
  }

}

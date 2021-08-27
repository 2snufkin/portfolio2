import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skills = [{
    img: 'assets/angular.png',
    title: 'Angular',
    color: '#c51814'
  }, {
    img: 'assets/js.png',
    title: 'JavaScript',
    color: '#c1ab00'
  },
    {
      img: 'assets/html.png',
      title: 'HTML',
      color: '#e64e1f'
    },
    {
      img: 'assets/css.png',
      title: 'CSS',
      color: '#0165a7'
    },
    {
      img: 'assets/bootstrap.png',
      title: 'Bootstrap',
      color: '#4d3870',
    },
    {
      img: 'assets/java.png',
      title: 'Java',
      color: '#4b7591'
    },
    {
      img: 'assets/springboot.png',
      title: 'SpringBoot',
      color: '#61a138'

    },
    {
      img: 'assets/sql.png',
      title: 'SQL',
      color: '#2d89c4'
    },
    {
      img: 'assets/git.png',
      title: 'gitHub',
      color: '#4d4d4d'
    }
  ];

  constructor() {
  }


  get skills(): any {
    return this._skills;
  }
}

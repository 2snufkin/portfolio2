import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private _titles = [
    {id: 1, title: 'About', icon: 'account_circle'},
    {id: 2, title: 'Skills', icon: 'psychology'},
    {id: 3, title: 'Portfolio', icon: ''},
    {id: 4, title: 'Hobbies', icon: 'palette'},
    {id: 5, title: 'About You', icon: 'account_circle'},
    {id: 6, title: 'Contact', icon: 'contact_mail'}

  ];


  constructor() {
  }


  get titles(): any {
    return this._titles;
  }
}

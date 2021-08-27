import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private _titles = [
    {id: 1, title: 'About', icon: 'account_circle'},
    {id: 1, title: 'About You', icon: 'account_circle'},
    {id: 2, title: 'Skills', icon: 'description'},
    {id: 3, title: 'Portfolio', icon: 'palette'},
    {id: 4, title: 'Channel', icon: 'video_library'},
    {id: 5, title: 'Contact', icon: 'contact_mail'}

  ];


  constructor() {
  }


  get titles(): any {
    return this._titles;
  }
}

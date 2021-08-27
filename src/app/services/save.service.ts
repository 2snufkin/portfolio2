import {Injectable} from '@angular/core';
import {User} from '../Class/user';

@Injectable({
  providedIn: 'root'
})
export class SaveService {


  constructor() {
  }

  persistData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clear(): void {
    localStorage.clear();
  }

  getData(): User   {
    return JSON.parse(localStorage.getItem('user') ?? 'null');

  }
}





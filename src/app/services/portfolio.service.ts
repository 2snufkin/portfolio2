import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolio = [{
    title: 'eCommerce',
    img: '../assets/ecommerce.jpg'

  },
    {
      title: 'portfolio',
      img: '../assets/placeholder.jpg'

    },
    {
      title: 'lacleducyclo.fr',
      img: '../src/assets/placeholder.jpg'

    }];

  constructor() {
  }
}

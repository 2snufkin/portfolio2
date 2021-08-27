import {Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _videos = [
    {
      title: 'why I love Angular',
      url: 'https://www.youtube.com/embed/AwqNj-ZKr2E',
      desc: 'in this video'
    },
    {
      title: 'Sanitizing URL in Angular',
      url: 'https://www.youtube.com/embed/eQVvzTA2Q0o',
      desc: 'in this video'
    },
    {
      title: 'Running',
      url: 'https://www.youtube.com/embed/eJSik6ejkr0',
      desc: 'in this video'
    },

  ];

  constructor(private sanitizer: DomSanitizer) {
  }

  get videos(): any {
    return this._videos;
  }

  prepare(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }
}

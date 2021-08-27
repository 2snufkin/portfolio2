import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../services/videos.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: any[] = [];


  constructor(private videoService: VideosService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.videos = this.videoService.videos;
    }
}


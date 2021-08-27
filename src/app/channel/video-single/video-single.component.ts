import {Component, Input, OnInit} from '@angular/core';
import {VideosService} from '../../services/videos.service';

@Component({
  selector: 'app-video-single',
  templateUrl: './video-single.component.html',
  styleUrls: ['./video-single.component.css']
})
export class VideoSingleComponent implements OnInit {
  @Input() title!: string;
  @Input() url!: string;
  @Input() desc!: string;

  constructor(private videoSer: VideosService) {
  }

  ngOnInit(): void {
  }

  clean(url: string): any {
    return this.videoSer.prepare(url);

  }
}

import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements AfterViewInit {
  @Input() url: string | undefined;
  @ViewChild('videoPlayer') videoElementRef!: ElementRef;

  
  videoElement!: HTMLVideoElement;

  constructor() { }

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef?.nativeElement;

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs")
      

      var hls = new Hls();
      if (!this.url) return;
      hls.loadSource(this.url);
      hls.attachMedia(this.videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        this.videoElement.play();
      });
    }

    else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      if (!this.url) return;
      this.videoElement.src = this.url;
    }
  }
}
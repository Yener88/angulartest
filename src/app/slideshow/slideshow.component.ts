import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  headlines = [
    'New Generation of Macbooks',
    'Highspeed Networking on the Road',
    'Sporting activity will help you to compensate',
    'Everybody need sometimes a place to relax',
    'healthy eating is very important to us',
    'Find ur place as Software-Developer'
  ];
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 5000);

  }


}

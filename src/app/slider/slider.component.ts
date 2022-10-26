import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  constructor() { }

  ngOnInit(): void {
  }

  // images:any = [
  //   {img1:'../../assets/SL-121019-25870-23.jpg'},
  //   {img2:'../../assets/SL-121019-25870-23.jpg'},
  //   {img3:'../../assets/SL-121019-25870-23.jpg'}
  // ]
	// images = [15, 83, 466, 965, 982, 1043, 738].map((n) => `https://upload.wikimedia.org/wikipedia/commons/thumb/1/${15}/Museu_da_electricidade.jpg/1920px-Museu_da_electricidade.jpg`,`https://c4.wallpaperflare.com/wallpaper/${736}/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg`);
images = [`https://c4.wallpaperflare.com/wallpaper/147/998/489/rey-from-star-wars-star-wars-sith-star-wars-episode-ix-the-rise-of-skywalker-artwork-hd-wallpaper-preview.jpg`,`https://c4.wallpaperflare.com/wallpaper/${736}/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg`,`https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg`]

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}

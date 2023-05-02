class AutoplayVideo extends HTMLElement {
  constructor() {
    super();
    const video = this.querySelector('video');

    video.addEventListener('mouseover', function() {
      this.play();
    });
    video.addEventListener('mouseleave', function() {
      this.pause();
    });
  }
}

customElements.define('autoplay-on-hover', AutoplayVideo);
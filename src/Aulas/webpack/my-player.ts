type VideoPlayerElements = {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
};

type VideoPlayerProtocols = {
  playToggle: () => void;
  stopToggle: () => void;
  iniciarEventos: () => void;
};

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle() {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stopToggle() {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }
  iniciarEventos() {
    this.stopButton.addEventListener('click', this.stopToggle.bind(this));
    this.playButton.addEventListener('click', this.playToggle.bind(this));
  }

  foo = (): void => {
    console.log('teste');
  };
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('video') as HTMLVideoElement,
  playButton: document.querySelector('.play-button') as HTMLButtonElement,
  stopButton: document.querySelector('.stop-button') as HTMLButtonElement,
});

videoPlayer.iniciarEventos();

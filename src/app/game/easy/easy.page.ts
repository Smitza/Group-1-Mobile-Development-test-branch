import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.page.html',
  styleUrls: ['./easy.page.scss'],
})
export class EasyPage implements OnInit {
  private audio = new Audio(); // Create an audio object
  private timeout: any; // Variable to store timeout for stopping audio

  constructor() {}

  ngOnInit() {}

  // Function to play audio
  playAudio(fileName: string) {
    this.stopAudio(); // Stop any currently playing audio
    this.audio.src = `assets/sounds/${fileName}`; // Set the audio file path
    this.audio.load(); // Load the audio file
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }

  // Function to play only 1 second of audio
  playOneSecond(fileName: string) {
    this.stopAudio(); // Stop any currently playing audio
    this.audio.src = `assets/sounds/${fileName}`; // Set the audio file path
    this.audio.load(); // Load the audio file
    this.audio.currentTime = 0; // Start at the beginning
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });

    // Stop audio after 1 second
    this.timeout = setTimeout(() => {
      this.stopAudio();
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Function to stop audio
  stopAudio() {
    this.audio.pause(); // Pause the audio
    this.audio.currentTime = 0; // Reset the playback position
    clearTimeout(this.timeout); // Clear any existing timeout
  }
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.page.html',
  styleUrls: ['./easy.page.scss'],
})
export class EasyPage implements OnInit, OnDestroy {
  correctAnswer: string = 'Star Wars';
  selectedAnswer: string = '';
  isAnswered: boolean = false;

  timerSeconds: number = 5; 
  totalTime: number = 5;    
  progress: number = 0;      
  elapsedSeconds: number = 0; 
  isPlaying: boolean = false;
  volume: number = 50;

  timerInterval: any;
  audio = new Audio('../../assets/sounds/starwars.mp3');

  ngOnInit() {
  }

  constructor(private cdr: ChangeDetectorRef){}

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    this.isAnswered = true;
  
    this.cdr.detectChanges();
  }

  isCorrectAnswer(answer: string): boolean {
    return answer === this.correctAnswer;
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.elapsedSeconds < this.totalTime) {
        this.elapsedSeconds++;
        this.progress = (this.elapsedSeconds / this.totalTime) * 100;
        this.timerSeconds = this.totalTime - this.elapsedSeconds; 
      } else {
        this.stopTimer();
        this.audio.pause();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  toggleAudio() {
    this.startTimer();
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  onVolumeChange(event: any) {
    this.volume = event.detail.value; 
    this.audio.volume = this.volume / 100; 
  }

  ngOnDestroy() {
    this.stopTimer(); 
    this.audio.pause();
  }

}

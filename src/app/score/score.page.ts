import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  players: { name: string; score: number }[] = [];

  constructor() {}

  ngOnInit() {
    // test player data for now
    this.players = [
      { name: 'Khali', score: 10 },
      { name: 'Sean', score: 110 },
      { name: 'Ayodeji', score: 15 },
      { name: 'Ryan', score: 85 },
      { name: 'Diddy', score: 69 },
    ];


    // sort players by score (high to  lowe score)
  this.players.sort((a, b) => b.score - a.score);
  }
}

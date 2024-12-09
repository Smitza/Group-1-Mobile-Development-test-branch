import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string = '';
  profileImage: string = ''; 
  currentScore: number = 0;
  lastGamePlayed: string = ''; 


  private imageList: string[] = [

    'assets/images/profile14.png',



  ];

  private gamesList: string[] = [
    'Easy',
    'Medium',
    'Hard',
    'Never Played'
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
      }
    });

    this.randomizeProfileDetails();
  }

  randomizeProfileDetails() {
    const randomImageIndex = Math.floor(Math.random() * this.imageList.length);
    this.profileImage = this.imageList[randomImageIndex];

    this.currentScore = Math.floor(Math.random() * 1001);

    const randomGameIndex = Math.floor(Math.random() * this.gamesList.length);
    this.lastGamePlayed = this.gamesList[randomGameIndex];
  }

  editProfile() {
    console.log('Edit profile clicked');
  }

  logout() {
    console.log('Logout clicked');
    this.router.navigate(['/login']);
  }
}
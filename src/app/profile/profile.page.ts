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
    'assets/images/profile1.png',
    'assets/images/profile2.png',
    'assets/images/profile3.png',
    'assets/images/profile4.png',
    'assets/images/profile5.png',
    'assets/images/profile6.png',
    'assets/images/profile7.png',
    'assets/images/profile8.png',
    'assets/images/profile9.png',
    'assets/images/profile10.png',

  ];

  private gamesList: string[] = [
    'Easy',
    'Medium',
    'Hard'
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Retrieve the email from the query parameters
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
      }
    });

    // Randomly select an image, current score, and last game played
    this.randomizeProfileDetails();
  }

  randomizeProfileDetails() {
    // Randomize the profile image
    const randomImageIndex = Math.floor(Math.random() * this.imageList.length);
    this.profileImage = this.imageList[randomImageIndex];

    // Randomize the current score between 0 and 1000
    this.currentScore = Math.floor(Math.random() * 1001);

    // Randomly select the last game played
    const randomGameIndex = Math.floor(Math.random() * this.gamesList.length);
    this.lastGamePlayed = this.gamesList[randomGameIndex];
  }

  editProfile() {
    console.log('Edit profile clicked');
    // Add profile editing logic here
  }

  logout() {
    console.log('Logout clicked');
    // Clear session data and navigate to the login page
    this.router.navigate(['/login']);
  }
}
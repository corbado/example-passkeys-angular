import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Corbado from '@corbado/webcomponent';

interface User {
  userID: any;
  email: any;
  ID: string;
  created: string;
  emails: Email[];
  fullName: string;
  name: string;
  phoneNumbers: PhoneNumber[];
  status: string;
  updated: string;
}

interface Email {
  ID: string;
  created: string;
  email: string;
  status: string;
  updated: string;
}

interface PhoneNumber {
  ID: string;
  phoneNumber: string;
  status: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User | null = null;
  session: any = null;

  constructor(private router: Router) {
  }

  async ngOnInit() {
    this.session = new Corbado.Session('pro-4953192322762747049');
    this.session.refresh((user: User) => {
      this.user = user
    })
  }

  async handleLogout() {
    if(this.session) {
      await this.session.logout();
      this.router.navigate(['/']);
    }
  }
}

import {Component} from '@angular/core';
import {Router} from "@angular/router";
import Corbado from "@corbado/web-js";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = Corbado.user

  constructor(private router: Router) {
  }

  async handleLogout() {
    await Corbado.logout()
    await this.router.navigate(['/']);
  }
}

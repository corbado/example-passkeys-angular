import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import Corbado from "@corbado/web-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('authElement', { static: false }) authElement!: ElementRef;  // Access the element

  constructor(private router: Router) {}

  ngOnInit() {
    if (Corbado.user) {
      this.router.navigate(['/profile']);
    }
  }

  ngAfterViewInit() {
    // Mount the Corbado auth UI after the view initializes
    Corbado.mountAuthUI(this.authElement.nativeElement, {
      onLoggedIn: () => this.router.navigate(['/profile']), // Use Angular's router instead of window.location
    });
  }
}

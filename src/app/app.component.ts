import {Component, OnInit} from '@angular/core';
import Corbado from "@corbado/web-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'passkeys-demo-angular';
  isInitialized = false;
  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    try {
      await Corbado.load({
        projectId: "pro-4953192322762747049",
        darkMode: 'off'
      });
      this.isInitialized = true;
    } catch (error) {
      console.error('Initialization failed:', error);
    }
  }
}

import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-homework1';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToUsers() {
    this.router.navigate(['users'])
  }

  goToPosts() {
    this.router.navigate(['posts'])
  }
}

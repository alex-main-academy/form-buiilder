import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-builder-page',
  templateUrl: './builder-page.component.html',
  styleUrls: ['./builder-page.component.less']
})
export class BuilderPageComponent {



  constructor(public router: Router) {}



  logout() {
    this.router.navigate(['/'])
  }
}

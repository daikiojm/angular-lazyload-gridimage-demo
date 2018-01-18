import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  range(n): number[] {
    const arr = [];
    for (let i = 0; i < n; ++i) {
      arr.push(i);
    }
    return arr;
  }
}

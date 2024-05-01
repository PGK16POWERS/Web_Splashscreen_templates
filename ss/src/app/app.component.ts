import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ss';

  ngOnInit(): void {
      const splashBg = document.querySelector("#splash-bg") as HTMLElement;

      setTimeout(() => {
        splashBg.classList.add("boltAnimation");
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}

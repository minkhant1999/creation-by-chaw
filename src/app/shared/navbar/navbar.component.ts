import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navOpen = false
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.navOpen = !this.navOpen
  }
}

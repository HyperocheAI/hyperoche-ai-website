import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  scrolled = false;
  menuOpen = false;
  services: ServiceItem[] = [];

  constructor(private svc: ServicesDataService) {}

  ngOnInit() { this.services = this.svc.getServices(); }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 20; }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  services: ServiceItem[] = [];
  constructor(private svc: ServicesDataService) {}
  ngOnInit() { this.services = this.svc.getServices(); }
}

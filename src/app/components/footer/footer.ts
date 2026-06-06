import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Contact],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  services: ServiceItem[] = [];
  constructor(private svc: ServicesDataService) {}
  ngOnInit() { this.services = this.svc.getServices(); }
}

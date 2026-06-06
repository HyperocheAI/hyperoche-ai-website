import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../services/services-data';
import { ServiceMockup } from '../service-mockup/service-mockup';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, ServiceMockup],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})
export class ServiceDetail {
  @Input() service: ServiceItem | undefined;
}

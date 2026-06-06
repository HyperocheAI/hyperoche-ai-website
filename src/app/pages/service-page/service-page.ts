import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data';
import { ServiceDetail } from '../../components/service-detail/service-detail';

@Component({
  selector: 'app-service-page',
  imports: [ServiceDetail],
  templateUrl: './service-page.html',
  styleUrl: './service-page.scss',
})
export class ServicePage implements OnInit {
  service: ServiceItem | undefined;

  constructor(private route: ActivatedRoute, private svc: ServicesDataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.service = this.svc.getServiceById(id);
    });
  }
}

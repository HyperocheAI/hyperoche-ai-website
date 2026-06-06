import { Component, Input, OnChanges } from '@angular/core';
import { ServiceItem } from '../../services/services-data';

@Component({
  selector: 'app-service-mockup',
  imports: [],
  templateUrl: './service-mockup.html',
  styleUrl: './service-mockup.scss',
})
export class ServiceMockup implements OnChanges {
  @Input() service!: ServiceItem;

  bars = [55, 70, 45, 85, 60, 90, 75, 65, 80, 50, 95, 70];
  kpis = [
    { val: '98.7%', label: 'Accuracy', trend: '↑ 4.2%', color: '#4f6ef7' },
    { val: '4.2ms', label: 'Response', trend: '↓ 12ms', color: '#06d6a0' },
    { val: '99.9%', label: 'Uptime', trend: '→ 0.0%', color: '#f4a261' },
  ];
  feedItems: string[] = [];

  private feedMap: Record<string, string[]> = {
    'campaign-management': ['AI optimized subject line → +28% open rate', 'Budget reallocated to Email channel', 'New segment: High-Value Leads (2.4k)'],
    'custom-workflows': ['Invoice workflow completed in 4.2s', 'HR onboarding: 3 tasks auto-approved', 'API integration health: 100%'],
    'call-center': ['Sentiment: Positive (+82%)', 'AI resolved 140 calls without agent', 'CSAT prediction: 4.7/5'],
    'lab-hl7': ['HL7 message ACK received from LIS', 'Abnormal result flagged: Patient #4821', 'FHIR R4 sync complete: 1,204 records'],
    'power-bi-dashboard': ['Anomaly detected: Revenue spike +34%', 'Report auto-generated and sent', 'AI insight: Q3 trending above forecast'],
    'sdlc-ai-agents': ['PR #482 reviewed — 0 critical issues', 'Test coverage improved to 94.2%', '12 stories generated from PRD v3'],
    'mobile-apps': ['Push CTR: 18.4% (↑ 6% vs benchmark)', 'AI recommendation accepted by 74%', 'Crash-free sessions: 99.8%'],
    'voice-flows': ['IVR containment rate: 68%', 'Intent recognition accuracy: 96.1%', 'Voice bot handled 320 calls today'],
    'payment-gateways': ['Fraud blocked: $12,400 saved today', 'Gateway failover: Stripe → PayPal (2ms)', 'Reconciliation: 4,812 txns matched'],
    'delivery-apps': ['Route optimized — saved 42 min', 'Demand surge predicted: +38% at 6pm', 'Driver ETA accuracy: 97.3%'],
    'travel-apps': ['Price drop alert sent to 1,240 users', 'Disruption detected: flight DL402', 'Itinerary auto-updated for 8 travelers'],
  };

  ngOnChanges() {
    if (this.service) {
      this.feedItems = this.feedMap[this.service.id] ?? this.feedMap['campaign-management'];
    }
  }
}

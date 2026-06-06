import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  points = [
    { icon: '🤖', title: 'AI-First Approach', desc: 'Every solution we build has AI at its core — not as an afterthought.' },
    { icon: '⚡', title: '60% Faster Delivery', desc: 'Our AI-augmented dev team ships production-ready software in weeks.' },
    { icon: '🔒', title: 'Enterprise Security', desc: 'SOC2-ready architecture with end-to-end encryption by default.' },
    { icon: '🌍', title: 'Global Scale', desc: 'Cloud-native solutions that scale from 100 to 100 million users.' },
  ];

  steps = [
    { num: '01', title: 'Discovery Call', desc: 'We understand your goals and challenges in a free 30-min session.', color: 'var(--color-primary)' },
    { num: '02', title: 'AI Solution Design', desc: 'Our architects design a custom AI-powered solution within 48 hours.', color: 'var(--color-secondary)' },
    { num: '03', title: 'Agile Build', desc: 'Sprint-based delivery with demos every 2 weeks. Full transparency.', color: 'var(--color-accent)' },
    { num: '04', title: 'Launch & Support', desc: 'We deploy, monitor and continuously improve your solution.', color: '#f4a261' },
  ];

  techs = [
    { icon: '🧠', name: 'GPT-4 / Claude' },
    { icon: '☁️', name: 'AWS / Azure' },
    { icon: '⚛️', name: 'React / Angular' },
    { icon: '🐍', name: 'Python / FastAPI' },
    { icon: '📱', name: 'React Native' },
    { icon: '🔗', name: 'HL7 / FHIR' },
    { icon: '📊', name: 'Power BI' },
    { icon: '🛡️', name: 'Zero Trust Security' },
    { icon: '🔄', name: 'Kubernetes' },
    { icon: '🗄️', name: 'PostgreSQL / MongoDB' },
    { icon: '📡', name: 'GraphQL / REST' },
    { icon: '🤗', name: 'HuggingFace' },
  ];
}

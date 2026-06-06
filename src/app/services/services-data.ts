import { Injectable } from '@angular/core';

export interface Solution {
  title: string;
  description: string;
  features: string[];
  mockupBg: string;
  mockupIcon: string;
  aiTag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  gradient: string;
  heroTagline: string;
  heroDesc: string;
  solutions: Solution[];
  techStack: string[];
}

@Injectable({ providedIn: 'root' })
export class ServicesDataService {
  getServices(): ServiceItem[] {
    return [
      {
        id: 'campaign-management',
        title: 'Campaign Management',
        shortDesc: 'AI-driven multi-channel campaign orchestration with predictive analytics and real-time optimization.',
        icon: '📣',
        color: '#4f6ef7',
        gradient: 'linear-gradient(135deg, #4f6ef7, #06d6a0)',
        heroTagline: 'Run smarter campaigns with AI precision',
        heroDesc: 'Hyperoche AI Campaign Manager orchestrates your marketing across channels with intelligent segmentation, auto-optimization, and predictive ROI forecasting — all powered by generative AI.',
        techStack: ['AI Segmentation', 'A/B Testing', 'Predictive Analytics', 'Multi-Channel', 'Real-Time Reporting'],
        solutions: [
          {
            title: 'AI Email Campaign Suite',
            description: 'Automated email campaigns that write, test and send themselves using GPT-powered copywriting.',
            features: ['Smart audience segmentation', 'AI subject line generator', 'Send-time optimization', 'Predictive open rates'],
            mockupBg: '#0d1a2e',
            mockupIcon: '✉️',
            aiTag: 'GPT-4 Powered'
          },
          {
            title: 'Omnichannel Campaign Hub',
            description: 'Unified dashboard to manage SMS, Email, WhatsApp, Push and Social campaigns from one AI-powered interface.',
            features: ['Channel performance scoring', 'AI budget reallocation', 'Unified analytics', 'Customer journey mapping'],
            mockupBg: '#1a0d2e',
            mockupIcon: '🌐',
            aiTag: 'ML Optimized'
          },
          {
            title: 'Predictive Campaign Planner',
            description: 'AI forecasts campaign outcomes before you launch, letting you optimize spend and messaging proactively.',
            features: ['ROI prediction engine', 'Competitor intelligence', 'Trend analysis', 'Auto-budget allocation'],
            mockupBg: '#0d2a1a',
            mockupIcon: '📊',
            aiTag: 'Predictive AI'
          }
        ]
      },
      {
        id: 'custom-workflows',
        title: 'Custom Workflows',
        shortDesc: 'Design and automate complex business workflows with AI-powered no-code/low-code tools.',
        icon: '⚙️',
        color: '#8b4cf7',
        gradient: 'linear-gradient(135deg, #8b4cf7, #4f6ef7)',
        heroTagline: 'Automate anything with intelligent workflows',
        heroDesc: 'Build complex multi-step workflows without a single line of code. Hyperoche AI Workflow Builder uses natural language instructions to automate your business processes end-to-end.',
        techStack: ['No-Code Builder', 'API Integrations', 'Event Triggers', 'AI Decision Nodes', 'Webhook Support'],
        solutions: [
          {
            title: 'Visual Workflow Designer',
            description: 'Drag-and-drop workflow canvas with AI-assisted step recommendations and error detection.',
            features: ['NLP workflow creation', 'Conditional branching', '500+ app connectors', 'Version control'],
            mockupBg: '#1a0d2e',
            mockupIcon: '🔀',
            aiTag: 'AI-Assisted Design'
          },
          {
            title: 'HR Onboarding Automation',
            description: 'End-to-end employee onboarding from offer letter to system access — automated intelligently.',
            features: ['Document generation', 'Approval routing', 'System provisioning', 'Progress tracking'],
            mockupBg: '#0d1a2e',
            mockupIcon: '👥',
            aiTag: 'Process AI'
          },
          {
            title: 'Invoice & Finance Workflows',
            description: 'Automated accounts payable/receivable with AI-powered anomaly detection and smart approvals.',
            features: ['OCR invoice reading', 'Fraud detection', 'Auto-reconciliation', 'ERP integration'],
            mockupBg: '#2a1a0d',
            mockupIcon: '💰',
            aiTag: 'FinOps AI'
          }
        ]
      },
      {
        id: 'call-center',
        title: 'AI Call Center',
        shortDesc: 'Intelligent call center solutions with real-time AI assistance, sentiment analysis and auto-routing.',
        icon: '📞',
        color: '#06d6a0',
        gradient: 'linear-gradient(135deg, #06d6a0, #4f6ef7)',
        heroTagline: 'Transform your contact center with AI',
        heroDesc: 'Hyperoche AI Call Center provides agents with real-time guidance, automates routine calls with voice bots, and analyzes every interaction for continuous improvement.',
        techStack: ['Voice AI', 'Sentiment Analysis', 'CRM Integration', 'Real-Time Coaching', 'Omnichannel'],
        solutions: [
          {
            title: 'AI Agent Assist',
            description: 'Real-time AI whispers suggestions, answers and compliance alerts to agents during live calls.',
            features: ['Live transcription', 'Knowledge base surfacing', 'Sentiment detection', 'Compliance alerts'],
            mockupBg: '#0d2a1a',
            mockupIcon: '🤖',
            aiTag: 'Real-Time AI'
          },
          {
            title: 'Conversational Voice Bot',
            description: 'Human-like AI voice agents that handle tier-1 support, FAQs and appointment booking 24/7.',
            features: ['Natural language understanding', 'Multi-language support', 'CRM lookup', 'Seamless handoff'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🎙️',
            aiTag: 'Conversational AI'
          },
          {
            title: 'Call Analytics Dashboard',
            description: 'Deep insights into call quality, agent performance, and customer sentiment across all interactions.',
            features: ['Conversation intelligence', 'CSAT prediction', 'Coach alerts', 'Trend reporting'],
            mockupBg: '#1a2a0d',
            mockupIcon: '📈',
            aiTag: 'Analytics AI'
          }
        ]
      },
      {
        id: 'lab-hl7',
        title: 'Lab HL7 Microsite',
        shortDesc: 'Secure HL7/FHIR integration platform for healthcare labs with AI-assisted result interpretation.',
        icon: '🧬',
        color: '#f72585',
        gradient: 'linear-gradient(135deg, #f72585, #8b4cf7)',
        heroTagline: 'Next-gen lab connectivity for modern healthcare',
        heroDesc: 'Hyperoche AI Lab HL7 platform seamlessly integrates lab systems with hospitals and clinics via HL7/FHIR standards, enhanced with AI-powered diagnostics and anomaly flagging.',
        techStack: ['HL7 FHIR', 'HIPAA Compliant', 'AI Diagnostics', 'LIS Integration', 'Secure Messaging'],
        solutions: [
          {
            title: 'HL7 FHIR Integration Hub',
            description: 'Universal connector for LIS, HIS, and EHR systems using HL7 v2, v3 and FHIR R4 standards.',
            features: ['Bidirectional messaging', 'Order management', 'Result delivery', 'Audit trails'],
            mockupBg: '#2a0d1a',
            mockupIcon: '🔗',
            aiTag: 'HL7 Certified'
          },
          {
            title: 'AI Result Interpretation',
            description: 'Machine learning models flag abnormal results, suggest differentials and surface clinical context.',
            features: ['Abnormal flagging', 'Trend analysis', 'Reference range AI', 'Clinical decision support'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🧪',
            aiTag: 'Clinical AI'
          },
          {
            title: 'Patient Portal Microsite',
            description: 'White-label patient portal for labs to deliver results with AI-powered plain-language explanations.',
            features: ['Secure result delivery', 'AI explanations', 'Doctor messaging', 'Mobile-first design'],
            mockupBg: '#0d2a1a',
            mockupIcon: '🏥',
            aiTag: 'Patient AI'
          }
        ]
      },
      {
        id: 'power-bi-dashboard',
        title: 'Power BI Analytics',
        shortDesc: 'Custom Power BI dashboards with AI-powered insights, natural language querying and automated reporting.',
        icon: '📊',
        color: '#f4a261',
        gradient: 'linear-gradient(135deg, #f4a261, #e76f51)',
        heroTagline: 'Turn data into decisions with AI dashboards',
        heroDesc: 'Hyperoche AI builds intelligent Power BI solutions where you ask questions in plain English and get instant visual answers — with automated anomaly detection and proactive alerts.',
        techStack: ['Power BI', 'Azure AI', 'DAX', 'Natural Language Q&A', 'Automated Insights'],
        solutions: [
          {
            title: 'Executive Intelligence Suite',
            description: 'C-suite dashboards with AI-narrated insights, anomaly alerts and forward-looking predictions.',
            features: ['KPI storytelling', 'Automated commentary', 'Drill-through analysis', 'Mobile reports'],
            mockupBg: '#2a1a0d',
            mockupIcon: '👔',
            aiTag: 'AI Narration'
          },
          {
            title: 'Sales Performance Hub',
            description: 'Real-time sales analytics with AI pipeline scoring, churn prediction and territory optimization.',
            features: ['Pipeline AI scoring', 'Churn prediction', 'Quota tracking', 'Rep leaderboards'],
            mockupBg: '#0d1a2e',
            mockupIcon: '💹',
            aiTag: 'Sales AI'
          },
          {
            title: 'Operations Analytics',
            description: 'Supply chain, inventory and operational dashboards with predictive maintenance alerts.',
            features: ['Supply chain visibility', 'Predictive maintenance', 'Cost optimization', 'SLA monitoring'],
            mockupBg: '#0d2a1a',
            mockupIcon: '⚡',
            aiTag: 'Ops Intelligence'
          }
        ]
      },
      {
        id: 'sdlc-ai-agents',
        title: 'SDLC AI Agents',
        shortDesc: 'AI agents that automate your entire software development lifecycle — from requirements to deployment.',
        icon: '🤖',
        color: '#4cc9f0',
        gradient: 'linear-gradient(135deg, #4cc9f0, #4f6ef7)',
        heroTagline: 'Ship faster with AI-powered development agents',
        heroDesc: 'Hyperoche SDLC AI agents work alongside your engineering team to write code, review PRs, generate tests, document APIs, and monitor production — cutting delivery time by 60%.',
        techStack: ['AI Code Review', 'Test Generation', 'Auto Documentation', 'CI/CD AI', 'Security Scanning'],
        solutions: [
          {
            title: 'AI Code Review Agent',
            description: 'Autonomous agent reviews every PR for bugs, security issues, performance and best practices.',
            features: ['Bug detection', 'Security scanning', 'Code quality scoring', 'Auto-fix suggestions'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🔍',
            aiTag: 'Code Intelligence'
          },
          {
            title: 'Requirements to Stories',
            description: 'Converts business requirements documents into user stories, acceptance criteria and test cases automatically.',
            features: ['Requirement parsing', 'Story generation', 'Acceptance criteria', 'Jira/Linear sync'],
            mockupBg: '#1a0d2e',
            mockupIcon: '📝',
            aiTag: 'BA AI Agent'
          },
          {
            title: 'Automated Testing Suite',
            description: 'AI generates comprehensive unit, integration and E2E tests from your codebase with high coverage.',
            features: ['Test generation', 'Coverage analysis', 'Regression detection', 'Performance testing'],
            mockupBg: '#0d2a1a',
            mockupIcon: '✅',
            aiTag: 'Test AI'
          }
        ]
      },
      {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        shortDesc: 'AI-powered cross-platform mobile applications for iOS and Android with intelligent UX personalization.',
        icon: '📱',
        color: '#7209b7',
        gradient: 'linear-gradient(135deg, #7209b7, #f72585)',
        heroTagline: 'Build intelligent mobile experiences',
        heroDesc: 'Hyperoche AI designs and develops cross-platform mobile apps that learn from user behavior, personalize content in real-time, and deliver exceptional engagement through AI-driven UX.',
        techStack: ['React Native', 'Flutter', 'AI Personalization', 'Push Intelligence', 'Offline AI'],
        solutions: [
          {
            title: 'Healthcare Patient App',
            description: 'AI-powered patient engagement app with symptom checker, appointment booking and medication reminders.',
            features: ['AI symptom assessment', 'Smart scheduling', 'Medication AI', 'Telehealth integration'],
            mockupBg: '#1a0d2e',
            mockupIcon: '❤️',
            aiTag: 'Health AI'
          },
          {
            title: 'Retail Commerce App',
            description: 'Personalized shopping app with AI visual search, smart recommendations and conversational commerce.',
            features: ['Visual AI search', 'Personalization engine', 'Voice shopping', 'AR try-on'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🛍️',
            aiTag: 'Commerce AI'
          },
          {
            title: 'Field Service App',
            description: 'Mobile app for field technicians with AI-guided diagnostics, AR overlays and offline intelligence.',
            features: ['AI diagnostics', 'AR guidance', 'Offline AI', 'Work order automation'],
            mockupBg: '#2a1a0d',
            mockupIcon: '🔧',
            aiTag: 'Field AI'
          }
        ]
      },
      {
        id: 'voice-flows',
        title: 'Voice Flows',
        shortDesc: 'Design and deploy intelligent voice experiences for IVR, voice assistants and smart devices.',
        icon: '🎙️',
        color: '#06d6a0',
        gradient: 'linear-gradient(135deg, #06d6a0, #7209b7)',
        heroTagline: 'Give your business a voice with AI',
        heroDesc: 'Hyperoche Voice Flows platform lets you build, deploy and optimize conversational voice experiences that sound human, understand intent, and resolve customer needs faster.',
        techStack: ['NLU', 'TTS/STT', 'Intent Recognition', 'Alexa/Google', 'Telephony AI'],
        solutions: [
          {
            title: 'IVR Modernization',
            description: 'Replace legacy IVR trees with AI voice flows that understand natural speech and route intelligently.',
            features: ['Natural speech recognition', 'Intent-based routing', 'Contextual memory', 'DTMF fallback'],
            mockupBg: '#0d2a1a',
            mockupIcon: '📳',
            aiTag: 'Voice NLU'
          },
          {
            title: 'Alexa/Google Skills',
            description: 'Custom voice skills for Alexa and Google Assistant to extend your brand into smart home devices.',
            features: ['Multi-platform deployment', 'Account linking', 'Voice analytics', 'Proactive notifications'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🔊',
            aiTag: 'Voice Assistant'
          },
          {
            title: 'Voice Commerce',
            description: 'Allow customers to browse, order and track purchases entirely through voice interactions.',
            features: ['Voice catalog browsing', 'Order by voice', 'Payment confirmation', 'Delivery updates'],
            mockupBg: '#1a2a0d',
            mockupIcon: '🛒',
            aiTag: 'Commerce Voice'
          }
        ]
      },
      {
        id: 'payment-gateways',
        title: 'Payment Gateway Integration',
        shortDesc: 'End-to-end integration of global payment gateways with AI fraud detection and smart routing.',
        icon: '💳',
        color: '#f72585',
        gradient: 'linear-gradient(135deg, #f72585, #f4a261)',
        heroTagline: 'Accept payments everywhere, intelligently',
        heroDesc: 'Hyperoche AI Payment Integration connects your business to 50+ global payment gateways with intelligent routing, real-time fraud scoring and unified reconciliation.',
        techStack: ['Stripe', 'Razorpay', 'PayPal', 'AI Fraud Detection', 'Multi-Currency'],
        solutions: [
          {
            title: 'Unified Payment Hub',
            description: 'Single integration that connects to Stripe, PayPal, Razorpay, Square, Braintree and 50+ more gateways.',
            features: ['50+ gateway connectors', 'Unified API', 'Failover routing', 'Currency conversion'],
            mockupBg: '#2a0d1a',
            mockupIcon: '🌍',
            aiTag: 'Payment Orchestration'
          },
          {
            title: 'AI Fraud Prevention',
            description: 'Machine learning models analyze 200+ signals in real-time to block fraud before it happens.',
            features: ['Real-time scoring', 'Device fingerprinting', 'Velocity checks', '3DS optimization'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🛡️',
            aiTag: 'Fraud AI'
          },
          {
            title: 'Smart Reconciliation',
            description: 'Automated reconciliation across all gateways with AI anomaly detection and dispute management.',
            features: ['Auto-reconciliation', 'Dispute AI', 'Revenue analytics', 'ERP sync'],
            mockupBg: '#0d2a1a',
            mockupIcon: '⚖️',
            aiTag: 'FinTech AI'
          }
        ]
      },
      {
        id: 'delivery-apps',
        title: 'Delivery Apps',
        shortDesc: 'AI-powered delivery management platforms with smart routing, real-time tracking and demand forecasting.',
        icon: '🚚',
        color: '#f4a261',
        gradient: 'linear-gradient(135deg, #f4a261, #06d6a0)',
        heroTagline: 'Deliver smarter with AI logistics',
        heroDesc: 'Hyperoche AI Delivery Platform optimizes every stage of your delivery operation — from dynamic routing and driver assignment to demand prediction and customer communication.',
        techStack: ['Route Optimization', 'Real-Time Tracking', 'Demand Forecasting', 'Driver AI', 'Last-Mile AI'],
        solutions: [
          {
            title: 'Smart Route Optimizer',
            description: 'AI calculates optimal delivery routes in real-time, adapting to traffic, weather and priority changes.',
            features: ['Dynamic re-routing', 'Multi-stop optimization', 'ETA prediction', 'Carbon tracking'],
            mockupBg: '#2a1a0d',
            mockupIcon: '🗺️',
            aiTag: 'Route AI'
          },
          {
            title: 'Customer Delivery App',
            description: 'Beautiful consumer app with live driver tracking, AI-predicted ETAs and proactive delay alerts.',
            features: ['Live GPS tracking', 'AI ETA engine', 'Contactless delivery', 'Rating AI'],
            mockupBg: '#0d1a2e',
            mockupIcon: '📦',
            aiTag: 'Customer AI'
          },
          {
            title: 'Demand Forecasting Engine',
            description: 'Predict delivery volumes by zone and time to pre-position drivers and reduce wait times.',
            features: ['Volume prediction', 'Driver pre-positioning', 'Surge pricing AI', 'Fleet optimization'],
            mockupBg: '#0d2a1a',
            mockupIcon: '📡',
            aiTag: 'Forecast AI'
          }
        ]
      },
      {
        id: 'travel-apps',
        title: 'Travel Apps',
        shortDesc: 'AI travel platforms with personalized itinerary planning, smart booking and real-time travel intelligence.',
        icon: '✈️',
        color: '#4cc9f0',
        gradient: 'linear-gradient(135deg, #4cc9f0, #f72585)',
        heroTagline: 'Redefine travel with AI-powered experiences',
        heroDesc: 'Hyperoche AI Travel Platform creates hyper-personalized travel experiences — from AI trip planning and price prediction to real-time disruption management and concierge services.',
        techStack: ['AI Trip Planner', 'Price Prediction', 'GDS Integration', 'Travel AI', 'NDC API'],
        solutions: [
          {
            title: 'AI Trip Planner',
            description: 'Conversational AI planner that builds personalized itineraries based on preferences, budget and travel style.',
            features: ['Personalized itineraries', 'Budget optimization', 'Local experiences AI', 'Real-time updates'],
            mockupBg: '#0d1a2e',
            mockupIcon: '🗺️',
            aiTag: 'Travel AI'
          },
          {
            title: 'Price Intelligence Engine',
            description: 'Predicts flight and hotel price movements so travelers know the perfect time to book.',
            features: ['Price trend prediction', 'Fare alerts', 'Best booking window', 'Competitor pricing'],
            mockupBg: '#1a0d2e',
            mockupIcon: '💡',
            aiTag: 'Price AI'
          },
          {
            title: 'Travel Disruption Manager',
            description: 'AI monitors bookings 24/7 and proactively rebooks travellers when disruptions are detected.',
            features: ['Disruption prediction', 'Auto-rebooking', 'Proactive notifications', 'Expense recovery'],
            mockupBg: '#2a1a0d',
            mockupIcon: '⚡',
            aiTag: 'Disruption AI'
          }
        ]
      }
    ];
  }

  getServiceById(id: string): ServiceItem | undefined {
    return this.getServices().find(s => s.id === id);
  }
}

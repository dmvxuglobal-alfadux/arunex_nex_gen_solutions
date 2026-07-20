import { SolutionData } from "@/types/solution";

export const solutionsData: Record<string, SolutionData> = {
  starter: {
    id: "starter",
    hero: {
      title: "AI Business Starter",
      subtitle: "Build a strong digital foundation with practical AI adoption.",
      badge: "Foundations",
    },
    audience: {
      businessSize: "Small Business / Startup",
      teamSize: "1 - 50 Employees",
      growthStage: "Beginning digital transformation",
      goals: "Moving away from manual processes and building a data foundation.",
    },
    challenges: [
      "Manual data entry and repetitive admin tasks",
      "Siloed tools that don't communicate",
      "Lack of real-time visibility into business metrics",
      "Slow decision-making due to scattered reporting",
      "Inconsistent customer follow-ups",
      "High operational friction for small teams",
    ],
    overview: {
      strategy: "We conduct a comprehensive AI Readiness Assessment to identify your highest-ROI automation opportunities.",
      process: "We map your core business workflows and identify manual bottlenecks that can be immediately eliminated.",
      automation: "We implement Zapier/Make and custom scripts to connect your existing tools without expensive migrations.",
      analytics: "We build a centralized Executive Dashboard giving you a single source of truth for your KPIs.",
    },
    capabilities: [
      {
        iconName: "Search",
        title: "AI Readiness Assessment",
        description: "A complete audit of your current tech stack and workflows to identify AI opportunities.",
        benefit: "Clear roadmap for digital adoption.",
      },
      {
        iconName: "Workflow",
        title: "Core Workflow Automation",
        description: "Connecting your existing tools (CRM, Email, Accounting) to talk to each other automatically.",
        benefit: "Eliminates 10+ hours of manual work weekly.",
      },
      {
        iconName: "LayoutDashboard",
        title: "Business Dashboard",
        description: "A centralized, real-time view of your most important business metrics.",
        benefit: "Instant visibility for better decision-making.",
      },
      {
        iconName: "Users",
        title: "Team Enablement",
        description: "Hands-on training for your team on how to use AI tools like ChatGPT effectively.",
        benefit: "Boosts team productivity and AI confidence.",
      },
    ],
    outcomes: [
      { label: "Hours Saved Weekly", value: 15, suffix: "+", description: "By eliminating manual data entry" },
      { label: "Reporting Speed", value: 5, suffix: "x", description: "Faster access to business KPIs" },
      { label: "Data Accuracy", value: 99, suffix: "%", description: "Reduction in human-error" },
    ],
    timeline: [
      {
        title: "01. Discovery",
        objective: "Understand current manual bottlenecks.",
        deliverables: "Stakeholder interviews, Tech stack audit.",
      },
      {
        title: "02. Assessment",
        objective: "Identify high-ROI automation targets.",
        deliverables: "AI Readiness Report.",
      },
      {
        title: "03. Strategy",
        objective: "Design the automation roadmap.",
        deliverables: "Workflow architecture diagram.",
      },
      {
        title: "04. Implementation",
        objective: "Deploy core automations and dashboard.",
        deliverables: "Live integrations, BI Dashboard.",
      },
      {
        title: "05. Optimization",
        objective: "Ensure workflows run smoothly.",
        deliverables: "Error handling, workflow tuning.",
      },
      {
        title: "06. Ongoing Support",
        objective: "Train team and maintain systems.",
        deliverables: "Team workshops, 30-day support.",
      },
    ],
    deliverables: [
      "Comprehensive AI Readiness Report",
      "Process Mapping Documentation",
      "Up to 5 Core Automated Workflows",
      "1 Executive KPI Dashboard",
      "Standard Operating Procedures (SOPs)",
      "Half-day Team AI Workshop",
      "30 Days Post-Launch Support",
    ],
    faqs: [
      {
        question: "Do we need to buy new software?",
        answer: "Usually, no. The Starter package is designed to connect and optimize the tools you already use (like Google Workspace, standard CRMs, and accounting software).",
      },
      {
        question: "How much time will this require from our team?",
        answer: "We require about 2-4 hours from key stakeholders during the Discovery phase. After that, we handle the heavy lifting of implementation.",
      },
      {
        question: "Is this suitable for non-technical teams?",
        answer: "Yes, this package is specifically built for teams without dedicated IT departments. We handle the technical setup and provide easy-to-understand training.",
      },
    ],
  },
  growth: {
    id: "growth",
    hero: {
      title: "AI Growth Accelerator",
      subtitle: "Improve efficiency and accelerate business growth through intelligent automation.",
      badge: "Most Popular",
    },
    audience: {
      businessSize: "Mid-Market",
      teamSize: "50 - 250 Employees",
      growthStage: "Scaling operations rapidly",
      goals: "Removing growth bottlenecks in sales, marketing, and operations.",
    },
    challenges: [
      "Sales teams spending too much time on admin rather than selling",
      "Inconsistent customer experience across channels",
      "Marketing campaigns that lack personalization and scale",
      "Fragmented data making cross-department visibility impossible",
      "Support teams overwhelmed by repetitive tickets",
      "Rapidly rising headcount costs to support growth",
    ],
    overview: {
      strategy: "We architect an intelligent growth engine connecting your CRM, marketing, and support platforms.",
      process: "We rebuild your customer journey to be automated, personalized, and highly responsive.",
      automation: "We deploy AI-powered agents for lead qualification and Level 1 customer support.",
      analytics: "We implement predictive analytics to forecast sales and identify churn risks before they happen.",
    },
    capabilities: [
      {
        iconName: "TrendingUp",
        title: "Sales Automation",
        description: "Automated lead scoring, intelligent routing, and personalized follow-up sequences.",
        benefit: "Increases win rates and pipeline velocity.",
      },
      {
        iconName: "MessageCircle",
        title: "AI Customer Engagement",
        description: "24/7 intelligent support agents that resolve common queries instantly.",
        benefit: "Reduces ticket volume and improves CSAT.",
      },
      {
        iconName: "BarChart3",
        title: "Predictive Analytics",
        description: "Machine learning models applied to your CRM to forecast revenue and churn.",
        benefit: "Proactive rather than reactive decision making.",
      },
      {
        iconName: "Bot",
        title: "Department AI Assistants",
        description: "Custom AI tools trained on your company data to assist marketing and HR.",
        benefit: "Massive boost in content and policy retrieval speed.",
      },
    ],
    outcomes: [
      { label: "Sales Productivity", value: 40, suffix: "%", description: "Increase in time spent actually selling" },
      { label: "Support Resolution", value: 3, suffix: "x", description: "Faster first-response times" },
      { label: "Pipeline Visibility", value: 100, suffix: "%", description: "Real-time cross-department tracking" },
    ],
    timeline: [
      {
        title: "01. Discovery",
        objective: "Audit the complete customer journey.",
        deliverables: "Journey mapping, CRM audit.",
      },
      {
        title: "02. Assessment",
        objective: "Identify growth bottlenecks.",
        deliverables: "Growth automation blueprint.",
      },
      {
        title: "03. Strategy",
        objective: "Design the AI integration architecture.",
        deliverables: "System integration plan.",
      },
      {
        title: "04. Implementation",
        objective: "Build sales/support automation and agents.",
        deliverables: "Live CRM automations, AI Support Bot.",
      },
      {
        title: "05. Optimization",
        objective: "Refine AI responses and lead scoring.",
        deliverables: "Model tuning, A/B testing sequences.",
      },
      {
        title: "06. Ongoing Support",
        objective: "Scale capabilities as volume grows.",
        deliverables: "Quarterly reviews, dedicated slack channel.",
      },
    ],
    deliverables: [
      "End-to-End CRM Optimization & Automation",
      "Custom AI Support/Sales Chatbot Integration",
      "Predictive Lead Scoring Models",
      "3 Multi-Department KPI Dashboards",
      "Internal AI Knowledge Base Assistant",
      "Comprehensive Change Management Program",
      "90 Days Post-Launch Support & Tuning",
    ],
    faqs: [
      {
        question: "How does the AI handle our specific company knowledge?",
        answer: "We use Retrieval-Augmented Generation (RAG). We securely connect the AI to your specific documentation, past tickets, and wikis so it answers strictly based on your company's actual data.",
      },
      {
        question: "Will this replace our sales or support team?",
        answer: "No. The goal of the Growth Accelerator is to remove the robotic work from humans. It handles the repetitive queries and data entry so your team can focus on complex, high-value human interactions.",
      },
      {
        question: "Can this integrate with Salesforce or HubSpot?",
        answer: "Yes, this package is designed specifically to turbocharge enterprise-grade CRMs like Salesforce, HubSpot, and Dynamics.",
      },
    ],
  },
  enterprise: {
    id: "enterprise",
    hero: {
      title: "Digital Enterprise",
      subtitle: "Create an intelligent, connected enterprise that supports long-term transformation.",
      badge: "Enterprise",
    },
    audience: {
      businessSize: "Large / Enterprise",
      teamSize: "250+ Employees",
      growthStage: "Established but dealing with complexity",
      goals: "Digital transformation, legacy modernization, and enterprise-wide AI adoption.",
    },
    challenges: [
      "Deeply entrenched legacy systems preventing agility",
      "Massive data silos across global departments",
      "Strict compliance and governance requirements slowing innovation",
      "Lack of cohesive executive visibility across the enterprise",
      "High operational costs due to deeply scaled inefficiencies",
      "Difficulty deploying AI securely at an enterprise level",
    ],
    overview: {
      strategy: "We act as your fractional Chief AI Officer, developing a multi-year digital transformation roadmap.",
      process: "We modernize legacy architecture by building secure API layers and cloud-native infrastructure.",
      automation: "We deploy enterprise-wide RPA (Robotic Process Automation) for complex, cross-department workflows.",
      analytics: "We build custom Data Lakes and deploy advanced machine learning for enterprise-level forecasting.",
    },
    capabilities: [
      {
        iconName: "Network",
        title: "Enterprise Integration",
        description: "Secure API middleware connecting legacy ERPs (SAP, Oracle) with modern SaaS platforms.",
        benefit: "Eliminates data silos completely.",
      },
      {
        iconName: "ShieldCheck",
        title: "AI Governance & Security",
        description: "Deploying private, secure LLMs compliant with SOC2, GDPR, and enterprise policies.",
        benefit: "Enterprise-grade AI without data leaks.",
      },
      {
        iconName: "BrainCircuit",
        title: "Custom Machine Learning",
        description: "Bespoke predictive models for supply chain, dynamic pricing, or advanced risk analysis.",
        benefit: "Proprietary competitive advantage.",
      },
      {
        iconName: "Globe",
        title: "Executive Intelligence Hub",
        description: "A centralized global dashboard providing real-time oversight of the entire organization.",
        benefit: "Unprecedented executive control and clarity.",
      },
    ],
    outcomes: [
      { label: "Operational Cost", value: 25, suffix: "%", description: "Reduction via enterprise automation" },
      { label: "Data Accessibility", value: 100, suffix: "%", description: "Unified global data warehouse" },
      { label: "Legacy Friction", value: 0, suffix: "", description: "Modernized, API-first architecture" },
    ],
    timeline: [
      {
        title: "01. Discovery",
        objective: "Map the enterprise architecture.",
        deliverables: "Global systems audit, Security review.",
      },
      {
        title: "02. Assessment",
        objective: "Define the transformation phases.",
        deliverables: "Multi-year Digital Roadmap.",
      },
      {
        title: "03. Strategy",
        objective: "Architect the data and AI foundation.",
        deliverables: "Cloud architecture, Governance framework.",
      },
      {
        title: "04. Implementation",
        objective: "Deploy middleware and private AI models.",
        deliverables: "API Gateway, Enterprise Data Lake.",
      },
      {
        title: "05. Optimization",
        objective: "Scale automation across departments.",
        deliverables: "Global roll-out, localized tuning.",
      },
      {
        title: "06. Ongoing Support",
        objective: "Act as long-term innovation partner.",
        deliverables: "Dedicated architect, 24/7 SLA.",
      },
    ],
    deliverables: [
      "Comprehensive Digital Transformation Roadmap",
      "Secure API Middleware Layer for Legacy Systems",
      "Enterprise Data Lake / Warehouse Setup",
      "Private, Fine-Tuned LLM Deployment",
      "Cross-Department RPA Implementation",
      "Global Executive Intelligence Platform",
      "Dedicated Enterprise Architect & SLA Support",
    ],
    faqs: [
      {
        question: "How do you handle data security and privacy?",
        answer: "Security is the foundation of the Enterprise package. We deploy private cloud environments (Azure/AWS/GCP), ensure zero-trust architecture, and use isolated AI models so your data never trains public LLMs.",
      },
      {
        question: "Can you work with our existing IT department?",
        answer: "Absolutely. We typically work directly alongside internal IT and security teams to accelerate their roadmaps, provide specialized AI expertise, and handle the heavy lifting of modern integration.",
      },
      {
        question: "What is the typical timeline for an enterprise engagement?",
        answer: "Enterprise transformation is phased. We usually deliver the first major 'win' (like an executive dashboard or core automation) within 90 days, while the broader roadmap spans 6 to 18 months.",
      },
    ],
  },
};

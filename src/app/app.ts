import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Base interfaces
interface BaseItem {
  heading: string;
  content?: string;
  list?: string[];
}

interface Project extends BaseItem {
  technologies?: string[];
  link?: string;
  image?: string;
}

interface Service extends BaseItem {
  icon?: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

interface AboutItem {
  content: string;
}

// Union type for different section types
type SectionItem = BaseItem | Project | Service | Testimonial | AboutItem;

interface Section<T = SectionItem> {
  id: string;
  title: string;
  items: T[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly fb = new FormBuilder();

  protected readonly name = signal('Jodel Fokou');
  protected readonly title = signal('Senior Fullstack Developer | Java/Spring Boot & Angular Expert');
  protected readonly slogan = signal('I build scalable applications that solve real business problems. Let\'s work together to bring your project to life.');

  // About Me Section
  protected readonly aboutSection = signal<Section<AboutItem>>({
    id: 'about',
    title: 'About Me',
    items: [
      {
        content: 'I\'m a senior fullstack developer with a passion for building software that actually works in the real world. Over the years, I\'ve specialized in Java/Spring Boot microservices and Angular applications, helping companies transform their ideas into reliable, high-performance systems.'
      },
      {
        content: 'What I love most is solving complex problems and seeing the impact of my work. Whether it\'s reducing deployment time from weeks to hours or building platforms that serve thousands of users daily, I focus on delivering results that matter to your business.'
      },
      {
        content: 'I work with teams across Europe and North America (fluent in English and French), and I\'m comfortable joining you remotely or on-site. I believe in clean code, continuous learning, and sharing knowledge with the team.'
      }
    ]
  });

  // Technical Skills Section
  protected readonly skillsSection = signal<Section<BaseItem>>({
    id: 'skills',
    title: 'Technical Expertise',
    items: [
      {
        heading: 'Backend Technologies',
        list: [
          'Java 17/21, Spring Boot 3.x, Spring Security',
          'Microservices (Spring Cloud, Resilience patterns)',
          'REST APIs, GraphQL, OpenAPI/Swagger',
          'Kafka, RabbitMQ, Redis',
          'PostgreSQL, MongoDB, JPA/Hibernate'
        ]
      },
      {
        heading: 'Frontend Technologies',
        list: [
          'Angular 17/18 (Standalone, Signals, SSR)',
          'TypeScript, RxJS, NgRx State Management',
          'Tailwind CSS, SCSS, Responsive Design',
          'Jasmine/Karma, Cypress, Playwright',
          'WCAG 2.1 AA Accessibility'
        ]
      },
      {
        heading: 'Cloud & DevOps',
        list: [
          'AWS (EC2, S3, Lambda, ECS, RDS)',
          'Docker, Kubernetes, Helm',
          'CI/CD (Jenkins, GitLab CI, GitHub Actions)',
          'Terraform, Infrastructure as Code',
          'Prometheus, Grafana, ELK Stack'
        ]
      },
      {
        heading: 'AI & Generative Tools',
        list: [
          'GitHub Copilot, Claude, ChatGPT',
          'AI-Assisted Development & Code Review',
          'Prompt Engineering for Development Tasks',
          'AI Integration in Applications (OpenAI, Anthropic APIs)',
          'Automated Documentation & Testing with AI'
        ]
      },
      {
        heading: 'Architecture & Practices',
        list: [
          'Domain-Driven Design, Clean Architecture',
          'CQRS, Event Sourcing, Microservices',
          'TDD/BDD, JUnit, Mockito',
          'OWASP Security, OAuth2, JWT',
          'Agile/Scrum, Technical Documentation'
        ]
      },
      {
        heading: 'Development Tools & Collaboration',
        list: [
          'Git, GitHub, GitLab, Bitbucket',
          'IntelliJ IDEA, VS Code, JetBrains Suite',
          'Jira, Confluence, Slack',
          'Postman, Insomnia, Swagger UI',
          'SonarQube, Code Quality & Security Analysis'
        ]
      }
    ]
  });

  // Professional Experience Section
  protected readonly experienceSection = signal<Section<BaseItem>>({
    id: 'experience',
    title: 'Professional Experience',
    items: [
      {
        heading: 'Senior Fullstack Developer - Enterprise Solutions (2022 - Present)',
        content: 'Currently leading the migration from a monolithic system to Spring Boot microservices for a financial services company. It\'s been challenging but rewarding - we\'ve cut deployment time by 70% and achieved 99.9% uptime.',
        list: [
          'Improved performance by 40% through smart caching and architecture optimization',
          'Built Angular apps that now serve 100K+ users every day',
          'Set up CI/CD pipelines that took us from deploying weekly to deploying multiple times a day',
          'Mentor a team of 5 developers - helping them grow while we ship great features'
        ]
      },
      {
        heading: 'Fullstack Java/Angular Developer - International Consulting (2019 - 2022)',
        content: 'Worked with clients across banking, healthcare, and e-commerce in Europe and North America. Every project taught me something new about building systems that need to work at scale.',
        list: [
          'Designed a microservices platform that handles over 10M API calls per day',
          'Led our AWS migration - not just moving servers, but rethinking how we deploy and scale',
          'Implemented OAuth2/JWT security to meet GDPR requirements',
          'Proud of our 95%+ client satisfaction score - building trust is as important as writing code'
        ]
      },
      {
        heading: 'Java Backend Developer - Tech Startup (2017 - 2019)',
        content: 'Joined a small team building a SaaS product from scratch. Wore many hats and learned what it takes to scale from MVP to thousands of paying customers.',
        list: [
          'Built REST APIs with Spring Boot that now handle 2M+ requests daily',
          'Spent countless hours optimizing database queries - cut response time by 60%',
          'Introduced automated testing and got us to 85%+ code coverage',
          'Loved the fast pace of daily standups, quick iterations, and seeing users actually use what we built'
        ]
      }
    ]
  });

  // Projects Section (Portfolio)
  protected readonly projectsSection = signal<Section<Project>>({
    id: 'projects',
    title: 'Featured Projects',
    items: [
      {
        heading: 'Banking Microservices Platform',
        content: 'Built a secure transaction processing platform for a financial services company. It handles 10M+ transactions daily with 99.95% uptime. The challenge was making it both fast and reliable - we reduced processing time by 55%.',
        technologies: ['Java 21', 'Spring Boot 3', 'Kafka', 'PostgreSQL', 'Docker', 'AWS ECS'],
        link: '#'
      },
      {
        heading: 'E-Commerce Angular Application',
        content: 'Created a complete e-commerce platform with real-time inventory updates, payment processing, and analytics. It serves 50K+ users daily and loads in under 2 seconds. Performance was key here.',
        technologies: ['Angular 18', 'NgRx', 'Tailwind CSS', 'Spring Boot', 'Redis', 'Stripe API'],
        link: '#'
      },
      {
        heading: 'Real-time Analytics Dashboard',
        content: 'Developed an event-driven analytics platform with live data streaming and interactive visualizations. Processing 1M+ events per hour with sub-second latency was quite the technical challenge.',
        technologies: ['Angular', 'RxJS', 'D3.js', 'Spring Cloud', 'Kafka', 'Kubernetes'],
        link: '#'
      },
      {
        heading: 'Cloud-Native SaaS Platform',
        content: 'Led the migration from a legacy monolith to cloud-native microservices. Set up CI/CD and infrastructure as code. Deployment time went from 4 hours to 15 minutes - the team was thrilled.',
        technologies: ['Java 17', 'Spring Cloud', 'Angular', 'Terraform', 'AWS', 'Jenkins'],
        link: '#'
      },
      {
        heading: 'Healthcare Management System',
        content: 'Built a HIPAA-compliant patient management system with strict role-based access control. Had to integrate with several legacy systems while meeting modern security standards.',
        technologies: ['Spring Boot', 'Angular', 'MongoDB', 'OAuth2', 'Docker'],
        link: '#'
      },
      {
        heading: 'API Gateway & Service Mesh',
        content: 'Designed an API gateway that handles 5M+ requests daily with rate limiting, auth, and full monitoring. Improved system observability by 80% - now the team can actually see what\'s happening.',
        technologies: ['Spring Cloud Gateway', 'Redis', 'Prometheus', 'Grafana', 'ELK Stack'],
        link: '#'
      }
    ]
  });

  // Services Section
  protected readonly servicesSection = signal<Section<Service>>({
    id: 'services',
    title: 'Services & Solutions',
    items: [
      {
        heading: 'Enterprise Application Development',
        content: 'I design and build scalable applications using Java/Spring Boot and Angular. My focus is on creating systems that are fast, secure, and easy to maintain. Most clients see 40-60% faster time-to-market and 99.9%+ uptime after we\'re done.',
        icon: '💻'
      },
      {
        heading: 'Cloud Migration & DevOps',
        content: 'Moving to the cloud doesn\'t have to be painful. I help you migrate legacy systems to AWS, set up CI/CD pipelines, and automate your infrastructure. On average, clients cut costs by 35% and deploy 70% faster.',
        icon: '☁️'
      },
      {
        heading: 'Architecture & Technical Consulting',
        content: 'Need a fresh pair of eyes on your codebase? I do architecture reviews, code audits, and help teams make smart decisions about their tech stack. I bring patterns like DDD and Clean Architecture when they make sense for your project.',
        icon: '🏗️'
      },
      {
        heading: 'Performance Optimization',
        content: 'Is your app slow? I find and fix performance bottlenecks in both backend and frontend. Database tuning, caching strategies, load testing - whatever it takes. I typically deliver 40-80% performance improvements.',
        icon: '⚡'
      },
      {
        heading: 'Team Augmentation & Mentoring',
        content: 'I can join your team as a senior developer or tech lead. Beyond shipping features, I enjoy mentoring junior and mid-level developers, sharing best practices, and helping the whole team level up their skills.',
        icon: '👥'
      },
      {
        heading: 'Legacy System Modernization',
        content: 'Stuck with an old monolith or outdated Angular version? I help modernize legacy systems step by step - migrating to microservices, upgrading to the latest Angular features, all while keeping your system running smoothly.',
        icon: '🔄'
      }
    ]
  });

  // Clients and Testimonials Section
  protected readonly testimonialsSection = signal<Section<Testimonial>>({
    id: 'testimonials',
    title: 'Client Testimonials',
    items: [
      {
        name: 'Sarah Johnson',
        role: 'VP Engineering',
        company: 'FinTech Solutions Inc.',
        content: 'Jodel led our migration to microservices and honestly, I was skeptical at first. But he delivered beyond expectations - 99.95% uptime and we cut costs by 40%. What impressed me most was how he explained complex technical decisions in terms our business team could understand.'
      },
      {
        name: 'Marc Dubois',
        role: 'CTO',
        company: 'E-Commerce Ventures',
        content: 'We needed our Angular app done fast, and Jodel delivered ahead of schedule. The platform handles 50K users daily without breaking a sweat. Plus, he mentored our junior devs along the way - they learned more in 3 months than in the previous year.'
      },
      {
        name: 'Lisa Chen',
        role: 'Product Director',
        company: 'HealthTech Systems',
        content: 'Working with Jodel on our HIPAA-compliant platform was a relief. He didn\'t just write code - he helped us navigate security requirements and compliance challenges. Very professional, always available, and genuinely cares about the project\'s success.'
      },
      {
        name: 'Thomas Müller',
        role: 'Engineering Manager',
        company: 'Enterprise Solutions GmbH',
        content: 'Jodel joined us as a senior dev and immediately raised the bar. He introduced clean architecture and TDD practices without being preachy about it. Now our team ships features faster with way fewer bugs. Game-changer for us.'
      },
      {
        name: 'Jennifer Williams',
        role: 'Tech Lead',
        company: 'Digital Innovation Corp',
        content: 'What I appreciate about Jodel is his versatility - equally strong on Java backend and Angular frontend. He doesn\'t just solve problems; he thinks ahead and builds solutions that scale. Solid technical skills paired with great communication.'
      },
      {
        name: 'Pierre Laurent',
        role: 'Founder & CEO',
        company: 'StartupLab',
        content: 'As a startup, we needed someone who could move fast but also build things right. Jodel helped us scale from MVP to 5000+ customers, and his architectural decisions still hold up as we keep growing. Would hire him again in a heartbeat.'
      }
    ]
  });

  // Contact Form
  protected readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected readonly contactSubmitted = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  protected readonly footerText = signal('© 2026 Jodel Fokou');

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after navigation
      this.mobileMenuOpen.set(false);
    }
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu
    this.mobileMenuOpen.set(false);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(state => !state);
  }


  protected onSubmitContact(): void {
    if (this.contactForm.valid) {
      console.log('Contact form submitted:', this.contactForm.value);
      this.contactSubmitted.set(true);
      this.contactForm.reset();

      // Reset confirmation message after 5 seconds
      setTimeout(() => this.contactSubmitted.set(false), 5000);
    }
  }
}

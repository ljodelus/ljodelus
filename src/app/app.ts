import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
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
  icon?: string;
}

interface PortfolioProject {
  name: string;
  proprietaire: string;
  lieu: string;
  lien: string;
  preview: string;
  description: string;
  stacks: string[];
}

interface PortfolioDomain {
  domaine: string;
  icone: string;
  projets: PortfolioProject[];
}

interface Service extends BaseItem {
  icon?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  icon: string;
}


interface AboutItem {
  content: string;
}

interface SkillCategory {
  heading: string;
  icon: string;
  list: string[];
}

interface AboutStat {
  value: string;
  label: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// Union type for different section types
type SectionItem = BaseItem | Project | Service | AboutItem | SkillCategory;

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

  /** First word of the name — rendered in white on the logo */
  protected readonly firstName = computed(() => this.name().split(' ')[0]);
  /** Remaining words — rendered in accent colour on the logo */
  protected readonly lastName = computed(() => this.name().split(' ').slice(1).join(' '));
  /** Up-to-2-letter initials for the round icon */
  protected readonly initials = computed(() =>
    this.name().split(' ').map(w => w.charAt(0)).join('').substring(0, 2).toUpperCase()
  );
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
  protected readonly skillsSection = signal<Section<SkillCategory>>({
    id: 'skills',
    title: 'Technical Expertise',
    items: [
      {
        heading: 'Java & Spring Boot',
        icon: 'fas fa-server',
        list: ['Java 17/21', 'Spring Boot 3.x', 'Spring Security', 'Spring Cloud', 'REST APIs', 'GraphQL', 'OpenAPI/Swagger']
      },
      {
        heading: 'Angular & TypeScript',
        icon: 'fas fa-code',
        list: ['Angular 17/18', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'SSR', 'Standalone Components']
      },
      {
        heading: 'Databases & Messaging',
        icon: 'fas fa-database',
        list: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ', 'JPA / Hibernate']
      },
      {
        heading: 'Cloud & AWS',
        icon: 'fas fa-cloud',
        list: ['EC2', 'S3', 'Lambda', 'ECS', 'RDS', 'Terraform', 'Infrastructure as Code']
      },
      {
        heading: 'Containerization',
        icon: 'fab fa-docker',
        list: ['Docker', 'Kubernetes', 'Helm', 'Container Orchestration']
      },
      {
        heading: 'CI/CD & Quality',
        icon: 'fas fa-code-branch',
        list: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'SonarQube', 'Prometheus', 'Grafana', 'ELK Stack']
      },
      {
        heading: 'UI & Design Systems',
        icon: 'fas fa-palette',
        list: ['Tailwind CSS', 'SCSS', 'Responsive Design', 'WCAG 2.1 AA', 'Cypress', 'Playwright', 'Jasmine / Karma']
      },
      {
        heading: 'AI & Generative Tools',
        icon: 'fas fa-robot',
        list: ['GitHub Copilot', 'Claude', 'ChatGPT', 'OpenAI API', 'Anthropic API', 'Prompt Engineering']
      },
      {
        heading: 'Architecture & Practices',
        icon: 'fas fa-layer-group',
        list: ['Domain-Driven Design', 'Clean Architecture', 'CQRS', 'Event Sourcing', 'TDD / BDD', 'OAuth2 / JWT', 'Agile / Scrum']
      }
    ]
  });


  // Projects Section (Portfolio)
  protected readonly projectsSection = signal<Section<Project>>({
    id: 'projects',
    title: 'Featured Projects',
    items: []
  });

  // Portfolio domains — used by the projects section template
  protected readonly portfolioDomains = signal<PortfolioDomain[]>([
    {
      domaine: 'Document Management & Business Processes',
      icone: '🗂️',
      projets: [
        {
          name: 'Ashscan',
          proprietaire: 'Ashdown',
          lieu: 'Yaoundé, Cameroon',
          lien: '',
          preview: 'projects/ashscan/dashboard.png',
          description: 'An intelligent document digitization platform designed to automate capture, processing, and large-scale archiving. A core tool for driving digital transformation within organizations.',
          stacks: ['Django', 'Python', 'Celery', 'Angular', 'REST API', 'Docker', 'PostgreSQL', 'GitHub Actions']
        },
        {
          name: 'Ashflow',
          proprietaire: 'Ashdown',
          lieu: 'Yaoundé, Cameroon',
          lien: '',
          preview: 'projects/ashflow/processus.PNG',
          description: 'A business process management application integrating BPMN standards and Gantt charts. Designed to provide a clear, actionable view of workflows across the organization.',
          stacks: ['Angular', 'BPMN.js', 'Django', 'Python', 'Docker', 'PostgreSQL', 'GitHub Actions']
        }
      ]
    },
    {
      domaine: 'Human Resources Management',
      icone: '👥',
      projets: [
        {
          name: 'AshRH',
          proprietaire: 'Ashdown',
          lieu: 'Yaoundé, Cameroon',
          lien: '',
          preview: 'projects/ashrh-preview.png',
          description: 'A comprehensive HR solution covering employee management, contracts, and administrative processes. Built to centralize and streamline the day-to-day operations of HR teams.',
          stacks: ['Angular', 'Django', 'Python', 'BPMN.js', 'Docker', 'PostgreSQL', 'GitHub Actions']
        },
        {
          name: 'Digital HR',
          proprietaire: 'Freelance',
          lieu: '(freelance)',
          lien: 'https://dev.app.godigitalhr.com',
          preview: 'projects/digitalhr/acceuil.png',
          description: 'An advanced HR application featuring granular calendar management by employee type, along with tracking of leave, attendance, and absences. Built for distributed teams and complex organizational structures.',
          stacks: ['Angular', 'REST API', 'Docker', 'GitHub Actions']
        }
      ]
    },
    {
      domaine: 'Healthcare',
      icone: '🏥',
      projets: [
        {
          name: 'CSU',
          proprietaire: 'SUCAM',
          lieu: 'Yaoundé, Cameroon',
          lien: 'https://hopi.csu.cm',
          preview: 'projects/csu-preview.png',
          description: 'A management system for Universal Health Coverage in Cameroon. A mission-critical platform deployed as microservices to manage entitlements, affiliations, and reimbursements at a national scale.',
          stacks: ['Angular', 'Spring Boot', 'Java', 'Kubernetes', 'Docker', 'Microservices', 'Kafka', 'PostgreSQL', 'Nginx', 'Grafana', 'Prometheus', 'GitHub Actions']
        }
      ]
    },
    {
      domaine: 'Transport & Logistics',
      icone: '🚢',
      projets: [
        {
          name: 'CAMSIS',
          proprietaire: 'Campass',
          lieu: 'Douala, Cameroon',
          lien: 'https://camsis.campass.cm',
          preview: 'projects/camsis-preview.png',
          description: 'A maritime freight and customs clearance management platform for Cameroon. Designed to digitize and accelerate port operations with a robust, scalable architecture.',
          stacks: ['Angular', 'Spring Boot', 'Java', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'Grafana', 'GitHub Actions']
        },
        {
          name: 'Buspro',
          proprietaire: 'Freelance',
          lieu: '(freelance)',
          lien: 'https://albosta.io',
          preview: 'projects/buspro-preview.png',
          description: 'An urban transport management application for managing stations, buses, and online ticket booking. A solution designed to modernize mobility in African cities.',
          stacks: ['Angular', 'Spring Boot', 'Java', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'GitHub Actions']
        }
      ]
    },
    {
      domaine: 'Telecommunications & Mobile Services',
      icone: '📱',
      projets: [
        {
          name: 'SmartR',
          proprietaire: 'Cateli',
          lieu: 'Ivory Coast',
          lien: 'https://smartr.cateli.ci',
          preview: 'projects/smartr-preview.png',
          description: 'A mobile top-up application allowing users to perform phone credit transactions quickly and securely. Deployed in production within a microservices environment.',
          stacks: ['Angular', 'Spring Boot', 'Java', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'Grafana', 'Prometheus', 'GitHub Actions']
        }
      ]
    },
    {
      domaine: 'Confidential Projects',
      icone: '🔒',
      projets: [
        {
          name: 'Confidential Projects',
          proprietaire: '~',
          lieu: '~',
          lien: '#',
          preview: 'projects/confidential-preview.png',
          description: 'A set of projects delivered under non-disclosure agreements. While I cannot share the details, these engagements were real accelerators — distributed architecture, container orchestration, observability, and large-scale CI/CD. Experiences that have greatly shaped my expertise.',
          stacks: ['Angular', 'Spring Boot', 'Microservices', 'Kubernetes', 'Docker', 'Grafana', 'Prometheus', 'Jenkins']
        }
      ]
    }
  ]);

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

  // Certifications Section
  protected readonly certificationsSection = signal<Section<Certification>>({
    id: 'certifications',
    title: 'Certifications',
    items: [
      {
        name: 'Oracle Certified Professional: Java SE 21',
        issuer: 'Oracle',
        date: 'Mar 2024',
        credentialId: 'OCP-SE21-7821',
        link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=23D0FF27CC9AC1A193E04626D019193B0671997F09701EDDA0A0F9749D8266DE',
        icon: 'fas fa-coffee'
      },
      {
        name: 'Oracle Certified Professional: Java SE 17',
        issuer: 'Oracle',
        date: 'Jan 2022',
        credentialId: 'OCP-SE17-4451',
        link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CA6F2E7A62CDD7EDE66720DFA4FDCCFE2709C706A2891058C1CEB095D2A11A63',
        icon: 'fas fa-coffee'
      },
      {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        date: 'Nov 2023',
        credentialId: 'AWS-SAA-C03',
        link: '#',
        icon: 'fab fa-aws'
      },
      {
        name: 'Spring Professional Certification',
        issuer: 'VMware (Pivotal)',
        date: 'Jun 2022',
        credentialId: 'SPR-2022-00842',
        link: '#',
        icon: 'fas fa-leaf'
      },
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        date: 'Sep 2022',
        credentialId: 'CKA-2200-008571',
        link: '#',
        icon: 'fas fa-dharmachakra'
      },
      {
        name: 'Professional Scrum Master I (PSM I)',
        issuer: 'Scrum.org',
        date: 'Aug 2021',
        credentialId: 'PSM-0012345',
        link: '#',
        icon: 'fas fa-users-cog'
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

  protected readonly headerSurtitre = signal('Welcome to my portfolio');
  protected readonly headerCtaText = signal('Hire Me');
  protected readonly headerBadgeText = signal('100k+ Users Served');

  protected readonly aboutSurtitre = signal('Get to know me');
  protected readonly aboutAccroche = signal('Passionate engineer. Pragmatic problem-solver.');
  protected readonly aboutStats = signal<AboutStat[]>([
    { value: '8+',    label: 'Years of experience' },
    { value: '40+',   label: 'Projects delivered' },
    { value: '100k+', label: 'Users impacted' }
  ]);
  protected readonly socialLinks = signal<SocialLink[]>([
    { label: 'LinkedIn profile', url: 'https://www.linkedin.com/in/jodel-fokou-kemta/', icon: 'fab fa-linkedin-in' },
    { label: 'GitHub profile', url: 'https://github.com/ljodelus', icon: 'fab fa-github' },
    { label: 'Twitter profile', url: 'https://x.com/ljodelus', icon: 'fab fa-twitter' }
  ]);

  /** Returns Tailwind classes for the preview panel — alternates image to the right on odd rows. */
  protected previewPanelClasses(index: number): string {
    const base = 'relative w-full md:w-2/5 shrink-0 overflow-hidden bg-accent-700';
    return index % 2 !== 0 ? `${base} md:order-last` : base;
  }

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

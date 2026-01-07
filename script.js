// Translations object
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Freelance Python Developer (Portage Salarial)',
        'hero.description': 'Building robust, scalable solutions with clean, efficient code',
        'hero.viewProjects': 'View Projects',
        'hero.downloadResume': 'Download Resume',
        'about.title': 'About Me',
        'about.description1': "I'm a passionate freelance Python developer with over 5 years of experience building web applications, APIs, and automation solutions. I focus on writing clean, maintainable code and delivering high-quality solutions that meet client needs.",
        'about.description2': 'My approach combines technical excellence with clear communication, ensuring projects are delivered on time and exceed expectations.',
        'about.oPortage': 'Working through <a href="https://o-portage-salarial.fr/" target="_blank" style="color: #3498db; text-decoration: none;">O\'Portage</a> for seamless project management and administrative support.',
        'about.languages': 'Languages',
        'about.frenchNative': 'French (Native)',
        'about.englishFluent': 'English (Fluent)',
        'about.yearsExperience': 'Years Experience',
        'about.recordsManaged': 'Records Managed',
        'experience.title': 'Work Experience',
        'exp.keyContributions': 'Key Contributions:',
        'exp1.title': 'Lead Developer Python',
        'exp1.description': 'Direct Marketing / Data Management company specializing in B2C and B2B data collection, cleaning, and standardization. Managing a central database of over 38 million individuals for marketing campaigns.',
        'exp1.contrib1': 'Introduced Agile SCRUM methodology with sprint planning and retrospectives using Asana',
        'exp1.contrib2': 'Authored internal development charters for ticketing workflows, coding standards, and Git usage',
        'exp1.contrib3': 'Led projects using Python automation scripts, Django web interfaces, and MongoDB for large-scale data',
        'exp1.contrib4': 'Managed technical planning and refactoring of legacy code for improved performance',
        'exp1.contrib5': 'Managed growing development team and handled production deployment',
        'exp2.title': 'Backend Developer Python',
        'exp2.description': 'Healthcare / Crisis Management solution for hospital environments managing staff rotations efficiently during crisis situations. Available as on-premises and cloud-based solutions to prevent staff burnout through fair workload distribution.',
        'exp2.contrib1': 'Developed and maintained backend API endpoints for frontend applications',
        'exp2.contrib2': 'Built scalable, event-driven services using AWS Lambda and Serverless framework',
        'exp2.contrib3': 'Implemented security best practices with AWS Secrets Manager and IAM permissions',
        'exp2.contrib4': 'Wrote functional and unit tests with Pytest for code reliability',
        'exp2.contrib5': 'Participated in CI/CD processes using CircleCI and managed production deployments',
        'exp3.title': 'Trainer – MongoDB & Elasticsearch',
        'exp3.description': 'Education / Career Retraining center focused on helping individuals transition into new careers, particularly in tech and data-related fields.',
        'exp3.contrib1': 'Delivered two 3-day training sessions on MongoDB and Elasticsearch (including Kibana)',
        'exp3.contrib2': 'Created engaging training materials using Google Slides for non-technical adult learners',
        'exp3.contrib3': 'Designed hands-on exercises and quizzes to reinforce database concepts',
        'exp3.contrib4': 'Guided participants through installation, configuration, and real-world usage',
        'exp4.title': 'Project Coach & Evaluator',
        'exp4.description': 'Education / Project-Based Learning tech school where students learn through hands-on experience with industry professionals providing coaching and assessment on real-world projects.',
        'exp4.contrib1': 'Coached student teams on Grand Projet ETNA (GPE), a two-year capstone startup project',
        'exp4.contrib2': 'Advised on project direction, innovation, and feasibility to shape viable products',
        'exp4.contrib3': 'Guided teams from Proof of Concept development to polished final products',
        'exp4.contrib4': 'Assessed and graded projects based on innovation, execution, and presentation',
        'exp4.contrib5': 'Participated in corrections across multiple subjects and student cohorts',
        'skills.title': 'Technical Skills',
        'projects.title': 'Featured Projects',
        'proj.liveSite': 'Live Site',
        'proj.viewCode': 'View Code',
        'proj.watchDemo': 'Watch Demo',
        'proj.viewScreenshot': 'View Screenshot',
        'proj1.title': 'AFACE78 Website',
        'proj1.description': 'Volunteer project creating a complete website for AFACE78 association. Developed custom WordPress plugins integrating Ohme and Brevo services for enhanced functionality.',
        'proj2.title': 'Body Exercises Workout Planner',
        'proj2.description': 'PyQt6 desktop application for creating personalized workout plans with interactive body diagrams. Features gender-specific exercises, calendar export, and visual workout planning.',
        'proj3.title': 'IoT Device Management System',
        'proj3.description': 'Comprehensive FastAPI platform for IoT device management with real-time monitoring, MQTT integration, WebSocket support, and automated alert systems.',
        'proj4.title': 'Simple Agent with RAG',
        'proj4.description': 'AI agent implementation using Retrieval-Augmented Generation (RAG) for intelligent document processing and question answering with context-aware responses.',
        'proj5.title': 'Leboncoin Real Estate Scraper',
        'proj5.description': 'Python web scraper for leboncoin.fr real estate listings with smart filtering, automatic data export to CSV/Excel, and rate limiting protection.',
        'contact.title': "Let's Work Together",
        'contact.description': "Ready to bring your Python project to life? Let's discuss your requirements."
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.experience': 'Expérience',
        'nav.skills': 'Compétences',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Développeuse Python Freelance (Portage Salarial)',
        'hero.description': 'Création de solutions robustes et évolutives avec du code propre et efficace',
        'hero.viewProjects': 'Voir les projets',
        'hero.downloadResume': 'Télécharger le CV',
        'about.title': 'À propos de moi',
        'about.description1': "Je suis une développeuse Python freelance passionnée avec plus de 5 ans d'expérience dans la création d'applications web, d'API et de solutions d'automatisation. Je me concentre sur l'écriture de code propre et maintenable, et sur la livraison de solutions de haute qualité qui répondent aux besoins des clients.",
        'about.description2': 'Mon approche combine excellence technique et communication claire, garantissant que les projets sont livrés à temps et dépassent les attentes.',
        'about.oPortage': 'Travaillant via <a href="https://o-portage-salarial.fr/" target="_blank" style="color: #3498db; text-decoration: none;">O\'Portage</a> pour une gestion de projet et un support administratif sans faille.',
        'about.languages': 'Langues',
        'about.frenchNative': 'Français (Natif)',
        'about.englishFluent': 'Anglais (Courant)',
        'about.yearsExperience': "Années d'expérience",
        'about.recordsManaged': 'Enregistrements gérés',
        'experience.title': 'Expérience professionnelle',
        'exp.keyContributions': 'Contributions clés :',
        'exp1.title': 'Développeuse Python Lead',
        'exp1.description': 'Entreprise de marketing direct / gestion de données spécialisée dans la collecte, le nettoyage et la standardisation de données B2C et B2B. Gestion d\'une base de données centrale de plus de 38 millions d\'individus pour les campagnes marketing.',
        'exp1.contrib1': 'Introduction de la méthodologie Agile SCRUM avec planification de sprints et rétrospectives via Asana',
        'exp1.contrib2': 'Rédaction de chartes de développement internes pour les workflows de ticketing, standards de code et usage Git',
        'exp1.contrib3': 'Direction de projets utilisant des scripts d\'automatisation Python, interfaces web Django et MongoDB pour données à grande échelle',
        'exp1.contrib4': 'Gestion de la planification technique et refactorisation du code legacy pour améliorer les performances',
        'exp1.contrib5': 'Management d\'une équipe de développement en croissance et gestion des déploiements en production',
        'exp2.title': 'Développeuse Backend Python',
        'exp2.description': 'Solution de santé / gestion de crise pour environnements hospitaliers gérant efficacement les rotations du personnel pendant les situations de crise. Disponible en solutions sur site et cloud pour prévenir l\'épuisement professionnel grâce à une répartition équitable de la charge de travail.',
        'exp2.contrib1': 'Développement et maintenance d\'endpoints API backend pour applications frontend',
        'exp2.contrib2': 'Construction de services évolutifs et événementiels utilisant AWS Lambda et le framework Serverless',
        'exp2.contrib3': 'Implémentation des meilleures pratiques de sécurité avec AWS Secrets Manager et permissions IAM',
        'exp2.contrib4': 'Écriture de tests fonctionnels et unitaires avec Pytest pour la fiabilité du code',
        'exp2.contrib5': 'Participation aux processus CI/CD utilisant CircleCI et gestion des déploiements en production',
        'exp3.title': 'Formatrice – MongoDB & Elasticsearch',
        'exp3.description': 'Centre d\'éducation / reconversion professionnelle axé sur l\'aide aux individus pour la transition vers de nouvelles carrières, particulièrement dans les domaines tech et data.',
        'exp3.contrib1': 'Animation de deux sessions de formation de 3 jours sur MongoDB et Elasticsearch (incluant Kibana)',
        'exp3.contrib2': 'Création de supports de formation engageants avec Google Slides pour apprenants adultes non-techniques',
        'exp3.contrib3': 'Conception d\'exercices pratiques et quiz pour renforcer les concepts de bases de données',
        'exp3.contrib4': 'Accompagnement des participants dans l\'installation, la configuration et l\'usage en conditions réelles',
        'exp4.title': 'Coach de Projet & Évaluatrice',
        'exp4.description': 'École tech d\'apprentissage par projet où les étudiants apprennent par l\'expérience pratique avec des professionnels de l\'industrie fournissant coaching et évaluation sur des projets réels.',
        'exp4.contrib1': 'Coaching d\'équipes étudiantes sur le Grand Projet ETNA (GPE), projet de startup capstone de deux ans',
        'exp4.contrib2': 'Conseil sur la direction de projet, l\'innovation et la faisabilité pour façonner des produits viables',
        'exp4.contrib3': 'Accompagnement des équipes du développement de Proof of Concept aux produits finaux polis',
        'exp4.contrib4': 'Évaluation et notation des projets basées sur l\'innovation, l\'exécution et la présentation',
        'exp4.contrib5': 'Participation aux corrections sur plusieurs matières et cohortes d\'étudiants',
        'skills.title': 'Compétences techniques',
        'projects.title': 'Projets phares',
        'proj.liveSite': 'Site en ligne',
        'proj.viewCode': 'Voir le code',
        'proj.watchDemo': 'Voir la démo',
        'proj.viewScreenshot': 'Voir capture',
        'proj1.title': 'Site Web AFACE78',
        'proj1.description': 'Projet bénévole créant un site web complet pour l\'association AFACE78. Développement de plugins WordPress personnalisés intégrant les services Ohme et Brevo pour des fonctionnalités améliorées.',
        'proj2.title': 'Planificateur d\'Exercices Corporels',
        'proj2.description': 'Application desktop PyQt6 pour créer des plans d\'entraînement personnalisés avec diagrammes corporels interactifs. Fonctionnalités d\'exercices spécifiques par genre, export calendrier et planification visuelle d\'entraînement.',
        'proj3.title': 'Système de Gestion d\'Appareils IoT',
        'proj3.description': 'Plateforme FastAPI complète pour la gestion d\'appareils IoT avec surveillance temps réel, intégration MQTT, support WebSocket et systèmes d\'alerte automatisés.',
        'proj4.title': 'Agent Simple avec RAG',
        'proj4.description': 'Implémentation d\'agent IA utilisant la Génération Augmentée par Récupération (RAG) pour le traitement intelligent de documents et réponses aux questions avec réponses contextuelles.',
        'proj5.title': 'Scraper Immobilier Leboncoin',
        'proj5.description': 'Scraper web Python pour les annonces immobilières leboncoin.fr avec filtrage intelligent, export automatique de données vers CSV/Excel et protection par limitation de débit.',
        'contact.title': 'Travaillons ensemble',
        'contact.description': 'Prêt à donner vie à votre projet Python ? Discutons de vos besoins.'
    }
};

// Language management
let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Handle HTML content for links
            if (translations[currentLanguage][key].includes('<a')) {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

function initializeLanguage() {
    // Get saved language or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // Update select element
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    
    // Update page content
    updatePageLanguage();
    
    // Update HTML lang attribute
    document.documentElement.lang = savedLanguage;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    // Initialize language first
    initializeLanguage();
    
    const subtitle = document.querySelector('.hero-content h2');
    const originalText = subtitle.textContent;
    setTimeout(() => {
        typeWriter(subtitle, originalText, 80);
    }, 1000);
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.remove('active');
    toggle.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});
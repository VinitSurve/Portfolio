export default {
  personSchema: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vinit Surve",
    "url": "https://VinitSurve.github.io/Portfolio",
    "sameAs": [
      "https://github.com/VinitSurve",
      "https://www.linkedin.com/in/vinit-surve-/"
    ],
    "jobTitle": "Web Lead @ GDG On Campus – BVDU DMS",
    "worksFor": {
      "@type": "Organization",
      "name": "Google Developer Groups On Campus – BVDU DMS"
    }
  },
  portfolioConfig: {
    features: {
      about: true,
      projects: true,
      experience: true,
      skills: true,
      github_projects: false
    },
    site: {
      title: "Vinit Surve",
      description: "Web Developer • Event Organizer • GDG Web Lead. Explore projects, tech events, and my community journey.",
      profile_picture: "assets/logos/me2.jpg",
      seo: {
        title: "Vinit Surve - Developer Portfolio",
        description: "Web Developer • Event Organizer • GDG Web Lead. Explore projects, tech events, and my community journey.",
        keywords: "developer, portfolio, github, firebase, google cloud, gdg, web lead, community builder",
        author: "Vinit Surve",
        og_image: "assets/logos/me2.jpg",
        twitter_card: "summary_large_image",
        base_url: "https://VinitSurve.github.io/Portfolio",
        icon: "assets/logos/me2.jpg"
      }
    },
    header: {
      greeting: "Hi, I'm Vinit Surve",
      tagline: "Developer • Organizer • Cloud Enthusiast"
    },
    social_links: [
      {
        name: "GitHub",
        url: "https://github.com/VinitSurve",
        icon: "github",
        required: true
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vinit-surve-/",
        icon: "linkedin",
        required: true
      }
    ],
    github_username: "VinitSurve",
    about: {
      paragraphs: [
        "Welcome to my portfolio! I'm Vinit Surve — a passionate full-stack web developer and active community leader.",
        "I specialize in building modern, scalable web applications using React, Next.js, Firebase, Supabase, and JavaScript. With a strong focus on clean architecture and user experience, I enjoy turning ideas into impactful digital products.",
        "Currently, I serve as the Web Lead at GDG On Campus – BVDU DMS, and I'm also the President of the Vertex Community, a 500+ member technical club dedicated to empowering student developers through hands-on events, hackathons, and mentorship.",
        "Feel free to explore my projects, tech stack, and certifications below. Let's connect if you're looking to collaborate, contribute, or build something amazing together!"
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          name: "OD Form Digitization System",
          date: "March 2025",
          description: [
            "Built using React (Vite), Firebase Auth, and Firestore",
            "Helps students apply for leaves digitally with role-based access for approval",
            "Integrated Supabase storage for uploading documents"
          ],
          pictures: [
            "assets/projects/od-forms.png",
          ],
          link: {
            url: "https://github.com/VinitSurve/od-forms",
            title: "View Code"
          },
          live_site: {
            url: "https://od-forms-ca26.vercel.app/login",
            title: "Live Demo"
          }
        },
        {
          name: "Personal Finance Tracker",
          date: "April 2025",
          description: [
            "Track daily income and expenses across multiple balance types like Wallet, UPI, Cash, etc.",
            "Built with React (Vite) and Supabase for realtime data storage and analytics",
            "Includes mobile-responsive UI, dark/light themes, and PWA support"
          ],
          pictures: [
            "assets/projects/finance-tracker.png",
          ],
          link: {
            url: "https://github.com/VinitSurve/Finance-Tracker",
            title: "View Code"
          },
          live_site: {
            url: "https://finance-trackerr-three.vercel.app/",
            title: "Live Demo"
          }
        },
        {
          name: "Entrance Exam Tracker",
          date: "May 2025",
          description: [
            "Helps students monitor speed and accuracy during practice for exams like NIMCET",
            "Built with React (Vite), Supabase, and custom analytics dashboard",
            "Features question timer, self-marking, progress stats, and goal-based tracking"
          ],
          pictures: [
            "assets/projects/PrecisionPrep.png",
          ],
          link: {
            url: "https://github.com/VinitSurve/PrecisionPrep",
            title: "View Code"
          },
          live_site: {
            url: "https://precisionprep-iota.vercel.app/login",
            title: "Live Demo"
          }
        },
        {
          name: "Periodic Table Web App",
          date: "2022",
          description: [
            "Interactive periodic table built using HTML, CSS, and vanilla JavaScript",
            "Displays atomic details (number, mass, group) in a tooltip on click",
            "Hands‑on project for mastering DOM manipulation and responsive layouts"
          ],
          pictures: [
            "assets/projects/Periodic_table.png",
          ],
          link: {
            url: "https://github.com/VinitSurve/Periodic-Table",
            title: "View Code"
          },
          live_site: {
            url: "https://periodic-table-umber-one.vercel.app/",
            title: "Live Demo"
          }
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Google Developer Groups On Campus – BVDU DMS",
          role: "Web Lead",
          date: "Dec 2023 – Present",
          responsibilities: [
            "Organized 7+ tech events and speaker sessions including Google's Rakesh Varade",
            "Built and deployed PWA platforms for campus event registrations",
            "Led sponsorship outreach and hosted cross-college community meetups"
          ],
          logo: "assets/logos/Placeholder_Logo.png",
          logo_dark: "assets/logos/Placeholder_Logo.png"
        }
      ]
    },
    skills: {
      title: "Skills & Technologies",
      categories: [
        {
          name: "Programming Languages & Technologies",
          items: [
            "JavaScript",
            "Python",
            "Java",
            "TypeScript",
            "React",
            "Next Js",
            "Node.js",
          ]
        },
        {
          name: "Tools & Platforms",
          items: [
            "Git",
            "GitHub",
            "VS Code",
            "Firebase",
            "Google Cloud",
            "Supabase",
            "Next.js",
            "React",
            "Tailwind CSS"
          ]
        },
        {
          name: "Certifications",
          items: [
            {
              name: "Introduction to JavaScript – SoloLearn",
              url: "https://www.sololearn.com/certificates/CC-ULOSLKYM"
            },
            {
              name: "CSS – SoloLearn",
              url: "https://www.sololearn.com/certificates/CC-OACZJRMZ"
            },
            {
              name: "HTML – SoloLearn",
              url: "https://www.sololearn.com/certificates/CT-2DH3CZTQ"
            },
            {
              name: "JavaScript Intermediate – SoloLearn",
              url: "https://www.sololearn.com/certificates/CC-IZIHBGUA"
            },
            {
              name: "Introduction to SQL – SoloLearn",
              url: "https://www.sololearn.com/certificates/CC-O0OPHNBM"
            },
            {
              name: "Intermediate SQL – SoloLearn",
              url: "https://www.sololearn.com/certificates/CC-HYMO5ZRD"
            },
            {
              name: "Web Development – Programming Hero",
              url: "assets/projects/Web-dev.jpeg"
            }
          ]
        }
      ]
    },
    footer: {
      show_social_links: true,
      show_built_with: true,
      built_with_text: "Built with ❤️ using vanilla JavaScript",
      tagline: "Let's connect and build something amazing together!"
    }
  }
};

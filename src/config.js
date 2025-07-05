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
          company: "Google Developer Groups On Campus – BVDU DMS NM",
          role: "Web Lead",
          date: "Sep 2024 – Present",
          responsibilities: [
            "Led 3 major tech events in the GDG On Campus chapter",
            "Volunteered and contributed to all 7+ events organized by the chapter",
            "Coordinated cross-team collaboration and technical logistics during meetups"
          ],
          logo: "assets/logos/Gdgoclogo.jpeg",
          logo_dark: "assets/logos/Gdgoclogo.jpeg"
        },
        {
          company: "Vertex Community – BVDU DMS",
          role: "President",
          date: "Apr 2024 – Present",
          responsibilities: [
            "Leading a technical community of over 500+ students focused on development, tech talks, DSA and project building",
            "Organized and managed multiple campus events including coding contests, mentoring, etc.",
            "Guided the core team in content planning, outreach strategies, and technical execution"
          ],
          logo: "assets/logos/Vertex Community Logo.png",
          logo_dark: "assets/logos/Vertex Community Logo.png"
        },
        {
          company: "Student Council – BVDU DMS",
          role: "Technical Co-Secretary",
          date: "September 2024 – May 2025",
          responsibilities: [
            "Managed end-to-end logistics for Alkemy Fest 2025 including technical setups, and equipment allocation",
            "Led the planning and execution of esports tournaments as part of the fest, ensuring fair play and high participation wih 1500 participants",
            "Collaborated with event coordinators and volunteers to ensure smooth operations across multiple fest activities"
          ],
          logo: "assets/logos/alkemy.png",
          logo_dark: "assets/logos/alkemy.png"
        },
        {
          company: "Cloud Community Days 2025 – GDG Cloud Mumbai",
          role: "Volunteer",
          date: "14th June 2025",
          responsibilities: [
            "Assisted in on-ground event logistics, speaker coordination, and attendee support at a large-scale offline community event",
            "Worked closely with GDG Cloud Mumbai organizers to ensure smooth execution of sessions and workshops",
            "Engaged with developers, facilitated networking, and supported documentation and community interactions"
          ],
          logo: "assets/logos/ccd.JPG",
          logo_dark: "assets/logos/ccd.JPG"
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

// Section Manager Module
export class SectionManager {
    constructor(configManager) {
        this.configManager = configManager;
    }

    // Toggle section visibility based on feature flags
    toggleSection(sectionClass, isEnabled) {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            if (isEnabled) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    }

    // Update page content from config with feature flags
    updatePageContent(config) {
        // Ensure features object exists with defaults
        const features = {
            about: true,
            projects: true,
            experience: true,
            skills: true,
            github_projects: true,
            ...config.features
        };
        
        // Handle sections based on feature flags
        this.toggleSection('about', features.about);
        this.toggleSection('projects', features.projects);
        this.toggleSection('experience', features.experience);
        this.toggleSection('skills', features.skills);
        this.toggleSection('projects-on-github', features.github_projects);
        
        // Update sections that are enabled and have content
        if (features.about) {
            this.updateAboutSection(config);
        }
        
        if (features.projects) {
            this.updateProjectsSection(config);
        }
        
        if (features.experience) {
            this.updateExperienceSection(config);
        }
        
        if (features.skills) {
            this.updateSkillsSection(config);
        }
        
        // Update "Projects on GitHub" section title from config if available
        if (features.github_projects && config.github_projects?.title) {
            const githubProjectsTitle = document.querySelector('.projects-on-github h2');
            if (githubProjectsTitle) {
                githubProjectsTitle.textContent = config.github_projects.title;
            }
        }
    }

    // Update about section
    updateAboutSection(config) {
        const aboutSection = document.querySelector('.about');
        if (config.about?.paragraphs?.length) {
            aboutSection.innerHTML = config.about.paragraphs.map(p => `<p>${p}</p>`).join('');
        } else {
            aboutSection.innerHTML = '<p>Welcome to my portfolio!</p>';
        }
    }

    // Update projects section dynamically
    updateProjectsSection(config) {
        const projectsSection = document.querySelector('.projects');
        const titleElement = projectsSection.querySelector('h2');
        
        if (titleElement) {
            titleElement.textContent = this.configManager.getSectionTitle('projects');
        }
        
        // Clear existing project items
        const existingProjectItems = projectsSection.querySelectorAll('.project-item');
        existingProjectItems.forEach(item => item.remove());
        
        // Create document fragment
        const fragment = document.createDocumentFragment();
        
        // Add all project items to fragment
        if (config.projects?.items?.length) {
            config.projects.items.forEach(project => {
                const projectItem = this.createProjectItem(project);
                fragment.appendChild(projectItem);
            });
        } else {
            // Show placeholder for empty projects
            const emptyState = document.createElement('div');
            emptyState.className = 'project-item';
            emptyState.innerHTML = `
                <div class="project-content">
                    <h3>Your Projects Will Appear Here</h3>
                    <p class="date">Coming Soon</p>
                    <ul>
                        <li>Add your projects to the config.json file</li>
                        <li>Include project descriptions and images</li>
                        <li>Showcase your best work</li>
                    </ul>
                </div>
            `;
            fragment.appendChild(emptyState);
        }
        
        // Append all projects at once for better performance
        projectsSection.appendChild(fragment);
    }

    // Create individual project item
    createProjectItem(project) {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        const descriptionHtml = Array.isArray(project.description) 
            ? project.description.map(desc => `<li>${desc}</li>`).join('')
            : `<li>${project.description}</li>`;
        
        // Create project links HTML with icons
        let projectLinksHtml = '';
        if (project.link || project.live_site) {
            projectLinksHtml = `
                <div class="project-links">
                    ${project.link ? `
                        <a href="${typeof project.link === 'object' ? project.link.url : project.link}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.name} code">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            ${typeof project.link === 'object' ? (project.link.title || 'View Code') : 'View Code'}
                        </a>
                    ` : ''}
                    ${project.live_site ? `
                        <a href="${typeof project.live_site === 'object' ? project.live_site.url : project.live_site}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.name} live demo" class="live-demo-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L24 12l-12 12L0 12z"/>
                            </svg>
                            ${typeof project.live_site === 'object' ? (project.live_site.title || 'Live Demo') : 'Live Demo'}
                        </a>
                    ` : ''}
                </div>
            `;
        }
        
        // Handle project images
        let projectImageHtml = '';
        if (project.pictures && project.pictures.length > 0) {
            // Use first image only for consistency
            projectImageHtml = `
            <div class="project-image">
                <div class="gallery-wrapper">
                    <div class="gallery-slide">
                        <img src="${project.pictures[0]}" alt="${project.name} project screenshot" loading="lazy">
                    </div>
                </div>
            </div>
            `;
        } else if (project.picture) {
            // Fallback for legacy single image format
            projectImageHtml = `
            <div class="project-image">
                <div class="gallery-wrapper">
                    <div class="gallery-slide">
                        <img src="${project.picture}" alt="${project.name} project screenshot" loading="lazy">
                    </div>
                </div>
            </div>
            `;
        }
        
        projectItem.innerHTML = `
            <div class="project-header">
                <div class="project-header-content">
                    <h3>${project.name}</h3>
                    ${project.date ? `<p class="date">${project.date}</p>` : ''}
                </div>
                <div class="project-accordion-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </div>
            </div>
            <div class="project-content">
                <div class="project-content-desktop">
                    <h3>${project.name}</h3>
                    ${project.date ? `<p class="date">${project.date}</p>` : ''}
                </div>
                <ul>
                    ${descriptionHtml}
                </ul>
                ${projectLinksHtml}
            </div>
            ${projectImageHtml}
        `;
        
        // Add click event listener for accordion functionality on mobile
        const header = projectItem.querySelector('.project-header');
        header.addEventListener('click', () => {
            this.toggleProjectAccordion(projectItem);
        });
        
        return projectItem;
    }

    // Update experience section dynamically
    updateExperienceSection(config) {
        const experienceSection = document.querySelector('.experience');
        const titleElement = experienceSection.querySelector('h2');
        
        if (titleElement) {
            titleElement.textContent = this.configManager.getSectionTitle('experience');
        }
        
        // Clear existing experience items
        const existingItems = experienceSection.querySelectorAll('.experience-item');
        existingItems.forEach(item => item.remove());
        
        // Create document fragment
        const fragment = document.createDocumentFragment();
        
        // Add all experience items to fragment
        if (config.experience?.jobs?.length) {
            config.experience.jobs.forEach(job => {
                const experienceItem = this.createExperienceItem(job);
                fragment.appendChild(experienceItem);
            });
        } else {
            // Show placeholder for empty experience
            const emptyState = document.createElement('div');
            emptyState.className = 'experience-item';
            emptyState.innerHTML = `
                <div class="experience-content">
                    <h3>Your Experience Will Appear Here</h3>
                    <p class="date">Ready to showcase your career</p>
                    <ul>
                        <li>Add your work experience to the config.json file</li>
                        <li>Include company logos and job descriptions</li>
                        <li>Highlight your achievements and responsibilities</li>
                    </ul>
                </div>
            `;
            fragment.appendChild(emptyState);
        }
        
        // Append all experience items at once
        experienceSection.appendChild(fragment);
    }

    // Create individual experience item
    createExperienceItem(job) {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        // Get display options from config
        const displayOptions = this.configManager.getConfig()?.experience?.display_options || {};
        
        // Set expanded class by default if default_open is true
        if (displayOptions.default_open || displayOptions.always_open) {
            experienceItem.classList.add('expanded');
        }
        
        const responsibilitiesHtml = Array.isArray(job.responsibilities)
            ? job.responsibilities.map(resp => `<li>${resp}</li>`).join('')
            : `<li>${job.responsibilities}</li>`;
        
        let logoHtml = '';
        if (job.logo || job.logo_dark) {
            // Apply logo size from config
            const logoSize = displayOptions.logo_size || 'medium';
            const logoClass = `company-logo logo-size-${logoSize}`;
            
            logoHtml = `
                <div class="${logoClass}">
                    ${job.logo ? `<img src="${job.logo}" alt="${job.company} logo" class="light-mode-logo" loading="lazy">` : ''}
                    ${job.logo_dark ? `<img src="${job.logo_dark}" alt="${job.company} logo" class="dark-mode-logo" loading="lazy">` : ''}
                </div>
            `;
        }
        
        // Only show accordion toggle if not explicitly hidden
        const showArrows = displayOptions.show_arrows !== false;
        const arrowsHtml = showArrows ? `
            <div class="accordion-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </div>
        ` : '';
        
        experienceItem.innerHTML = `
            <div class="experience-header">
                <div class="experience-header-content">
                    <h3>${job.company} | ${job.role}</h3>
                    ${job.date ? `<p class="date">${job.date}</p>` : ''}
                </div>
                ${logoHtml}
                ${arrowsHtml}
            </div>
            <div class="experience-content">
                <ul>
                    ${responsibilitiesHtml}
                </ul>
            </div>
        `;
        
        // Add click event listener for accordion functionality
        const header = experienceItem.querySelector('.experience-header');
        const isCollapsible = !displayOptions.collapsible === false && !displayOptions.always_open;
        
        if (isCollapsible) {
            header.addEventListener('click', () => {
                this.toggleExperienceAccordion(experienceItem);
            });
        }
        
        return experienceItem;
    }

    // Toggle experience accordion
    toggleExperienceAccordion(experienceItem) {
        experienceItem.classList.toggle('expanded');
    }

    // Toggle project accordion
    toggleProjectAccordion(projectItem) {
        projectItem.classList.toggle('expanded');
    }

    // Update skills section dynamically
    updateSkillsSection(config) {
        const skillsSection = document.querySelector('.skills');
        const titleElement = skillsSection.querySelector('h2');
        
        if (titleElement) {
            titleElement.textContent = this.configManager.getSectionTitle('skills');
        }
        
        const skillsGrid = skillsSection.querySelector('.skills-grid');
        const fragment = document.createDocumentFragment();
        
        // Clear existing skills
        skillsGrid.innerHTML = '';
        
        // Create skill categories
        if (config.skills?.categories?.length) {
            config.skills.categories.forEach(category => {
                const categoryDiv = this.createSkillCategory(category);
                fragment.appendChild(categoryDiv);
            });
        } else {
            // Show placeholder for empty skills
            const emptyState = document.createElement('div');
            emptyState.className = 'skill-category';
            emptyState.innerHTML = `
                <h3>Your Skills Will Appear Here</h3>
                <ul>
                    <li>Add your technical skills to the config.json file</li>
                    <li>Organize them into categories</li>
                    <li>Include certifications with links</li>
                    <li>Showcase your expertise</li>
                </ul>
            `;
            fragment.appendChild(emptyState);
        }
        
        // Append all skill categories at once
        skillsGrid.appendChild(fragment);
    }

    // Create individual skill category
    createSkillCategory(category) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const itemsHtml = Array.isArray(category.items)
            ? category.items.map(item => {
                // Check if item is an object with name and url properties (certification link)
                if (typeof item === 'object' && item.name && item.url) {
                    return `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a></li>`;
                } else {
                    return `<li>${item}</li>`;
                }
            }).join('')
            : `<li>${category.items}</li>`;
        
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <ul>
                ${itemsHtml}
            </ul>
        `;
        
        return categoryDiv;
    }
}

// Main Application Module
import { ConfigManager } from './config-manager.js';
import { SEOManager } from './seo-manager.js';
import { ThemeManager } from './theme-manager.js';
import { LoadingManager } from './loading-manager.js';
import { SectionManager } from './section-manager.js';
import { HeaderManager } from './header-manager.js';
import { GitHubProjectsManager } from './github-projects-manager.js';
import { FooterManager } from './footer-manager.js';
import { ImageHandler } from './image-handler.js';
import { ProjectGallery } from './project-gallery.js';

class PortfolioApp {
    constructor() {
        this.configManager = new ConfigManager();
        this.seoManager = new SEOManager();
        this.themeManager = new ThemeManager();
        this.loadingManager = new LoadingManager();
        this.sectionManager = new SectionManager(this.configManager);
        this.headerManager = new HeaderManager();
        this.githubProjectsManager = new GitHubProjectsManager();
        this.footerManager = new FooterManager();
    }

    async init() {
        try {
            // Initialize theme first
            this.themeManager.init();

            // Load configuration
            const config = await this.configManager.loadConfig();
            if (!config) return;

            // Update header content
            this.updateHeader(config);

            // Update page content from config
            this.sectionManager.updatePageContent(config);

            // Update SEO tags
            this.seoManager.updateSEOTags(config);

            // Update footer section
            this.updateFooter(config);

            // Initialize image handling
            ImageHandler.initProjectImages();

            // Initialize project galleries for multiple images
            ProjectGallery.initGalleries();

            // Conditionally fetch GitHub projects based on feature flag
            const features = { github_projects: true, ...config.features };
            if (features.github_projects && config.github_username) {
                await this.githubProjectsManager.fetchGitHubProjects(config);
            }
            
            // Hide loading screen after all content has loaded
            this.loadingManager.hideLoadingScreen();

        } catch (error) {
            console.error('Error initializing portfolio:', error);
            this.loadingManager.hideLoadingScreen(false);
        }
    }

    // Update header content
    updateHeader(config) {
        const header = document.querySelector('header');
        
        // Set header greeting and tagline
        const h1 = header.querySelector('h1');
        const tagline = header.querySelector('.tagline');
        
        if (h1) h1.textContent = config.header.greeting || '';
        if (tagline) tagline.textContent = config.header.tagline || '';
        
        // Update profile image if available
        if (config.site && config.site.profile_picture) {
            const profileImg = header.querySelector('.profile-img');
            if (profileImg) {
                profileImg.src = config.site.profile_picture;
                profileImg.alt = `${config.site.title || 'Developer'} profile picture`;
            }
        }
        
        // Update social links
        this.updateSocialLinks(config, header.querySelector('.social-links'));
    }

    // Update social links
    updateSocialLinks(config, container) {
        if (!container || !config.social_links) return;
        
        container.innerHTML = '';
        
        config.social_links.forEach(link => {
            const socialLink = document.createElement('a');
            socialLink.href = link.url;
            socialLink.target = '_blank';
            socialLink.rel = 'noopener noreferrer';
            socialLink.setAttribute('aria-label', link.name);
            
            // Get icon template
            const iconTemplate = document.getElementById(`${link.icon.toLowerCase()}-icon`);
            
            if (iconTemplate) {
                const iconClone = document.importNode(iconTemplate.content, true);
                socialLink.appendChild(iconClone);
            }
            
            // Add link text for accessibility
            const linkText = document.createElement('span');
            linkText.className = 'sr-only';
            linkText.textContent = link.name;
            socialLink.appendChild(linkText);
            
            container.appendChild(socialLink);
        });
    }

    // Update footer content
    updateFooter(config) {
        if (!config.footer) return;
        
        const footer = document.querySelector('.footer');
        const tagline = footer.querySelector('.footer-tagline');
        const socialLinks = footer.querySelector('.footer-social');
        const builtWith = footer.querySelector('.footer-built-with');
        
        // Set footer tagline
        if (tagline && config.footer.tagline) {
            tagline.textContent = config.footer.tagline;
        }
        
        // Add social links to footer if enabled
        if (socialLinks && config.footer.show_social_links) {
            this.updateSocialLinks(config, socialLinks);
        }
        
        // Set "built with" text
        if (builtWith && config.footer.show_built_with) {
            builtWith.innerHTML = config.footer.built_with_text || 'Built with ❤️ using vanilla JavaScript';
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
});

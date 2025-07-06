/**
 * Image Handler Module
 * Handles image loading, fallbacks and optimizations
 */
export class ImageHandler {
    /**
     * Initialize image handling for all project images
     */
    static initProjectImages() {
        document.addEventListener('DOMContentLoaded', () => {
            // Handle project images
            const projectImages = document.querySelectorAll('.project-image img');
            projectImages.forEach(img => {
                this.handleImageLoading(img, 'assets/placeholder-project.png');
            });
            
            // Handle profile picture
            const profilePic = document.querySelector('.profile-picture img');
            if (profilePic) {
                this.handleImageLoading(profilePic, 'assets/placeholder-profile.png');
            }
        });
    }
    
    /**
     * Handle image loading with fallback
     * @param {HTMLImageElement} imgElement - The image element
     * @param {string} fallbackSrc - Fallback image source
     */
    static handleImageLoading(imgElement, fallbackSrc) {
        // Add loading attribute if not present
        if (!imgElement.hasAttribute('loading')) {
            imgElement.setAttribute('loading', 'lazy');
        }
        
        // Keep original source
        const originalSrc = imgElement.src;
        
        // Set error handler
        imgElement.onerror = () => {
            console.warn(`Failed to load image: ${originalSrc}`);
            imgElement.src = fallbackSrc;
            imgElement.classList.add('fallback-image');
        };
        
        // Force reload to trigger error handler if needed
        imgElement.src = originalSrc;
    }
}

/**
 * Project Gallery Manager
 * Handles displaying multiple project screenshots in a gallery view
 */
export class ProjectGallery {
    /**
     * Initialize galleries for all projects
     */
    static initGalleries() {
        document.addEventListener('DOMContentLoaded', () => {
            const projectItems = document.querySelectorAll('.project-item');
            
            projectItems.forEach(project => {
                const imageContainer = project.querySelector('.project-image');
                if (!imageContainer) return;
                
                // Check if there are multiple images
                const images = imageContainer.querySelectorAll('img');
                if (images.length <= 1) return;
                
                // Create gallery controls
                this.createGalleryControls(imageContainer, images);
            });
        });
    }
    
    /**
     * Create gallery controls for a project with multiple images
     * @param {HTMLElement} container - The image container element
     * @param {NodeList} images - The collection of image elements
     */
    static createGalleryControls(container, images) {
        // Add gallery class to container
        container.classList.add('project-gallery');
        
        // Create gallery wrapper
        const galleryWrapper = document.createElement('div');
        galleryWrapper.className = 'gallery-wrapper';
        
        // Move all images to the gallery wrapper
        images.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = 'gallery-slide';
            slide.style.display = index === 0 ? 'block' : 'none';
            slide.appendChild(img.cloneNode(true));
            galleryWrapper.appendChild(slide);
            
            // Remove original image
            img.remove();
        });
        
        // Create controls
        const controls = document.createElement('div');
        controls.className = 'gallery-controls';
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'gallery-prev';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.setAttribute('aria-label', 'Previous image');
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'gallery-next';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.setAttribute('aria-label', 'Next image');
        
        // Indicators
        const indicators = document.createElement('div');
        indicators.className = 'gallery-indicators';
        
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'gallery-dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            indicators.appendChild(dot);
        }
        
        // Add controls to container
        controls.appendChild(prevBtn);
        controls.appendChild(indicators);
        controls.appendChild(nextBtn);
        
        container.innerHTML = '';
        container.appendChild(galleryWrapper);
        container.appendChild(controls);
        
        // Set up event handlers
        let currentIndex = 0;
        
        // Previous button click
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            this.showSlide(galleryWrapper, indicators, currentIndex);
        });
        
        // Next button click
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            this.showSlide(galleryWrapper, indicators, currentIndex);
        });
        
        // Indicator dots click
        const dots = indicators.querySelectorAll('.gallery-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = parseInt(dot.getAttribute('data-index'));
                this.showSlide(galleryWrapper, indicators, currentIndex);
            });
        });
    }
    
    /**
     * Show a specific slide in the gallery
     * @param {HTMLElement} wrapper - The gallery wrapper element
     * @param {HTMLElement} indicators - The indicators container
     * @param {number} index - The slide index to show
     */
    static showSlide(wrapper, indicators, index) {
        // Hide all slides
        const slides = wrapper.querySelectorAll('.gallery-slide');
        slides.forEach(slide => slide.style.display = 'none');
        
        // Show selected slide
        slides[index].style.display = 'block';
        
        // Update indicators
        const dots = indicators.querySelectorAll('.gallery-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
}

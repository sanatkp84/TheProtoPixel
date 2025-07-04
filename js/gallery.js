/**
 * Video Gallery Functionality
 * Handles play/pause functionality for video items in the portfolio gallery
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery JS loaded');
    
    // Get all video overlays
    const videoOverlays = document.querySelectorAll('.video-overlay');
    console.log('Found video overlays:', videoOverlays.length);
    
    // Add click event to each overlay
    videoOverlays.forEach((overlay, index) => {
        console.log('Setting up overlay', index);
        
        overlay.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Overlay clicked');
            const videoContainer = this.closest('.portfolio-gallery-img');
            const video = videoContainer.querySelector('video');
            
            console.log('Video element:', video);
            
            if (video) {
                try {
                    if (video.paused) {
                        console.log('Attempting to play video');
                        
                        // Pause all other videos first
                        document.querySelectorAll('video').forEach(v => {
                            if (v !== video) {
                                v.pause();
                                // Show overlay for other videos
                                const otherOverlay = v.parentElement.querySelector('.video-overlay');
                                if (otherOverlay) {
                                    otherOverlay.style.opacity = '1';
                                }
                            }
                        });
                        
                        // Play this video - use promise to catch errors
                        const playPromise = video.play();
                        
                        if (playPromise !== undefined) {
                            playPromise.then(() => {
                                console.log('Video playing successfully');
                                this.style.opacity = '0';
                            }).catch(error => {
                                console.error('Error playing video:', error);
                                // Try again with user interaction
                                video.muted = true; // Mute to allow autoplay
                                video.play().then(() => {
                                    console.log('Video playing after muting');
                                    this.style.opacity = '0';
                                }).catch(err => {
                                    console.error('Still cannot play video:', err);
                                });
                            });
                        }
                    } else {
                        // Pause this video
                        console.log('Pausing video');
                        video.pause();
                        this.style.opacity = '1';
                    }
                } catch (error) {
                    console.error('Error handling video:', error);
                }
            }
        });
    });
    
    // Reset overlay when video ends
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('ended', function() {
            console.log('Video ended');
            const overlay = this.parentElement.querySelector('.video-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
            this.currentTime = 0;
        });
        
        // Handle video errors
        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
            // Show a fallback image if video fails to load
            const poster = this.getAttribute('poster');
            if (poster) {
                this.style.display = 'none';
                const img = document.createElement('img');
                img.src = poster;
                img.alt = 'Video thumbnail';
                this.parentElement.insertBefore(img, this);
            }
        });
    });
    
    // Add direct click handlers to play buttons as well
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Play button clicked directly');
            // Trigger the parent overlay's click event
            this.closest('.video-overlay').click();
        });
    });
});

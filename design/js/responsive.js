function checkScreenSize() {
    const minDesktopWidth = 768; // Standard breakpoint for tablets/mobile

    if (window.innerWidth < minDesktopWidth) {
        // Create the notification banner if it doesn't exist
        if (!document.getElementById('desktop-notification')) {
            const notification = document.createElement('div');
            notification.id = 'desktop-notification';
            notification.innerHTML = '💡 For the best viewing experience, please use a desktop or laptop.';
            
            // Apply basic styling
            notification.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #ffc107; /* Amber/Yellow for a warning */
                color: #333;
                text-align: center;
                padding: 10px;
                font-size: 16px;
                font-weight: bold;
                z-index: 10000;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            `;
            
            document.body.prepend(notification);
        }
    } else {
        // Remove the notification if the screen is large enough
        const notification = document.getElementById('desktop-notification');
        if (notification) {
            notification.remove();
        }
    }
}

// Run on page load
checkScreenSize();

// Run on screen resize
window.addEventListener('resize', checkScreenSize);
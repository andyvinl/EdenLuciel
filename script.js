const lightbox = document.getElementById('image-lightbox');
        const fullSizeImage = document.getElementById('full-size-image');
        const closeBtn = document.querySelector('.close-lightbox');
        const galleryImages = document.querySelectorAll('.gallery-frame img');
        galleryImages.forEach(img => {
    img.addEventListener('click', function() {
 lightbox.style.display = 'flex'; 
   fullSizeImage.src = this.src;   
            });
        });
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        lightbox.addEventListener('click', function(e) {
            if (e.target !== fullSizeImage) {
                lightbox.style.display = 'none';
            }
        });
// EmailJS Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Get form data
            const templateParams = {
                from_name: document.getElementById('nama').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('telepon').value,
                subject: document.getElementById('subjek').value,
                message: document.getElementById('pesan').value,
                to_email: 'refanmaulanaa04@gmail.com'
            };

            // Send email using EmailJS
            emailjs.send('service_45eseh5', 'template_9zdgok9', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    successMessage.style.display = 'block';
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                    submitBtn.disabled = false;
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    errorMessage.style.display = 'block';
                    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Reset button
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                    submitBtn.disabled = false;
                });
        });
    }
});

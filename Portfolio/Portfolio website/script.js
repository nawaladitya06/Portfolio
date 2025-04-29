// Form validation script
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form inputs
            const username = document.getElementById('username').value.trim();
            const comment = document.getElementById('comment').value.trim();
            
            // Validate inputs
            let isValid = true;
            
            if (username === '') {
                showError('username', 'Please enter your name');
                isValid = false;
            } else {
                clearError('username');
            }
            
            if (comment === '') {
                showError('comment', 'Please enter your review');
                isValid = false;
            } else {
                clearError('comment');
            }
            
            // If all inputs are valid, you would typically submit the form
            if (isValid) {
                // Since we don't have a server to process this form,
                // we'll display a success message and clear the form
                alert('Thank you for your review!');
                reviewForm.reset();
            }
        });
    }
    
    // Function to show error message
    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.createElement('div');
        
        // Remove any existing error message
        clearError(inputId);
        
        // Add error class to input
        inputElement.classList.add('invalid');
        
        // Create and append error message
        errorElement.classList.add('form-error');
        errorElement.id = `${inputId}-error`;
        errorElement.textContent = message;
        
        // Insert error message after the input
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    
    // Function to clear error message
    function clearError(inputId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(`${inputId}-error`);
        
        if (inputElement) {
            inputElement.classList.remove('invalid');
        }
        
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
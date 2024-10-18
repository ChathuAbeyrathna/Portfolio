// JavaScript for Navigation and Popup Handling
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

// Handle Hire Me button click
document.getElementById('hireMe').addEventListener('click', function() {
    document.getElementById('contactPopup').classList.remove('hidden');
});

// Handle Cancel button in contact form popup
document.getElementById('cancelContact').addEventListener('click', function() {
    document.getElementById('contactPopup').classList.add('hidden');
});

// Handle Navigation item active state
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all items
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        
        // Add 'active' class to the clicked item
        this.classList.add('active');
    });
});

// Function to open modal with dynamic content
function openSkillModal(title, details) {
    document.getElementById('modalSkillTitle').innerText = title;
    document.getElementById('modalSkillDetails').innerText = details;
    openModal('skillModal');
}

// Function to open modal by ID
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    createBlurOverlay();
}

// Function to close modal by ID
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    removeBlurOverlay();
}

// Function to create and show the blur overlay
function createBlurOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'blur-overlay';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        closeModal('skillModal');
        closeModal('portfolio-modal');
        closeModal('project-modal');
    });
}

// Function to remove the blur overlay
function removeBlurOverlay() {
    const overlay = document.getElementById('blur-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal('skillModal');
        closeModal('portfolio-modal');
        closeModal('project-modal');
    }
}

// Attach event listeners to skill boxes for opening the modal
document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('click', function() {
        const title = this.querySelector('h2').innerText;
        const details = this.querySelector('p').innerText;
        openSkillModal(title, details);
    });
});


window.onload = function() {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the default section (e.g., home page)
    document.getElementById('home').classList.remove('hidden');
};


document.getElementById('menu-toggle').addEventListener('change', function() {
    var menu = document.getElementById('menu');
    if (this.checked) {
        menu.classList.remove('hidden');
        menu.classList.add('transform', 'translate-x-0');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('transform', 'translate-x-0');
    }
});

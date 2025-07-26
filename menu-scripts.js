document.addEventListener('DOMContentLoaded', () => {
    // 1. Section Toggle Logic
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            const section = title.closest('.food-category-section');
            section.classList.toggle('collapsed'); // Toggle collapsed class
            const icon = title.querySelector('.section-toggle-icon');
            if (section.classList.contains('collapsed')) {
                icon.textContent = '▶'; // Right arrow when collapsed
            } else {
                icon.textContent = '▼'; // Down arrow when expanded
            }
        });
    });

    // Initialize all sections as expanded (or collapsed if you prefer)
    document.querySelectorAll('.food-category-section').forEach(section => {
        // By default, let's start them expanded. If you want them collapsed by default,
        // add 'collapsed' class to the HTML initially and uncomment below line.
        // section.classList.add('collapsed');
        // section.querySelector('.section-toggle-icon').textContent = '▶';
    });


    // 2. "Show All / Hide" Items Logic within a section
    document.querySelectorAll('.show-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.dataset.target;
            const targetSectionGrid = document.querySelector(`#${targetSectionId} .food-menu-grid`);

            if (targetSectionGrid) {
                targetSectionGrid.classList.toggle('expanded'); // Toggle expanded class on grid

                // Change button text based on state
                if (targetSectionGrid.classList.contains('expanded')) {
                    button.textContent = 'ย่อรายการ';
                } else {
                    button.textContent = 'แสดงทั้งหมด (100 รายการ)';
                }
            }
        });
    });

    // Initialize items display based on 'additional-item' class
    // This is handled by CSS: .food-item.additional-item { display: none; }
    // and .food-menu-grid.expanded .food-item.additional-item { display: flex; }

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (window.innerHeight * 0.1), // Scroll to target, slightly above it
                    behavior: 'smooth'
                });
            }
        });
    });
});

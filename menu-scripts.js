document.addEventListener('DOMContentLoaded', () => {

    // 1. "Show All / Hide" Items Logic within a section
    document.querySelectorAll('.load-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.dataset.target;
            const targetSectionGrid = document.querySelector(`#${targetSectionId} .food-menu-grid`);

            if (targetSectionGrid) {
                targetSectionGrid.classList.add('show-all'); // Add 'show-all' class to the grid
                button.style.display = 'none'; // Hide the "Load More" button after showing all
            }
        });
    });

    // 2. Back to Top Button Visibility
    const backToTopBtn = document.getElementById('backToTopBtn');

    // แสดง/ซ่อนปุ่มตามตำแหน่งการเลื่อนหน้าจอ
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // แสดงปุ่มเมื่อเลื่อนหน้าจอลงมา 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // การเลื่อนกลับไปด้านบนอย่างนุ่มนวลเมื่อคลิกปุ่ม
    // เราใช้ href="#top" ใน HTML ซึ่งเบราว์เซอร์ส่วนใหญ่จะจัดการ smooth scroll ให้เอง
    // หากต้องการควบคุมเอง สามารถใช้โค้ดด้านล่างนี้ (แต่ต้องเอา href="#top" ออกจาก HTML)
    /*
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // ป้องกันการทำงาน default ของ anchor
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // เลื่อนอย่างนุ่มนวล
        });
    });
    */
});

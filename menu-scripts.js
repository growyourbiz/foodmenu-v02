document.addEventListener('DOMContentLoaded', () => {

    // 1. "Show All / Hide" Items Logic within a section
    document.querySelectorAll('.load-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.dataset.target;
            const targetSectionGrid = document.querySelector(`#${targetSectionId} .food-menu-grid`);

            if (targetSectionGrid) {
                targetSectionGrid.classList.add('show-all'); // Add 'show-all' class to the grid
                button.style.display = 'none'; // Hide the "Load More" button after showing all
                // สำหรับ scenario จริงที่มี 100+ รายการ คุณอาจต้องโหลดข้อมูลเพิ่มเติมจาก JSON/API ที่นี่
                // ตัวอย่าง:
                /*
                fetch(`data/${targetSectionId}.json`) // สมมติว่ามีไฟล์ JSON สำหรับแต่ละหมวดหมู่
                    .then(response => response.json())
                    .then(items => {
                        // สร้างและเพิ่ม food-item element เข้าไปใน grid
                        items.forEach(itemData => {
                            const newItem = document.createElement('div');
                            newItem.classList.add('food-item');
                            // Populate newItem's innerHTML based on itemData
                            // นี่จะซับซ้อนขึ้นอยู่กับโครงสร้างข้อมูลของคุณ
                            targetSectionGrid.appendChild(newItem);
                        });
                        button.style.display = 'none'; // ซ่อนปุ่มหลังจากโหลดเสร็จ
                    })
                    .catch(error => console.error('Error loading items:', error));
                */
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

    // การเลื่อนกลับไปด้านบนอย่างนุ่มนวลเมื่อคลิกปุ่ม (โดยปกติเบราว์เซอร์จะจัดการให้เองด้วย href="#top")
    // หากต้องการควบคุมเพิ่มเติม หรือหากคุณปิดการทำงาน default ของ anchor:
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

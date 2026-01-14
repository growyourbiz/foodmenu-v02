// ฟังก์ชันเปิด Modal
function openModal(imageSrc, title, price) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    var modalTitle = document.getElementById("modal-title");
    var modalPrice = document.getElementById("modal-price");

    modal.style.display = "flex"; // แสดง Popup
    modalImg.src = imageSrc;
    modalTitle.innerText = title;
    modalPrice.innerText = price;
}

// ฟังก์ชันปิด Modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// ปิด Modal เมื่อคลิกที่พื้นหลังสีดำข้างนอก
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
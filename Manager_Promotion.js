// Script for future functionality

document.addEventListener("DOMContentLoaded", () => {
  console.log("Stock Management loaded!");

  // Example: Search filter (simple version)
  const searchInput = document.querySelector("input[placeholder='Search']");
  const rows = document.querySelectorAll("tbody tr");

  searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(keyword) ? "" : "none";
    });
  });
});

const links = document.querySelectorAll('.sidebar .nav-link');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active')); // ลบ active จากทุกลิงก์
        this.classList.add('active'); // ใส่ active ให้ตัวที่คลิก
    });
});

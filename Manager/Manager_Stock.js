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

document.addEventListener('DOMContentLoaded', function () {
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach(row => {
    row.addEventListener('click', function () {
      // 🔹 ตัวอย่าง: ดึงข้อมูลจาก cell
      const orderId = row.cells[0].textContent;
      const product = row.cells[1].textContent;
      const amount = row.cells[2].textContent;
      const supplier = row.cells[3].textContent;
      const remaining = row.cells[4].textContent;
      const status = row.cells[5].textContent.trim();

      // 🔹 ใส่ค่าใน modal
      document.getElementById('productTitle').textContent = `Product Detail : ${product}`;
      document.getElementById('orderId').textContent = `Order ID: ${orderId}`;
      document.getElementById('productName').textContent = `Product Name: ${product}`;
      document.getElementById('quantity').textContent = `Quantity: ${amount}`;
      document.getElementById('supplier').textContent = `Sales Channel: ${supplier}`;
      document.getElementById('remaining').textContent = `Remaining: ${remaining}%`;
      
      // สมมติค่าอื่น ๆ (จริง ๆ ดึงจาก DB หรือ API ได้)
      document.getElementById('unitPrice').textContent = `Unit Price: 150 THB/Kg`;
      document.getElementById('totalPrice').textContent = `Total Price: 1,500 THB`;
      document.getElementById('storage').textContent = `Storage Location: Zone A - Shelf 3`;
      document.getElementById('stockInDate').textContent = `Stock In Date: 05/08/2025`;
      document.getElementById('lastSoldDate').textContent = `Last Sold Date: 12/08/2025`;
      document.getElementById('expiredDate').textContent = `Expired Date: 20/09/2025`;
      document.getElementById('notes').textContent = `Store at 0–4 °C. Check freshness before selling.`;
      document.getElementById('contact').textContent = `Contact: 0-2766-8000`;

      // Badge สีตาม status
      const statusBadge = document.getElementById('statusBadge');
      statusBadge.textContent = status;
      statusBadge.className = 'badge'; // reset class
      if (status === 'High') {
        statusBadge.classList.add('bg-success');
      } else {
        statusBadge.classList.add('bg-danger');
      }

      modal.show();
    });
  });
});

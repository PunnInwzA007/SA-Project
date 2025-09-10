// ค้นหาตามทุก column ใน tbody
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.toolbar input');
    const table = document.querySelector('table tbody');
    const rows = table.querySelectorAll('tr');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let match = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(query)) {
                    match = true;
                }
            });

            if (match) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
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
  const popup = document.getElementById('staffPopup');
  const closeBtn = popup.querySelector('.close');

  // ทุก tr ใน tbody
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach(row => {
    row.addEventListener('click', function () {
      // ดึงข้อมูลจาก data-attributes
      document.getElementById('popupName').textContent = row.dataset.first + ' ' + row.dataset.last;
      document.getElementById('popupEmail').textContent = 'Email: ' + row.dataset.email;
      document.getElementById('popupPhone').textContent = 'Phone: ' + row.dataset.phone;
      document.getElementById('popupRole').textContent = 'Role: ' + row.dataset.role;

      popup.style.display = 'block';
    });
  });

  // ปิด popup
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target == popup) {
      popup.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('tbody tr');
  const modal = new bootstrap.Modal(document.getElementById('staffModal'));

  rows.forEach(row => {
    row.addEventListener('click', function () {
      // Basic Info
      document.getElementById('modalName').textContent = row.dataset.first + ' ' + row.dataset.last;
      document.getElementById('modalStaffId').textContent = 'Staff ID: ' + row.dataset.id;
      document.getElementById('modalFullName').textContent = 'Name: ' + row.dataset.first + ' ' + row.dataset.last;
      document.getElementById('modalRole').textContent = 'Role: ' + row.dataset.role;
      document.getElementById('modalPhone').textContent = 'Contact: ' + row.dataset.phone;
      document.getElementById('modalEmail').textContent = 'Email: ' + row.dataset.email;

      // Profile Image
      document.getElementById('modalImg').src = row.dataset.img;

      modal.show();
    });
  });
});

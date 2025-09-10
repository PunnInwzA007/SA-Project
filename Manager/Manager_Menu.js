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


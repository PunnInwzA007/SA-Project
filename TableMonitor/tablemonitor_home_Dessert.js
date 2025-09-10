
const cats = document.querySelectorAll('.category-icons .cat');
const menuContainer = document.getElementById('menu-container');

cats.forEach(cat => {
  cat.addEventListener('mouseenter', () => {
    loadMenu(cat.dataset.cat);
  });
});

function loadMenu(category){
  fetch(`menu/${category}.html`)
    .then(response => response.text())
    .then(html => {
      menuContainer.innerHTML = html;
    })
    .catch(err => console.error('Error loading menu:', err));
}

// โหลดเมนูเริ่มต้น
loadMenu('special');


// ตัวอย่าง Event Sort (ยังไม่ทำงานจริง แค่ console.log)
document.getElementById('sort').addEventListener('change', function() {
  console.log("Sort by:", this.value);
});

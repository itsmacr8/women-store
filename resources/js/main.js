const toggleButton = document.querySelector('.hamberger-menu');
const navigationItems = document.querySelector('.navigation-items');
const showSubMenu = document.getElementById('show-sub-menu')
const SubMenu = document.getElementById('sub-menu');

toggleButton.addEventListener('click', () => {
    navigationItems.classList.toggle('active');
});

function removeHambergerMenu() {
    navigationItems.classList.remove("active");
}

showSubMenu.addEventListener('click', (e) => {
    e.preventDefault();   //  যেহেতু anchor tag ব্যবহার করা হয়েছে তাই click করলে পেজটি অন্য কোথাও চলে যাবে তাই এটিকে বাদ দেয়ার জন্য এটি ব্যবহার করা হয়েছে।
    SubMenu.classList.toggle('active-sub-menu');
});
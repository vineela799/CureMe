document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });
});

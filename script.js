const tabs = document.querySelectorAll(".category-tab");
const contents = document.querySelectorAll(".category-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        const selectedCategory = tab.dataset.category;

        // Remove active state from all tabs
        tabs.forEach(item => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        // Hide all project grids
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Activate selected tab
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Reveal selected project grid
        document.getElementById(selectedCategory)
            .classList.add("active");

    });
});

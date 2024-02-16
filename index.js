document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('input[type="search"]');
    const movieBoxes = document.querySelectorAll('.main .box');

    searchInput.addEventListener("input", function(event) {
        const query = event.target.value.trim().toLowerCase();

        movieBoxes.forEach(box => {
            const title = box.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });
});

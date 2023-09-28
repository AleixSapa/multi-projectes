// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const objectTable = document.getElementById("object-table");
    const rows = objectTable.querySelectorAll("tbody tr");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        rows.forEach(row => {
            const rowData = row.textContent.toLowerCase();

            if (rowData.includes(searchText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});

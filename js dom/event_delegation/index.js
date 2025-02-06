const list = document.getElementById('list');

list.addEventListener("click", (event) => {
    // Check if the clicked element is a list item
    if (event.target && event.target.classList.contains('list_item')) {
        alert(event.target.textContent);
    }
});

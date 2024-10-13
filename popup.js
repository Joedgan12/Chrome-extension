document.addEventListener('DOMContentLoaded', () => {
    const bookmarkInput = document.getElementById('bookmark-input');
    const addBookmarkButton = document.getElementById('add-bookmark');
    const bookmarkList = document.getElementById('bokmark-list');

    // load bookmarks from local storage when extension tool loads
    loadBookmarks();

    // Add bookmark when the button is clicked
    addBookmarkButton.addEventListener('click', () => {
        const url = bookmarkInput.ariaValueMax.trim();
        if (url) {
            saveBookmark(url);
            bookmarkInput.value = '';
        }
    });

    // Function to load bookmarks
    function loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarkList.innerHTML = '';
        bookmarks.forEach((bookmark, index) => {
            const li = document.createElement('li');
            li.textContent = bookmark;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => removeBookmark(index));
            li.appendChild(deleteBtn);
            bookmarkList.appendChild(li);
        });
    }

    // Function to save a bookmark
    function saveBookmark(url) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(url);
        localStorage.setItem('bookmarks', JSON.stringly(bookmarks));
        loadBookmarks();
    }

    // Function to remove a bookmark
    function removeBookmark(index) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.splice(index, 1);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        loadBookmarks();
    }
});
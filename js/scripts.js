document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const articles = document.getElementById('articles').getElementsByTagName('article');
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    const bookmarkList = document.getElementById('bookmark-list');

    // 搜索功能
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        Array.from(articles).forEach(article => {
            const title = article.getElementsByTagName('h3')[0].textContent.toLowerCase();
            if (title.includes(filter)) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    });

    // 书签功能
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const link = button.getAttribute('data-link');
            const customTitle = prompt('请输入书签名称:', title);
            if (customTitle) {
                addBookmark(customTitle, link);
            }
        });
    });

    function addBookmark(title, link) {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push({ title, link });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        alert('书签已添加');
    }

    function removeBookmark(index) {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.splice(index, 1);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
    }

    function renderBookmarks() {
        bookmarkList.innerHTML = '';
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.forEach((bookmark, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = bookmark.link;
            a.textContent = bookmark.title;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '删除';
            removeBtn.classList.add('remove-bookmark-btn');
            removeBtn.addEventListener('click', () => removeBookmark(index));
            li.appendChild(a);
            li.appendChild(removeBtn);
            bookmarkList.appendChild(li);
        });
    }

    // 初始渲染书签
    renderBookmarks();
});
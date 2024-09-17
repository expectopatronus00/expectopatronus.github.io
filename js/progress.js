document.addEventListener('DOMContentLoaded', () => {
    const welcomeLink = document.getElementById('welcome-link');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const overlay = document.getElementById('overlay');

    welcomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        progressContainer.style.display = 'block';
        overlay.classList.add('fade-out');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                window.location.href = 'home.html';
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 30); // 调整此值以改变进度条速度
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const welcomeLink = document.getElementById('welcome-link');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const overlay = document.getElementById('overlay');

    welcomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        progressContainer.style.display = 'block';
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                window.location.href = 'home.html';
            } else {
                width++;
                progressBar.style.width = width + '%';
                createPageFlip(width);
            }
        }, 15); // 调整此值以改变进度条速度
    });

    function createPageFlip(width) {
        const flipWidth = 3.33; // 每个翻页效果的宽度百分比
        const numFlips = Math.ceil(width / flipWidth);
        const existingFlips = document.querySelectorAll('.page-flip').length;

        if (numFlips > existingFlips) {
            const flip = document.createElement('div');
            flip.classList.add('page-flip');
            flip.style.left = `${(numFlips - 1) * flipWidth}%`;
            document.body.appendChild(flip);

            setTimeout(() => {
                flip.style.transform = 'rotateY(0deg)';
            }, 10); // 延迟以触发动画
        }
    }
});
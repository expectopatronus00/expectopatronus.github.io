document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const startTime = new Date('2024-09-17T22:00:00');

    function updateTimer() {
        const now = new Date();
        const elapsed = now - startTime;

        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        timerElement.textContent = `当前博客已运行 ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }

    setInterval(updateTimer, 1000);
    updateTimer(); // 初始化调用
});
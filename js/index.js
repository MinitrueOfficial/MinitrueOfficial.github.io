// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '亮色模式';
    } else {
        themeToggle.textContent = '暗色模式';
    }
}

// Language Toggle
function toggleLanguage() {
    const homeLink = document.getElementById('home-link');
    const langToggle = document.getElementById('lang-toggle');
    if (homeLink.textContent === '学生') {
        homeLink.textContent = 'Students';
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            const translations = ['Students', 'Faculty', 'Alumni', 'Visitors', 'Careers', 'Donate'];
            link.textContent = translations[index];
        });
        document.querySelector('h1').textContent = 'Welcome to Peking University';
        document.querySelector('p').textContent = 'Peking University is always new, a pioneer of progress, leading China towards a better and upward path.';
        langToggle.textContent = '中文';
    } else {
        homeLink.textContent = '学生';
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            const translations = ['学生', '教职工', '校友', '访客', '招聘', '捐赠'];
            link.textContent = translations[index];
        });
        document.querySelector('h1').textContent = '欢迎来到北京大学';
        document.querySelector('p').textContent = '北京大学是常为新的，改进的运动的先锋，要使中国向着好的，往上的道路走。';
        langToggle.textContent = 'English';
    }
}
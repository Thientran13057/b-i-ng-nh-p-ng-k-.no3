document.addEventListener('DOMContentLoaded', function () {
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const authContainer = document.querySelector('.auth-container');
    const authHeader = document.querySelector('.auth-header');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    switchToRegister.addEventListener('click', function () {
        authHeader.textContent = 'Đăng ký';
        authContainer.style.height = '320px';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    switchToLogin.addEventListener('click', function () {
        authHeader.textContent = 'Đăng nhập';
        authContainer.style.height = '320px';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
        } else {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const loggedInUser = users.find(user => user.username === username && user.password === password);
            if (loggedInUser) {
                alert('Đăng nhập thành công!');
                window.location.href = 'trang chủ.html';
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
            }
        }
    });

    registerBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin đăng ký.');
        } else {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                alert('Tên người dùng đã tồn tại!');
            } else {
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Đăng ký thành công!');
                switchToLogin.click(); 
            }
        }
    });

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        alert('Welcome back, ' + user.username + '!');
    }
});
const main = document.getElementById('form');

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

main.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (!username || !password || !confirmPassword) {
        showMessage('Пожалуйста! Заполните все поля!');
        return 0;
    }

    if (password !== confirmPassword) {
        showMessage('Пароли не совподают!');
        return 0;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    if (registeredUsers[username]) {
        showMessage('Пользователь уже существует!');
        return 0;
    }

    registeredUsers[username] = true;
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    showMessage('Пользователь зарегистрирован!');
});


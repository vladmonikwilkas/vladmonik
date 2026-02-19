document.getElementById('greetBtn').addEventListener('click', function() {
    const greetings = [
        'Привет! 👋',
        'Доброго дня! ☀️',
        'Здравствуйте! 😊',
        'Рад вас видеть! 🎉',
        'Добро пожаловать! 🌟'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting').textContent = randomGreeting;
});

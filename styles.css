// Функция для FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        element.style.background = '#f8f9fa';
    } else {
        // Закрываем все остальные FAQ
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allQuestions = document.querySelectorAll('.faq-question');
        
        allAnswers.forEach(ans => ans.style.display = 'none');
        allQuestions.forEach(q => q.style.background = '#f8f9fa');
        
        // Открываем текущий FAQ
        answer.style.display = 'block';
        element.style.background = '#e9ecef';
    }
}

// Функциональность демо-чата
let chatBody = document.getElementById('chatBody');
let chatOpen = true;

// Показать/скрыть чат
function toggleChat() {
    const demoChat = document.getElementById('demoChat');
    if (demoChat) {
        if (chatOpen) {
            demoChat.style.height = '60px';
            demoChat.style.overflow = 'hidden';
        } else {
            demoChat.style.height = 'auto';
            demoChat.style.overflow = 'visible';
        }
        chatOpen = !chatOpen;
    }
}

// Обработка выбора опции в чате
function selectOption(option) {
    // Добавляем сообщение пользователя
    if (chatBody) {
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = option;
        chatBody.appendChild(userMessage);
        
        // Скрываем опции
        const chatOptions = document.getElementById('chatOptions');
        if (chatOptions) {
            chatOptions.style.display = 'none';
        }
        
        // Показываем индикатор набора текста
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = 'Бот печатает <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
        chatBody.appendChild(typingIndicator);
        
        // Прокручиваем чат вниз
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Имитируем ответ бота через 1.5 секунды
        setTimeout(() => {
            // Удаляем индикатор набора
            chatBody.removeChild(typingIndicator);
            
            // Добавляем ответ бота в зависимости от выбранной опции
            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            
            if (option === 'Интернет-магазин') {
                botMessage.innerHTML = 'Отлично! Для интернет-магазина у нас есть специальный бот, который поможет с:<br>• Консультацией по товарам<br>• Оформлением заказов<br>• Отслеживанием доставки<br><br>Какой у вас примерный бюджет на разработку?';
                
                // Добавляем новые опции
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('До 50 000₽')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">До 50 000₽</button>
                    <button onclick="selectOption('50 000₽ - 100 000₽')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">50 000₽ - 100 000₽</button>
                    <button onclick="selectOption('Более 100 000₽')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Более 100 000₽</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            } 
            else if (option === 'Услуги') {
                botMessage.innerHTML = 'Для сферы услуг мы создаем ботов, которые:<br>• Записывают клиентов на прием<br>• Консультируют по вашим услугам<br>• Отвечают на частые вопросы<br><br>Сколько обращений клиентов вы получаете в день?';
                
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('До 10 обращений')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">До 10 обращений</button>
                    <button onclick="selectOption('10-50 обращений')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">10-50 обращений</button>
                    <button onclick="selectOption('Более 50 обращений')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Более 50 обращений</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            } 
            else if (option === 'Образование') {
                botMessage.innerHTML = 'Для образовательных проектов мы разрабатываем ботов, которые:<br>• Отвечают на вопросы о курсах<br>• Помогают с записью на обучение<br>• Присылают учебные материалы<br><br>Какой тип образовательного проекта у вас?';
                
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('Онлайн-школа')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Онлайн-школа</button>
                    <button onclick="selectOption('Курсы/тренинги')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Курсы/тренинги</button>
                    <button onclick="selectOption('Репетиторство')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Репетиторство</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            }
            // Обработка ответов второго уровня
            else if (option.includes('До 50 000₽') || option.includes('Онлайн-школа') || option.includes('До 10 обращений')) {
                botMessage.innerHTML = 'Спасибо за информацию! Для вашего случая рекомендую "Базовый" пакет за 45 000₽.<br><br>Хотите получить коммерческое предложение на почту или проконсультироваться с нашим специалистом?';
                
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('Получить КП на почту')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Получить КП на почту</button>
                    <button onclick="selectOption('Консультация специалиста')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Консультация специалиста</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            }
            else if (option.includes('50 000₽ - 100 000₽') || option.includes('Курсы/тренинги') || option.includes('10-50 обращений')) {
                botMessage.innerHTML = 'Отличный выбор! Для вас подойдет "Продвинутый" пакет за 85 000₽ с полным функционалом и интеграциями.<br><br>Хотите получить коммерческое предложение на почту или проконсультироваться с нашим специалистом?';
                
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('Получить КП на почту')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Получить КП на почту</button>
                    <button onclick="selectOption('Консультация специалиста')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Консультация специалиста</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            }
            else if (option.includes('Более 100 000₽') || option.includes('Репетиторство') || option.includes('Более 50 обращений')) {
                botMessage.innerHTML = 'Для вашего масштаба рекомендую "Премиум" пакет за 150 000₽ с максимальными возможностями и аналитикой.<br><br>Хотите получить коммерческое предложение на почту или проконсультироваться с нашим специалистом?';
                
                const newOptions = document.createElement('div');
                newOptions.id = 'chatOptions';
                newOptions.style.marginTop = '15px';
                newOptions.innerHTML = `
                    <button onclick="selectOption('Получить КП на почту')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Получить КП на почту</button>
                    <button onclick="selectOption('Консультация специалиста')" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: white; cursor: pointer;">Консультация специалиста</button>
                `;
                
                chatBody.appendChild(botMessage);
                chatBody.appendChild(newOptions);
            }
            // Финальный этап
            else if (option.includes('Получить КП') || option.includes('Консультация')) {
                botMessage.innerHTML = 'Супер! Для продолжения нам нужны ваши контактные данные. Заполните, пожалуйста, форму ниже на странице, и мы свяжемся с вами в течение 2 часов.<br><br>Или вы можете написать нам прямо сейчас в <a href="https://t.me/echo1995_bot" target="_blank">Telegram</a> или на <a href="mailto:nik3308@yandex.ru">Email</a>.';
                chatBody.appendChild(botMessage);
            }
            else {
                botMessage.innerHTML = 'Спасибо за ваш ответ! Наш менеджер свяжется с вами для уточнения деталей. Также вы можете заполнить форму ниже для получения точного расчета стоимости.';
                chatBody.appendChild(botMessage);
            }
            
            // Прокручиваем чат вниз
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1500);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли элементы чата на странице
    chatBody = document.getElementById('chatBody');
    
    // Если демо-чат есть на странице, инициализируем его
    const demoChat = document.getElementById('demoChat');
    if (demoChat) {
        // Проверим, было ли уже взаимодействие с чатом в этой сессии
        const chatInteracted = sessionStorage.getItem('chatInteracted');
        
        // Если не было, покажем чат через 3 секунды
        if (!chatInteracted) {
            setTimeout(() => {
                demoChat.style.display = 'block';
                chatOpen = true;
            }, 3000);
            
            // Отметим, что было взаимодействие
            sessionStorage.setItem('chatInteracted', 'true');
        } else {
            // Если было взаимодействие, просто покажем чат
            demoChat.style.display = 'block';
            chatOpen = true;
        }
    }
});

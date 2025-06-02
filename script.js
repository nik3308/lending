// FAQ Toggle
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    
    // Close all FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
    });
    
    // Open clicked item if it wasn't open
    if (!isOpen) {
        answer.style.display = 'block';
    }
}

// Demo Chat
function toggleChat() {
    const chat = document.getElementById('demoChat');
    if (chat) { // Ensure chat element exists
        chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
    }
}

function selectOption(option) {
    const chatBody = document.getElementById('chatBody');
    const chatOptions = document.getElementById('chatOptions');
    
    // Add user message
    if (chatBody && chatOptions) { // Ensure elements exist
        chatBody.innerHTML += `<div class="chat-message user">${option}</div>`;
        
        // Remove options
        chatOptions.style.display = 'none';
        
        // Show typing indicator
        chatBody.innerHTML += `
            <div class="typing-indicator">
                Бот печатает
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        `;
        
        // Simulate bot response
        setTimeout(() => {
            const typingIndicator = document.querySelector('.typing-indicator');
            if (typingIndicator) typingIndicator.remove();
            
            let response = '';
            switch(option) {
                case 'Интернет-магазин':
                    response = 'Отлично! Для интернет-магазина рекомендую пакет "Продвинутый" за 85 000₽. Бот будет консультировать покупателей, собирать заявки и увеличит конверсию на 40%. Записать на консультацию? 📞';
                    break;
                case 'Услуги':
                    response = 'Для сферы услуг подойдет пакет "Базовый" от 45 000₽. Бот будет собирать заявки, квалифицировать клиентов и записывать на консультации. Сэкономите на менеджерах! 💰';
                    break;
                case 'Образование':
                    response = 'Для образовательных проектов лучший выбор — пакет "Продвинутый". Бот поможет записываться на курсы, отвечать на вопросы студентов и проводить опросы. Цена 85 000₽ 🎓';
                    break;
            }
            
            chatBody.innerHTML += `<div class="chat-message bot">${response}</div>`;
            
            // Add final CTA
            setTimeout(() => {
                chatBody.innerHTML += `
                    <div class="chat-message bot">
                        <strong>🎁 Специальное предложение!</strong><br>
                        Скидка 30% до конца месяца. Хотите получить персональный расчет? Оставьте заявку! 👇
                    </div>
                    <button onclick="window.location.href='#order'" style="width: 100%; padding: 10px; background: #667eea; color: white; border: none; border-radius: 8px; margin-top: 10px; cursor: pointer;">
                        📞 Получить консультацию
                    </button>
                `;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 2000);
            
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 3000);
        
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId.length > 1) { 
             const target = document.querySelector(targetId);
             if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission with Formspree
const mainForm = document.querySelector('section.final-cta form');
if (mainForm) {
    // Formspree будет обрабатывать отправку автоматически
    // Можно добавить только визуальные эффекты при отправке
    mainForm.addEventListener('submit', function(e) {
        const button = this.querySelector('button[type="submit"]');
        button.innerHTML = '⏳ Отправляем...';
        button.disabled = true;
    });
}

                // For your testing, you can see the data in the browser's console:
                console.log("Form data submitted (simulation):", formData);
                console.log("This data would ideally be sent to: nik3308@yandex.ru via a backend service.");

                // Simulate form submission for UI
                const button = this.querySelector('button[type="submit"]');
                const originalText = button.innerHTML;
                
                button.innerHTML = '⏳ Отправляем...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.innerHTML = '✅ Заявка отправлена!';
                    button.style.background = '#28a745';
                    
                    const successMsgContainer = document.createElement('div'); 
                    successMsgContainer.innerHTML = `
                        <div style="background: #d4edda; color: #155724; padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center;" class="success-message">
                            <h4>🎉 Спасибо за заявку, ${name}!</h4>
                            <p>Наш менеджер свяжется с вами в течение 15 минут.</p>
                            <p style="font-size:0.9em; margin-top:10px;"><strong>(Данные формы выведены в консоль браузера для демонстрации. Для реальной отправки на nik3308@yandex.ru настройте сторонний сервис обработки форм, например Formspree.io)</strong></p>
                        </div>
                    `;
                    this.appendChild(successMsgContainer); 
                    
                    setTimeout(() => {
                        this.reset();
                        button.innerHTML = originalText;
                        button.style.background = '#ff6b6b'; 
                        button.disabled = false;
                        if(successMsgContainer.parentNode) { // Check if still child before removing
                           successMsgContainer.remove();
                        }
                    }, 10000);
                }, 2000);
            } else {
                alert("Пожалуйста, заполните все обязательные поля: Имя, Телефон и Сфера бизнеса.");
            }
        } else {
            console.error("Не удалось найти все элементы формы. Проверьте селекторы для полей 'Сфера бизнеса' или 'Обращений клиентов в день'.");
            alert("Ошибка в настройке формы. Пожалуйста, свяжитесь с нами другим способом.");
        }
    });
}


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observerInstance = null; // Keep a reference to the observer

function initializeObserver() {
    if (observerInstance) {
        observerInstance.disconnect(); // Disconnect previous observer if any
    }
    observerInstance = new IntersectionObserver((entries, obs) => { // obs is the observer itself
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target); // Use the 'obs' parameter to unobserve
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.benefit-card, .stat-card, .type-card, .price-card, .process-step'); // Removed .case-card
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observerInstance.observe(el);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initializeObserver(); // Initialize observer on DOM load

    // Counter animation for statistics
    function animateCounter(element, targetValue, duration = 2000) {
        let start = 0;
        const isPercentage = String(targetValue).includes('%');
        const cleanTarget = parseInt(String(targetValue).replace(/[^\d]/g, ''));

        if (isNaN(cleanTarget)) return;

        const increment = cleanTarget / (duration / 16); // 16ms per frame approx (60fps)
        let currentFrame = 0;
        const totalFrames = duration / 16;
        
        function updateCounter() {
            start += increment;
            currentFrame++;
            if (currentFrame < totalFrames && start < cleanTarget) {
                element.textContent = Math.floor(start) + (isPercentage ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = cleanTarget + (isPercentage ? '%' : '');
            }
        }
        updateCounter();
    }

    let statsObserverInstance = null; // Keep a reference to the stats observer

    function initializeStatsObserver() {
        if (statsObserverInstance) {
            statsObserverInstance.disconnect();
        }
        statsObserverInstance = new IntersectionObserver((entries, obs) => { // obs is the observer itself
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const targetText = entry.target.textContent;
                    entry.target.classList.add('animated'); 
                    animateCounter(entry.target, targetText);
                    obs.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); 

        const statNumbers = document.querySelectorAll('.stat-number, .case-stat-number'); // .case-stat-number might be unused
        statNumbers.forEach(stat => {
            if (stat) statsObserverInstance.observe(stat);
        });
    }

    initializeStatsObserver(); // Initialize stats observer


    // Sticky demo chat (optional: only show after some scroll)
    const demoChatWidget = document.getElementById('demoChat');
    if (demoChatWidget) { 
        let scrolledPastThreshold = false; // Flag to show chat only once automatically
        // Initially hide the chat if it's meant to appear on scroll
        // demoChatWidget.style.display = 'none'; 
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled > 500 && !scrolledPastThreshold) {
                // Check if it was hidden by default before showing
                // if(demoChatWidget.style.display === 'none') {
                   demoChatWidget.style.display = 'block'; // Or 'flex' if that's its default display type
                // }
                scrolledPastThreshold = true; 
            }
        });
    }


    // Auto-hide chat after interaction (Example logic)
    let chatTimer;
    function resetChatTimer() {
        clearTimeout(chatTimer);
        chatTimer = setTimeout(() => {
            const demoChat = document.getElementById('demoChat');
            if (demoChat && demoChat.style.display !== 'none') {
                // demoChat.style.opacity = '0.7'; // Example: fade it or hide it
                // demoChat.style.display = 'none'; // Example: hide it
            }
        }, 300000); // 5 minutes
    }
    
    const demoChatElementForTimer = document.getElementById('demoChat');
    if (demoChatElementForTimer) {
      demoChatElementForTimer.addEventListener('click', resetChatTimer);
      resetChatTimer(); // Initial call
    }

    // Add hover effects for price cards
    document.querySelectorAll('.price-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // The :hover styles in CSS handle this well, JS override might be complex if not matching exactly.
            // If specific JS-driven hover effects are needed beyond CSS, implement here.
            // For now, relying on CSS :hover and .popular:hover transforms.
        });
        
        card.addEventListener('mouseleave', function() {
            // Revert JS-driven effects if any.
        });
    });

    // Add click tracking for analytics (stub)
    function trackEvent(eventName, eventData) {
        console.log('Analytics Event Tracked (Stub):', eventName, eventData);
        
        // Example for Google Analytics (ensure gtag is loaded)
        // if (typeof gtag === 'function') {
        //     gtag('event', eventName, eventData);
        // }
        
        // Example for Yandex.Metrica (ensure ym is loaded and counter ID is correct)
        // if (typeof ym === 'function') {
        //     ym(YOUR_YANDEX_METRICA_COUNTER_ID, 'reachGoal', eventName, eventData);
        // }
    }

    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('section');
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                page_section: section ? (section.className || section.id || 'unknown_section') : 'unknown_section'
            });
        });
    });
    
    const finalCtaFormElementForTracking = document.querySelector('.final-cta form');
    if (finalCtaFormElementForTracking) {
        finalCtaFormElementForTracking.addEventListener('submit', function() { // Note: this tracks on attempt, not necessarily successful simulated send
            const businessSelect = this.elements['Сфера бизнеса'] || this.querySelector('select[required]');
            trackEvent('form_submit_attempt', { // Changed event name for clarity
                form_type: 'lead_form',
                business_type: businessSelect ? businessSelect.value : 'unknown'
            });
        });
    }

    // Add exit intent popup (optional, currently inactive)
    let exitIntentShown = false;
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitIntentShown) { // Check if mouse leaves to top of viewport
            // exitIntentShown = true; // Set flag immediately to show only once
            // showExitIntentPopup(); // Call the function to show popup
        }
    });

    function showExitIntentPopup() { 
        // To prevent multiple popups if this function is called again somehow
        if (document.getElementById('exitIntentPopup')) return;

        const popup = document.createElement('div');
        popup.id = 'exitIntentPopup'; 
        popup.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center;";
        
        popup.innerHTML = `
            <div style="background: white; padding: 40px; border-radius: 20px; max-width: 500px; text-align: center; position: relative; color: #333;">
                <button onclick="document.getElementById('exitIntentPopup').remove()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer; color: #888;">&times;</button>
                <h3 style="color: #333; margin-bottom: 20px; font-size: 1.8em;">⏰ Подождите! Не уходите!</h3>
                <p style="margin-bottom: 20px; font-size: 1.1em;">Получите <strong>бесплатную консультацию</strong> и узнайте, как чат-бот увеличит ваши продажи на 40%.</p>
                <p style="color: #ff6b6b; font-weight: bold; margin-bottom: 25px; font-size: 1.2em;">🎁 Скидка 30% только сегодня!</p>
                <button onclick="window.location.href='#order'; document.getElementById('exitIntentPopup').remove();" style="background: #ff6b6b; color: white; padding: 15px 30px; border: none; border-radius: 25px; font-size: 1.1em; cursor: pointer; transition: background-color 0.3s ease;">
                    Получить скидку 30%
                </button>
            </div>
        `;
        document.body.appendChild(popup);
        trackEvent('exit_intent_popup_shown', { shown: true });
    }
});

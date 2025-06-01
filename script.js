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
    chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
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
        if (targetId && targetId.length > 1) { // Ensure href is not just "#"
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

// Form submission
const mainForm = document.querySelector('section.final-cta form'); // More specific selector
if (mainForm) {
    mainForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const phoneInput = this.querySelector('input[type="tel"]');
        const businessSelect = this.querySelector('select'); // Assuming the first select is business
        
        if (nameInput && phoneInput && businessSelect) {
            const name = nameInput.value;
            const phone = phoneInput.value;
            const business = businessSelect.value;

            if (name && phone && business) {
                const button = this.querySelector('button[type="submit"]');
                const originalText = button.innerHTML;
                
                button.innerHTML = '⏳ Отправляем...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.innerHTML = '✅ Заявка отправлена!';
                    button.style.background = '#28a745';
                    
                    const successMsgContainer = document.createElement('div'); // Container for message
                    successMsgContainer.innerHTML = `
                        <div style="background: #d4edda; color: #155724; padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center;" class="success-message">
                            <h4>🎉 Спасибо за заявку, ${name}!</h4>
                            <p>Наш менеджер свяжется с вами в течение 15 минут и проведет бесплатную консультацию по телефону ${phone}.</p>
                            <p><strong>А пока можете посмотреть примеры наших работ в WhatsApp: +7 (495) 123-45-67</strong></p>
                        </div>
                    `;
                    this.appendChild(successMsgContainer); // Append the container
                    
                    setTimeout(() => {
                        this.reset();
                        button.innerHTML = originalText;
                        button.style.background = '#ff6b6b'; // Assuming this is the original color
                        button.disabled = false;
                        successMsgContainer.remove();
                    }, 10000);
                }, 2000);
            }
        }
    });
}


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Unobserve after animation
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.benefit-card, .stat-card, .type-card, .case-card, .price-card, .process-step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Counter animation for statistics
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const isPercentage = element.textContent.includes('%');
        const cleanTarget = parseInt(String(target).replace(/[^\d]/g, ''));

        if (isNaN(cleanTarget)) return;

        const increment = cleanTarget / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < cleanTarget) {
                element.textContent = Math.floor(start) + (isPercentage ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = cleanTarget + (isPercentage ? '%' : '');
            }
        }
        updateCounter();
    }

    const statNumbers = document.querySelectorAll('.stat-number, .case-stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const targetText = entry.target.textContent;
                entry.target.classList.add('animated'); // Add class before starting animation
                animateCounter(entry.target, targetText);
                statsObserver.unobserve(entry.target); // Unobserve after animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    statNumbers.forEach(stat => {
        if (stat) statsObserver.observe(stat);
    });


    // Sticky demo chat (optional: only show after some scroll)
    const demoChatWidget = document.getElementById('demoChat');
    if (demoChatWidget) { // Check if demo chat exists
        let scrolledPastThreshold = false;
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled > 500 && !scrolledPastThreshold) {
                demoChatWidget.style.display = 'block'; // Or 'flex' if that's its default
                scrolledPastThreshold = true; // Show only once automatically
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
                // demoChat.style.opacity = '0.7'; // Example: fade it
            }
        }, 300000); // Increased time
    }
    
    const demoChatElementForTimer = document.getElementById('demoChat');
    if (demoChatElementForTimer) {
      demoChatElementForTimer.addEventListener('click', resetChatTimer);
      resetChatTimer(); // Initial call
    }


    // Price calculator example (not used by current HTML but as per original JS)
    function calculateROI(packagePrice, monthlySavings) {
        const monthsToBreakeven = Math.ceil(packagePrice / monthlySavings);
        const yearlyProfit = (monthlySavings * 12) - packagePrice;
        return { monthsToBreakeven, yearlyProfit };
    }

    // Add hover effects for price cards
    document.querySelectorAll('.price-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('popular')) { // Popular has its own transform
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
             if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(-10px) scale(1)'; // Keep the hover effect from CSS
             } else {
                this.style.transform = 'translateY(-10px)'; // Popular card's base hover
             }
            this.style.boxShadow = ''; // Revert to CSS defined shadow or none
        });
    });

    // Add click tracking for analytics (stub)
    function trackEvent(eventName, eventData) {
        console.log('Event tracked:', eventName, eventData);
        
        if (typeof gtag !== 'undefined') {
            // gtag('event', eventName, eventData);
        }
        if (typeof ym !== 'undefined') {
            // ym(YOUR_YANDEX_METRICA_ID, 'reachGoal', eventName, eventData);
        }
    }

    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('section');
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                page_section: section ? section.className || section.id : 'unknown'
            });
        });
    });
    
    const finalCtaForm = document.querySelector('.final-cta form');
    if (finalCtaForm) {
        finalCtaForm.addEventListener('submit', function() {
            const businessSelect = this.querySelector('select');
            trackEvent('form_submit', {
                form_type: 'lead_form',
                business_type: businessSelect ? businessSelect.value : 'unknown'
            });
        });
    }


    // Add exit intent popup (optional)
    let exitIntentShown = false;
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitIntentShown) {
            exitIntentShown = true; // Set flag immediately
            // showExitIntentPopup(); // Call the function to show popup
        }
    });

    function showExitIntentPopup() { // Definition for the popup
        const popup = document.createElement('div');
        popup.id = 'exitIntentPopup'; // Add an ID for easier removal/check
        popup.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div style="background: white; padding: 40px; border-radius: 20px; max-width: 500px; text-align: center; position: relative;">
                    <button onclick="document.getElementById('exitIntentPopup').remove()" style="position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                    <h3 style="color: #333; margin-bottom: 20px;">⏰ Подождите!</h3>
                    <p style="margin-bottom: 20px;">Получите <strong>бесплатную консультацию</strong> и узнайте, как чат-бот увеличит ваши продажи на 40%</p>
                    <p style="color: #ff6b6b; font-weight: bold; margin-bottom: 20px;">🎁 Скидка 30% только сегодня!</p>
                    <button onclick="window.location.href='#order'; document.getElementById('exitIntentPopup').remove();" style="background: #ff6b6b; color: white; padding: 15px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer;">
                        Получить скидку 30%
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        trackEvent('exit_intent_popup', { shown: true });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    populateResume();
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', toggleTheme);

    const languageToggleButton = document.getElementById('language-toggle');
    languageToggleButton.addEventListener('click', toggleLanguage);

    const downloadPdfButton = document.getElementById('download-pdf');
    downloadPdfButton.addEventListener('click', downloadPDF);

    // Инициализация темы согласно настройкам пользователя
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('light-theme', savedTheme === 'light');
        themeToggleButton.textContent = savedTheme === 'light' ? 'Темная тема' : 'Светлая тема';
    }
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = theme === 'light' ? 'Темная тема' : 'Светлая тема';
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('data-lang');
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    document.documentElement.setAttribute('data-lang', newLang);

    const languageToggleButton = document.getElementById('language-toggle');
    languageToggleButton.textContent = newLang === 'en' ? 'Русский' : 'English';

    populateResume(); // Перезаполнение резюме на другом языке
}

function downloadPDF() {
    const htmlContent = document.documentElement.outerHTML;
    const link = document.createElement('a');
    link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
    link.download = 'resume_' + (document.documentElement.getAttribute('data-lang') === 'ru' ? 'ru' : 'en') + '.html';
    link.click();
}

// ✅ ВСЕ ДАННЫЕ ВСТРОЕНЫ — НИКАКОГО FETCH, НИКАКОГО СЕРВЕРА!
const resume_data = {
    "ru": {
        "full_name": "Страпко Роман",
        "title": "Python Developer & Competitive Programmer",
        "contact": {
            "email": "ser.str.py@example.com",
            "telegram": "@Ser_str_py",
            "codeforces": "codeforces.com/profile/Frouvie",
            "github": "github.com/SerIPY"
        },
        "summary": "Энергичный и целеустремленный, моя задача улучшить старое или создать новое. Я Python-разработчик с двухлетним опытом глубокого погружения в алгоритмическое программирование и активным развитием в области backend-разработки и Data Science. Уверенно владею принципами ООП и применяю их на практике в языке C++. Обладаю подтвержденными высокими результатами на олимпиадных платформах, включая Codeforces (рейтинг 1272), Yandex Contest и LeetCode. В настоящее время фокусируюсь на применении своих аналитических способностей для создания интеллектуальных систем, что нашло отражение в pet-проекте BotaniSmart.",
        "experience": [
            {
                "position": "Автор и разработчик проекта",
                "company": "Pet-Project: BotaniSmart",
                "period": "Весна 2025 – Наст. время",
                "description": "Разработка интеллектуальной системы для ухода за растениями. Проект является полигоном для отработки backend-навыков и экспериментов в области машинного обучения.",
                "responsibilities": [
                    "Проектирование и реализация RESTful API на FastAPI для взаимодействия с клиентским приложением.",
                    "Использование ORM SQLAlchemy для асинхронной работы с базой данных PostgreSQL.",
                    "Разработка модулей для парсинга и анализа данных из внешних источников с использованием библиотек BeautifulSoup и HTTPX.",
                    "Проведение исследований и имплементация прототипов с использованием Large Language Models (LLM) для создания 'умного' чат-ассистента."
                ]
            }
        ],
        "achievements": {
            "title": "Олимпиадные и научные достижения",
            "items": [
                "**8 класс:** Диплом I степени, Научно-практическая конференция (секция информатики).",
                "**7 класс:** Диплом I степени, Межрегиональная многопрофильная олимпиада по информатике (ММО).",
                "**7 класс:** Диплом I степени, Олимпиада Брестского государственного технического университета (БГТУ).",
                "**7 класс:** Диплом III степени, Областная олимпиада по информатике (среди 7-11 классов).",
                "**7 класс:** Диплом I степени, Областная олимпиада по информатике (среди 6-8 классов).",
                "**6 класс:** Диплом III степени, Областная олимпиада по информатике (среди 6-8 классов)."
            ]
        },
        "skills": {
            "Языки программирования": ["Python (Продвинутый)", "C++ (Олимпиадный уровень)", "SQL (Продвинутый)"],
            "Backend & API": ["FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "REST API", "Asyncio"],
            "Базы данных": ["PostgreSQL", "SQLite", "Основы работы с NoSQL"],
            "Data Science & ML": ["Анализ данных (Pandas, NumPy)", "Веб-парсинг (BeautifulSoup, Scrapy)", "Основы ML (Scikit-learn)", "Работа с LLM (базово)"],
            "Инструменты": ["Git", "Docker (Базово)", "Postman", "Linux (CLI)"]
        },
        "education": {
            "degree": "Среднее образование (в процессе)",
            "university": "Ученик 8-го класса",
            "year": "Текущее время"
        }
    },
    "en": {
        "full_name": "Roman Strapko",
        "title": "Python Developer & Competitive Programmer",
        "contact": {
            "email": "ser.str.py@example.com",
            "telegram": "@Ser_str_py",
            "codeforces": "codeforces.com/profile/Frouvie",
            "github": "github.com/SerIPY"
        },
        "summary": "Energetic and goal-oriented, my mission is to improve the old or create something new. I am a Python developer with two years of experience in competitive programming and active growth in backend development and Data Science. Proficient in OOP principles applied in C++. Proven high results on competitive platforms such as Codeforces (rating 1272), Yandex Contest, and LeetCode. Currently focusing on leveraging analytical skills to build intelligent systems, reflected in my pet project BotaniSmart.",
        "experience": [
            {
                "position": "Project Author and Developer",
                "company": "Pet-Project: BotaniSmart",
                "period": "Spring 2025 – Present",
                "description": "Development of an intelligent system for plant care. The project serves as a sandbox for practicing backend skills and experimenting with machine learning.",
                "responsibilities": [
                    "Designing and implementing RESTful API with FastAPI for client application interaction.",
                    "Using SQLAlchemy ORM for asynchronous PostgreSQL database operations.",
                    "Developing modules for data parsing and analysis from external sources using BeautifulSoup and HTTPX.",
                    "Conducting research and prototyping with Large Language Models (LLM) to build a 'smart' chatbot."
                ]
            }
        ],
        "achievements": {
            "title": "Olympiad and Scientific Achievements",
            "items": [
                "**Grade 8:** First Prize, School Scientific Conference (Computer Science Section).",
                "**Grade 7:** First Prize, Regional Multi-Profile Olympiad (MMO).",
                "**Grade 7:** First Prize, Brest State Technical University Olympiad (BSTU).",
                "**Grade 7:** Third Prize, Regional Informatics Olympiad (Grades 7-11).",
                "**Grade 7:** First Prize, Regional Informatics Olympiad (Grades 6-8).",
                "**Grade 6:** Third Prize, Regional Informatics Olympiad (Grades 6-8)."
            ]
        },
        "skills": {
            "Programming Languages": ["Python (Advanced)", "C++ (Olympiad Level)", "SQL (Advanced)"],
            "Backend & API": ["FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "REST API", "Asyncio"],
            "Databases": ["PostgreSQL", "SQLite", "NoSQL Basics"],
            "Data Science & ML": ["Data Analysis (Pandas, NumPy)", "Web Scraping (BeautifulSoup, Scrapy)", "ML Basics (Scikit-learn)", "LLM Basics (Introductory)"],
            "Tools": ["Git", "Docker (Basic)", "Postman", "Linux CLI"]
        },
        "education": {
            "degree": "Secondary Education (In Progress)",
            "university": "8th Grade Student",
            "year": "Current Year"
        }
    }
};

// === ФУНКЦИИ ОТОБРАЖЕНИЯ ===
function populateHeader(data) {
    const container = document.getElementById('header-container');
    container.innerHTML = `
        <h1>${data.full_name}</h1>
        <p>${data.title}</p>
        <div class="contact-info">
            <a href="https://t.me/${data.contact.telegram.replace('@', '')}" target="_blank">Telegram</a> |
            <a href="https://${data.contact.codeforces}" target="_blank">Codeforces</a> |
            <a href="https://${data.contact.github}" target="_blank">GitHub</a>
        </div>
        <button id="theme-toggle">${document.body.classList.contains('light-theme') ? 'Dark theme' : 'Light theme'}</button>
    `;
}

function populateSummary(summary) {
    document.getElementById('summary').textContent = summary.trim();
}

function populateExperience(experience) {
    const container = document.getElementById('experience-container');
    container.innerHTML = experience.map(job => `
        <div class="job">
            <h3>${job.position}</h3>
            <p class="job-meta"><strong>${job.company}</strong> | ${job.period}</p>
            <p>${job.description}</p>
            <ul>
                ${job.responsibilities.map(res => `<li>${res}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function populateAchievements(achievements) {
    document.getElementById('achievements-title').textContent = achievements.title;
    const container = document.getElementById('achievements-container');
    container.innerHTML = `
        <ul>
            ${achievements.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = Object.entries(skills).map(([category, skillList]) => `
        <div class="skills-category">
            <h4>${category}</h4>
            <div class="skill-tags">
                ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function populateEducation(education) {
    const container = document.getElementById('education-container');
    container.innerHTML = `
        <h3>${education.degree}</h3>
        <p><strong>${education.university}</strong></p>
        <p>${education.year}</p>
    `;
}

function populateResume() {
    const lang = document.documentElement.getAttribute('data-lang');
    const data = resume_data[lang];
    populateHeader(data);
    populateSummary(data.summary);
    populateExperience(data.experience);
    populateAchievements(data.achievements);
    populateSkills(data.skills);
    populateEducation(data.education);

    // Обновляем заголовок страницы
    document.title = `Resume: ${data.full_name}`;
}
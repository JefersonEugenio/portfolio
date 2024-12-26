document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("header");

    if (navPlaceholder) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Erro ao carregar o menu:", error));
    }
});

document.querySelector('.hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show'); // Mostra/esconde o menu
});

const skills = [
    { name: "JAVA", filled: 4, total: 5 },
    { name: "PYTHON", filled: 2, total: 5 },
    { name: "JAVASCRIPT", filled: 2, total: 5 },
    { name: "SELENIUM", filled: 4, total: 5 },
    { name: "REST ASSURED", filled: 3, total: 5 },
    { name: "JUNIT 5", filled: 4, total: 5 },
    { name: "HTML", filled: 3, total: 5 },
    { name: "CSS", filled: 3, total: 5 },
    { name: "PHP COM LARAVEL", filled: 2, total: 5 },
    
];

const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.className = "skill-item";
        li.innerHTML = `
            <div>
                <span class="font-bold">${skill.name}</span>
                <div class="progress-bar" style="display: flex; gap: 4px; margin-top: 4px;">
                    ${'<span class="filled" style="background: #eab53d; width: 20px; height: 20px; border-radius: 50%;"></span>'.repeat(skill.filled)}
                    ${'<span class="empty" style="background: #ddd; width: 20px; height: 20px; border-radius: 50%;"></span>'.repeat(skill.total - skill.filled)}
                </div>
            </div>
        `;
        skillsList.appendChild(li);
    });
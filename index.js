const display = document.getElementById("display");
const themeLink = document.getElementById("theme");
const darkTheme = "styles/style_dark.css";
const lightTheme = "styles/style_light.css";

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toFixed(2); 
    } catch (error) {
        display.value = 'Error';
    }
}

function changeTheme() {
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = themeLink.getAttribute('href');

    if (currentTheme.includes('dark')) {
        themeLink.setAttribute('href', lightTheme);
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); 
    } else {
        themeLink.setAttribute('href', darkTheme); 
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById("theme-icon");
    
    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme === 'light' ? lightTheme : darkTheme);
        // Set the correct icon based on the saved theme
        themeIcon.classList.replace(savedTheme === 'light' ? 'fa-moon' : 'fa-sun', savedTheme === 'light' ? 'fa-sun' : 'fa-moon');
    } else {
        // Default to dark theme if no saved theme is found
        themeLink.setAttribute('href', darkTheme);
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

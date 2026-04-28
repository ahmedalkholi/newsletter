const btn = document.querySelector('#menu')
btn.addEventListener('click', () => {
    const menuContainer = document.querySelector('#menu-container')        
    // التبديل بين الحركة من فوق لتحت
    menuContainer.classList.toggle('invisible');
    menuContainer.classList.toggle('-translate-x-full');
    menuContainer.classList.toggle('translate-x-0');
    
    // مهم جداً عشان الأزرار متتضغطش وهي مخفية
    menuContainer.classList.toggle('pointer-events-none')
})
// DARK AND DAY MODE TOGGLE
const themeToggle = document.querySelector('#themeToggle')

if (localStorage.getItem('theme') === 'dark')
{
    document.documentElement.classList.add('dark')
    themeToggle.querySelector('img').src = './Images/sun.png'
}

themeToggle.addEventListener('click', () =>
{
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark'))
    {
        localStorage.setItem('theme', 'dark')
        themeToggle.querySelector('img').src = './Images/sun.png'
    }
    else
    {
        localStorage.setItem('theme', 'light')
        themeToggle.querySelector('img').src = './Images/moon.png'
    }
})
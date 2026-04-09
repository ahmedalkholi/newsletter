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
function openInstagram() {
    window.open('https://instagram.com/cooffee.dady', '_blank');
  }
  
  let currentSection = '';

  function navigateTo(section) {
    currentSection = section;
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    
    // function showSidebar(sectionId) {
    //   const sidebar = document.getElementById("sidebar");
    //   sidebar.classList.add("active")
    // }
    const sidebar = document.querySelector('.sidebar');
    sidebar.innerHTML = '';
  
    // دکمه بازگشت
    const backBtn = document.createElement('button');
    backBtn.textContent = 'بازگشت به صفحه اصلی';
    backBtn.onclick = () => {
      document.querySelector('.container').classList.remove('hidden');
      document.getElementById('content').classList.add('hidden');
      sidebar.innerHTML = '';
      document.getElementById('menu-items').innerHTML = '';
    };
    sidebar.appendChild(backBtn);
  
    // دکمه‌های دسته‌بندی
    const sections = {
      hot: [
        { id: 'espresso', label: 'بر پایه اسپرسو', icon: '☕' },
        { id: 'warm', label: 'نوشیدنی گرم', icon: '♨️' }
      ],
      cold: [
        { id: 'coldespresso', label: 'بر پایه اسپرسو', icon: '🧊' },
        { id: 'shakes', label: 'شیک‌ها', icon: '🥤' },
        { id: 'vitamin', label: 'ویتامینه‌ها', icon: '🍹' }
      ],
      food: [
        { id: 'snack', label: 'غذا و میان‌وعده', icon: '🍔' }
      ]
    };
  
    const sectionButtons = sections[section] || [];
    sectionButtons.forEach(({ id, label, icon }) => {
      const btn = document.createElement('button');
      btn.innerHTML = `<div class="icon">${icon}</div><div>${label}</div>`;
      btn.onclick = () => loadSection(id);
      sidebar.appendChild(btn);
    });
  
    // نمایش اولین بخش به صورت پیش‌فرض
    if (sectionButtons.length > 0) {
      loadSection(sectionButtons[0].id);
    }
  }
  
  function loadSection(type) {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';
  
    let items = [];
  
    if (type === 'espresso') {
      items = [
        { name: 'اسپرسو سینگل', price: 25000 , details:"یک شات اسپرسو"},
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو سینگل', price: 25000 },
        { name: 'اسپرسو دبل', price: 35000 }
      ];
    } else if (type === 'warm') {
      items = [
        { name: 'هات چاکلت', price: 45000 },
        { name: 'چای ماسالا', price: 40000 }
      ];
    } else if (type === 'coldespresso') {
      items = [
        { name: 'آیس لاته', price: 48000 },
        { name: 'آیس امریکانو', price: 38000 }
      ];
    } else if (type === 'shakes') {
      items = [
        { name: 'شیک شکلات', price: 60000 },
        { name: 'شیک موز', price: 55000 }
      ];
    } else if (type === 'vitamin') {
      items = [
        { name: 'ویتامینه انرژی‌زا', price: 65000 },
        { name: 'ویتامینه مخلوط', price: 62000 }
      ];
    } else if (type === 'snack') {
      items = [
        { name: 'ساندویچ مرغ', price: 70000 },
        { name: 'سیب‌زمینی با پنیر', price: 50000 }
      ];
    }
  
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.innerHTML = `
        <img src="drink.jpg" alt="${item.name}">
        <div class="menu-info">
          <h3>${item.name}</h3>
          <p>${item.details}</p>
        </div>
        <div class="price">${item.price.toLocaleString('fa-IR')} تومان</div>
      `;
      menuItems.appendChild(card);
    });
  }
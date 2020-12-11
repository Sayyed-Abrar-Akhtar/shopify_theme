(() => {
  const searchIcon = document.querySelector('.icon-search');
  const search = document.querySelector('.row-bottom');
  const closeIcon = document.querySelector('.icon-close-outline');

  searchIcon.addEventListener('click', () => {
    search.classList.add('row-bottom-show');
  });
  closeIcon.addEventListener('click', () => {
    search.classList.remove('row-bottom-show');
  });
})();

(() => {
  const menu_men = document.querySelector('.menu--men');
  const menu_women = document.querySelector('.menu--women');
  const menu_sale = document.querySelector('.menu--sale');
  const submenu_men = document.querySelector('.sub-menu--men');
  const submenu_women = document.querySelector('.sub-menu--women');
  const submenu_sale = document.querySelector('.sub-menu--sale');
  const outsideMenuNodes = document.querySelectorAll(' .header, .section-hero');
  const outsideMenus = Array.prototype.slice.call(outsideMenuNodes);


  menu_men.addEventListener('mouseover', () => {
    submenu_men.classList.add('sub-menu--show');
    submenu_women.classList.remove('sub-menu--show');
    submenu_sale.classList.remove('sub-menu--show');
  })

  menu_women.addEventListener('mouseover', () => {
    submenu_women.classList.add('sub-menu--show');
    submenu_men.classList.remove('sub-menu--show');
    submenu_sale.classList.remove('sub-menu--show');
  })

  menu_sale.addEventListener('mouseover', () => {
    submenu_sale.classList.add('sub-menu--show');
    submenu_men.classList.remove('sub-menu--show');
    submenu_women.classList.remove('sub-menu--show');
  })

  outsideMenus.map((outsideMenu) => {
    outsideMenu.addEventListener('mouseover', () => {
      submenu_men.classList.remove('sub-menu--show');
      submenu_women.classList.remove('sub-menu--show');
      submenu_sale.classList.remove('sub-menu--show');
    });
  });
})();


/* 

(()=> {
  const sellingPriceStr = document.querySelector(".product__selling-price").innerText;
  const originalPriceStr = document.querySelector(".product__price--compared-at").innerText;
  const sellingPriceArr = sellingPriceStr.match(/(\d+)/); 
  const originalPriceArr = originalPriceStr.match(/(\d+)/); 
  const sellingPrice = parseInt(sellingPriceArr[1])
  const originalPrice = parseInt(originalPriceArr[1])
  console.log(sellingPrice / originalPrice)
})()


(()=>{
  
  const colorVariant = document.querySelector(".color");
  const sizeVariant = document.querySelector(".size");
  const originalValue = document.querySelector(".original-variant-selector");
  const options = document.querySelectorAll(".update-selected");
  const optionsArr = Array.prototype.slice.call(options)
  let color = colorVariant.value
  let size = sizeVariant.value
  let text = originalValue.options[originalValue.selectedIndex].text.split(' - ');
  let value = originalValue.value;
  console.log(value);
  
  colorVariant.addEventListener('change', event=> {
    color = colorVariant.value
    matchOption();
  })
  
  sizeVariant.addEventListener('change', event=> {
    size = sizeVariant.value
    matchOption();
  })
  
  originalValue.addEventListener('change', event=> {
    
    console.log(originalValue.value);
  })
  
  const matchOption = ()=> {
    optionsArr.map(option => {
      var text = option.text.split(' - ');
      if (`${color} / ${size}` === text[0]) {
        value = option.value;
        originalValue.value = value;
      }
    })
  }
   
})()*/




const variantClicked = document.querySelectorAll(".product__link");
const variantClickedArr = Array.prototype.slice.call(variantClicked);
variantClickedArr.map(variant, ()=> {
  variant.addEventListener('click', ()=> {
    console.log(variant.dataset.variant);
  })
})
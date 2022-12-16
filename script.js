

// start of  navigation bar responses

const openMenu= ()=>{
    document.querySelector('.blured').className='active blured';
    document.querySelector('aside').className='active';
}

const closeMenu= ()=>{
    document.querySelector('.blured').className='blured';
    document.querySelector('aside').className='';
}

document.getElementById('menuButton').onclick= e =>{
    e.preventDefault();
    openMenu();
}

document.getElementById('closeButton').onclick =e =>{
  
    closeMenu();
}

document.querySelector('.blured').onclick=e=>{
    closeMenu();
}
// end of navigation bar  responses


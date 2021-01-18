const readmore = document.querySelector('.read-more0');
const text = document.querySelector('.text0');

readmore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more0');
    if(readmore.innerText === 'Read More'){
        readmore.innerText = 'Read Less';
    }else{
        readmore.innerText = 'Read More';
    }
});

const readmore1 = document.querySelector('.read-more1');
const text1 = document.querySelector('.text1');

readmore1.addEventListener('click',(e)=>{
    text1.classList.toggle('show-more1');
    if(readmore1.innerText === 'Read More'){
        readmore1.innerText = 'Read Less';
    }else{
        readmore1.innerText = 'Read More';
    }
});

const readmore2 = document.querySelector('.read-more2');
const text2 = document.querySelector('.text2');

readmore2.addEventListener('click',(e)=>{
    text2.classList.toggle('show-more2');
    if(readmore2.innerText === 'Read More'){
        readmore2.innerText = 'Read Less';
    }else{
        readmore2.innerText = 'Read More';
    }
});

const readmore3 = document.querySelector('.read-more3');
const text3 = document.querySelector('.text3');

readmore3.addEventListener('click',(e)=>{
    text3.classList.toggle('show-more3');
    if(readmore3.innerText === 'Read More'){
        readmore3.innerText = 'Read Less';
    }else{
        readmore3.innerText = 'Read More';
    }
});


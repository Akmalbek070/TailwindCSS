const btn = document.querySelector('#btn'),
      btn2 = document.querySelector('#btn2'),
      btn3 = document.querySelector('#btn3'),
      btn4 = document.querySelector('#btn4');

const list = document.querySelector('#list'),
      listFull = document.querySelector('#listFull'),
      biList = document.querySelector('.bi-list'),
      header = document.querySelector('#headerSideabr'),
      moon = document.querySelector('.bi-moon-fill'),
      sunny = document.querySelector('.bi-brightness-high-fill'),
      head = document.querySelector('header'),
      textOne = document.querySelector('#textOne'),
      main = document.querySelector('main'),
      textSecond = document.querySelector('#textSecond'),
      textSecond2 = document.querySelector('#textSecond2'),
      textSecond3 = document.querySelector('#textSecond3'),
      textSecond4 = document.querySelector('#textSecond4'),
      textTherd = document.querySelector('#textTherd'),
      icons = document.querySelector('#icons'),
      iconsSecond = document.querySelector('#iconsSecond'),
      span = document.querySelector('#span'),
      spans = document.querySelector('#spans'),
      bi = document.querySelector('#bi'),
      bi1 = document.querySelector('#bi1'),
      bi2 = document.querySelector('#bi2'),
      qubis1 = document.querySelector('#qubis1');
      qubis2 = document.querySelector('#qubis2');
      qubis3 = document.querySelector('#qubis3'),
      text2 = document.querySelector('#text2'),
      text3 = document.querySelector('#text3'),
      text4 = document.querySelector('#text4');
const opacity= document.querySelector('#opacity'),
      textH1 = document.querySelector('#textH1')


///////loading============

setTimeout(() => {
    opacity.style.opacity = '30'
    textH1.style.display ='none'
}, 3000);

//light======
sunny.addEventListener('click', () =>{
    moon.style.display = 'block';
    sunny.style.display =  'none';
    head.style.backgroundColor = 'white';
    textOne.style.color = 'black';
    list.style.color = 'black';
    headerSideabr.style.backgroundColor = 'white';
    main.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn2.style.color = 'black';
    btn3.style.color = 'black';
    btn4.style.color = 'black';
    textSecond.style.color = 'black';
    textSecond2.style.color = 'black';
    textSecond3.style.color = 'black';
    textSecond4.style.color = 'black';
    textTherd.style.color = 'black';
    icons.style.color = 'black';
    iconsSecond.style.color = 'black';
    span.style.color = 'black';
    spans.style.color = 'black';
    bi.style.color = 'black';
    bi1.style.color = 'black';
    bi2.style.color = 'black';
    qubis1.style.backgroundColor = 'white';
    qubis2.style.backgroundColor = 'white';
    qubis3.style.backgroundColor = 'white';
    text2.style.color = 'black';
    text3.style.color = 'black';
    text4.style.color = 'black';


    
})
//dark
moon.addEventListener('click', () =>{
    sunny.style.display = 'block';
    moon.style.display =  'none';
    head.style.backgroundColor = '';
    textOne.style.color = ''
    list.style.color = '';
    header.style.backgroundColor = '';
    main.style.backgroundColor = '';
    btn.style.color = '';
    btn2.style.color = '';
    btn3.style.color = '';
    btn4.style.color = '';
    textSecond.style.color = '';
    textSecond2.style.color = '';
    textSecond3.style.color = '';
    textSecond4.style.color = '';
    textTherd.style.color = '';
    iconsSecond.style.color = '';
    icons.style.color = '';
    span.style.color = 'white';
    spans.style.color = '';
    bi.style.color = '';
    bi1.style.color = '';
    bi2.style.color = '';
    qubis1.style.backgroundColor = '';
    qubis2.style.backgroundColor = '';
    qubis3.style.backgroundColor = '';
    text2.style.color = '';
    text3.style.color = '';
    text4.style.color = '';
})
//listt========
biList.addEventListener('click', () => {
    header.style.transform = 'translateX(0)';
})

///button========
btn.addEventListener('click', () => {
    btn.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
})
btn2.addEventListener('click', () => {
    btn.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
})
btn3.addEventListener('click', () => {
    btn2.classList.remove('active')
    btn.classList.remove('active')
    btn3.classList.add('active')
    btn4.classList.remove('active')
})
btn4.addEventListener('click', () =>{
    btn.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.add('active')
})
//button end


list.addEventListener('click', () =>{
    listFull.style.display = 'block';
})
listFull.addEventListener('click', () =>{
    header.style.transform = 'translateX(-200px)';
})
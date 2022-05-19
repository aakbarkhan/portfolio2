const menu = document.querySelector('.menuMenu');
const menuItems = document.querySelectorAll('.nav-tag');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const data = [
  {
    title: 'Budget App',
    image: 'assets/budgetapp.png',
    text: 'The Budget app keeps track of all your Budget, categories, and expenses. It will allow you to save categories, keep track of what you have, create categories, and generate a categories list based on what you have expenses and what you want to add in your expenses. Also, Budget tracking will allow us to know how much we can plan for the month or year and knows exactly the expences.',

    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Google',
    image: 'assets/SnapshootPortfolio.png',
    text: '1111 Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Facebook',
    image: 'assets/SnapshootPortfolio.png',
    text: '2222  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Portfolio',
    image: 'assets/SnapshootPortfolio.png',
    text: '3333 Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
];

function cardGenerate(item) {
  const page = document.createElement('div');
  page.className = 'modelPage';
  const title = document.createElement('h2');
  title.className = 'port-title';
  const span = document.createElement('button');
  span.className = 'closebtn';
  const img = document.createElement('img');
  const para = document.createElement('p');
  const lang = document.createElement('div');
  lang.className = 'frameworks';
  const ul = document.createElement('ul');
  ul.className = 'lang-pop';
  const list1 = document.createElement('li');
  list1.className = 'add-border';
  const list2 = document.createElement('li');
  list2.className = 'add-border';
  const list3 = document.createElement('li');
  list3.className = 'add-border';

  const btnnice = document.createElement('div');
  btnnice.className = 'live-source';
  const btn1 = document.createElement('button');
  btn1.className = 'live';

  const btn2 = document.createElement('button');
  btn2.className = 'source';

  page.appendChild(title);
  page.appendChild(span);
  page.appendChild(img);
  page.appendChild(para);
  page.appendChild(lang);
  lang.appendChild(ul);
  ul.appendChild(list1);
  ul.appendChild(list2);
  ul.appendChild(list3);
  btnnice.appendChild(btn1);
  btnnice.appendChild(btn2);
  page.appendChild(btnnice);
  // data.((item) => {
  img.src = item.image;
  img.className = 'project-image';
  title.innerText = item.title;
  span.innerText = 'x';
  para.innerText = item.text;
  para.className = 'para1';
  const arr = item.languages;
  console.log(arr);
  const [lang1, lang2, lang3] = arr;
  list1.innerText = lang1;
  list2.innerText = lang3;
  list3.innerText = lang2;

  btn1.innerHTML = `${item.live} <img id="live-btn" src="./live.png" alt="btn">`;
  btn2.innerHTML = `${item.source} <i id="github" class="fab fa-github"></i>`;

  const [language1, language2, language3] = item.languages;
  list1.innerText = language1;
  list2.innerText = language2;
  list3.innerText = language3;

  btn1.innerHTML = `${item.live}<img id="live-btn" src="./live.png" alt="btn">`;
  btn2.innerHTML = `${item.source}<i id="github" class="fab fa-github"></i>`;
  // });
  const mainContent = document.querySelector('.main');
  return mainContent.appendChild(page);
}

const btnn = document.querySelectorAll('.btn');

function popUp(idx) {
  document.body.appendChild(cardGenerate(data[idx]));

  const del = document.querySelector('.modelPage');
  const closeBtn = document.querySelector('.closebtn');
  document.querySelector('#bg-nice').classList.add('blurred');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(del);
    document.querySelector('#bg-nice').classList.remove('blurred');
  });
}

const btnsMobileArr = Array.from(btnn);

btnsMobileArr.forEach((btn, idx) => {
  btn.setAttribute('id', idx);
  btnn[idx].addEventListener('click', () => popUp(idx));
});
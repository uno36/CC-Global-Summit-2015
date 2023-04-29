const mainMenu = document.querySelector('.mobile-menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menuItems = document.querySelectorAll('menu-items a');

function close() {
  mainMenu.style.top = '-150%';
}

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

// close menu when you click on a menu item
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const speakers = [
  {
    id: 1,
    img: 'images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 1,
    img: 'images/speaker_02.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 1,
    img: 'images/speaker_03.png',
    name: 'Lila tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    id: 1,
    img: 'images/speaker_04.png',
    name: 'Kilnam Chon',
    profession: '',
    bio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society`s (ISOC) Internet Hall of Fame',
  },
  {
    id: 1,
    img: 'images/speaker_05.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    bio: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 1,
    img: 'images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const Speaker = document.querySelector('.speakers');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
Speaker.appendChild(gridContainer);

let numDisplayed = 2;

function display() {
  let displayCard = '';
  for (let i = 0; i < numDisplayed; i += 1) {
    displayCard += `
    <article class="speaker grid-container">
          <div><img class="speaker-img" src="${speakers[i].img}" alt=""></div>
          <div><h3 class="name">${speakers[i].name}</h3>
          <p class="profession">${speakers[i].profession}</p>
          <hr class="speaker-hr">
          <p class="bio">${speakers[i].bio}</p>
          </div>
    </article>
    `;
  }

  if (numDisplayed < speakers.length) {
    displayCard += '<button class="more">More &nbsp&nbsp<i class="fa-solid fa-angle-down"></i></button>';
  }

  gridContainer.innerHTML = displayCard;

  const moreBtn = gridContainer.querySelector('.more');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      numDisplayed = speakers.length;
      display();
      moreBtn.remove();
    });
  }

  const lessBtn = gridContainer.querySelector('.less');
  if (lessBtn) {
    lessBtn.addEventListener('click', () => {
      numDisplayed = 2;
      display();
      lessBtn.remove();
      gridContainer.innerHTML += '<button class="more">More &nbsp&nbsp<i class="fa-solid fa-angle-down"></i></button>';
    });
  }

  const moreBtns = gridContainer.querySelectorAll('.more');
  moreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const bio = btn.previousElementSibling.querySelector('.bio');
      if (bio.classList.contains('show')) {
        bio.classList.remove('show');
        btn.innerHTML = 'More &nbsp&nbsp<i class="fa-solid fa-angle-down"></i>';
      }
    });
  });
}

display();

const Speakers = document.querySelector('#speaker-container');
const gridContainers = document.createElement('div');
gridContainers.classList.add('grid-container');
gridContainers.style.display = 'grid';
gridContainers.style.gridTemplateColumns = 'repeat(2, 1fr)';
Speakers.appendChild(gridContainers);

function displayspeakers() {
  let displayCards = '';
  for (let i = 0; i < speakers.length; i += 1) {
    displayCards += `    
        <article class="speaker ">
        <div><img class="speaker-img" src="${speakers[i].img}" alt=""></div>
        <div><h3 class="name">${speakers[i].name}</h3>
        <p class="profession">${speakers[i].profession}</p>
        <hr class="speaker-hr">
        <p class="bio">${speakers[i].bio}</p>
        </div>
      </article>
    `;
  }
  Speakers.innerHTML = displayCards;
}
displayspeakers();
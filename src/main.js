import './style.css'

window.addEventListener('scroll', () => {
  const mainNav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    mainNav.classList.add('bg-purple-600/20', 'shadow-md', 'py-2', 'backdrop-blur-2xl');
    mainNav.classList.remove('bg-transparent', 'py-5');
  } else {
    mainNav.classList.remove('bg-purple-600/20', 'shadow-md', 'py-2', 'backdrop-blur-2xl');
    mainNav.classList.add('bg-transparent', 'py-5');
  }
});

const toggleNav = document.getElementById('toggle-nav');
const navLinks = document.querySelector('.nav-links');

toggleNav.addEventListener('click', () => {
  if (navLinks.classList.contains('opacity-0')) {
    navLinks.classList.add('bg-purple-200', 'p-6', 'rounded-2xl', 'drop-shadow-2xl', 'opacity-100');
    navLinks.classList.remove('opacity-0');
  } else {
    navLinks.classList.remove('bg-purple-200', 'p-6', 'rounded-2xl', 'drop-shadow-2xl', 'opacity-100');
    navLinks.classList.add('opacity-0');
  }
});

const modal = document.getElementById('modal-1');
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
  }
});

function showMsg(question, msg) {
  let questionElement = modal.querySelector('.modal-question');
  let messageElement = modal.querySelector('.modal-message');
  questionElement.textContent = question;
  messageElement.textContent = msg;

  // Toggle visibility classes
  if (modal.classList.contains('opacity-0')) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
  } else {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
  }
}

document.querySelector('#mf-m-1').addEventListener("click", () => {
  showMsg(
    "What's a mindful moment?", 
    "A mindful moment is a brief period where you bring your full attention to the present, focusing on your breath, thoughts, or sensations to reduce stress and increase awareness."
  );
});

document.querySelector('#mf-m-2').addEventListener("click", () => {
  showMsg(
    "How can I stay consistent with wellness?", 
    "Consistency comes from setting realistic goals, creating daily routines, and practicing self-compassion when challenges arise. Small, steady steps lead to lasting wellness habits."
  );
});

document.querySelector('#mf-m-3').addEventListener("click", () => {
  showMsg(
    "Is this for mental health?", 
    "Yes! Mindful Moments support mental health by helping you calm your mind, manage stress, and cultivate a positive mindset through simple and intentional practices."
  );
});


// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

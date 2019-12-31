const input = document.querySelector('#message-input');
const link =  document.querySelector('#link-input');
const form = document.querySelector('form');
const formContainer = document.querySelector('.card-panel');
const linkOutput = document.querySelector('#link-input');
const originalUrl = String(window.location);

if (String(window.location).includes('#')) {
    const url = String(window.location);
    classToggler(true);
    decipherDisplay(url);
    document.body.style.background = '#333';
    document.body.style.textAlign = 'center';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const encrypted = btoa(input.value);
    link.value = `${window.location}#${encrypted}`;
    classToggler();
    link.select();
    
});

function classToggler(toggleAll = false) {
    if (toggleAll) {
        document.querySelector('.card-panel').classList.remove('hidden');
        document.querySelector('.card-panel').classList.add('hidden');
    } else {
        document.querySelector('.hidden').classList.toggle('hidden');
        formContainer.classList.toggle('hidden')
    }

}

function decipherDisplay(url) {
    const indx = url.indexOf('#') + 1;
    const scrambled = url.slice(indx, url.length);
    const unScrambled = atob(scrambled);
    createHtml(unScrambled);
}

function createHtml(unScrambled) {
    const inject = document.querySelector('#inject');
    div = document.createElement('div');
    div.classList.add('card-panel');
    newUrl = originalUrl.slice(0, -1);
    div.innerHTML = `
        <h4>Message</h4>
        <p>${unScrambled}</p>
        <a href="">hello</a>
    `;
    inject.appendChild(div);
}   
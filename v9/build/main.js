import { el, empty } from './helpers.js';

function CreateBookList(query) {
  const list = document.createElement('ul');
  const url = `https://openlibrary.org/search.json?q=${query}`;

  list.appendChild(list.appendChild(el('li', { class: 'foo' }, 'Sæki gögn...')));
  fetch(url)

    .then((response) => {
      empty(list);
      response.json().then((data) => {
        for (const doc of data.docs) {
          list.appendChild(list.appendChild(el('li', { class: 'foo' }, doc.title)));
          const mainElement = document.querySelector('main');
          const books = CreateBookList(query);
          mainElement.appendChild(books);
        }
      });
    })

    .catch((error) => {
      empty(list);
      list.appendChild(list.appendChild(el('li', { class: 'foo' }, 'Villa!!')));
    });

  return list;
}

const searchTimoutToken = 0;

window.onload = () => {
  const searchFormElement = document.getElementById('searchForm');
  searchFormElement.onkeyup = () => {
    clearTimeout(searchTimoutToken);

    if (searchFormElement.value.trim().lenght === 0) {
      return;
    }

    setTimeout(() => {
      CreateBookList(searchFormElement.value);
    }, 250);
  };
};

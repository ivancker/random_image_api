const mainBlk = document.querySelector('.main-block');
const image = mainBlk.querySelector('.picture');
const btn = document.querySelector('.button-change-img');
const spinner = mainBlk.querySelector('.spinner');

// fetch('https://api.unsplash.com/photos/random/?client_id=rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k')
// .then(res => res.json())
// .then((data) => {
//   console.log(data);
// });



// fetch('https://api.unsplash.com/photos/random', {
//   method: 'GET',
//   headers: {
//     authorization: 'rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k',
//     'Content-Type': 'application/json'
//   },

// });

// checkResponse(res) {
//   if (res.ok) {
//       return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// };
// https://swapi.nomoreparties.co/planets/1




btn.addEventListener('click', () => {
  renderLoading(true);
  fetch('https://api.unsplash.com/photos/random/?client_id=rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k')
  .then((res) => {
      if (res.ok) {
      return res.json();
    }
      return Promise.reject(res.status);
  })
  // .then((res) => {
  //   console.log(res);
  // })
  .then((res) => {
    renderResult(res.urls.regular);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);  
  })
  .finally(() => {
    renderLoading(false);
  });
});

function renderResult(url) {
  image.setAttribute('src', `${url}`);
}

function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add('spinner_visible');
  } else {
    spinner.classList.remove('spinner_visible');
  }
}



// Access Key 
// rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k

// Secret key
// IMhZBDNHPYrwK3SsvNTuXiPSoWepxbHE79MQCO7916A

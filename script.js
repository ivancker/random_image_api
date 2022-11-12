const mainBlk = document.querySelector('.main-block');
const image = mainBlk.querySelector('.picture');
const btn = mainBlk.querySelector('.button-change-img');

fetch('https://api.unsplash.com/photos/random/?client_id=rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k')
.then(res => res.json())
.then((data) => {
  console.log(data);
});



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




btn.addEventListener('click', () => {
  image.setAttribute('src', 'https://images.unsplash.com/photo-1667816014414-dba47e785cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
});




// Access Key 
// rNbUjGL5BpnOl_37-24eWw-dmjuP7UVRKiki11xcF_k

// Secret key
// IMhZBDNHPYrwK3SsvNTuXiPSoWepxbHE79MQCO7916A

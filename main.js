var gallery = document.querySelector('main');
var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== ' ') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = ' ';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = ' ';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}
updateGallery();

// var imageUrls dummy = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
// 'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
// 'https://pbs.twimg.com/media/EofEBEEXYAI3hIL.jpg',
// 'https://static01.nyt.com/images/2020/01/28/multimedia/28xp-memekid3/28cp-memekid3-superJumbo.jpg',
// 'https://i.kym-cdn.com/entries/icons/original/000/029/028/Screen_Shot_2019-03-22_at_5.33.23_PM.png',
// 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg'
// ];

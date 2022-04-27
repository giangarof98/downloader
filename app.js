let convertBtn = document.querySelector('.convert-btn');
let urlInput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', function() {
    sendUrl(urlInput.value);
});

function sendUrl(URL){
    window.location.href = `http://localhost:3000/dl?URL=${URL}` || `https://downloader-umber.vercel.app/dl?URL=${URL}`
}

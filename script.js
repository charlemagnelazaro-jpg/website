let words = document.querySelector('#words');

let currentLetterIndex = 0;

let secondLetter = "I miss you so much love, I can't wait to get to hold you. I hope we can get to spend the holidays together in the future. I love you mostest my pretty girl."
let firstLetter = "Hi, my love! I know that I don't get to give you letters as much as bouquets so I made this website for you. You are the greatest person I have ever met and I am so lucky to have you in my life. No words can truly express how lucky I am to have you as my girlfriend. I hope that my actions can speak louder than any words I say. I promise that through every hardship and difficulty, I will always be by your side, supporting and loving you. Just like this website, I will learn how to be better so it can flourish but at the same time we can look back and appreiciate how far we have come. I love you mostest my pretty girl."
let thirdLetter = "2 more days before I can get to say that I'm ending the year with you, and starting the next one with the prettiest girl I've ever met. I love you so much my love and it grows each day regardless of the distance. You will always be the main reason why I wan't to be better, you make me better. I love you mostest my pretty wife."

let letterCollection  = [firstLetter, secondLetter, thirdLetter];

const pictures_container = document.querySelector('.pictures-container');
const pictures_div = document.querySelector('.pictures');
const polaroids = document.querySelectorAll('.polaroid');
const pictures = [
    {src:"images/dates/5th_month.jpg", caption: "5th Month"},
    {src:"images/dates/Bask_date.jpg", caption: "Bask date"},
    {src: "images/dates/2nd month.jpg", caption:"2nd Month" },
    {src: "images/dates/Nona's bday.jpg", caption: "Nona's Birthday"},
    {src: "images/dates/3rd month.jpg", caption: "3rd Month"},
    {src: "images/dates/ATC_date.jpg", caption: "ATC date"},
    {src: "images/dates/4th_month2.jpg", caption: "4th Month(2)"},
    {src: "images/dates/Chesca's_bday.jpg", caption: "Chesca's Birthday"},];

words.textContent = letterCollection[currentLetterIndex];

let currentPicIndex = 0;


changeLetter = (direction) => {

    words.style.opacity = 0;
    words.offsetHeight;

    
    setTimeout(() => {
        if (direction === 'next') {
            currentLetterIndex = (currentLetterIndex + 1) % letterCollection.length;
        } else if (direction === 'prev') {
            currentLetterIndex = (currentLetterIndex - 1 + letterCollection.length) % letterCollection.length;
        }
        words.textContent = letterCollection[currentLetterIndex];
        words.style.opacity = 1;
    }, 500);
}
document.querySelector('#next-button').addEventListener('click', () => {
    changeLetter('next');
});
document.querySelector('#prev-button').addEventListener('click', () => {
    changeLetter('prev');
});

renderPictures = (pictures) => {
    pictures.forEach((pic) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        const rotation = Math.floor(Math.random() * 15) - 5;
        polaroid.style.transform = `rotate(${rotation}deg)`;

        const img = document.createElement('img');
        img.src = pic.src;
        img.className = 'polaroid-img';
        
        const caption = document.createElement('p');
        caption.textContent = pic.caption;
        caption.className = 'polaroid-text';

        polaroid.appendChild(img);
        polaroid.appendChild(caption);
        pictures_div.appendChild(polaroid);
    });
}

renderPictures(pictures.slice(currentPicIndex, currentPicIndex + 6));
currentPicIndex += 6;
/* to switch to next 6 pictures */
nextPictures = () => {
    pictures_div.classList.remove('fade-in');
    pictures_div.classList.add('fade-out');

    setTimeout(() => {
        pictures_div.innerHTML = ''; 

        renderPictures(pictures.slice(currentPicIndex, currentPicIndex + 6));

        pictures_div.classList.remove('fade-out');
        pictures_div.classList.add('fade-in');

        currentPicIndex += 6;
        if (currentPicIndex >= pictures.length) {
            currentPicIndex = 0; 
        }
    }, 500); 
}
document.querySelector('#next_pic').addEventListener('click', nextPictures);

prevPictures = () => {
    pictures_div.classList.remove('fade-in');
    pictures_div.classList.add('fade-out');

    setTimeout(() => {
        pictures_div.innerHTML = ''; 

        renderPictures(pictures.slice(currentPicIndex-6, currentPicIndex));

        pictures_div.classList.remove('fade-out');
        pictures_div.classList.add('fade-in');

        currentPicIndex -= 6;
        if (currentPicIndex <= 0) {
            currentPicIndex = 0; 
        }
    }, 500); 
}

document.querySelector('#prev_pic').addEventListener('click', prevPictures);

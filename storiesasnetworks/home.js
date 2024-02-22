// function scrollToBottom() {
//     // Use setTimeout to allow DOM updates before scrolling
//     setTimeout(() => {
//       window.scrollTo(0, document.body.scrollHeight);
//     }, 0);
//   }

//   window.onload = scrollToBottom()



window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0,9999999999999999);
    }, 50); // Delay might be necessary for content-heavy pages
}


let begin = document.getElementById("begin");
const hiddenDiv = document.getElementsByClassName("firsttext");


function changeImage(x, image)
{
    if(x==1)
    {
        image.src = 'imgs/begin.png';
    }

    if(x==2)
    {
        image.src = 'imgs/begin-clicked.png';
    }
}

function changeTopImage(x, image)
{
    if(x==1)
    {
        image.src = 'imgs/top/begin.png';
    }

    if(x==2)
    {
        image.src = 'imgs/top/begin-clicked.png';
    }
}

const div = document.querySelector(".firsttext");
const text = document.querySelector(".firsttext").innerHTML;

div.innerHTML = ''; 

function textTypingEffect(element, text, i = 0) {

  
    element.innerHTML += text[i];
   
    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 30);
   
}
// textTypingEffect(div, text);


div.innerHTML = '';

const div2 = document.querySelector(".secondtext")
const hiddenDiv2 = document.querySelector(".secondtext").innerHTML;

div2.innerHTML = '';

const div3 = document.querySelector(".secondtext-1")
const hiddenDiv3 = document.querySelector(".secondtext-1").innerHTML;

div3.innerHTML = '';

const div4 = document.querySelector(".thirdtext")
const hiddenDiv4 = document.querySelector(".thirdtext").innerHTML;

div4.innerHTML = '';

const div5 = document.querySelector(".fourthtext")
const hiddenDiv5 = document.querySelector(".fourthtext").innerHTML;

div5.innerHTML = '';

const div6 = document.querySelector(".fifthtext")
const hiddenDiv6 = document.querySelector(".fifthtext").innerHTML;

div6.innerHTML = '';

const div7 = document.querySelector(".sixthtext")
const hiddenDiv7 = document.querySelector(".sixthtext").innerHTML;

div7.innerHTML = '';

const div8 = document.querySelector(".seventhtext")
const hiddenDiv8 = document.querySelector(".seventhtext").innerHTML;

div8.innerHTML = '';

const div9 = document.querySelector(".eighthtext")
const hiddenDiv9 = document.querySelector(".eighthtext").innerHTML;

div9.innerHTML = '';

const div10 = document.querySelector(".ninthtext")
const hiddenDiv10 = document.querySelector(".ninthtext").innerHTML;

div10.innerHTML = '';

const div11 = document.querySelector(".tentext")
const hiddenDiv11 = document.querySelector(".tentext").innerHTML;

div11.innerHTML = '';

const div12 = document.querySelector(".eleventhtext")
const hiddenDiv12 = document.querySelector(".eleventhtext").innerHTML;

div12.innerHTML = '';

const div13 = document.querySelector(".twelthtext")
const hiddenDiv13 = document.querySelector(".twelthtext").innerHTML;

div13.innerHTML = '';

const div14 = document.querySelector(".thirteenthtext")
const hiddenDiv14 = document.querySelector(".thirteenthtext").innerHTML;

div14.innerHTML = '';

const div15 = document.querySelector(".fourteenthtext")
const hiddenDiv15 = document.querySelector(".fourteenthtext").innerHTML;

div15.innerHTML = '';

const div16 = document.querySelector(".fifteenthtext")
const hiddenDiv16 = document.querySelector(".fifteenthtext").innerHTML;

div16.innerHTML = '';

const div17 = document.querySelector(".sixteenthtext")
const hiddenDiv17 = document.querySelector(".sixteenthtext").innerHTML;

div17.innerHTML = '';

const div18 = document.querySelector(".seventeenthtext")
const hiddenDiv18 = document.querySelector(".seventeenthtext").innerHTML;

div18.innerHTML = '';

const div19 = document.querySelector(".eighteenthtext")
const hiddenDiv19 = document.querySelector(".eighteenthtext").innerHTML;

div19.innerHTML = '';

const div20 = document.querySelector(".nineteenthtext")
const hiddenDiv20 = document.querySelector(".nineteenthtext").innerHTML;

div20.innerHTML = '';

const div21 = document.querySelector(".twentiethtext")
const hiddenDiv21 = document.querySelector(".twentiethtext").innerHTML;

div21.innerHTML = '';

const div22 = document.querySelector(".twentiethfirsttext")
const hiddenDiv22 = document.querySelector(".twentiethfirsttext").innerHTML;

div22.innerHTML = '';

const div23 = document.querySelector(".twentiethsecondtext")
const hiddenDiv23 = document.querySelector(".twentiethsecondtext").innerHTML;

div23.innerHTML = '';

const div24 = document.querySelector(".twentieththirdtext")
const hiddenDiv24 = document.querySelector(".twentieththirdtext").innerHTML;

div24.innerHTML = '';

const div25 = document.querySelector(".twentiethfourthtext")
const hiddenDiv25 = document.querySelector(".twentiethfourthtext").innerHTML;

div25.innerHTML = '';

const div26 = document.querySelector(".twentiethfifthtext")
const hiddenDiv26 = document.querySelector(".twentiethfifthtext").innerHTML;

div26.innerHTML = '';

const div27 = document.querySelector(".twentiethsixthtext")
const hiddenDiv27 = document.querySelector(".twentiethsixthtext").innerHTML;

div27.innerHTML = '';

const div28 = document.querySelector(".twentiethseventhtext")
const hiddenDiv28 = document.querySelector(".twentiethseventhtext").innerHTML;

div28.innerHTML = '';

const div29 = document.querySelector(".twentietheighttext")
const hiddenDiv29 = document.querySelector(".twentietheighttext").innerHTML;

div29.innerHTML = '';

const div30 = document.querySelector(".twentiethninetext")
const hiddenDiv30 = document.querySelector(".twentiethninetext").innerHTML;

div30.innerHTML = '';

const div31 = document.querySelector(".thirtiethtext")
const hiddenDiv31 = document.querySelector(".thirtiethtext").innerHTML;

div31.innerHTML = '';

const div32 = document.querySelector(".thirtyfirsttext")
const hiddenDiv32 = document.querySelector(".thirtyfirsttext").innerHTML;

div32.innerHTML = '';

const div33 = document.querySelector(".thirtysecondtext")
const hiddenDiv33 = document.querySelector(".thirtysecondtext").innerHTML;

div33.innerHTML = '';

const div34 = document.querySelector(".thirtythirdtext")
const hiddenDiv34 = document.querySelector(".thirtythirdtext").innerHTML;

div34.innerHTML = '';

document.querySelectorAll('a[href^="#first"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#second"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#third"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#fourth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#fifth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#sixth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#seventh"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#eighth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#ninth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#tenth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#eleventh"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#twelth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#thirteenth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#fourteenth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#fifteenth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#sixteenth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

document.querySelectorAll('a[href^="#start"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});

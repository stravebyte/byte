const body = document.querySelector('body');
const button = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const starts = document.getElementById('starter');
const box = document.getElementById('box1');
const title = document.getElementById('logo-of-strave');
const home_screen = document.getElementById('home-screen');
const paraH = document.getElementById('headingPara');
const headingOfChapter = document.getElementById('heading');
const contentOfChapter = document.getElementById('info-of-mp');
function myFun(){
  box.style.minHeight = 0;
}
function animate2(){
  home_screen.style.opacity = 1;
  starts.style.transform = 'scale(0)';
  setTimeout(myFun, 100);
}

function animate(){
  home_screen.style.transform = 'scale(100%)';
}

setTimeout(animate, 2000);

setTimeout(animate2, 1000);

//Infos

const hypo1 = "If you're trying someone to put their guard down or playing a game with someone that requires you to bluff, <b><strong>Make them laugh</strong></b>. People are more likely to be honest and vulnerable when they laugh and less likely to <b>bluff or lie.</b><br><br><br><br><i> Next chapter is about : </i><br><b>[The Truth Behind Story]</b>";

const hypo2 = "Have you ever heard someone tell a story about something, But you dont know if they are telling the truth. Today i will teach you a technique called <b>STARE THE LIAR</b> which will help you if someone is lying.<br> If you suspect someone is lying <b>Look at them straight into their Eye</b>and say nothing.<br> This will make them realise you suspect them of lying. If they are telling the truth they will be confused <b>Why you think they are lying!</b> and they'll say something like <b>Its True or Do you think i'm lying.</b><br>However if they're lying they'll be scared that you may have found out that they are lying. This will make them <b>tell more details about the story and make it sounds more believable. But just know if they do this they are lying.</b>";

const hypo3 = "";

button.addEventListener('click', function(){
  headingOfChapter.innerText = 'CHAPTER - 1';
  paraH.style.fontSize = '1.1em';
  button.style.display = 'none';
  button2.style.display = 'block';
  paraH.innerText = 'How to Manupilate someone ? ';
  contentOfChapter.innerHTML = hypo1;
})
button2.addEventListener('click', function(){
 headingOfChapter.innerText = 'CHAPTER - 2';
 paraH.innerHTML= '<b>The Truth Behind Story</b>';
 contentOfChapter.innerHTML = hypo2;
 contentOfChapter.style.fontSize = '0.78em';
 button2.style.display = 'none';
 button3.style.display = 'block'
})
button3.addEventListener('click', function(){
  headingOfChapter.innerText = 'BANKAI';
  paraH.innerHTML = '<b>Will update soon!</b>';
  contentOfChapter.innerHTML = 'Thank you for visiting.<br> Programmed and desined by <b>ShaikAli</b>';
  button3.style.display = 'none';
  button4.style.display = 'block'
})
button4.addEventListener('click', function(){
  window.open('https://www.instagram.com/byteninja_studios')
})
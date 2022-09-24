const wrap = document.getElementById('wrap');
const qna = document.getElementById('qna');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const pointArr=Array.from({length:10},()=>0);
const ENDPOINT = 9;
const select = [];
let qIdx = -1;

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 0);
  });
  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}
const goNext = () => {
    if (qIdx++ === qnaList.length - 1) {
      end();
      return;
    }
    
    const status = document.querySelector('.status');
    const qNum = qnaList[qIdx];
    const q = document.querySelector('.q');
  
    status.style.width = (ENDPOINT * (qIdx + 1)) + '%';
    q.innerHTML = qNum.q;
    qna.style.animation =
      'fade-in 0.3s ease-in-out 0.4s forwards, ' +
      'going-down 0.3s ease-in-out 0.4s forwards';
  
    setTimeout(() => {
      
      for (let i in qNum.a) {
        addAnswer(qNum.a[i].answer, i);
      }
      qna.style.opacity = 1;
    }, 0);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  setTimeout(() => welcome.style.animation =
  'going-up 0.4s ease-in-out forwards, ' +
  'fade-out 0.4s ease-in-out forwards', 100);
  setTimeout(() => {
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 0);
}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    setTimeout(() => {
      goResult();
    }, 400);
  }, 300);
}

const calcScore = () => {
  var index=0;
  for(let i=0;i<ENDPOINT;i++){
    for(let j=0;j<qnaList[i].a[select[i]].score.length;j++){
      pointArr[j]+=qnaList[i].a[select[i]].score[j];
    }
  }
  var max=0;
  for(var i=0;i<pointArr.length;i++){
    if(max<pointArr[i]){
      max=pointArr[i];
      index=i;
    }
  }
  return index;
}

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const index = calcScore();
  const pngName=infoList[index].png;
  const pTitle = document.querySelector('.p');
  const img_url = '../img/'+pngName+'.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');

  pTitle.innerHTML = '나와 잘 어울리는 고양이는';
  res_img.src = img_url;
  //res_img.alt = infoList[grade].name;
  //res_img.title = infoList[grade].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML=infoList[index].name;
  desc.innerHTML = infoList[index].desc;

  setTimeout(() => {
    result.style.display = 'block';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const load = () => {
  const start_btn = document.querySelector('.start');

  start_btn.addEventListener('click', () => {
    start_btn.disabled = true;
    begin();
  });
}

window.onload=load()
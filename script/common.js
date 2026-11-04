// 변수 선언
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area = document.querySelector('main');
let f_area = document.querySelector('footer');
const t_btn = document.querySelector('.top_btn');

// GNB SUB
for(let i=0; i<gnb.length;i++){
  console.log(i);

  gnb[i].addEventListener('click', ()=>{

    // 해당 메뉴의 서브메뉴 변수
    const child = gnb[i].children;

    // li 태그 내의 .sub 모두 숨기기
    for(let j=0;j<sub.length;j++){
      sub[j].style.display='none';
    }

    child[1].style.display='block';
  });
};

// 메뉴 밖(메인, 푸터) 영역 클릭 시 서브 메뉴야 닫혀라
m_area.addEventListener('click', ()=>{
  for(let i=0;i<sub.length;i++){
      sub[i].style.display='none';
    }
});

f_area.addEventListener('click', ()=>{
  for(let i=0;i<sub.length;i++){
      sub[i].style.display='none';
    }
});


// 탑 버튼
window.addEventListener('scroll', ()=>{
  let ws = window.scrollY;
  if(ws>=1520){ //스크롤 좌표값이 1520이상일 경우 TOP 버튼아 떠라
    t_btn.style.display='block';
  }else{ //아니면 숨어라
    t_btn.style.display='none';
  }
});

// 클릭했을 때 부드럽게 올라가라
t_btn.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});
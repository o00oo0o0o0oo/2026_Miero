// 공통 스크립트

// 1.변수 선언
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let mainArea = document.querySelector('main');
let footerArea = document.querySelector('footer');

// 헤더관련
// 메인메뉴 li 태그를 각각 클릭시 해당 서브만 보이게한다.
for(let i=0;i<gnb.length;i++){
  // console.log(gnb.length);
  console.log(i);

  gnb[i].addEventListener('click',()=>{
    // 해당메뉴의 서브메뉴 변수
    const child = gnb[i].children; //메인메뉴 .gnb의 자손 ul
    console.log(child[1]);

    // li태그안에 있는 .sub 모두 숨기기
    for(let j=0;j<sub.length;j++){
      sub[j].style.display='none';

    }
    child[1].style.display='block';
  });
};

// 메인 영역 클릭시 서브메뉴 숨기기
mainArea.addEventListener('click', ()=>{
    for(let i=0;i<sub.length;i++){
      sub[i].style.display='none';
    };
});
// 푸터 영역 클릭시 서브메뉴 숨기기
footerArea.addEventListener('click', ()=>{
    for(let i=0;i<sub.length;i++){
      sub[i].style.display='none';
    };
});
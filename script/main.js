// 메인 슬라이드

// 변수 선언
const m_img = document.querySelectorAll('#visual_slide > div'); //슬라이드 이미지 전체
const l_btn = document.querySelector('#visual_slide .s_btn > li:first-child'); //좌측 버튼
const r_btn = document.querySelector('#visual_slide .s_btn > li:last-child'); //우측 버튼
const c_btn = document.querySelectorAll('#visual_slide .cont_btn li')

// 인덱스값 초기화
let n = 0;

// ========= 오른쪽 버튼 =========
// ==============================

// 3초 간격 반복 호출
function fadeInOut(){

  // 모든 이미지 투명하게
  m_img.forEach(img => {
    img.style.opacity = '0';
  });

  // 컨트롤 버튼 서식 제거
  c_btn.forEach(btn => {
    btn.classList.remove('on');
  });

  // 다음 슬라이드 번호
  if(n === 3){
    n = 0;
  }else{
    n++;
  }

  // 현재 슬라이드 보이기
  c_btn[n].classList.add('on');
  m_img[n].style.opacity = '1';
}


// ========== 왼쪽 버튼 =========
// ==============================

// 3초 간격 반복 호출
function fadeInOut2(){

  // 모든 슬라이드 숨기기
  m_img.forEach(img => {
    img.style.opacity='0';
  });

  // 컨트롤 버튼의 on 클래스 제거
  c_btn.forEach(btn => {
    btn.classList.remove('on');
  });

  // 첫 번째 슬라이드라면 마지막으로 이동
  if(n === 0){
    n = 3;
  }else{
    n--;
  }

  // 해당 슬라이드 표시
  c_btn[n].classList.add('on');
  m_img[n].style.opacity='1';

};

// 함수 실행
let Timer = setInterval(fadeInOut, 3000);


// 컨트롤 버튼에 마우스 오버 시 시간 제거
c_btn.forEach(btn =>{
  btn.addEventListener('mouseenter', function(){
    clearInterval(Timer);
  });
});

// 컨트롤 버튼에 마우스 아웃 시 다시 재생
c_btn.forEach(btn =>{
  btn.addEventListener('mouseleave', function(){
    Timer = setInterval(fadeInOut, 3000);
  });
});

// 컨트롤 버튼 클릭 시 해당 슬라이드
c_btn.forEach((btn, idx) =>{
  btn.addEventListener('click', function(){

    n = idx;

    // 보이는 이미지 먼저 숨기고
    m_img.forEach(img=>{
      img.style.opacity='0';
    });

    c_btn.forEach(b=>{
      b.classList.remove('on');
    });

    // 클릭한 이미지 나와라예
    m_img[n].style.opacity='1';
    c_btn[n].classList.add('on');
  });
});


// 좌우버튼 (조건 : 버튼에 마우스 오버 시 기존 슬라이드 시간 속성 제거)

// 시간 제거
l_btn.addEventListener('click', function(){
  clearInterval(Timer);
  fadeInOut2();
});

r_btn.addEventListener('click', function(){
  clearInterval(Timer);
  fadeInOut();
});

// 시간 살리기
const s_btn_area = document.querySelector('#visual_slide .s_btn');

s_btn_area.addEventListener('mouseleave', function(){
  clearInterval(Timer);
  Timer = setInterval(fadeInOut, 3000);
});


// ========== 탭 컨텐츠 ==========
const tab_list = document.querySelectorAll('.tcon ul li a');
const tcon = document.querySelectorAll('.tcon ul li div');

// 초기값 :  첫 컨텐츠만 보이게 하고 첫 a태그에 't_on' 클래스 추가(css로 안 했을 경우)

// tcon.forEach((el, index)=>{ //각각의 div태그에 적용
//   if(index===0){ //인덱스 값이 0(첫번째)일 때
//     el.style.display='block'; //첫번째 div 보이게
//     tab_list[index].classList.add('tab_on');//첫번째 탭의 a
//   }else{ //아니라면
//     else.style.display='none' //아닌 요소는 숨겨지게
//   }
// });


// 사용자가 탭 메뉴 클릭 시 해당하는 탭 컨텐츠만 보이게 이벤트 설정
tab_list.forEach((tab, i)=>{
  tab.addEventListener('click', (e)=>{
    e.preventDefault(); //a 태그의 기본 이동(새로고침) 방지

    // 먼저 모든 컨텐츠를 숨기고 모든 탭메뉴의 t_on클래스 서식 제거

    tcon.forEach((content)=>{
      content.style.display='none';
    });

    tab_list.forEach((t)=>{
      t.classList.remove('t_on');
    });


    // 선택한 메뉴에만 t_on 서식 적용
    tcon[i].style.display='block';
    tab_list[i].classList.add('t_on');


    // 세번째 탭 클릭 시 부모 상자 높이 자연히 늘어나게
    if(i==2){
    tcon[i].parentElement.parentElement.parentElement.style.height='750px';
    }else{
    tcon[i].parentElement.parentElement.parentElement.style.height='700px';
    }
  });
});


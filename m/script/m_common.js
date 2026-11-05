// 변수 선언
const spans = document.querySelectorAll('.toggle span');
const toggleBtn = document.querySelector('.toggle');
const gnb = document.querySelector('.gnb');

// 토글 버튼 클릭
toggleBtn.addEventListener('click', function() {

  // active 클래스 추가 / 제거
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    // 토글 → X
    spans[0].classList.add('act_rotate01');
    spans[1].classList.add('act_none');
    spans[2].classList.add('act_rotate02');

    // 메뉴 열기
    gnb.style.display = 'block';

  } else {
    // X → 토글
    spans[0].classList.remove('act_rotate01');
    spans[1].classList.remove('act_none');
    spans[2].classList.remove('act_rotate02');

    // 메뉴 닫기
    gnb.style.display = 'none';
  }

});
const cursor = document.querySelector('.cursor');
const h1 = document.querySelector('h1');

const mouseMove = (e) => {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
};

window.addEventListener('mousemove', mouseMove);

h1.addEventListener('mouseenter', () => {
	cursor.style.transform = 'scale(10)';
});
h1.addEventListener('mouseleave', () => {
	cursor.style.transform = 'scale(1)';
});

var swiper = new Swiper('#visual', {
	effect: 'coverflow',
	// 어떤 이펙트 효과인지를 정합니다
	grabCursor: true, //커서의 모양이 손바닥 모양
	centeredSlides: true, //코버플로 이펙트가 된상태에서
	//활성화된 슬라이더의 위치가 어디에 배치할것인가에 대한 내용
	slidesPerView: 'auto',
	//브라우저의 크기에 따라서 보여지는 슬라이더의 갯수를 지정
	//자동으로 했으므로, 브라우저의 크기에 맞춰 5,3,1개로 보여집니다
	coverflowEffect: {
		rotate: 50, //슬라이드 회전각도
		stretch: -100, //슬라이드 간의 거리
		depth: 400, //슬라이더 회전각도의 3D효과의 깊이를 지정
		modifier: 1, //위의 여러 효과의 배수를 지정합니다
		slideShadows: true,
	},
	pagination: {
		//페이지네이션의 사용과 타입을 지정
		el: '.swiper-pagination',
		type: 'fraction', //타입에따라서 종류가 달라진다
	},
	navigation: {
		//좌우버튼 활성화 어떤 요소에 적용할것인지
		//클래스이름을 지정해주어야 사용할수있음
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true, //무한루프 슬라이드를 적용하겠다는 의미
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		// 자동슬라이딩 중에 사용자의 개입이 있을경우 자동슬라이드를 멈추려면
		//트루, 멈추지않고 계속 자동슬라이드를 하려면 펄스
	},
});

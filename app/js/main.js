
const body = document.querySelector('body');
const headerBurger = document.querySelector('.header__burger');
const headerHelp = document.querySelector('.header__help');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupBurger = document.querySelector('.burger-menu__container');
const registrButton = document.querySelector('.burger-menu__button');
const sumbol = document.getElementById('sumbol');
const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');



headerBurger.addEventListener('click', () =>  {
	headerBurger.classList.toggle('header__burger_active');
	popupBurger.classList.toggle('burger-menu__container_active');
})
headerHelp.addEventListener('click', () =>  {
	headerHelp.classList.toggle('header__help_active')
})
registrButton.addEventListener('click', () =>  {
	popup.classList.add('popup_active')
	body.classList.add('header__body_active')
})
popupClose.addEventListener('click', () =>  {
	popup.classList.remove('popup_active')
	body.classList.remove('header__body_active')
})

window.addEventListener('keydown', (e) =>{
  if (e.key === "Escape") {
    document.getElementById("popup").classList.remove("popup_active");
		document.getElementById("burger").classList.remove("burger-menu__container_active");
		document.getElementById("burger-button").classList.remove("header__burger_active");
		document.getElementById("body").classList.remove("header__body_active");
  }
});




titles.forEach(item => item.addEventListener('click', () => {
	const activeContent = document.querySelector('#' + item.dataset.tab);

	if (activeContent.classList.contains('active')) {
			activeContent.classList.remove('active');
			item.classList.remove('active');
			activeContent.style.maxHeight = 0;
	} else {
			contents.forEach(element => {
					element.classList.remove('active');
					element.style.maxHeight = 0;
			});

			titles.forEach(element => element.classList.remove('active'));

			item.classList.add('active');
			activeContent.classList.add('active');
			activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
	}
}))








 











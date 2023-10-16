
const headerBurger = document.querySelector('.header__burger');
const headerHelp = document.querySelector('.header__help');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupBurger = document.querySelector('.burger-menu__container');
const registrButton = document.querySelector('.burger-menu__button');
const sumbol = document.getElementById('sumbol');



headerBurger.addEventListener('click', () =>  {
	headerBurger.classList.toggle('header__burger_active');
	popupBurger.classList.toggle('burger-menu__container_active');
})
headerHelp.addEventListener('click', () =>  {
	headerHelp.classList.toggle('header__help_active')
})
registrButton.addEventListener('click', () =>  {
	popup.classList.add('popup_active')
})
popupClose.addEventListener('click', () =>  {
	popup.classList.remove('popup_active')
})

window.addEventListener('keydown', (e) =>{
  if (e.key === "Escape") {
    document.getElementById("popup").classList.remove("popup_active");
		document.getElementById("burger").classList.remove("burger-menu__container_active");
		document.getElementById("burger-button").classList.remove("header__burger_active");
  }
});

const eee = document.querySelectorAll('.accordion__title').forEach((el) =>{
	el.addEventListener('click', ()=>{
		let content = el.nextElementSibling;
		if (content.style.maxHeight){
			document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
			document.querySelectorAll('.accordion__sumbol').forEach((el) => el.style.transform= 'rotate(0deg)')
		}

		else{
			document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
			content.style.maxHeight = content.scrollHeight + 'px'
			document.querySelectorAll('.accordion__sumbol').forEach((el) => el.style.transform= 'rotate(180deg)')
		}

	})
})








 










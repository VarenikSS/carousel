(function() {
	

	function Carousel(settings){
		let _scope = {};
		_scope.setting = settings;
		_scope.selectors = {
			'next': document.querySelector(_scope.setting.next),
			'prev': document.querySelector(_scope.setting.prev),
			'display': document.querySelector(_scope.setting.display),
			'slides': document.querySelector(_scope.setting.display).children
		}
		_scope.lengthSlides = _scope.selectors.slides.length;
		_scope.windowWidth = window.innerWidth;
		let step = 0;
		let displaySize = 0; 
		document.addEventListener("DOMContentLoaded", function(event) {
			if(_scope.windowWidth > 950){
				_scope.mulItems(_scope.setting.multDisplay.laptop);
				displaySize = _scope.setting.multDisplay.laptop;

			}
			else if(_scope.windowWidth < 480){
				_scope.mulItems(_scope.setting.multDisplay.phone);
				displaySize = _scope.setting.multDisplay.phone;
			}
			else{
				_scope.mulItems(_scope.setting.multDisplay.tablet);
				displaySize = _scope.setting.multDisplay.tablet;
			}
		});
		window.addEventListener("resize", function(event) {
			width = event.target.outerWidth;
			if(width > 950){
				_scope.mulItems(3);
				displaySize = _scope.setting.multDisplay.laptop;
			}
			else if(width < 480){
				_scope.mulItems(1);
				displaySize = _scope.setting.multDisplay.phone;
			}
			else{
				_scope.mulItems(2);
				displaySize = _scope.setting.multDisplay.tablet;
			}
		});

		_scope.mulItems = function(n){
			_scope.selectors.display.style.width = (100 * _scope.lengthSlides)/n + '%';
		}
		_scope.selectors.next.addEventListener('click', function(){
			moveSlide(-1);
			if(step.toFixed(4) ==  -(100 - (displaySize -1)*100/_scope.lengthSlides ).toFixed(4) ){
				step=0;
				_scope.selectors.display.style["transform"] = 'translateX(0)';
			}

			
			
		});
		_scope.selectors.prev.addEventListener('click', function(){
			moveSlide(1);
			if(step.toFixed(4) > 0 ){
				step= -(100 - (displaySize)*100/_scope.lengthSlides );
				_scope.selectors.display.style["transform"] = ('translateX(-'+ (100 - (displaySize)*100/_scope.lengthSlides ) +'%)');
			}
		});

		function moveSlide(index=1) {
		 	step += index*100/_scope.lengthSlides;
			_scope.selectors.display.style["transform"] = 'translateX(' +  step + '%)';
		}
	}
	
	let crsl = new Carousel({
		"carousel": ".carousel-js", // класс карусели
        "next": ".carousel-js__next", // класс кнопки next
        "prev": ".carousel-js__prev", // класс кнопки previous
        "display": ".carousel-js__display", // класс контейнера слайдов
        "multDisplay":{       // количество слайдов при разном размере экрана
        	"laptop":3,
        	"tablet":2,
        	"phone":1
        }   
    });
})();
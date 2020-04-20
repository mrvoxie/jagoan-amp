function jagoampDarkMode(){document.querySelectorAll(".checkbox").forEach(function(e){"darkmode"===localStorage.getItem("mode")?e.checked=!0:e.checked=!1})}function darked(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("body").classList.add("jagoampDark"):document.querySelector("body").classList.remove("jagoampDark"),jagoampDarkMode()}function darkModeHide(){document.querySelectorAll(".darkjagoamp").forEach(function(e){e.parentNode.removeChild(e)})}jagoampDarkMode(),"undefined"==typeof jagoampSetting&&(jagoampSetting={jagoampDarkBtn:!0}),0==jagoampSetting.jagoampDarkBtn&&darkModeHide();

(localStorage.getItem('mode')) === 'darkmode' ? document.querySelector('body').classList.add('jagoampDark') : document.querySelector('body').classList.remove('jagoampDark')

	

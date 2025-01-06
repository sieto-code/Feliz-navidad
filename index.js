let scrollInterval;

function scrbutt() {
    scrollInterval = setInterval(() => {
        const container = document.querySelector(".master-container");
        container.scrollLeft += 700;
    }, 10);
}

function stopScroll() {
    clearInterval(scrollInterval);
}

function scrbutt2() {
    scrollInterval = setInterval(() => {
        const container = document.querySelector(".master-container");
        container.scrollLeft -= 700;
    }, 10);
}

function stopScroll() {
    clearInterval(scrollInterval);
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toggleMode() {
  const body = document.body;
  const isChecked = document.getElementById("modeSwitch").checked;
  const modeLabel = document.getElementById("modeLabel");
  var Header = document.querySelectorAll("a").length
  var secondHeader = document.querySelectorAll("a").length

  if (isChecked) {
    document.body.style.backgroundImage = "url('Rectangle2.png'), url('pool.jpg')";
    body.classList.add("dark-mode");
    document.querySelector('.video-container img').src="Rectangle1.png"
    document.querySelector("span").style.color="#f8f8f2";
    document.querySelector(".Button2").style.backgroundColor="white"
    document.querySelector('.carousel-container h1').style.color="white"
    document.querySelector('.carousel-container p').style.color="white"
    document.querySelector('.carousel-container a').style.color="white";
    document.querySelector('.karousel-container a').style.color="white";
    document.querySelector('.karousel-container h1').style.color="white"
    document.querySelector('.karousel-container p').style.color="white"
    document.querySelector('.meeting h1').style.color="white"
    document.querySelector('.meeting p').style.color="white"
    document.querySelector('.meeting>#contenter').style.color="white"
    document.querySelector('.dot#dote').style.backgroundColor="white"
    document.querySelector('#doter').style.backgroundColor="white"
    document.querySelector('.dot2#dotte').style.backgroundColor="white"
    document.querySelector('#dotter').style.backgroundColor="white"
    document.querySelector('.dot.active').style.backgroundColor="white"
    for (i=0;i<Header;i++){
      document.querySelectorAll(".Facilities a")[i].style.color="white";
    }
    document.querySelectorAll(".dropdown-content a")[0].style.color="#41597f";
    document.querySelectorAll(".dropdown-content a")[1].style.color="#41597f"; 
  } else {
    body.classList.remove("dark-mode");  
    document.querySelector('.carousel-container a').style.color="black";
    document.querySelector('.karousel-container a').style.color="black"; 
    document.querySelector('.dot#dote').style.backgroundColor="black"
    document.querySelector('#doter').style.backgroundColor="black"
    document.querySelector('.dot2#dotte').style.backgroundColor="black"
    document.querySelector('#dotter').style.backgroundColor="black"
    document.querySelector('.carousel-container h1').style.color="black"
    document.querySelector('.carousel-container p').style.color="black"
    document.querySelector('.karousel-container h1').style.color="black"
    document.querySelector('.karousel-container p').style.color="black"
    document.querySelector('.meeting h1').style.color="black"
    document.querySelector('.meeting p').style.color="black"
    document.querySelector('.meeting>#contenter').style.color="black"
    document.querySelector('.video-container img').src="Rectangle5.png"
    document.querySelector("span").style.color="#41597f";
    document.body.style.backgroundImage = "url('Rectangle4.png'), url('pool.jpg')";
    for (i=0;i<secondHeader;i++){
      document.querySelectorAll(".Facilities a")[i].style.color="#41597f";
    }
    document.querySelectorAll(".dropdown-content a")[0].style.color="#41597f";
    document.querySelectorAll(".dropdown-content a")[1].style.color="#41597f";
  }
}
function moveBackgroundImage() {
  document.body.style.backgroundImage = "url('')"
  document.querySelector('html').style.backgroundColor="transparent"
  document.querySelector('h1').style.color="transparent"
  document.querySelector('.award').style.color="transparent"
  document.querySelector('.note').style.color="transparent"
  document.querySelector('h2').style.color="transparent"
  document.querySelector('.watch').style.color="transparent"
  document.getElementById("playbutton").style.border="1.5px solid white"
  document.getElementById("playbutton").innerHTML=">"
  document.getElementById("playbutton").style.width="40px"
  document.getElementById("playbutton").style.fontSize="24px"
  document.getElementById("playbutton").style.height="40px"
  document.getElementById("playbutton").style.marginLeft="130px"
  document.getElementById("playbutton").style.marginBottom="130px"
  document.getElementById("playbutton").style.backgroundColor="transparent"
  document.querySelector('.Button').remove();
  document.getElementById('Button2').style.border="1.5px solid white"
  document.getElementById('Button2').style.backgroundColor="transparent"
  document.getElementById('Button2').style.color="white"
  document.getElementById('Button2').style.padding="2px"
  document.getElementById('Button2').style.marginLeft="150px"
  const object = document.getElementById('Button2');
  object.classList.add('move-up'); 
  const oter = document.getElementById('playbutton');
  oter.classList.add('mover'); 
  document.getElementById('outside-catering').remove();
  document.getElementById('air-conditioner').remove();
  document.getElementById('car-parking').remove();
  document.getElementById('semi').style.opacity="0.7"
  document.querySelector('#semi img').src="pool.jpg"
  document.getElementById('semi').style.width="125px"
  document.getElementById('semi').style.height="130px"
  document.getElementById('semi').style.border="2px solid red"
  document.getElementById('semi').style.cursor="pointer"
  document.getElementById('semi').addEventListener('click', switchClip2)
  document.getElementById('swimming').style.width="125px"
  document.querySelector('#swimming img').src="bed.jpg"
  document.getElementById('swimming').style.opacity="0.7"
  document.getElementById('swimming').style.height="130px"
  document.getElementById('swimming').style.cursor="pointer"
  document.getElementById('swimming').addEventListener('click', switchClip)
  document.getElementById('conference').style.width="125px"
  document.querySelector('#conference img').src="reception.jpg"
  document.getElementById('conference').style.opacity="0.7"
  document.getElementById('conference').style.height="130px"
  document.getElementById('conference').style.cursor="pointer"
  function switchClip3() {
    document.getElementById('conference').style.border="2px solid red"
    document.getElementById('swimming').style.border="none"
    document.getElementById('semi').style.border="none"
    document.querySelector('.video-container video').src="Reception-scene.mp4"
    document.querySelector('.video-container video').style.width="2000px" 
    document.querySelector('.video-container').style.width="1255px"
    document.querySelector('.video-container').style.height="2300px"        
  }
  document.getElementById("conference").addEventListener('click', switchClip3)
  const box = document.querySelector('.master-container')
  box.style.animation = 'moveToCenter 2s ease forwards';
  document.getElementById('open').remove();
  document.getElementById('rater1').remove();
  document.getElementById('friends').remove();
  document.getElementById('rater3').remove();
  document.getElementById('pool').remove();
  document.getElementById('rater2').remove();
  document.querySelector('.toggle-container').remove();
  document.querySelector('.controls').style.marginLeft="55%";
  document.querySelector('.controls').style.marginTop="3%";
  const control = document.querySelector('.controls')
  control.style.animation = 'moveControl 2s ease forwards';
  const container2 = document.querySelector('.video-container img');
  container2.style.animation = 'moveRect2 2s ease forwards';
  document.querySelector('.video-container video').src="Swimmingpool-scene.mp4"
  document.querySelector('.video-container video').style.width="2000px" 
  document.querySelector('.video-container').style.width="1255px"
  document.querySelector('.video-container').style.height="100vh"
  function switchClip() {
    document.getElementById('swimming').style.border="2px solid red"
    document.getElementById('semi').style.border="none" 
    document.getElementById('conference').style.border="none" 
    document.querySelector('.video-container video').src="bedroom-scene.mp4" 
    document.querySelector('.video-container video').style.width="2000px" 
    document.querySelector('.video-container').style.width="1255px"
    document.querySelector('.video-container').style.height="100vh"        
  }
  document.getElementById("playbutton").addEventListener('click', switchClip)
  function switchClip2() {
    document.getElementById('semi').style.border="2px solid red"
    document.getElementById('swimming').style.border="none" 
    document.getElementById('conference').style.border="none" 
    document.querySelector('.video-container video').src="Swimmingpool-scene.mp4"
    document.querySelector('.video-container video').style.width="2000px" 
    document.querySelector('.video-container').style.width="1255px"
    document.querySelector('.video-container').style.height="100vh"        
  }
  document.getElementById("Button2").addEventListener('click', switchClip2)
  var Header = document.querySelectorAll("a").length
  document.querySelector("span").style.color="#f8f8f2";
  for (i=0;i<Header;i++){
    document.querySelectorAll("a")[i].style.color="#f8f8f2";
  }
  document.querySelectorAll(".dropdown-content a")[0].style.color="#41597f";
  document.querySelectorAll(".dropdown-content a")[1].style.color="#41597f";
  document.querySelector('.carousel-container a').style.color="black";
  document.querySelector('.karousel-container a').style.color="black"; 
}
document.getElementById('playbutton').addEventListener('click', moveBackgroundImage)

const video = document.getElementById('backgroundVideo');
    const playPauseButton = document.getElementById('playPauseButton');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    playPauseButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseButton.textContent = '▐▐';
         document.querySelector('#playPauseButton').style.fontSize='12px'
         document.querySelector('#playPauseButton').style.paddingLeft='0'
      } else {
        video.pause();
        playPauseButton.textContent = '▶';
        document.querySelector('#playPauseButton').style.fontSize='22px'
        document.querySelector('#playPauseButton').style.paddingLeft='10px'
      }
    });

    video.addEventListener('timeupdate', () => {
      const currentTime = video.currentTime;
      const duration = video.duration;

      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    });

    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = offsetX / progressBar.offsetWidth;
      video.currentTime = percentage * video.duration;
    });

    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    let currentIndex = 0;
    const totalSlides = dots.length;

    function slideTo(index) {
        carousel.style.transform = `translateX(-${index * (75 / 3 + 7)}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slideTo(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slideTo(currentIndex);
    }

    leftButton.addEventListener('click', prevSlide);
    rightButton.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            slideTo(currentIndex);
        });
    });

    setInterval(nextSlide, 3000);

    const karousel = document.querySelector('.karousel');
    const dotes = document.querySelectorAll('.dot2');
    const leftButton2 = document.querySelector('.left2-button');
    const rightButton2 = document.querySelector('.right2-button');
    let currentIndex2 = 0;
    const totalSlides2 = dotes.length;

    function slideTo2(index) {
        karousel.style.transform = `translateX(-${index * (75 / 3 + 7)}%)`;
        updateDots2();
    }

    function updateDots2() {
        dotes.forEach((dot2, i) => dot2.classList.toggle('active', i === currentIndex2));
    }

    function nextSlide2() {
        currentIndex2 = (currentIndex2 + 1) % totalSlides;
        slideTo2(currentIndex2);
    }

    function prevSlide2() {
        currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
        slideTo2(currentIndex2);
    }

    leftButton2.addEventListener('click', prevSlide2);
    rightButton2.addEventListener('click', nextSlide2);

    dotes.forEach((dot2, index) => {
        dot2.addEventListener('click', () => {
            currentIndex2 = index;
            slideTo(currentIndex2);
        });
    });

    setInterval(nextSlide2, 3000);

    let recentIndex = 0;
        const indicators = document.querySelectorAll('.glide-button');

        function updateGlideButtons(index) {
            indicators.forEach((button, i) => {
                button.classList.toggle('active', i === index);
            });
        }

        function showSlide(index) {
            const slides = document.querySelectorAll('.carosel-item');
            const totalSlides = 2;

            if (index < 0) {
                recentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                recentIndex = 0;
            } else {
                recentIndex = index;
            }

            const offset = -recentIndex * (370);
            document.querySelector('.carosel-images').style.transform = `translateX(${offset}px)`;
            updateGlideButtons(recentIndex);
        }

        function nextSlider() {
            showSlide(recentIndex + 1);
        }
        updateGlideButtons(recentIndex);
        

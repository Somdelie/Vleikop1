$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.navbar').toggleClass("show");
  });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

    
//-- Initialize Swiper 

 //Javacript for the scroll indicator bar


  //Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  if(menuBtn){

    menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
    });
  }

  if(closeBtn){
    closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
    });
  }

  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')
  
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal1 = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay?.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal1.active')
    modals.forEach(modal1 => {
      closeModal(modal1)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal1 = button.closest('.modal1')
      closeModal(modal)
    })
  })
  
  function openModal(modal1) {
    if (modal1 == null) return
    modal1.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal1) {
    if (modal1 == null) return
    modal1.classList.remove('active')
    overlay.classList.remove('active')
  }

  function closeModal(modal1){
    if(modal1 == null) return
    modal1.classList.remove('active')
    overlay.classList.remove('active')
  }

  const toTop = document.querySelector(".to-top");
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })



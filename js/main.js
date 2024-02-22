window.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelector(".footer__top-btn");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".modal__form-btn--close");
  

  modalBtn.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
   
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
   
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
     
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  
});

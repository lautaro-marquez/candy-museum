// $(function() {
//   $(document).scroll(function() {
//     let $nav = $("#mainNavbar");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

let primaryBtn = document.querySelector(".btn-primary");

const colorChange = () => {
    console.log("click");
};

primaryBtn.addEventListener("click", colorChange)


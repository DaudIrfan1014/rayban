var cursor = document.querySelector(".cursor");
document.querySelector(".hero").addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x,
  });
});
document.querySelector(".hero").addEventListener("mouseenter", function (dets) {
  cursor.style.display = "block";
});
document.querySelector(".hero").addEventListener("mouseleave", function (dets) {
  cursor.style.display = "none ";
});

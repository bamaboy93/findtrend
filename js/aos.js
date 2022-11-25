AOS.init();

AOS.init({
  disable: function () {
    let maxWidth = 1280;
    return window.innerWidth < maxWidth;
  },
});

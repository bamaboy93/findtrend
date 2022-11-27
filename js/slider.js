(() => {
  document
    .querySelector("[data-checkbox]")
    .addEventListener("click", function (ev) {
      document.querySelector("[data-text-monthly]").style.color = this.checked
        ? "#8b8b8b"
        : "";
      document.querySelector("[data-text-yearly]").style.color = this.checked
        ? "#ffffff"
        : "";
    });
})();

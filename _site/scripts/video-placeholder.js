document.querySelectorAll("[data-video]").forEach(wrapper => {
  const placeholder = wrapper.querySelector(".video-placeholder");
  const iframe = wrapper.querySelector("[data-iframe]");

  placeholder.addEventListener("click", () => {
    iframe.style.display = "block";

    // !!! POUŽIJ EMBED URL
    iframe.src = "https://www.youtube-nocookie.com/embed/3WAxkg9NzL8?autoplay=1";

    placeholder.remove();
  });
});

document.querySelectorAll("[data-video]").forEach(wrapper => {
  const placeholder = wrapper.querySelector(".video-placeholder");
  const iframe = wrapper.querySelector("[data-iframe]");

  placeholder.addEventListener("click", () => {
    iframe.style.display = "block";

    // !!! POUŽIJ EMBED URL
    iframe.src = "https://www.youtube.com/embed/jiSbu1DT_PQ?modestbranding=1&rel=0&color=white"

    placeholder.remove();
  });
});

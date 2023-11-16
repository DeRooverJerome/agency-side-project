document.querySelectorAll(".resume_container p").forEach((p) => {
  const originalText = p.textContent;
  const truncatedText = originalText.split(" ").slice(0, 6).join(" ") + "...";
  p.textContent = truncatedText;
  p.addEventListener("click", () => {
    if (p.textContent === truncatedText) {
      p.textContent = originalText;
    } else {
      p.textContent = truncatedText;
    }
  });
});

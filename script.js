const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const progress = document.querySelector(".progress");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

const updatePage = () => {
  nav.classList.toggle("scrolled", scrollY > 20);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? scrollY / max * 100 : 0}%`;
};
addEventListener("scroll", updatePage, { passive: true });
updatePage();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.querySelectorAll(".case").forEach((card, index) => {
  const correct = ["living", "not", "edge"][index];
  const result = card.querySelector(".case-result");
  card.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const isCorrect = button.dataset.answer === correct;
    result.className = `case-result ${isCorrect ? "correct" : "retry"}`;
    result.textContent = isCorrect
      ? "✓ Strong classification. Your evidence matches the system model."
      : "Try again: test cells, independent metabolism and genetic continuity.";
  }));
});

const revealAnswer = document.querySelector(".reveal-answer");
if (revealAnswer) {
  revealAnswer.addEventListener("click", () => {
    const framework = document.querySelector(".answer-framework");
    framework.hidden = !framework.hidden;
    revealAnswer.textContent = framework.hidden ? "Reveal answer framework" : "Hide answer framework";
  });
}

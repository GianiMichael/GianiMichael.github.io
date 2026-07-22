// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---- The wire draws itself as you scroll down the page ----
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wirePaths = document.querySelectorAll('.wire__path');

if (!reduced && wirePaths.length) {
  wirePaths.forEach((p) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
  });

  function drawWire() {
    const doc = document.documentElement;
    const progress = Math.min(
      (doc.scrollTop + window.innerHeight) / doc.scrollHeight,
      1
    );
    wirePaths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDashoffset = len * (1 - progress);
    });
  }

  drawWire();
  window.addEventListener('scroll', drawWire, { passive: true });
  window.addEventListener('resize', drawWire);
}

// ---- Meter count-up on first view ----
const meterValues = document.querySelectorAll('.meter [data-count]');

function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (reduced) { el.textContent = target.toLocaleString(); return; }
  const duration = 900;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); }
  });
}, { threshold: 0.6 });

meterValues.forEach((el) => io.observe(el));

// ---- Resume link guard until the PDF is uploaded ----
const resumeLink = document.getElementById('resumeLink');
resumeLink.addEventListener('click', (e) => {
  if (resumeLink.getAttribute('href') === '#') {
    e.preventDefault();
    alert('Upload your resume to assets/resume.pdf, then set this link\'s href in index.html (id="resumeLink").');
  }
});

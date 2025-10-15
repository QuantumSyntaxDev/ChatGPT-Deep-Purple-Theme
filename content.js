const style = document.createElement("style");
style.textContent = `
  :root {
    --bg-primary: #000000 !important;
    --default-theme-secondary-btn-bg: #8000ff !important;
  }
  @media (prefers-reduced-transparency: reduce) {
    .dark {
      --message-surface: #8000ff !important;
    }
  }
`;
document.head.appendChild(style);

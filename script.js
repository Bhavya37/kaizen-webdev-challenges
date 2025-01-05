document.addEventListener("DOMContentLoaded", () => {
  const qrInput = document.getElementById("qrInput");
  const generateBtn = document.getElementById("generateBtn");
  const qrCode = document.getElementById("qrCode");
  const downloadBtn = document.getElementById("downloadBtn");
  const copyLinkBtn = document.getElementById("copyLinkBtn");
  const qrSize = document.getElementById("qrSize");
  const fgColor = document.getElementById("fgColor");
  const bgColor = document.getElementById("bgColor");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  let currentQRCode;

  // Generate QR Code
  generateBtn.addEventListener("click", () => {
    const text = qrInput.value.trim();
    const size = parseInt(qrSize.value, 10);
    const foreground = fgColor.value;
    const background = bgColor.value;

    if (!text) {
      alert("Please enter some text or URL!");
      return;
    }

    qrCode.innerHTML = ""; // Clear previous QR code
    currentQRCode = new QRCode(qrCode, {
      text: text,
      width: size,
      height: size,
      colorDark: foreground,
      colorLight: background,
    });

    downloadBtn.classList.remove("hidden");
    copyLinkBtn.classList.remove("hidden");
  });

  // Download QR Code
  downloadBtn.addEventListener("click", () => {
    const img = qrCode.querySelector("img");
    if (img) {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = "qr-code.png";
      link.click();
    }
  });

  // Copy QR Link
  copyLinkBtn.addEventListener("click", () => {
    const img = qrCode.querySelector("img");
    if (img) {
      navigator.clipboard.writeText(img.src).then(() => {
        alert("QR Code link copied to clipboard!");
      });
    }
  });

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});

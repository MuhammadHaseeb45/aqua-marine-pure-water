/*
  Aqua Marine Pure Water website settings
  IMPORTANT: Replace these placeholder values before publishing.
*/
const SITE_CONFIG = {
  // Pakistan WhatsApp format: country code + number, digits only, no +, spaces or dashes.
  // Example format only: 923001234567
  whatsappNumber: "923241767530",
  phoneDisplay: "Add your phone number",
  businessAddress: "Lahore, Pakistan",
  // Replace with your exact Google Maps share URL when available.
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lahore%2C%20Pakistan"
};

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

function whatsappReady() {
  return /^\d{10,15}$/.test(SITE_CONFIG.whatsappNumber) &&
    !SITE_CONFIG.whatsappNumber.includes("X");
}

function openWhatsApp(message) {
  if (!whatsappReady()) {
    showToast("Please add your real WhatsApp number in script.js before using order buttons.");
    return;
  }
  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const message = `Hello Aqua Marine Pure Water! I would like to enquire/order:\nProduct: ${product}\nQuantity: \nDelivery area in Lahore: \nPlease confirm the current price and availability.`;
    openWhatsApp(message);
  });
});

document.querySelectorAll("[data-whatsapp-general]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const message = "Hello Aqua Marine Pure Water! I would like to enquire about water products and home/office delivery in Lahore.\nProduct: \nQuantity: \nDelivery area: \nPlease share current prices and availability.";
    openWhatsApp(message);
  });
});

document.querySelectorAll(".config-phone").forEach((element) => {
  element.textContent = SITE_CONFIG.phoneDisplay;
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

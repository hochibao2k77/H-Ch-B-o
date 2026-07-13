// script.js - Logic dùng chung cho website AutoShow

// ----- Helpers -----
function formatPrice(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function createCarCard(car) {
  return `
    <div class="product-card" data-type="${car.type}">
      <img src="${car.image}" alt="${car.name}" />
      <div class="product-body">
        <p class="badge">${car.badge}</p>
        <h3>${car.name}</h3>
        <p class="product-desc">${car.desc}</p>
        <div class="price">${formatPrice(car.price)}</div>
        <a class="btn primary" href="chi-tiet.html?id=${car.id}">Xem chi tiết</a>
      </div>
    </div>
  `;
}

function renderCars(containerId, filter = "all", limit = null) {
  const container = document.getElementById(containerId);
  if (!container || typeof CARS === "undefined") return;

  let list = filter === "all" ? CARS : CARS.filter((c) => c.type === filter);
  if (limit) list = list.slice(0, limit);

  container.innerHTML = list.length
    ? list.map(createCarCard).join("")
    : `<p style="color:#94a3b8">Không tìm thấy xe phù hợp.</p>`;
}

function setupFilters(containerId) {
  const filterButtons = document.querySelectorAll(".filter");
  if (!filterButtons.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCars(containerId, btn.dataset.filter);
    });
  });
}

function setupContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelectorAll("input, textarea").forEach((field) => {
      if (field.hasAttribute("required") && !field.value.trim()) {
        field.style.borderColor = "#f87171";
      } else {
        field.style.borderColor = "";
      }
    });

    const requiredFilled = [...form.querySelectorAll("[required]")].every(
      (f) => f.value.trim() !== ""
    );

    if (!requiredFilled) return;

    alert("Cảm ơn bạn! Yêu cầu tư vấn đã được gửi, AutoShow sẽ liên hệ sớm nhất.");
    form.reset();
  });
}

function setupMenuToggle(buttonId) {
  const menuBtn = document.getElementById(buttonId);
  const nav = document.querySelector("nav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

// ----- Init on page load -----
document.addEventListener("DOMContentLoaded", () => {
  // Trang chủ / giới thiệu: lưới xe nổi bật (giới hạn hoặc đầy đủ) + bộ lọc
  if (document.getElementById("carGrid")) {
    const limit = document.getElementById("carGrid").dataset.limit;
    renderCars("carGrid", "all", limit ? Number(limit) : null);
    setupFilters("carGrid");
  }

  // Trang sản phẩm: lưới đầy đủ tất cả xe + bộ lọc
  if (document.getElementById("productGrid")) {
    renderCars("productGrid", "all");
    setupFilters("productGrid");
  }

  setupContactForm("contactForm");
  setupMenuToggle("menuBtn");
});

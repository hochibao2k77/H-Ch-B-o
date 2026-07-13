// data.js - Dữ liệu xe dùng chung cho toàn bộ website AutoShow

const CARS = [
  {
    id: "camry-2025",
    name: "Toyota Camry 2025",
    brand: "Toyota",
    type: "sedan",
    price: 1220000000,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    badge: "Xe nổi bật",
    desc: "Sedan cao cấp, vận hành êm ái, nhiều công nghệ an toàn hiện đại."
  },
  {
    id: "vios-2025",
    name: "Toyota Vios 2025",
    brand: "Toyota",
    type: "sedan",
    price: 478000000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
    badge: "Bán chạy",
    desc: "Sedan hạng B tiết kiệm nhiên liệu, phù hợp gia đình trẻ."
  },
  {
    id: "fortuner-2025",
    name: "Toyota Fortuner 2025",
    brand: "Toyota",
    type: "suv",
    price: 1105000000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    badge: "SUV 7 chỗ",
    desc: "SUV mạnh mẽ, gầm cao, thích hợp gia đình đi đường dài."
  },
  {
    id: "cx5-2025",
    name: "Mazda CX-5 2025",
    brand: "Mazda",
    type: "suv",
    price: 899000000,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
    badge: "Thiết kế KODO",
    desc: "SUV đô thị sang trọng, vận hành linh hoạt, tiết kiệm xăng."
  },
  {
    id: "vf8-2025",
    name: "VinFast VF8 2025",
    brand: "VinFast",
    type: "electric",
    price: 1090000000,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    badge: "Xe điện",
    desc: "SUV điện thông minh, vận hành êm, chi phí sử dụng thấp."
  },
  {
    id: "model3-2025",
    name: "Tesla Model 3 2025",
    brand: "Tesla",
    type: "electric",
    price: 1450000000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    badge: "Công nghệ cao",
    desc: "Sedan điện hiệu suất cao, tự lái hỗ trợ, sạc nhanh."
  },
  {
    id: "civic-2025",
    name: "Honda Civic 2025",
    brand: "Honda",
    type: "sedan",
    price: 730000000,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
    badge: "Thể thao",
    desc: "Sedan thể thao, thiết kế trẻ trung, cảm giác lái phấn khích."
  },
  {
    id: "cr-v-2025",
    name: "Honda CR-V 2025",
    brand: "Honda",
    type: "suv",
    price: 1099000000,
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=800&q=80",
    badge: "Không gian rộng",
    desc: "SUV 5+2 chỗ linh hoạt, tiện nghi cho cả gia đình lớn."
  },
  {
    id: "ev6-2025",
    name: "Kia EV6 2025",
    brand: "Kia",
    type: "electric",
    price: 1250000000,
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&q=80",
    badge: "Sạc siêu nhanh",
    desc: "Crossover điện thiết kế tương lai, quãng đường vận hành xa."
  }
];

// Cho phép dùng ở cả trình duyệt (script thường) lẫn khi cần export
if (typeof module !== "undefined" && module.exports) {
  module.exports = CARS;
}

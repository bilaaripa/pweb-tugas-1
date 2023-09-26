// Ambil elemen dengan kelas .custom-nav1
const customNav1 = document.querySelector(".custom-nav1");

// Tambahkan event listener untuk mendeteksi saat halaman discroll
window.addEventListener("scroll", function () {
  // Jika scroll mencapai ambang tertentu (misalnya 100 piksel dari atas), sembunyikan elemen
  if (window.scrollY >= 100) {
    customNav1.style.display = "none";
  } else {
    customNav1.style.display = "block"; // Tampilkan elemen kembali jika scroll ke atas
  }
});

const navbar = document.querySelector(".navbar");

navbar.addEventListener("mouseenter", function () {
  navbar.style.backgroundColor = "blue"; // Ganti warna latar belakang saat mouse masuk
});

navbar.addEventListener("mouseleave", function () {
  navbar.style.backgroundColor = "transparent"; // Kembalikan warna latar belakang saat mouse keluar
});

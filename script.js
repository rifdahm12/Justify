// NAVBAR
// Untuk burger menu
function toggleMenu(){
    const backdrop = document.getElementById("backdrop");
    const overlay = document.getElementById("overlay");
    const icon = document.getElementById("burger");

    backdrop.classList.toggle("active");
    overlay.classList.toggle("active");

    if (overlay.classList.contains("active")) {
        icon.src = "../image/icon/icon-close-putih.svg";
    }
    else {
        icon.src = "../image/icon/icon-burger.svg";
    }
}

// AUTO ACTIVE LINK NAVBAR
const link = document.querySelectorAll(".menu-desktop a, .menu-overlay a");
link.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// mixmatch
let pilihanatasan = "";
let pilihanbawahan = "";

function pilihItem(elemen, kategori) {
  // Semua gambar dalam kategori yang sama (atasan atau bawahan)
  const semuaPilihan = document.querySelectorAll("." + kategori);

  // Ini penting supaya kalau user ganti pilihan, garis di baju sebelumnya hilang
  //  Hapus class 'terpilih' dari SEMUA gambar di kategori tersebut
  semuaPilihan.forEach((img) => {
    img.classList.remove("terpilih");
  });
  // Tambahkan class 'terpilih' HANYA pada gambar yang baru saja diklik
  elemen.classList.add("terpilih");

  // 4. Simpan alamat gambarnya untuk proses Mix nanti
  if (kategori === "atasan") {
    pilihanatasan = elemen.src;
  } else {
    pilihanbawahan = elemen.src;
  }
}

// 3. FUNGSI GABUNGKAN (TOMBOL MIX)
function gabungkanStyle() {
  if (pilihanatasan === "" || pilihanbawahan === "") {
    alert("Pilih dulu atasan dan bawahannya!");
    return;
  }

  const areaHasil = document.getElementById("result-display");
  const kotakGambar = document.getElementById("combined-preview");

  // Masukkan gambar ke dalam kotak yang sudah di-setting vertikal di CSS
  kotakGambar.innerHTML = `
        <img src="${pilihanatasan}" alt="Atasan Terpilih">
        <img src="${pilihanbawahan}" alt="Bawahan Terpilih">
    `;

  areaHasil.style.display = "block";

  // Scroll otomatis ke hasil agar user tidak bingung
  areaHasil.scrollIntoView({ behavior: "smooth" });
}

const cards = document.querySelectorAll(".products .card");
const details = document.getElementById("overlay-details");
const closeBtn = document.getElementById("closeBtn");

// buka modal
cards.forEach((card) => {
  card.addEventListener("click", () => {
    details.style.display = "flex";
  });
});

// tutup modal (klik X)
closeBtn.addEventListener("click", () => {
  details.style.display = "none";
});

// biar pas dipilih active
const sizes = document.querySelectorAll(".size-list span");

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach(s => s.classList.remove("active"));
    size.classList.add("active");
  });
});
// SCRIPT UNTUK NAVBAR
// Untuk burger menu
function toggleMenu(){
    const backdrop = document.getElementById("backdrop");
    const overlay = document.getElementById("overlay");
    const icon = document.getElementById("burger");

    backdrop.classList.toggle("active");
    overlay.classList.toggle("active");

    if (overlay.classList.contains("active")) {
        icon.src = "../image/icon-close.svg";
    }
    else {
        icon.src = "../image/icon-burger.svg";
    }
}

// AUTO ACTIVE LINK NAVBAR
const link = document.querySelectorAll(".menu-desktop a, .menu-overlay a");
link.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// VARIABEL UNTUK MENYIMPAN PILIHAN
let pilihanAtasan = "";
let pilihanBawahan = "";

// 1. FUNGSI LOAD FOOTER (Agar muncul di semua halaman)
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    const placeholder = document.getElementById("footer-placeholder");
    if (placeholder) placeholder.innerHTML = data;
  });

// 2. FUNGSI MEMILIH GAMBAR
function pilihItem(elemen, kategori) {
  // 1. Cari semua gambar dalam kategori yang sama (atasan atau bawahan)
  const semuaPilihan = document.querySelectorAll("." + kategori);

  // 2. Hapus class 'terpilih' dari SEMUA gambar di kategori tersebut
  // Ini penting supaya kalau user ganti pilihan, garis di baju sebelumnya hilang
  semuaPilihan.forEach((img) => {
    img.classList.remove("terpilih");
  });

  // 3. Tambahkan class 'terpilih' HANYA pada gambar yang baru saja diklik
  elemen.classList.add("terpilih");

  // 4. Simpan alamat gambarnya untuk proses Mix nanti
  if (kategori === "atasan") {
    pilihanAtasan = elemen.src;
  } else {
    pilihanBawahan = elemen.src;
  }
}

// 3. FUNGSI GABUNGKAN (TOMBOL MIX)
function gabungkanStyle() {
  if (pilihanAtasan === "" || pilihanBawahan === "") {
    alert("Pilih dulu atasan dan bawahannya!");
    return;
  }

  const areaHasil = document.getElementById("result-display");
  const kotakGambar = document.getElementById("combined-preview");

  // Masukkan gambar ke dalam kotak yang sudah di-setting vertikal di CSS
  kotakGambar.innerHTML = `
        <img src="${pilihanAtasan}" alt="Atasan Terpilih">
        <img src="${pilihanBawahan}" alt="Bawahan Terpilih">
    `;

  areaHasil.style.display = "block";

  // Scroll otomatis ke hasil agar user tidak bingung
  areaHasil.scrollIntoView({ behavior: "smooth" });
}

const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// buka modal
cards.forEach((card) => {
  card.addEventListener("click", () => {
    overlay.style.display = "flex";
  });
});

// tutup modal (klik X)
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// optional: klik luar modal buat close
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

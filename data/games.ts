export type Pilar = {
  nama: string
  desc: string
  warna: string
}

export type Topik = {
  label: string
  jumlah: number
}

export type Game = {
  slug: string
  title: string
  tagline: string
  file: string
  thumb: string
  mapel: string
  kelas: string
  format: string
  institutions: string
  accent: "lime" | "violet"
  ringkasan: string
  caraMain: string[]
  fitur: string[]
  pilar?: Pilar[]
  topik?: Topik[]
}

export const games: Game[] = [
  {
    slug: "binar-seberang",
    title: "Binar Seberang",
    tagline: "Lompat 100 ubin, kunci 4 pilar Berpikir Komputasional",
    file: "/game/binar-seberang.html",
    thumb: "/game/thumb-binar-seberang.jpg",
    mapel: "Informatika",
    kelas: "Kelas 9",
    format: "Platformer 3D",
    institutions: "SMP Negeri 1 Genteng",
    accent: "violet",
    ringkasan:
      "Karakter maskot melompat satu ubin demi satu ubin menyeberangi jalan raya, rel kereta, dan sungai sampai garis finish di ubin ke-100. Di sepanjang jalur ada Kotak Misteri berisi soal 4 pilar Berpikir Komputasional. Menjawab dengan benar memberi power-up agar rintangan lebih mudah dilewati.",
    caraMain: [
      "Gunakan tombol panah atau WASD untuk melompat satu ubin setiap ditekan.",
      "Hindari mobil di jalan raya, kereta di rel, dan sungai tanpa penyangga.",
      "Ketuk kotak kuning untuk menjawab soal dan mendapatkan power-up.",
      "Tekan tombol 1, 2, atau 3 untuk mengaktifkan power-up yang didapat.",
      "Tekan P untuk menjeda. Di layar sentuh: ketuk untuk maju, geser untuk arah lain.",
    ],
    fitur: [
      "20 soal bank dengan 3 tipe pertanyaan",
      "4 pilar Berpikir Komputasional",
      "Mode latihan dengan 7 misi",
      "Garis finish di ubin ke-100",
      "Kontrol keyboard dan layar sentuh",
      "Skor terbaik tersimpan di perangkat",
      "Tutorial dan panduan langsung di layar",
      "Efek suara dan umpan balik visual",
    ],
    pilar: [
      {
        nama: "Dekomposisi",
        desc: "Memecah masalah besar menjadi bagian kecil.",
        warna: "#F28C28",
      },
      {
        nama: "Pengenalan Pola",
        desc: "Menemukan keteraturan dan pengulangan.",
        warna: "#7C5CFC",
      },
      {
        nama: "Abstraksi",
        desc: "Menyaring yang penting, abaikan yang tidak relevan.",
        warna: "#E5484D",
      },
      {
        nama: "Algoritma",
        desc: "Menyusun langkah logis untuk mencapai tujuan.",
        warna: "#30A0C8",
      },
    ],
  },
  {
    slug: "zombie-defense",
    title: "Zombie Defense",
    tagline: "Pertahanan base lewat kuis Informatika Kelas 9",
    file: "/game/zombie-defense-quiz.html",
    thumb: "/game/thumb-zombie-defense.jpg",
    mapel: "Informatika",
    kelas: "Kelas 9",
    format: "Tower defense kuis",
    institutions: "Pelatihan IFP",
    accent: "lime",
    ringkasan:
      "Battle kuis tim bergaya tower defense. Semua tim berlomba melindungi base yang sama dari gelombang zombie, dan zombie dikalahkan dengan menjawab soal. Skor tiap tim dijumlahkan, jadi kuis ini menguji kerja sama tim, bukan sekadar berebut jawaban tercepat.",
    caraMain: [
      "Pilih jumlah tim: 2, 3, atau 4 tim.",
      "Pilih tingkat kesulitan: Easy, Normal, atau Hard.",
      "Tim mengambil soal bergiliran dari bank soal yang diacak per tim.",
      "Jawaban benar menaikkan skor tim dan membantu kill, jawaban salah memberi ruang bagi tim lain untuk maju.",
      "Base diserang selama 5 gelombang. Tim yang paling banyak berkontribusi menang.",
    ],
    fitur: [
      "95 soal tersebar di 8 topik Informatika",
      "2 sampai 4 tim dengan giliran soal bergiliran",
      "3 tingkat kesulitan: Easy, Normal, dan Hard",
      "5 gelombang dengan HP base 800",
      "Badge dan power-up",
      "Visual neon bergaya arcade",
      "Tanpa server, cukup satu file HTML",
      "Bisa dibuka di HP dan proyektor",
    ],
    topik: [
      { label: "Etika AI", jumlah: 17 },
      { label: "Berpikir Komputasional", jumlah: 16 },
      { label: "Google Services", jumlah: 15 },
      { label: "Internet", jumlah: 15 },
      { label: "Microsoft Word", jumlah: 14 },
      { label: "Pemrograman Visual", jumlah: 8 },
      { label: "Teknologi IFP", jumlah: 6 },
      { label: "Aplikasi Perkantoran", jumlah: 4 },
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug)
}

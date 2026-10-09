export type Generator = {
  slug: string
  nama: string
  versi: string
  file: string
  ringkasan: string
  cocokUntuk: string
  parameter: string[]
  output: string
  catatan: string[]
  accent: "grape" | "brand" | "ember"
}

export const generators: Generator[] = [
  {
    slug: "generator-universal-11-mapel",
    nama: "Generator Master Prompt Gim Edukasi Universal",
    versi: "10 model game · 11 mapel",
    file: "/prompt/generator-universal-11-mapel.html",
    ringkasan:
      "Paling ringan dan paling cepat. Guru memilih kelas, mata pelajaran, topik, jumlah soal, tingkat kesulitan, dan platform AI — lalu langsung mendapat 10 prompt berbeda sekaligus, satu untuk setiap model game.",
    cocokUntuk:
      "Guru yang ingin cepat mencoba beberapa jenis permainan dalam satu kali kerja, lalu memilih yang paling cocok dengan kelasnya.",
    parameter: [
      "Kelas dan jenjang (SMP VII sampai IX, Fase D)",
      "Mata pelajaran (11 pilihan)",
      "Topik atau materi",
      "Jumlah soal dan tantangan",
      "Tingkat kesulitan (mudah, sedang, sulit, campuran)",
      "Platform AI target",
    ],
    output: "10 prompt siap tempel, masing-masing untuk model game berbeda",
    catatan: [
      "Sepenuhnya mandiri, tidak memuat pustaka atau font dari luar",
      "Tombol Copy Prompt di setiap hasil",
      "Semua 10 prompt ikut diperbarui saat parameter diubah",
      "10 model game: Kotak Misteri, Misi Pengembaraan, Escape Room, Roda Putar, Padanan Memori, Pertandingan Kuis, Susun dan Urutkan, Kelompokkan Cepat, Benar atau Salah, Papan Tantangan",
    ],
    accent: "brand",
  },
  {
    slug: "generator-ifp-mgmp",
    nama: "Master Prompt Generator — Game Edukasi IFP",
    versi: "v3 · AI Prompt Engine",
    file: "/prompt/generator-ifp-mgmp.html",
    ringkasan:
      "Dirancang khusus untuk layar IFP. Lima parameter menghasilkan prompt yang sangat presisi, lengkap dengan detail gameplay, aturan poin, timer, dan timbre visual supaya hasilnya benar-benar tampil di layar interaktif.",
    cocokUntuk:
      "Guru Informatika dan MGMP yang butuh game yang langsung jalan di IFP, tanpa perlu mengubah apa pun.",
    parameter: [
      "Mata pelajaran (10 pilihan, Informatika sebagai bawaan)",
      "Kelas dan jenjang (SD sampai SMA/SMK)",
      "Genre atau platform game (12 pilihan)",
      "Konfigurasi tim, timer, dan tema visual",
      "Topik dan kompetensi dasar",
    ],
    output: "Prompt AI presisi, bisa di-regenerate, disalin, atau diunduh sebagai berkas .txt",
    catatan: [
      "12 genre: Zombie Tower Defense, Puzzle Reveal, Word Scramble, Memory Card Match, Spin Wheel Quiz, Space Shooter, Escape Room, Archery Quiz, Whack-a-Mole, Quiz Battle RPG, Endless Runner, Trivia Board Game",
      "Preset soal siap pakai untuk topik Informatika",
      "Pilihan jumlah tim, durasi timer, dan tema terang atau gelap",
      "Bisa dipakai untuk kelas noninformatika lewat pilihan mata pelajaran lain",
    ],
    accent: "grape",
  },
  {
    slug: "generator-edukasi-v2",
    nama: "Generator Master Prompt Edukasi",
    versi: "v2.0 · Professional",
    file: "/prompt/generator-edukasi-v2.html",
    ringkasan:
      "Paling lengkap dan paling terstruktur. Tujuh parameter mencakup gaya seni visual, metode pedagogis, kurva kesulitan, dan fitur pencegahan error — bukan sekadar menulis soal, tapi merancang pengalaman belajar.",
    cocokUntuk:
      "Guru yang butuh hasil berbeda antara kelas satu dan kelas lain, dengan aturan main yang jelas dan prompt yang bisa langsung diserahkan ke developer.",
    parameter: [
      "Mata pelajaran dan target jenjang kelas",
      "Topik, materi, dan kompetensi dasar",
      "Genre game edukasi",
      "Pendekatan pedagogis (PBL, inquiry, drill and practice, algorithmic thinking)",
      "Gaya seni dan visual",
      "Kurva kesulitan dan alur level",
      "Target platform dan fitur pencegahan error",
    ],
    output: "Struktur Prompt Master Terstandarisasi dalam 7 blok",
    catatan: [
      "Urutan blok prompt sudah disiapkan agar tetap lengkap",
      "Termasuk blok anti-error: petunjuk single-file HTML5, try/catch, dan fallback animasi",
      "Ada blok pedagogi nyata tentang kurva kesulitan dan tujuan belajar",
      "Memuat Tailwind dan ikon dari CDN, jadi butuh koneksi internet",
    ],
    accent: "ember",
  },
]

export function getGenerator(slug: string) {
  return generators.find((g) => g.slug === slug)
}

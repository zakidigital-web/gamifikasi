export type SlideDeck = {
  slug: string
  title: string
  subtitle: string
  filename: string
  pages: number
  audience: string
  duration: string
  year: string
  accent: 'cyan' | 'violet' | 'amber'
  theme: string
  highlights: string[]
  sourcePptx: string
}

export const decks: SlideDeck[] = [
  {
    slug: 'pelatihan-ifp-informatika-smp',
    title: 'Gamifikasi untuk Pembelajaran Informatika di SMP',
    subtitle:
      'Membangun motivasi, otonomi, dan capaian pembelajaran melalui mekanika permainan',
    filename: '/materi/pelatihan-ifp-informatika-smp.pdf',
    pages: 12,
    audience: 'Guru Informatika SMP & pengembang konten IFP',
    duration: '45 menit · 6 bagian',
    year: '2026',
    accent: 'cyan',
    theme: 'Pelatihan IFP · Pengembangan Konten Digital',
    highlights: [
      'Tantangan motivasi belajar Informatika di SMP',
      'Teori motivasi: Self-Determination & MDA framework',
      'Definisi dan inti gamifikasi, bukan sekadar "main"',
      'Enam langkah desain aktivitas, dari capaian hingga prototipe',
      'Studi kasus "Algoritma Petualang" plus kegagalan umum',
    ],
    sourcePptx: 'gamifikasi-informatika-smp.pptx',
  },
  {
    slug: 'iht-genteng-edisi-press-start',
    title: 'Gamifikasi Digital dalam Pembelajaran',
    subtitle: 'Membuat game mata pelajaran bersama siswa dengan bantuan AI',
    filename: '/materi/iht-genteng-edisi-press-start.pdf',
    pages: 16,
    audience: 'Guru mata pelajaran (IHT)',
    duration: 'In-house training',
    year: '2026',
    accent: 'amber',
    theme: 'In House Training · SMP Negeri 1 Genteng',
    highlights: [
      'Definisi gamifikasi dibanding game-based learning',
      'Enam elemen: poin, level, lencana, peringkat, misi, umpan balik',
      'Manfaat dan jebakan: poin vs belajar, persaingan, kesenjangan perangkat',
      'Pembagian peran: guru merancang tujuan, AI menulis kode dan soal',
      'Contoh prompt lengkap untuk membuat game satu file HTML',
    ],
    sourcePptx: 'Gamifikasi Digital dalam Pembelajaran bersama Siswa (1).pptx',
  },
]

export type Mekanik = {
  title: string
  ringkasan: string
  detail: string
  icon: 'target' | 'stairs' | 'award' | 'trophy' | 'compass' | 'sparkles'
}

export const mekanik: Mekanik[] = [
  {
    title: 'Poin',
    ringkasan: 'Hadiah langsung untuk jawaban benar dan usaha.',
    detail:
      'Poin paling mudah diimplementasikan dan paling cepat terasa. Kuncinya: kaitkan setiap poin dengan kompetensi yang ingin dicapai, jangan hanya sebagai angka.',
    icon: 'target',
  },
  {
    title: 'Level',
    ringkasan: 'Tingkat kesulitan naik bertahap sesuai kemampuan.',
    detail:
      'Level membuat siswa merasa ada kemajuan. Mulai dari yang mudah, naikkan perlahan agar siswa terdorong tapi tidak merasa gagal.',
    icon: 'stairs',
  },
  {
    title: 'Lencana',
    ringkasan: 'Penanda pencapaian, misalnya "Juara Pecahan".',
    detail:
      'Lencana bekerja baik untuk siswa yang tidak masuk peringkat teratas. Beri lencana atas usaha, bukan hanya peringkat pertama.',
    icon: 'award',
  },
  {
    title: 'Papan Peringkat',
    ringkasan: 'Pemicu semangat. Pakai dengan bijak, misalnya per tim.',
    detail:
      'Peringkat bisa memacu semangat sekaligus mengecilkan hati yang tertinggal. Padukan dengan lencana dan ukur kemajuan pribadi.',
    icon: 'trophy',
  },
  {
    title: 'Misi dan Cerita',
    ringkasan: 'Tantangan bertema yang memberi alasan untuk belajar.',
    detail:
      'Alasan naratif membuat materi terasa relevan. "Petualangan klasifikasi makhluk hidup" lebih mudah diingat daripada "Bab 2".',
    icon: 'compass',
  },
  {
    title: 'Umpan Balik',
    ringkasan: 'Siswa langsung tahu benar atau salah, beserta alasannya.',
    detail:
      'Umpan balik instan adalah keunggulan utama game atas metode konvensional. Tampilkan penjelasan singkat setiap kali menjawab.',
    icon: 'sparkles',
  },
]

export type Manfaat = {
  title: string
  body: string
  points: string[]
}

export const manfaat: Manfaat[] = [
  {
    title: 'Motivasi',
    body: 'Tantangan dan penghargaan membuat siswa mau memulai dan bertahan.',
    points: ['Siswa memulai belajar tanpa disuruh', 'Bertahan menghadapi materi yang sulit'],
  },
  {
    title: 'Umpan Balik Cepat',
    body: 'Siswa langsung tahu bagian yang belum dikuasai tanpa menunggu koreksi guru.',
    points: ['Kesalahan diperbaiki saat itu juga', 'Tidak perlu menunggu nilai ujian'],
  },
  {
    title: 'Berani Mencoba',
    body: 'Salah dalam game berarti mengulang, bukan gagal. Rasa takut salah berkurang.',
    points: ['Siswa lebih berani bertanya di kelas', 'Mencoba jawaban tidak terasa seperti ujian'],
  },
]

export type Jebakan = {
  title: string
  body: string
  solde: string
}

export const jebakan: Jebakan[] = [
  {
    title: 'Poin Menggantikan Belajar',
    body: 'Siswa bisa mengejar poin saja tanpa benar-benar belajar.',
    solde: 'Kaitkan setiap poin dengan kompetensi yang ingin dicapai.',
  },
  {
    title: 'Terlalu Kompetitif',
    body: 'Peringkat bisa mengecilkan hati siswa yang tertinggal.',
    solde: 'Hargai juga kemajuan dan kerja sama, bukan hanya juara.',
  },
  {
    title: 'Kesenjangan Perangkat',
    body: 'Tidak semua siswa punya HP atau kuota yang cukup.',
    solde: 'Siapkan kerja kelompok atau gunakan perangkat sekolah.',
  },
  {
    title: 'Konten AI Belum tentu Benar',
    body: 'Hasil yang dihasilkan AI bisa keliru atau tidak sesuai materi.',
    solde: 'Periksa soal, kunci jawaban, dan penjelasan sebelum dipakai di kelas.',
  },
]

export type LangkahAi = {
  no: string
  title: string
  body: string
}

export const langkahAi: LangkahAi[] = [
  {
    no: '1',
    title: 'Tentukan',
    body: 'Tulis tujuan pembelajaran dan materi yang disasar.',
  },
  {
    no: '2',
    title: 'Rancang',
    body: 'Pilih jenis game dan aturan poin, level, serta lencana.',
  },
  {
    no: '3',
    title: 'Minta AI',
    body: 'Susun prompt yang jelas, minta hasil berupa satu file web.',
  },
  {
    no: '4',
    title: 'Uji Coba',
    body: 'Coba sendiri, lalu uji bersama beberapa siswa.',
  },
  {
    no: '5',
    title: 'Kembangkan',
    body: 'Perbaiki lewat percakapan dengan AI sesuai masukan.',
  },
]

export type UnsurPrompt = {
  label: string
  contoh: string
}

export const unsurPrompt: UnsurPrompt[] = [
  { label: 'Peran', contoh: 'Kamu pembuat game edukasi untuk guru SMP.' },
  { label: 'Materi', contoh: 'IPA kelas VII, klasifikasi makhluk hidup.' },
  {
    label: 'Jenis game',
    contoh: 'Kuis petualangan 10 soal dalam satu file HTML.',
  },
  {
    label: 'Aturan',
    contoh: 'Benar +10 poin, 3 benar beruntun dapat lencana.',
  },
  { label: 'Tampilan', contoh: 'Berwarna, huruf besar, nyaman dibuka di HP.' },
]

export const contohPrompt = `Buatkan game kuis interaktif dalam satu file HTML untuk siswa kelas VII,
materi klasifikasi makhluk hidup. Ada 10 soal pilihan ganda bertema petualangan
di hutan. Jawaban benar mendapat 10 poin, dan 3 jawaban benar beruntun membuka
lencana. Setelah menjawab, tampilkan penjelasan singkat. Tampilan berwarna, huruf
besar, dan nyaman dibuka di HP.`

export const definisi =
  'Gamifikasi adalah penerapan mekanika permainan — poin, level, misi, lencana, papan peringkat, dan umpan balik instan — ke dalam konteks non-permainan agar orang tetap termotivasi dan bertahan.'

export type LangkahGame = { no: string; title: string; body: string }

export const langkahGame: LangkahGame[] = [
  {
    no: "01",
    title: "Guru membuat room",
    body: "Buka panel admin, buat sesi, dan dapatkan PIN 6 digit untuk kelas Anda.",
  },
  {
    no: "02",
    title: "Siswa masuk dengan PIN",
    body: "Siswa buka halaman game, mengetik PIN, lalu memilih nama dan avatar.",
  },
  {
    no: "03",
    title: "Kuis berjalan",
    body: "Setiap siswa mengambil kotak soal. Jawaban pertama yang benar menentukan pemenang.",
  },
]

export type TipeSoal = { label: string; desc: string }

export const tipeSoal: TipeSoal[] = [
  { label: "Pilihan Ganda", desc: "4 opsi jawaban" },
  { label: "Benar / Salah", desc: "Format paling cepat" },
  { label: "Menjodohkan", desc: "Pasangkan istilah" },
  { label: "Isian Singkat", desc: "Jawaban bebas singkat" },
]

export const fiturGame: string[] = [
  "Kelas 30–40+ siswa sekaligus",
  "Kunci kotak soal secara atomic",
  "Leaderboard broadcast tiap 300 ms",
  "Emote dengan rate limit",
  "Upload soal dari Excel & Word",
  "Template soal siap unduh",
  "Panel admin guru lengkap",
  "Activity feed real-time",
]

export const soalPersiapan: { t: string; d: string }[] = [
  {
    t: "Unduh template resmi",
    d: "Guru bisa mengambil template Excel dan Word yang sudah diformat, lengkap dengan contoh soal tiap tipe.",
  },
  {
    t: "Isi atau tempel",
    d: "Tempel langsung dari Word, atau isi tabel Excel. Bisa drag & drop file ke panel admin.",
  },
  {
    t: "Pratinjau lalu terapkan",
    d: "Tabel pratinjau menampilkan soal sebelum dipakai. Pilih ganti semua atau tambahkan ke daftar.",
  },
]

export const promptBinar = `Buatlah sebuah game 3D endless road-crossing bertema
edukasi untuk mata pelajaran Informatika SMP Kelas 9 dengan fokus khusus
pada materi Berpikir Komputasional. Pemain mengontrol hewan maskot
original yang melompat maju satu per satu ubin (tile) menyeberangi jalan
raya, jalur kereta, dan sungai, sambil menyelesaikan tantangan berbasis
4 pilar Berpikir Komputasional untuk mendapatkan power-ups.

Gameplay & Integrasi Berpikir Komputasional:
- Kontrol menggunakan tombol panah atau WASD untuk melompat satu ubin
  setiap kali ditekan. Hindari mobil, kereta, dan seberangi sungai
  menggunakan balok atau daun teratai.
- Kuis & Tantangan Berpikir Komputasional (Power-ups): Di sepanjang
  jalur, pemain akan menjumpai pos pemeriksaan atau kotak misteri yang
  menguji 4 pilar Berpikir Komputasional:

  1. Dekomposisi — memecah masalah besar menjadi bagian kecil.
  2. Pengenalan Pola — mengenali pola kedatangan kendaraan atau
     pergerakan kayu gelondongan di sungai.
  3. Abstraksi — menyaring informasi penting dan mengabaikan detail
     yang tidak relevan.
  4. Algoritma — menyusun langkah-langkah logis atau urutan perintah
     sederhana untuk mencapai tujuan.

Hasil akhir: satu file HTML yang bisa langsung dibuka di browser.`

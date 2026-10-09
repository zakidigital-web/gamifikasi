# Gamifikasi untuk Pendidikan

Website yang berfungsi sebagai **wadah materi** untuk pelatihan guru: rujukan konsep
gamifikasi, koleksi slide presentasi, dan webgame edukasi yang bisa langsung dimainkan.

Dibuat untuk memudahkan guru memahami dan menerapkan gamifikasi di kelas.

---

## Halaman

| Route                | Isi                                                                                |
| -------------------- | ---------------------------------------------------------------------------------- |
| `/`                  | Definisi, 6 elemen mekanika, manfaat, 4 jebakan, praktik membuat game dengan AI, contoh prompt nyata |
| `/materi`            | 2 deck presentasi (28 slide) dengan PDF viewer langsung di halaman                 |
| `/game`              | Daftar 2 webgame edukasi                                                           |
| `/game/binar-seberang`   | Detail + iframe Binar Seberang (platformer 3D Berpikir Komputasional)       |
| `/game/zombie-defense`    | Detail + iframe Zombie Defense (tower defense kuis Informatika)              |
| `/prompt`            | 3 generator prompt HTML interaktif yang bisa langsung dipakai                     |

## Stack

- **Next.js 16** (App Router, Turbopack) — native untuk Vercel
- **React 19**, **TypeScript**
- **Tailwind CSS 4** — token warna via `@theme`, mode gelap lewat `@custom-variant`
- Tanpa database, tanpa API, tanpa environment variable

Semua halaman ter-prerender statis, termasuk route detail game lewat `generateStaticParams`.

Font: Outfit (display), Plus Jakarta Sans (body), JetBrains Mono (kode).

---

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

Tidak ada service tambahan yang perlu dijalankan — kedua game adalah file HTML mandiri.

---

## Webgame

Kedua game disimpan di `public/game/`. Keduanya **single file HTML**: tidak butuh server,
tidak butuh koneksi internet selain font Google, dan bisa langsung dibagikan ke siswa.

```
public/game/
├── binar-seberang.html           Platformer 3D · 20 soal · 4 pilar Berpikir Komputasional
├── zombie-defense-quiz.html      Tower defense kuis · 95 soal · 8 topik Informatika
├── thumb-binar-seberang.jpg
└── thumb-zombie-defense.jpg
```

### Menambah game baru

1. Salin file HTML ke `public/game/` dengan nama `slug.html`
2. Buat thumbnail: `npx playwright screenshot --viewport-size=1280,720 file://<path> <output>.jpg`
3. Daftarkan di `data/games.ts` — array `games`
4. Route detail dibuat otomatis oleh `generateStaticParams`

```ts
{
  slug: "game-baru",              // = nama file tanpa ekstensi
  title: "Judul Game",
  tagline: "Satu kalimat pembeda",
  file: "/game/game-baru.html",
  thumb: "/game/thumb-game-baru.jpg",
  mapel: "Informatika",
  kelas: "Kelas 9",
  format: "Platformer 2D",
  institutions: "Nama Sekolah",
  accent: "violet",               // violet | lime
  ringkasan: "Penjelasan 2-3 kalimat...",
  caraMain: ["Langkah 1...", "Langkah 2..."],
  fitur: ["Fitur 1...", "Fitur 2..."],
  pilar: [/* opsional */],
  topik: [/* opsional */],
}
```

---

## Materi

Semua deck disimpan di `public/materi/` dengan pola nama:

```
<nama-deck>.pdf          →  deck-nya
cover-<nama-deck>.jpg    →  sampul (slide pertama)
```

Menambah deck baru:

```bash
libreoffice --headless --convert-to pdf --outdir public/materi "deck-baru.pptx"

pdftoppm -f 1 -l 1 -jpeg -r 96 -singlefile \
  public/materi/deck-baru.pdf public/materi/cover-deck-baru
```

Kemudian daftarkan di `data/konten.ts` → array `decks`, dengan `slug` yang sama persis
dengan nama file.

---

## Contoh prompt

`public/prompt/` berisi dua jenis berkas:

```
public/prompt/
├── generator-universal-11-mapel.html    Generator 10 model game × 11 mapel SMP
├── generator-ifp-mgmp.html               Generator khusus layar IFP, 12 genre
├── generator-edukasi-v2.html             Generator prompt master terstandarisasi
└── contoh-prompt-binar-seberang.md       Prompt asli untuk Binar Seberang
```

Ketiga generator adalah alat interaktif yang bisa langsung dipakai dari halaman `/prompt` —
guru mengisi parameter, klik generate, lalu menyalin hasilnya.

Menambah generator baru: salin berkasnya ke `public/prompt/`, lalu daftarkan di
`data/prompts.ts` → array `generators`.

Cuplikan prompt Binar Seberang ditampilkan di bagian "Praktik" pada halaman beranda, dan
berkas lengkapnya bisa diunduh dari sana. Kalau membuat game baru dengan cara yang sama,
ganti berkas itu dan perbarui variabel `promptBinar` di `data/konten.ts`.

> Generator Edukasi v2.0 memuat Tailwind dan ikon dari CDN, jadi butuh koneksi internet.
> Dua generator lainnya sepenuhnya mandiri.

---

## Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

Atau hubungkan repo GitHub di dashboard Vercel. Tidak ada build command khusus dan tidak
ada environment variable yang perlu disetel — Vercel mendeteksi Next.js secara otomatis.

---

## Struktur

```
app/
├── layout.tsx              Root layout, font, metadata, script anti-flash tema
├── globals.css             Token warna, utilities (.glass, .hover-lift, .grid-lines)
├── page.tsx                Beranda
├── materi/page.tsx         Koleksi slide
├── prompt/page.tsx         Daftar generator prompt
├── game/
│   ├── page.tsx            Daftar game
│   └── [slug]/page.tsx     Detail game + iframe

components/
├── header.tsx              Navigasi + tombol tema
├── footer.tsx
├── theme-toggle.tsx        Terang / gelap / sistem (useSyncExternalStore)
├── section-heading.tsx
├── mekanik-icon.tsx        Ikon 6 elemen gamifikasi
├── pdf-viewer.tsx          PDF inline + modal perbesar + fallback
├── game-embed.tsx          Placeholder thumbnail + lazy iframe (rasio 16:9)
└── prompt-embed.tsx        Placeholder + lazy iframe (tinggi, scroll internal)

data/
├── konten.ts               Teks halaman beranda + metadata deck
├── games.ts                Metadata dan deskripsi game
└── prompts.ts              Metadata dan deskripsi generator prompt

public/
├── materi/                 PDF deck + thumbnail sampul
├── game/                   File HTML game + thumbnail
└── prompt/                 Generator HTML + contoh prompt sumber
```

## Scripts

```bash
npm run dev      # server pengembangan
npm run build    # build produksi
npm run start    # jalankan hasil build
npm run lint     # ESLint
```

## Aksesibilitas

- Target `WCAG 2.1 AA`: focus ring terlihat, kontras teks memadai, navigasi keyboard penuh
- Opsi `prefers-reduced-motion` mematikan seluruh animasi
- Ikon dekoratif memakai `aria-hidden`, kontrol interaktif punya `aria-label`
- Mode gelap, terang, dan mengikuti preferensi sistem
- Game dimuat lewat tombol eksplisit, bukan otomatis — menghemat kuota siswa

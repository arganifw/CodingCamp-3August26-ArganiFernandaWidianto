# Dokumen Persyaratan: Redesign UI Expense & Budget Visualizer

## Pendahuluan

Fitur ini mencakup redesign tampilan antarmuka (UI) dari aplikasi web Expense & Budget Visualizer. Aplikasi ini adalah single-page app (SPA) untuk mencatat dan memvisualisasikan pengeluaran. Tujuan utama redesign adalah menghadirkan tampilan yang lebih modern, bersih, dan mudah digunakan, tanpa mengubah fungsionalitas yang sudah ada. Redesign difokuskan pada peningkatan visual hierarchy, tipografi yang lebih terbaca, layout yang terstruktur, responsivitas di berbagai ukuran layar, serta konsistensi warna dan spacing.

Semua perubahan dilakukan hanya pada file `style.css` (dan struktur HTML yang relevan di `index.html`) tanpa mengganti logic di `script.js`.

## Glosarium

- **App**: Aplikasi web Expense & Budget Visualizer.
- **Card**: Elemen kontainer berbentuk kartu dengan latar belakang putih/gelap dan bayangan, digunakan untuk mengelompokkan konten.
- **Balance Card**: Kartu khusus yang menampilkan total saldo pengeluaran.
- **Transaction Item**: Satu baris entri transaksi dalam daftar transaksi.
- **Primary Color**: Warna utama yang digunakan pada tombol aksi utama dan aksen visual.
- **Dark Mode**: Tema tampilan gelap yang diaktifkan oleh pengguna.
- **Light Mode**: Tema tampilan terang (default).
- **CSS Variable**: Variabel CSS yang mendefinisikan nilai warna, spacing, atau ukuran yang digunakan secara konsisten di seluruh stylesheet.
- **Visual Hierarchy**: Susunan elemen visual yang memandu mata pengguna dari informasi paling penting ke paling tidak penting.
- **Spacing System**: Sistem jarak (margin, padding, gap) yang konsisten dan berbasis kelipatan (misal: 4px, 8px, 16px, 24px, 32px).
- **Typography Scale**: Hierarki ukuran font yang konsisten untuk heading, body, dan label.
- **Breakpoint**: Titik lebar layar tertentu di mana layout berubah untuk menyesuaikan tampilan.

---

## Persyaratan

### Persyaratan 1: Sistem Desain Berbasis CSS Variables

**User Story:** Sebagai developer, saya ingin semua nilai warna, spacing, dan tipografi didefinisikan melalui CSS variables, agar konsistensi visual mudah dijaga dan tema dapat diubah tanpa mengubah banyak deklarasi.

#### Kriteria Penerimaan

1. THE App SHALL mendefinisikan seluruh warna utama (background, card, text, primary, danger, border, input) sebagai CSS variables di selector `:root`.
2. THE App SHALL mendefinisikan spacing scale (4px, 8px, 12px, 16px, 24px, 32px) sebagai CSS variables.
3. THE App SHALL mendefinisikan typography scale (font-size untuk heading, body, label, caption) sebagai CSS variables.
4. WHEN tema dark mode diaktifkan, THE App SHALL mengoverride seluruh CSS variables warna melalui selector `[data-theme="dark"]`.
5. THE App SHALL menggunakan font modern dari Google Fonts (misalnya Inter atau Plus Jakarta Sans) sebagai font family utama.

---

### Persyaratan 2: Layout Halaman yang Terstruktur

**User Story:** Sebagai pengguna, saya ingin melihat layout halaman yang jelas dan terstruktur, agar saya bisa menemukan dan menggunakan setiap bagian aplikasi dengan mudah.

#### Kriteria Penerimaan

1. THE App SHALL menampilkan konten dalam satu kolom tunggal yang terpusat dengan lebar maksimum 520px pada perangkat dengan lebar layar lebih dari 600px.
2. THE App SHALL menampilkan konten penuh (full-width) dengan padding horizontal 16px pada perangkat dengan lebar layar 600px ke bawah.
3. THE App SHALL menampilkan header (judul + tombol toggle tema) dan Balance Card sebagai elemen paling atas halaman.
4. THE App SHALL menampilkan Form Tambah Transaksi, Chart, dan Daftar Transaksi sebagai Card terpisah secara vertikal di bawah Balance Card.
5. THE App SHALL memberikan gap vertikal sebesar 20px di antara setiap Card.

---

### Persyaratan 3: Balance Card yang Menonjol

**User Story:** Sebagai pengguna, saya ingin melihat total saldo saya secara menonjol, agar informasi terpenting langsung terlihat saat membuka aplikasi.

#### Kriteria Penerimaan

1. THE Balance_Card SHALL menampilkan angka total saldo dengan ukuran font minimal 2.5rem dan font-weight bold.
2. THE Balance_Card SHALL menggunakan warna teks yang berbeda dari warna teks default untuk angka saldo (menggunakan Primary Color).
3. THE Balance_Card SHALL memiliki padding minimal 24px di semua sisi.
4. THE Balance_Card SHALL memiliki label "TOTAL PENGELUARAN" atau "TOTAL BALANCE" dengan ukuran font kecil (0.75rem) dan huruf kapital semua (text-transform: uppercase) di atas angka saldo.
5. THE Balance_Card SHALL memiliki border-radius minimal 12px untuk tampilan modern.

---

### Persyaratan 4: Tipografi yang Terbaca

**User Story:** Sebagai pengguna, saya ingin teks di seluruh aplikasi mudah dibaca dan memiliki hierarki yang jelas, agar saya tidak kesulitan memahami informasi yang ditampilkan.

#### Kriteria Penerimaan

1. THE App SHALL menggunakan font-weight 600 atau 700 untuk semua heading kartu (h3) agar terlihat tegas.
2. THE App SHALL menggunakan ukuran font minimum 0.875rem (14px) untuk semua teks body dan label form.
3. THE App SHALL menggunakan ukuran font 1rem (16px) untuk teks input dan select.
4. THE App SHALL menggunakan line-height minimal 1.5 untuk semua teks paragraf dan label.
5. THE App SHALL menggunakan warna teks sekunder (abu-abu, sekitar #6b7280) untuk informasi pendukung seperti nama kategori pada transaction item dan label form.

---

### Persyaratan 5: Form Input yang Modern dan Jelas

**User Story:** Sebagai pengguna, saya ingin form tambah transaksi memiliki tampilan yang modern dan jelas, agar proses input data terasa mudah dan menyenangkan.

#### Kriteria Penerimaan

1. THE App SHALL menampilkan setiap field input dengan border-radius minimal 8px.
2. WHEN sebuah field input menerima fokus, THE App SHALL menampilkan outline atau border yang menonjol menggunakan Primary Color.
3. THE App SHALL memberikan padding minimal 10px 14px pada semua elemen input dan select.
4. THE App SHALL menampilkan tombol "Add Transaction" (submit) dengan lebar penuh (100%), tinggi minimal 44px, dan border-radius 8px.
5. THE App SHALL memberikan spacing vertikal sebesar 14px di antara setiap form-group.
6. THE App SHALL menampilkan tombol "Tambah" kategori kustom dengan style yang berbeda dari tombol submit utama (secondary style).

---

### Persyaratan 6: Card dengan Tampilan Modern

**User Story:** Sebagai pengguna, saya ingin setiap bagian konten terbungkus dalam card yang bersih dan modern, agar tampilan aplikasi terasa rapi dan terstruktur.

#### Kriteria Penerimaan

1. THE App SHALL menerapkan border-radius minimal 12px pada semua Card.
2. THE App SHALL menerapkan box-shadow halus (misal: `0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)`) pada semua Card.
3. THE App SHALL memberikan padding minimal 20px pada semua Card.
4. WHILE dark mode aktif, THE App SHALL menggunakan warna card yang cukup kontras dengan background halaman (minimal selisih kecerahan 10%).
5. THE App SHALL memisahkan judul Card (h3) dari kontennya dengan margin-bottom minimal 16px.

---

### Persyaratan 7: Daftar Transaksi yang Terbaca

**User Story:** Sebagai pengguna, saya ingin melihat daftar transaksi dalam tampilan yang rapi dan mudah dibaca, agar saya bisa meninjau pengeluaran saya dengan cepat.

#### Kriteria Penerimaan

1. THE App SHALL menampilkan setiap Transaction_Item dengan padding vertikal minimal 12px.
2. THE App SHALL memisahkan setiap Transaction_Item dengan garis pembatas (border-bottom) berwarna sesuai CSS variable border.
3. THE App SHALL menampilkan nama transaksi dengan font-weight 500 dan jumlah transaksi dengan font-weight 600.
4. THE App SHALL menampilkan badge kategori dengan background-color berbeda dari background item dan border-radius penuh (pill shape, misal border-radius: 99px) pada setiap Transaction_Item.
5. THE App SHALL menampilkan tombol hapus dengan ikon atau teks "Hapus" menggunakan warna merah/danger hanya saat di-hover (tampilkan icon atau style minimal secara default).
6. THE App SHALL membatasi tinggi area scroll daftar transaksi maksimum 280px dengan overflow-y auto.

---

### Persyaratan 8: Dukungan Dark Mode yang Konsisten

**User Story:** Sebagai pengguna, saya ingin dark mode memiliki tampilan yang konsisten dan nyaman di seluruh elemen aplikasi, agar mata saya tidak lelah saat menggunakan aplikasi di malam hari.

#### Kriteria Penerimaan

1. WHEN dark mode diaktifkan, THE App SHALL mengubah warna background halaman ke warna gelap (misal: #0f172a atau #111827).
2. WHEN dark mode diaktifkan, THE App SHALL mengubah warna Card ke warna lebih terang dari background halaman tetapi tetap gelap (misal: #1e293b atau #1f2937).
3. WHEN dark mode diaktifkan, THE App SHALL memastikan semua teks tetap memiliki kontras warna minimum 4.5:1 terhadap background (sesuai WCAG AA).
4. WHEN dark mode diaktifkan, THE App SHALL mengubah warna input dan select ke warna gelap yang sesuai.
5. THE App SHALL melakukan transisi warna secara halus (CSS transition 0.3s ease) saat tema berubah antara light dan dark.
6. THE App SHALL menyimpan preferensi tema pengguna ke localStorage dan memuat preferensi tersebut saat halaman dimuat ulang (sudah ada di script.js, CSS tidak perlu mengubah behavior ini).

---

### Persyaratan 9: Responsivitas Layar

**User Story:** Sebagai pengguna, saya ingin aplikasi terlihat baik di berbagai ukuran layar (mobile, tablet, desktop), agar saya bisa menggunakannya dari perangkat apapun.

#### Kriteria Penerimaan

1. WHEN lebar viewport lebih dari 600px, THE App SHALL menampilkan konten dengan max-width 520px terpusat di layar.
2. WHEN lebar viewport 600px atau kurang, THE App SHALL menampilkan konten secara full-width dengan padding horizontal 12px.
3. THE App SHALL memastikan semua elemen interaktif (tombol, input) memiliki tinggi minimum 44px (touch target) pada semua ukuran layar.
4. THE App SHALL memastikan teks tidak terpotong atau overflow secara horizontal pada layar dengan lebar minimum 320px.
5. THE App SHALL memastikan chart pie tetap memiliki tinggi minimum 200px dan tidak terpotong pada layar kecil.

---

### Persyaratan 10: Konsistensi Warna dan Spacing

**User Story:** Sebagai pengguna, saya ingin tampilan aplikasi memiliki warna dan jarak antar elemen yang konsisten di seluruh halaman, agar aplikasi terasa profesional dan nyaman digunakan.

#### Kriteria Penerimaan

1. THE App SHALL menggunakan Primary Color yang sama (#6366f1 atau warna Indigo modern) secara konsisten pada tombol utama, outline fokus, dan aksen warna Balance Card.
2. THE App SHALL menggunakan palet warna yang terbatas (maksimal 5 warna utama + variasinya) di seluruh aplikasi.
3. THE App SHALL menggunakan spacing yang konsisten berbasis 4px grid (misal: 4, 8, 12, 16, 20, 24, 32px) untuk semua margin, padding, dan gap.
4. THE App SHALL menggunakan warna background yang sama untuk semua halaman (tidak ada perbedaan background antar section).
5. THE App SHALL memastikan tombol-tombol memiliki min-width yang cukup agar teks tidak terpotong pada ukuran font apapun.

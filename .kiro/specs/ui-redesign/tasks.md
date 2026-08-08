# Rencana Implementasi: Redesign UI Expense & Budget Visualizer

## Ikhtisar

Implementasi dilakukan secara bertahap dengan urutan: Design Tokens → Layout → Komponen → Dark Mode → Responsif → Penyesuaian HTML. Semua perubahan terbatas pada `style.css` dan penyesuaian minor pada `index.html`. File `script.js` tidak dimodifikasi.

Bahasa/Teknologi: CSS3, HTML5 (tidak ada framework JS/CSS tambahan)

---

## Tugas

- [ ] 1. Siapkan fondasi design system (CSS Variables dan reset global)
  - Hapus seluruh isi `style.css` yang ada dan ganti dengan struktur baru
  - Definisikan semua CSS variables warna, tipografi, spacing, border-radius, shadow, dan transisi di selector `:root`
  - Definisikan override dark mode di selector `[data-theme="dark"]`
  - Tambahkan CSS reset global: `box-sizing: border-box`, reset margin/padding
  - Import font Inter dari Google Fonts via `@import` di awal file CSS
  - _Persyaratan: 1.1, 1.2, 1.3, 1.4, 1.5, 10.1, 10.2, 10.3_

- [ ] 2. Implementasi layout halaman utama dan header
  - [ ] 2.1 Style `body` dan `.app-container`
    - Terapkan background `var(--color-bg)`, font-family, dan transition tema pada `body`
    - Set `.app-container`: max-width 520px, margin auto, padding, flex-column, gap 20px
    - _Persyaratan: 2.1, 2.5, 8.5_
  - [ ] 2.2 Style `header`
    - Terapkan flex layout justify-between, align-items center
    - Set font-size dan font-weight judul header
    - _Persyaratan: 2.3, 4.1_

- [ ] 3. Implementasi Balance Card
  - [ ] 3.1 Style `.balance-card`
    - Terapkan background surface, padding 24px, border-radius 12px, box-shadow, text-align center
    - Style label `<p>` dengan font-size xs, text-transform uppercase, letter-spacing, warna sekunder
    - Style angka `<h2>` dengan font-size 2.5rem, font-weight bold, warna primary
    - _Persyaratan: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Implementasi Card container generik
  - [ ] 4.1 Style `.card`
    - Terapkan background surface, padding 20px, border-radius 12px, box-shadow
    - Style `h3` di dalam card dengan font-size lg, font-weight semibold, margin-bottom 16px
    - _Persyaratan: 6.1, 6.2, 6.3, 6.5_

- [ ] 5. Implementasi Form komponen
  - [ ] 5.1 Style form group, label, dan input/select
    - Set `.form-group` margin-bottom 14px (menggunakan var(--space-4) ≈ 16px)
    - Style `label` dengan font-size sm, font-weight medium, warna sekunder, margin-bottom
    - Style `input` dan `select` dengan padding 10px 14px, border 1.5px, border-radius 8px, min-height 44px, font-size base
    - _Persyaratan: 5.1, 5.3, 5.5, 4.2, 4.3, 9.3_
  - [ ] 5.2 Style focus state dan custom category wrapper
    - Tambahkan `input:focus` dan `select:focus` dengan border-color primary dan box-shadow focus ring
    - Style `.custom-cat-wrapper` dengan flex dan gap
    - _Persyaratan: 5.2_

- [ ] 6. Implementasi komponen tombol
  - [ ] 6.1 Style `.btn-primary`
    - Terapkan background primary, warna putih, lebar 100%, min-height 44px, border-radius 8px, font-weight semibold
    - Tambahkan hover state (background-color, subtle transform)
    - _Persyaratan: 5.4, 9.3_
  - [ ] 6.2 Style `.btn-secondary` dan `.btn-delete`
    - Style `.btn-secondary` dengan background surface-2, border, border-radius, min-height 44px
    - Style `.btn-delete` dengan tampilan minimal (transparent, border tipis), hover state merah
    - _Persyaratan: 5.6, 7.5, 9.3_

- [ ] 7. Implementasi daftar transaksi dan badge kategori
  - [ ] 7.1 Style `.transaction-scroll`, `#transaction-list`, dan `.transaction-item`
    - Set `.transaction-scroll` dengan max-height 280px, overflow-y auto, scrollbar kustom tipis
    - Style `.transaction-item` dengan padding vertikal 12px, border-bottom sesuai var warna border
    - Hilangkan border-bottom pada item terakhir
    - Style nama transaksi dengan font-weight medium dan jumlah dengan font-weight semibold
    - _Persyaratan: 7.1, 7.2, 7.3, 7.6_
  - [ ] 7.2 Tambahkan style badge kategori
    - Style `.category-badge` dengan background primary-light, warna primary, border-radius full (pill), padding kecil
    - _Persyaratan: 7.4_

- [ ] 8. Implementasi chart container dan sorting header
  - [ ] 8.1 Style `.chart-container`
    - Set position relative, min-height 220px, flex center
    - Tambahkan media query untuk min-height 200px pada layar < 400px
    - _Persyaratan: 9.5_
  - [ ] 8.2 Style `.list-header` dan `.sort-wrapper`
    - Style `.list-header` dengan flex, justify-between, align-center, margin-bottom
    - Style `.sort-wrapper` dengan flex, gap, font-size xs, warna sekunder
    - Style `select` di dalam sort-wrapper dengan width auto dan ukuran kompak
    - _Persyaratan: 2.3_

- [ ] 9. Checkpoint — Periksa tampilan light mode
  - Buka aplikasi di browser, periksa semua komponen: Balance Card, Form, Chart, Transaction List
  - Pastikan semua CSS variables terdefinisi dan diterapkan dengan benar
  - Pastikan tidak ada overflow horizontal pada layar 375px

- [ ] 10. Implementasi responsivitas (media queries)
  - [ ] 10.1 Tambahkan breakpoint untuk layar ≤ 600px
    - Set `.app-container` padding menjadi lebih kecil pada mobile (padding: 16px 12px)
    - Pastikan konten full-width pada viewport ≤ 600px
    - _Persyaratan: 2.2, 9.2_
  - [ ]* 10.2 Verifikasi touch target dan teks tidak overflow
    - Cek semua elemen interaktif memiliki min-height 44px
    - Cek tidak ada teks yang overflow pada viewport 320px
    - _Persyaratan: 9.3, 9.4_

- [ ] 11. Penyesuaian HTML di `index.html`
  - [ ] 11.1 Tambahkan link Google Fonts Inter di `<head>`
    - Tambahkan `<link>` preconnect dan stylesheet Google Fonts untuk font Inter
    - _Persyaratan: 1.5_
  - [ ] 11.2 Perbarui path CSS jika diperlukan
    - Pastikan `<link rel="stylesheet">` mengarah ke path yang benar (`style.css` atau `css/style.css`)
    - _Persyaratan: 1.1_

- [ ] 12. Implementasi dark mode yang konsisten
  - [ ] 12.1 Verifikasi semua CSS variables dark mode sudah benar
    - Pastikan `[data-theme="dark"]` meng-override: `--color-bg`, `--color-surface`, `--color-surface-2`, `--color-text-primary`, `--color-text-secondary`, `--color-border`, `--color-primary`
    - Pastikan kontras warna WCAG AA minimum 4.5:1 (cek via DevTools Accessibility panel)
    - _Persyaratan: 8.1, 8.2, 8.3, 8.4_
  - [ ] 12.2 Pastikan transisi tema halus
    - Tambahkan `transition: var(--transition-theme)` pada `body`, `.card`, `.balance-card`, `input`, `select`
    - _Persyaratan: 8.5_

- [ ] 13. Perbarui render transaksi di `script.js` untuk mendukung badge kategori
  - [ ] 13.1 Tambahkan class `category-badge` pada elemen kategori di `renderTransactions()`
    - Ubah template HTML di `renderTransactions()`: pisahkan jumlah dan kategori, bungkus kategori dengan `<span class="category-badge">`
    - Pastikan tampilan amount dan badge muncul dengan benar
    - _Persyaratan: 7.3, 7.4_

- [ ] 14. Checkpoint Akhir — Verifikasi keseluruhan
  - Buka aplikasi dan uji semua skenario: tambah transaksi, hapus transaksi, ganti sorting, toggle dark/light mode
  - Periksa tampilan di viewport 320px, 375px, 768px, dan 1280px
  - Verifikasi font Inter termuat dengan benar
  - Verifikasi dark mode berfungsi dan semua warna konsisten

---

## Catatan

- Tugas bertanda `*` bersifat opsional dan dapat dilewati untuk implementasi minimal (MVP)
- Setiap tugas mereferensikan persyaratan spesifik untuk keterlacakan
- Checkpoint memastikan validasi bertahap selama implementasi
- Karena fitur ini adalah pure CSS/UI, tidak ada property-based test — gunakan visual inspection dan DevTools audit
- File `script.js` hanya dimodifikasi pada Tugas 13 untuk menambahkan class badge; semua logika bisnis tidak diubah

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.2", "3.1", "4.1"] },
    { "id": 2, "tasks": ["5.1", "5.2", "6.1", "6.2", "8.1", "8.2"] },
    { "id": 3, "tasks": ["7.1", "7.2", "10.1", "10.2", "11.1", "11.2"] },
    { "id": 4, "tasks": ["12.1", "12.2"] },
    { "id": 5, "tasks": ["13.1"] }
  ]
}
```

# Dokumen Desain: Redesign UI Expense & Budget Visualizer

## Ikhtisar

Dokumen ini menjelaskan desain teknis untuk redesign tampilan antarmuka (UI) aplikasi Expense & Budget Visualizer. Redesign ini bersifat **purely visual** — semua perubahan terbatas pada `style.css` dan penyesuaian minor pada struktur HTML di `index.html`. File `script.js` tidak diubah sama sekali.

Tujuan utama:
- Menghadirkan design system yang konsisten menggunakan CSS variables
- Meningkatkan keterbacaan dengan tipografi modern dan hierarki visual yang jelas
- Memperbaiki tampilan komponen (Card, Form, Badge, Button) agar lebih modern
- Memastikan responsivitas di berbagai ukuran layar
- Menjaga dark mode tetap konsisten dan nyaman

**Stack Teknologi yang Relevan:**
- CSS3 dengan Custom Properties (CSS Variables)
- Google Fonts (Inter — modern sans-serif)
- HTML5 semantik
- Chart.js (tidak diubah, hanya container-nya disesuaikan)

---

## Arsitektur

Arsitektur perubahan mengikuti pola **Design Token → Component Style → Layout**:

```
Design Tokens (CSS Variables di :root)
    ↓
Component Styles (Card, Button, Input, Badge, TransactionItem)
    ↓
Layout System (App Container, Grid, Spacing)
    ↓
Responsive Rules (@media queries)
    ↓
Theme Override ([data-theme="dark"])
```

Semua nilai visual (warna, ukuran, spacing) dikontrol melalui CSS variables agar perubahan tema hanya membutuhkan override di satu tempat.

---

## Komponen dan Antarmuka

### 1. Design Tokens (CSS Variables)

Semua token didefinisikan di `:root`:

```css
:root {
  /* === WARNA === */
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-2: #f1f5f9;
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-primary-light: #ede9fe;
  --color-danger: #ef4444;
  --color-danger-hover: #dc2626;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;

  /* === TIPOGRAFI === */
  --font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px — caption, label kecil */
  --font-size-sm: 0.875rem;   /* 14px — label, teks pendukung */
  --font-size-base: 1rem;     /* 16px — body, input */
  --font-size-lg: 1.125rem;   /* 18px — card heading */
  --font-size-xl: 1.25rem;    /* 20px — page title */
  --font-size-3xl: 2.5rem;    /* 40px — balance number */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-normal: 1.5;

  /* === SPACING === */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* === BORDER RADIUS === */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* === SHADOW === */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
  --shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.25);

  /* === TRANSISI === */
  --transition-theme: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  --transition-ui: 0.15s ease;
}
```

**Dark Mode Override:**

```css
[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-surface-2: #293548;
  --color-primary: #818cf8;
  --color-primary-hover: #a5b4fc;
  --color-primary-light: #312e81;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-border: #334155;
}
```

---

### 2. Layout System

**App Container:**
```css
.app-container {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: var(--space-5) var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

@media (max-width: 600px) {
  .app-container {
    padding: var(--space-4) var(--space-3);
  }
}
```

**Header:**
```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
```

---

### 3. Balance Card

Elemen paling menonjol di halaman. Menggunakan gradient subtle sebagai background untuk tampilan premium.

```css
.balance-card {
  background: var(--color-surface);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
}

.balance-card p {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-2);
}

.balance-card h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.1;
}
```

---

### 4. Card Component

```css
.card {
  background: var(--color-surface);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.card h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}
```

---

### 5. Form Components

```css
.form-group {
  margin-bottom: var(--space-4);
}

.form-group label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
  line-height: var(--line-height-normal);
}

input, select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
  min-height: 44px;
  transition: border-color var(--transition-ui), box-shadow var(--transition-ui);
  outline: none;
}

input:focus, select:focus {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-focus);
}

input::placeholder {
  color: var(--color-text-secondary);
}
```

---

### 6. Buttons

```css
/* Tombol Utama */
.btn-primary {
  width: 100%;
  min-height: 44px;
  background-color: var(--color-primary);
  color: #ffffff;
  border: none;
  padding: 0 var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  margin-top: var(--space-2);
  transition: background-color var(--transition-ui), transform var(--transition-ui);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Tombol Sekunder */
.btn-secondary {
  background-color: var(--color-surface-2);
  color: var(--color-text-primary);
  border: 1.5px solid var(--color-border);
  padding: 8px var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  white-space: nowrap;
  min-height: 44px;
  transition: background-color var(--transition-ui);
}

.btn-secondary:hover {
  background-color: var(--color-border);
}
```

---

### 7. Transaction Item dan Badge Kategori

```css
#transaction-list {
  list-style: none;
}

.transaction-scroll {
  max-height: 280px;
  overflow-y: auto;
  /* Scroll kustom yang halus */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  gap: var(--space-3);
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-info h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.transaction-info .amount {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

/* Badge kategori */
.transaction-info .category-badge {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  padding: 2px var(--space-2);
  border-radius: var(--radius-full);
  margin-left: var(--space-2);
}

/* Tombol hapus */
.btn-delete {
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1.5px solid var(--color-border);
  padding: 6px var(--space-2);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: var(--font-size-xs);
  font-family: var(--font-family);
  flex-shrink: 0;
  min-height: 32px;
  transition: background-color var(--transition-ui), color var(--transition-ui), border-color var(--transition-ui);
}

.btn-delete:hover {
  background-color: var(--color-danger);
  color: #ffffff;
  border-color: var(--color-danger);
}
```

---

### 8. Chart Container

```css
.chart-container {
  position: relative;
  min-height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 400px) {
  .chart-container {
    min-height: 200px;
  }
}
```

---

### 9. Sorting Header

```css
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.sort-wrapper select {
  padding: 4px 8px;
  font-size: var(--font-size-xs);
  width: auto;
  min-height: 32px;
}
```

---

## Model Data

Tidak ada perubahan model data. Semua data tetap menggunakan format yang sama di `localStorage`:

```json
// Transaksi
[{ "id": 1234567890, "name": "Cilok", "amount": 14.94, "category": "Food" }]

// Kategori
["Food", "Transport", "Fun"]

// Preferensi Tema
"light" | "dark"
```

Perubahan HTML minor yang diperlukan di `index.html`:
1. Tambahkan `<link>` Google Fonts (Inter) di `<head>`
2. Tambahkan class `category-badge` pada render kategori di dalam `renderTransactions()` di `script.js` (atau alternatif: tambahkan styling pada elemen `<strong>` yang sudah ada)
3. Arahkan referensi CSS dari `css/style.css` ke `style.css` (sesuaikan path jika diperlukan)

---

## Penanganan Error

Karena redesign ini bersifat visual/CSS, penanganan error yang relevan:

1. **Font fallback**: Jika Google Fonts gagal dimuat, sistem akan jatuh ke `system-ui, sans-serif` yang sudah terdefinisi di CSS variable `--font-family`.
2. **CSS variable fallback**: Browser lama yang tidak mendukung CSS variables akan mendapatkan tampilan dasar dari properti CSS standar. Namun karena target browser modern, ini bukan prioritas utama.
3. **Dark mode persistence**: Jika localStorage tidak tersedia (misal: mode private), aplikasi akan menggunakan tema light sebagai default (sudah ditangani di `script.js`).

---

## Strategi Pengujian

### Kenapa Property-Based Testing Tidak Diterapkan

Fitur ini adalah **pure UI styling** — perubahan hanya pada CSS dan struktur HTML. Semua kriteria penerimaan bersifat:
- Konfigurasi/keberadaan CSS rules (apakah class `.card` memiliki `border-radius: 12px`)
- Perilaku visual yang tidak bervariasi berdasarkan input (misalnya: apakah dark mode mengubah warna)
- Aturan layout statis yang bisa diverifikasi secara visual

Property-based testing tidak sesuai karena tidak ada "fungsi transformasi input → output" yang bisa diuji dengan berbagai input. Tidak ada logika komputasi yang perlu diverifikasi secara universal.

### Pendekatan Pengujian yang Digunakan

**1. Visual Inspection (Manual)**
- Buka aplikasi di browser pada viewport 320px, 375px, 768px, dan 1280px
- Periksa tampilan light mode dan dark mode
- Verifikasi setiap komponen (Balance Card, Form, Chart, Transaction List) sesuai spesifikasi visual

**2. Browser DevTools Audit**
- Gunakan Chrome DevTools untuk mengecek:
  - CSS variable terdefinisi dengan benar di `:root`
  - Computed styles sesuai spesifikasi (border-radius, padding, font-size)
  - Tidak ada overflow horizontal pada layar kecil
  - Contrast ratio WCAG AA terpenuhi menggunakan Accessibility panel

**3. Snapshot/Screenshot Test (Opsional)**
- Ambil screenshot pada setiap breakpoint dan simpan sebagai baseline
- Bandingkan setiap kali ada perubahan CSS

**4. Checklist Komponen**

| Komponen | Yang Diperiksa |
|---|---|
| CSS Variables | Semua token terdefinisi di `:root` dan `[data-theme="dark"]` |
| Balance Card | Font size ≥ 2.5rem, padding ≥ 24px, border-radius ≥ 12px |
| Form Input | Border-radius ≥ 8px, padding ≥ 10px 14px, focus state visible |
| Card | Border-radius ≥ 12px, shadow halus, padding ≥ 20px |
| Transaction Item | Badge kategori pill shape, tombol delete hover state |
| Dark Mode | Semua elemen berubah warna, transisi halus |
| Responsif | Layout benar di 320px, 600px, 768px+ |

---

## Keputusan Desain

| Keputusan | Alasan |
|---|---|
| Menggunakan font Inter dari Google Fonts | Modern, sangat readable, mendukung berbagai weight, populer di aplikasi web 2024 |
| Primary Color menggunakan Indigo (#6366f1) | Warna modern yang tidak terlalu mencolok, sering digunakan di design system modern (Tailwind, Radix) |
| Badge kategori dengan pill shape | Memberikan konteks visual cepat pada setiap transaksi tanpa memakan banyak ruang |
| Tombol hapus minimal (border only, no fill) | Mengurangi visual noise; warna merah hanya muncul saat hover untuk menghindari tampilan "bahaya" |
| Max-width 520px | Optimal untuk aplikasi mobile-first yang juga bisa digunakan di desktop; lebih lebar dari desain lama (480px) untuk memberi lebih banyak ruang baca |
| Tidak mengubah script.js | Menjaga scope perubahan tetap terfokus pada UI dan meminimalkan risiko bug fungsional |

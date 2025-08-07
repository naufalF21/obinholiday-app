# obinholiday-app

Website berbasis **Next.js**, dibuat dengan `create-next-app` dan dikembangkan menggunakan struktur **App Router**.

## Prasyarat

- **Node.js** (versi 18.18 atau lebih baru)  
- Package manager seperti: `npm`, `yarn`, `pnpm`, atau `bun`

## Cara Install & Jalankan

1. **Clone repository ini:**

    ```bash
    git clone https://github.com/naufalF21/obinholiday-app.git
    cd obinholiday-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3. **Jalankan server development:**

    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    ```

4. **Buka di browser:**

    Akses `http://localhost:3000` untuk melihat aplikasi berjalan.

5. **Edit halaman utama:**

    Anda bisa memodifikasi file `app/page.tsx`. Perubahan akan langsung terlihat karena fitur hot reload dari Next.js.

## Struktur Proyek

- `app/` — Direktori utama untuk route (App Router - Next.js 13+)
- `public/` — Aset statis seperti gambar dan favicon
- `next.config.ts`, `tsconfig.json`, dll — File konfigurasi

## Script yang Tersedia

Berikut script dari `package.json`:

| Script    | Fungsi                                               |
|-----------|------------------------------------------------------|
| `dev`     | Menjalankan development server (`next dev`)          |
| `build`   | Membuat bundle siap produksi (`next build`)          |
| `start`   | Menjalankan aplikasi produksi (`next start`)         |
| `lint`    | Mengecek masalah dengan ESLint (`next lint`)         |

## Tambahan

- Anda bisa men-deploy ke **Vercel** atau layanan lain yang mendukung Next.js.
- Pastikan `.env` tersedia jika proyek ini menggunakan environment variables.

---

**Lisensi**: [MIT](LICENSE)

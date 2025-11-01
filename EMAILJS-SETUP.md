# Setup EmailJS untuk Contact Form

## Langkah 1: Daftar di EmailJS

1. Buka https://www.emailjs.com/
2. Klik **Sign Up** (gratis)
3. Daftar dengan email: **refanmaulanaa04@gmail.com**
4. Verifikasi email Anda

## Langkah 2: Tambah Email Service

1. Login ke dashboard EmailJS
2. Klik **Email Services** di sidebar
3. Klik **Add New Service**
4. Pilih **Gmail**
5. Klik **Connect Account**
6. Login dengan Gmail: **refanmaulanaa04@gmail.com**
7. Izinkan akses EmailJS
8. Copy **Service ID** (contoh: service_abc123)

## Langkah 3: Buat Email Template

1. Klik **Email Templates** di sidebar
2. Klik **Create New Template**
3. Isi template dengan format ini:

**Template Name:** contact_form

**Subject:** 
```
Pesan Baru dari Website SMK - {{subject}}
```

**Content:**
```
Pesan baru dari website SMK Negeri 1 Maja:

Nama: {{from_name}}
Email: {{from_email}}
Telepon: {{phone}}
Subjek: {{subject}}

Pesan:
{{message}}

---
Email ini dikirim otomatis dari formulir kontak website.
```

4. Klik **Save**
5. Copy **Template ID** (contoh: template_xyz789)

## Langkah 4: Dapatkan Public Key

1. Klik **Account** di sidebar
2. Klik **General** tab
3. Copy **Public Key** (contoh: AbCdEfGhIjKlMnOp)

## Langkah 5: Update Kode Website

### File: kontak.html (baris 12)
Ganti `YOUR_PUBLIC_KEY` dengan Public Key Anda:
```javascript
emailjs.init("AbCdEfGhIjKlMnOp"); // Ganti dengan Public Key Anda
```

### File: js/contact.js (baris 27)
Ganti `YOUR_SERVICE_ID` dan `YOUR_TEMPLATE_ID`:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Langkah 6: Test Form

1. Jalankan website: `npm start`
2. Buka: http://localhost:3000/kontak.html
3. Isi form dan klik "Kirim Pesan"
4. Cek email di **refanmaulanaa04@gmail.com**

## Troubleshooting

### Email tidak masuk?
- Cek folder Spam/Junk
- Pastikan Service sudah terkoneksi dengan Gmail
- Cek EmailJS Dashboard > Logs untuk error

### Error saat submit?
- Buka Console browser (F12)
- Lihat error message
- Pastikan Public Key, Service ID, dan Template ID sudah benar

## Keuntungan EmailJS

✅ **Gratis** - 200 email/bulan
✅ **Mudah** - Setup 5 menit
✅ **Reliable** - Langsung ke Gmail
✅ **Tracking** - Dashboard untuk monitor email
✅ **No Backend** - Pure frontend solution

## Limit Free Plan

- 200 emails per bulan
- 1 email service
- 2 email templates
- Basic support

Untuk unlimited, upgrade ke paid plan ($15/bulan)

## Support

Jika ada masalah:
1. Cek EmailJS Documentation: https://www.emailjs.com/docs/
2. Cek EmailJS Dashboard > Logs
3. Contact EmailJS Support

---

**Email Tujuan:** refanmaulanaa04@gmail.com
**Website:** SMK Negeri 1 Maja
**Form Location:** kontak.html

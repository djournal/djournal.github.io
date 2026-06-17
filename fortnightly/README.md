# Fortnightly Progress Report

## 📅 NEXT

### Admin Monita

- Memperbaiki fungsi auto-refresh pada fitur alarm:
  - Motivasi:
    - Data alarm belum menggunakan WS/SSE.
    - Efisiensi resource untuk looping fetch data.
  - Target:
    - Alarm page.
  - Ref: https://development.daunbiru.com/project/alarm/us/9?kanban-status=302
- Rilis 1.7.0:
  - Tambah halaman user's gadget `/#/user/gadget`.
  - Tambah info `domain:port` pada deviceName.
  - Unreg service worker saat logout.
  - Update sumber data push notif dari `.notification` ke `.data`.
  - Tambah info `Ref. ID` pada halaman detil alarm.
  - Seragamkan format datetime di semua halaman.
  - Ref: https://development.daunbiru.com/project/admin-monita/us/15?kanban-status=314
  - Ref: https://manual.monita.co.id/admin/#/?id=_170-2026-06-15

### Visual Monita

- Memperbaiki fungsi auto-refresh pada fitur alarm:
  - Motivasi:
    - Data alarm belum menggunakan WS/SSE.
    - Efisiensi resource untuk looping fetch data.
  - Target:
    - Alarm page.
    - Sidebar widget.
    - Navbar icon.
  - Ref: https://development.daunbiru.com/project/alarm/us/10?kanban-status=302
- Tambah prop `allowed_roles` untuk komponen 2 arah.
  - Ref: https://development.daunbiru.com/project/manual-monita/us/2?kanban-status=344
- Rilis 5.14.0:
  - Tambah prop UI untuk komponent `input` dan `input_date`.
  - Tambah info `domain:port` pada deviceName.
  - Unreg service worker saat logout.
  - Update sumber data push notif dari `.notification` ke `.data`.
  - Tambah info `Ref. ID` pada halaman alarm.
  - Ref: https://development.daunbiru.com/project/visual-monita/us/4?kanban-status=338
  - Ref: https://manual.monita.co.id/visual/#/?id=_5140-2026-06-17

### Lain-lain

- Rilis Visual Monita app 8 (5.14.0).
  - Update sumber data push notif dari `.notification` ke `.data`.
  - Ref: https://development.daunbiru.com/project/vismon-android-app/us/6?kanban-status=326

## 📅 2026-06-12

### Admin Monita

- Menambah halaman users' gadgets.
  - Konteks: List gadget yang menerima notifikasi.
  - Disclaimer: Proses revoke notifikasi tidak menghapus user's session.
  - Diskusi: Kalau perlu auto-logout, maka perlu API endpoint: `GET HOST/user/device/<hardware_id>`
  - Ref: https://development.daunbiru.com/project/admin-monita/us/14?kanban-status=314
- Mengubah tampilan dashboard.
  - Perubahan:
    - Info jumlah perangkat.
    - Info jumlah perangkat aktif.
    - Info jumlah perangkat tidak aktif.
    - Separasi list perangkat aktif dan tidak aktif.
  - Ref: https://development.daunbiru.com/project/admin-monita/us/13?kanban-status=314
- Ganti sumber data dan click action alarm.
  - Motivasi: Terkait perubahan struktur payload pada backend.
  - Ref: https://development.daunbiru.com/project/alarm/us/14?kanban-status=298

### Visual Monita

- Menambah jumlah alarm un-ack-ed pada sidebar.
  - Ref: https://development.daunbiru.com/project/alarm/us/8?kanban-status=302
- Ganti sumber data dan click action alarm.
  - Motivasi: Terkait perubahan struktur payload pada backend.
  - Ref: https://development.daunbiru.com/project/alarm/us/15?kanban-status=302
- Update props pada HMI komponen `input`.
  - Motivasi: Mengirim data dari HMI langsung ke loket.
  - Ref: https://development.daunbiru.com/project/visual-monita/us/1?kanban-status=337
- Tambah info server pada halaman login (pojok kiri atas).
  - Ref: https://development.daunbiru.com/project/visual-monita/us/3?kanban-status=337

### Lain-lain

- Mengubah payload pesan pada backend.
  - Motivasi: Formatting pesan dan datetime spesifik gadget user.
  - Ref: https://development.daunbiru.com/project/alarm/us/13?kanban-status=302
- Ganti sumber data dan click action alarm Visual Monita App (Debug).
  - Motivasi: Terkait perubahan struktur payload pada backend.
  - Ref: https://development.daunbiru.com/project/alarm/us/16?kanban-status=302
- Update info komponen `input` pada manual monita:
  - Ref: https://development.daunbiru.com/project/manual-monita/us/1?kanban-status=343

## 📅 2026-06-04

### Admin Monita

- Detil halaman alarm/notifikasi.
- Memastikan aplikasi jalan dengan IP address.
- Mengubah kondisi active/stale device pada dashboard.

### Visual Monita

- Detil halaman alarm/notifikasi.
- Menambah widget alarm/notifikasi pada sidebar.
- Memastikan aplikasi jalan dengan IP address.
- Android app version `7 (5.13.0)` sebelumnya `6 (5.10.0)`.
  - Alarm notification.

### Lain-lain

- Request API
  - Endpoint untuk table `user_devices`.
- Tambah menu "Archive" pada aplikasi downloader.
  - Memindahkan SofHaliza lama ke kategori ini.
- HMI Pelindo OK: Buat 2 halaman.
- Manual Monita:
  - Link download & changelog Visual Monita
  - Link download & changelog Admin Monita
- Taiga:
  - Alarm Monita.
  - HMI Tanjung Emas.
  - Mockup Monita Marine.
  - Vismon Android App.
  - Dishub (Downloader).
  - Admin Monita.
- Gagasan: PoC Monita alarm native mobile app.
  - Native app dengan native-script atau lynx.

## 📅 2026-05-21

### Admin Monita

- Unique SN
- Alarm
- Configurable:
  - Alarm
  - Chat

### Visual Monita

- Alarm
- Configurable:
  - Alarm
  - Chat
- PoC Component-based XML

### Lain-lain

- Pelindo
  - Alt 1
  - Alt 2
- Github Action
  - Asset
    - Existing: Google Drive
  - Deploy
    - Existing: Rsync

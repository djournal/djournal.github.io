# Matikan listrik

...setelah jam kerja selesai.

Setelah seluruh tugas kantor usai, ada ruang yang perlahan terbuka—ruang yang tidak lagi diisi oleh target, _deadline_, atau prioritas tim. Di saat seperti ini, pekerjaan tidak benar-benar berhenti, hanya berganti bentuk. Dari sesuatu yang terstruktur menjadi sesuatu yang lebih bebas dan kadang tidak punya tujuan yang jelas.

Di halaman ini, saya menamai semuanya sebagai eksperimen. Tidak ada standar keberhasilan yang kaku, tidak ada ekspektasi harus jadi produk. Kadang hanya mencoba ide kecil yang sempat lewat di kepala saat jam kerja, kadang sekadar membongkar cara kerja sesuatu yang selama ini dipakai tanpa dipahami.

Dan mungkin, dari kebiasaan “setelah listrik dimatikan” inilah hal-hal yang paling tidak terduga akan muncul. Bukan karena direncanakan sejak pagi, tapi karena ada waktu kosong yang cukup jujur untuk membiarkan rasa penasaran mengambil alih untuk berganti.

![WhatsApp Image 2026-04-22 at 16.44.50](https://hackmd.io/_uploads/SJZljBL6bg.jpg)

## VS Code Plugin

<img src="https://hackmd.io/_uploads/HyEfa0aT-g.png" alt="VS Code Plugin" style="float: left; margin-right: 24px; margin-bottom: 12px; width: 150px;" />

Bekerja sebagai programmer, saya mengawalinya dengan beberapa aplikasi teks editor, sebut saja Notepad++, Sublime, dan Macromedia Dreamweaver. Saya tidak ingat persis mana yang paling awal. Lantas kemudian tahun-tahun berlalu, muncul Atom teks editor andalan, sebelum akhirnya dimatikan oleh Microsoft dan diganti dengan VS Code.

Dengan ketersediaan _plugin_ yang lebih dari cukup, transisi dari Atom ke VS Code terasa sangat lancar. Menariknya, beberapa tahun kemudian, khususnya saat era AI makin menggema, muncul turunan VS Code seperti Cursor, Trae, Antigraviti, Kiro, dan mungkin masih ada beberapa lagi lainnya. Perpindahan dari VS Code ke aplikasi-aplikasi turunan tersebut bisa dikatakan hampir _zero learning curve_.

Kondisi tersebut lantas memunculkan gagasan untuk membangun _tools_ dalam bentuk _plugin_. Contoh _tools_ yang paling sederhana adalah konverter XML ke JSON dengan _core library_ Objtree dari Kawa.net. Dari banyak _library_ yang modern saya menggunakan _oldschool library_ itu untuk menjaga _compatibility_ sistem yang sudah ada. Salah satu _core library_ tanpa ada urgensi untuk mengganti atau memperbarui.

Tentu konverter XML ke JSON bukanlah _goal_ yang ingin dicapai. Masih ada proses pengembangan lanjutan agar _plugin_ dapat menjadi solusi sebagai media untuk menggambar HMI. Konverter ini hanyalah _minimum viable product_ untuk saya ajukan sebelum akhirnya benar-benar diproduksi.

Panduan singkat untuk membuat _plugin_ VS Code bisa dilihat di halaman repo [Visual Studio Code extension generator](https://github.com/microsoft/vscode-generator-code). Bila tidak ada prasyarat versi minimal VS Code, gunakan `"vscode": "^1.80.0"` untuk memastikan _plugin_ berjalan pada versi _development_. Bagi saya, ini adalah 'halang rintang' perdana.

Dari satu gagasan bergulir ke gagasan yang lain, bahkan lebih besar. Gagasan lain itu adalah sebuah _platform_ tempat berbagai aplikasi _static_ berada dalam satu wadah. Seperti sebuah _operating system_ yang memuat berbagai aplikasi. Barang kali di lain kesempatan ada pelung yang bernilai untuk memulai.

(28 April 2026)

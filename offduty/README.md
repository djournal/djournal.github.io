# Matikan listrik

...setelah jam kerja selesai.

Setelah seluruh tugas kantor usai, ada ruang yang perlahan terbuka—ruang yang tidak lagi diisi oleh target, _deadline_, atau prioritas tim. Di saat seperti ini, pekerjaan tidak benar-benar berhenti, hanya berganti bentuk. Dari sesuatu yang terstruktur menjadi sesuatu yang lebih bebas dan kadang tidak punya tujuan yang jelas.

Di halaman ini, saya menamainya sebagai eksperimen. Tidak ada standar keberhasilan yang kaku, tidak ada pula aturan yang baku. Kadang hanya mencoba ide kecil yang sempat lewat di kepala saat jam kerja, kadang sekadar membongkar cara kerja sesuatu yang selama ini digunakan tanpa benar-benar dipahami.

Dan mungkin, dari kebiasaan “setelah listrik dimatikan” inilah hal-hal yang paling tidak terduga akan muncul. Bukan karena direncanakan sejak pagi, tapi karena ada waktu kosong yang cukup jujur untuk membiarkan rasa penasaran mengambil alih untuk berganti.

![WhatsApp Image 2026-04-22 at 16.44.50](https://hackmd.io/_uploads/SJZljBL6bg.jpg)

## VS Code Plugin

<img src="https://hackmd.io/_uploads/Hkrt9k0pZl.jpg" alt="VS Code Plugin" style="float: left; margin: 6px 24px 12px 0; width: 150px;" />

Bekerja sebagai programmer, saya mengawalinya dengan beberapa aplikasi teks editor, sebut saja Notepad++, Sublime, dan Macromedia Dreamweaver. Saya tidak ingat persis mana yang paling awal. Lantas kemudian tahun-tahun berlalu, muncul Atom teks editor andalan, sebelum akhirnya dimatikan oleh Microsoft dan diganti dengan VS Code.

Dengan ketersediaan _plugin_ yang lebih dari cukup, transisi dari Atom ke VS Code terasa sangat lancar. Menariknya, beberapa tahun kemudian, khususnya saat era AI makin menggema, muncul turunan VS Code seperti Cursor, Trae, Antigraviti, Kiro, dan mungkin masih ada beberapa lagi lainnya. Perpindahan dari VS Code ke aplikasi-aplikasi turunan tersebut bisa dikatakan hampir _zero learning curve_.

Kondisi tersebut lantas memunculkan gagasan untuk membangun _tools_ dalam bentuk _plugin_. Contoh _tools_ yang paling sederhana adalah konverter XML ke JSON dengan _core library_ Objtree dari Kawa.net. Dari banyak _library_ modern, saya menggunakan _oldschool library_ itu untuk menjaga _compatibility_ sistem yang sudah ada. Salah satu _core library_ tanpa urgensi untuk mengganti atau memperbarui.

Tentu konverter XML ke JSON bukanlah _goal_ yang ingin dicapai. Masih ada proses pengembangan lanjutan agar _plugin_ dapat menjadi solusi atas kendala saat menggambar HMI dengan XML. Konverter ini hanyalah _minimum viable product_ untuk saya ajukan sebelum proses produksi, andai disetujui.

Panduan singkat untuk membuat _plugin_ VS Code bisa dilihat di halaman repo [Visual Studio Code extension generator](https://github.com/microsoft/vscode-generator-code). Bila tidak ada prasyarat versi minimal VS Code, gunakan `"vscode": "^1.80.0"` untuk memastikan _plugin_ berjalan pada versi _development_. Bagi saya, ini adalah 'halang rintang' perdana.

Dari satu gagasan bergulir ke gagasan yang lain, bahkan lebih besar. Gagasan lain itu adalah sebuah _platform_ tempat berbagai aplikasi _static_ berada dalam satu wadah. Seperti sebuah _operating system_ yang memuat berbagai aplikasi. Barang kali di lain kesempatan ada pelung yang bernilai untuk memulai.

(28 April 2026)

## Potret Kamu, Awal Kita Bertemu

<img src="https://hackmd.io/_uploads/SyH9_neyGx.jpg" alt="Kaos Kenangan" style="float: left; margin: 6px 24px 12px 0; width: 150px;" />

Beberapa waktu lalu adalah hari jadi pernikahan saya dan istri saya.
Di hari itu, tiba-tiba muncul sebuah keinginan kecil di kepala saya: membuat sebuah kaos kenangan.

Bukan tentang hari kami menikah.
Melainkan tentang hari yang jauh lebih sederhana—hari pertama kami bertemu.

Hari ketika untuk pertama kalinya kami saling menatap, saling menyapa, lalu tanpa kami sadari, hidup kami perlahan mulai berubah arah.

Saya tidak ingat momen itu terjadi.
Yang saya ingat hanya satu: kami pernah sengaja membuat janji untuk bertemu di sebuah acara bernama Kumkum, di Museum Bank Mandiri.

Berbekal rasa penasaran dan sedikit rindu pada masa itu, saya mulai mencarinya di internet.
Saya membuka arsip demi arsip lama, sampai akhirnya menemukan sebuah tulisan
yang mengulas acara tersebut.

Dan di antara foto-foto yang ada, saya menemukan sesuatu yang membuat saya tersenyum cukup lama—sepotong gambar lengan istri saya yang tertangkap kamera secara tidak sengaja.

Foto itu sederhana.
Mungkin tidak berarti apa-apa bagi orang lain.

Namun bagi saya, itu adalah jejak kecil dari hari yang diam-diam mengubah seluruh hidup saya.

Tentang seorang laki-laki yang datang ke sebuah acara hanya untuk bertemu seseorang yang saat itu belum sepenuhnya ia mengerti—namun entah bagaimana, hatinya sudah lebih dulu memilih.

This picture isn't mine, but that moment was.
I came to that place for one simple reason: to finally meet you.
From messages on screen to real life.
Back then, I didn't know your story, didn't know your world.
But the moment I saw you, something inside me quietly chose you.

Dan mungkin, cinta memang sering datang dengan cara sesederhana itu:

sebuah pertemuan biasa,
di hari yang tampak biasa,
yang diam-diam menjadi awal dari seluruh hidup kita.

(12 Mei 2026)

---

Beberapa waktu lalu adalah hari jadi pernikahan saya dan istri. Tiba-tiba muncul sebuah keinginan kecil di kepala saya: membuat sebuah kaos kenangan. Bukan tentang tanggal kami menikah, melainkan tentang hari yang jauh lebih sederhana—hari pertama kami bertemu.

Hari ketika untuk pertama kalinya kami saling menatap, saling menyapa, dan tanpa kami sadari, hidup kami perlahan mulai berubah.

Masalahnya, saya benar-benar tidak ingat kapan tepatnya momen itu terjadi. Yang saya ingat hanya satu: kami pernah sengaja membuat janji untuk bertemu di sebuah acara bernama Kumkum, di Museum Bank Mandiri. Saat itu, istri saya sedang membantu temannya menjaga sebuah stan kecil yang menjual sapu tangan bergambar peta Transjakarta.

Berbekal rasa penasaran dan sedikit nostalgia, saya mulai mencarinya di internet. Saya membuka berbagai arsip lama sampai akhirnya menemukan [sebuah tulisan](https://titiw.com/kumkum-2010-yang-super-hijau) yang mengulas acara tersebut. Dan di antara foto-foto yang ada, saya menemukan sesuatu yang membuat saya tersenyum sendiri—sepotong gambar lengan istri saya yang tertangkap kamera secara tidak sengaja.

Foto itu sederhana. Bahkan mungkin tidak berarti apa-apa bagi orang lain. Tapi bagi saya, itu adalah jejak kecil dari hari yang diam-diam mengubah hidup saya.

Lebih beruntung lagi, foto tersebut masih menyimpan metadata waktu pengambilan gambar.

Dan akhirnya, setelah bertahun-tahun, saya tahu kapan pertama kali kami bertemu.

Saya lalu mencetak momen itu menjadi sebuah kaos. Ada gambar istri saya di sana, lengkap dengan cerita singkat tentang bagaimana semuanya dimulai. Tentang seorang laki-laki yang datang ke sebuah acara hanya untuk bertemu seseorang yang saat itu belum ia mengerti sepenuhnya—namun entah bagaimana, hatinya sudah memilih.

> _This picture isn't mine, but that moment was._<br/>
> _I came to that place for one simple reason: to finally meet you._<br/>
> _From messages on screen to real life._<br/>
> _Back then, I didn't know your story, didn't know your world._<br/>
> _But when I saw you, something in me quietly chose you._

Dan mungkin, cinta memang sering dimulai dengan cara sesederhana itu:
sebuah pertemuan biasa, di hari yang tampak biasa, yang ternyata menjadi awal dari seluruh hidup kita.

(12 Mei 2026)

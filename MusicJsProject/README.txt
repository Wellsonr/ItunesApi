Mengonversi Data: Data yang diperoleh dari API iTunes kemudian diolah. Hasil pencarian artis dan lagu dari API tersebut diubah ke dalam format yang sesuai untuk digunakan dalam proyek ini. Setiap hasil pencarian diubah menjadi objek dengan atribut title, artist, img (untuk gambar album), dan file (untuk file audio).

Dropdown Menu: Setelah data telah diolah, Anda membuat tautan-tautan artist untuk ditampilkan dalam dropdown menu. Setiap artist menjadi tautan yang dapat diklik. Ketika tautan tersebut diklik, lagu dari artis yang bersangkutan akan dimuat dan diputar.

Fungsi Load Track: Fungsi loadTrack digunakan untuk memuat lagu yang dipilih. Ini mengubah sumber audio (audio.src) menjadi file audio yang sesuai, memuat audio tersebut, dan memainkannya. Selain itu, ia juga mengubah teks judul dan nama artis yang ditampilkan di layar, serta gambar album lagu.

Event Listener: Ada beberapa event listener yang ditambahkan untuk berbagai interaksi pengguna. Ini termasuk tombol "Prev" dan "Next" untuk mengganti lagu, tombol putar/jeda, dan mengklik progress bar untuk mengubah posisi pemutaran.

Fungsi Change Background: Fungsi ini digunakan untuk mengubah latar belakang dengan gambar album lagu yang sedang diputar.

Pemutaran Musik: Ada fungsi checkIsPlaying yang mengontrol pemutaran musik. Saat pengguna mengklik tombol putar/jeda, fungsi ini mengubah status pemutaran dan memperbarui ikon tombol sesuai dengan status pemutaran saat ini.

Pembaruan Progress Bar: Pembaruan progress bar terjadi saat lagu sedang diputar. Ini memungkinkan pengguna melihat seberapa jauh lagu telah dimainkan dalam persentase.

Event Listener Lagu Selesai: Saat lagu selesai diputar, event listener ini akan memperbarui tampilan tombol putar/jeda.

Penanganan Kesalahan: Terdapat penanganan kesalahan jika ada masalah saat mengambil data dari API iTunes. Kesalahan ini akan dicetak ke konsol.

Event Listener Tombol "Search": Event listener ini menghubungkan fungsi updateTerm ke tombol "Search". Ketika tombol ini diklik, pencarian lagu akan dimulai sesuai dengan kata kunci yang dimasukkan oleh pengguna.
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const openButton = document.querySelector(".open-sidebar-button");
    const closeButton = document.querySelector(".close-sidebar-button");
    const body = document.querySelector("body");

    openButton.addEventListener("click", function() {
        sidebar.style.width = "250px"; // Buka sidebar dengan mengubah lebar menjadi 250px
        openButton.style.display = "none"; // Sembunyikan gambar tombol buka
        closeButton.style.display = "block"; // Tampilkan gambar tombol tutup
    });

    closeButton.addEventListener("click", function() {
        sidebar.style.width = "0"; // Tutup sidebar dengan mengubah lebar menjadi 0
        closeButton.style.display = "none"; // Sembunyikan gambar tombol tutup
        openButton.style.display = "block"; // Tampilkan gambar tombol buka
    });

    body.addEventListener("click", function(event) {
        if (event.target !== sidebar && event.target !== openButton) {
            sidebar.style.width = "0"; // Tutup sidebar jika mengklik area di luar sidebar dan bukan tombol buka
            closeButton.style.display = "none"; // Sembunyikan gambar tombol tutup
            openButton.style.display = "block"; // Tampilkan gambar tombol buka
        }
    });
});

// script.js

const images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"]; // Daftar gambar yang akan ditampilkan
const imageElement = document.getElementById("image");
const paginationElement = document.getElementById("pagination");
let currentIndex = 0;
let intervalId; // Variabel untuk menyimpan ID interval

function changeImage(index) {
    currentIndex = index;
    imageElement.src = images[currentIndex];

    // Perbarui status aktif pada pagination
    const paginationItems = paginationElement.querySelectorAll(".pagination-item");
    paginationItems.forEach((item, i) => {
        if (i === currentIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Hentikan interval yang berjalan (jika ada) dan mulai interval baru
    clearInterval(intervalId);
    startImageRotation();
}

function createPagination() {
    for (let i = 0; i < images.length; i++) {
        const paginationItem = document.createElement("span");
        paginationItem.classList.add("pagination-item");
        if (i === currentIndex) {
            paginationItem.classList.add("active");
        }
        paginationItem.addEventListener("click", () => changeImage(i));
        paginationElement.appendChild(paginationItem);
    }
}

function startImageRotation() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }, 3000);
}

createPagination();
startImageRotation();

// Memulai bergulir otomatis saat halaman dimuat
autoScroll();

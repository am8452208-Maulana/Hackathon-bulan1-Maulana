/* ==============================
   MOTOIN - SIMULASI REMINDER
================================ */

// Mengambil elemen form dari HTML
const reminderForm = document.getElementById("reminder-form");
const userNameInput = document.getElementById("user-name");
const motorNameInput = document.getElementById("motor-name");
const formMessage = document.getElementById("form-message");

// Menjalankan proses ketika form dikirim
reminderForm.addEventListener("submit", function(event) {

    // Mencegah halaman reload
    event.preventDefault();

    // Mengambil data yang diinput pengguna
    const userName = userNameInput.value.trim();
    const motorName = motorNameInput.value.trim();

    // Memeriksa apakah data sudah terisi
    if (userName === "" || motorName === "") {

        formMessage.textContent =
            "Mohon isi nama dan kendaraan terlebih dahulu.";

        return;
    }

    // Menampilkan pesan konfirmasi
    formMessage.textContent =
        "Halo " + userName +
        "! Pengingat perawatan untuk " +
        motorName +
        " berhasil dibuat dalam simulasi MOTOIN. 🏍️";

    // Mengosongkan form setelah berhasil
    reminderForm.reset();
});
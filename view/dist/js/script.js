const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

const registrationForm = document.getElementById("registrationForm");
const createUserButton = document.getElementById("createUser");
const findUserButton = document.getElementById("findUser");
const updateUserEmailButton = document.getElementById("updateUserEmail");
const deleteUserButton = document.getElementById("deleteUser");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const no_resi = document.getElementById("no_resi").value;
  const nama_pengirim = document.getElementById("nama_pengirim").value;
  const nama_penerima = document.getElementById("nama_penerima").value;
  const alamat = document.getElementById("alamat").value;
  const no_hp = document.getElementById("no_hp").value;
  const keterangan = document.getElementById("keterangan").value;

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      no_resi: no_resi,
      nama_pengirim: nama_pengirim,
      nama_penerima: nama_penerima,
      alamat: alamat,
      no_hp: no_hp,
      keterangan: keterangan,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Registrasi berhasil");
      } else {
        alert("Registrasi gagal");
      }
    })
    .catch((error) => {
      alert(`Terdapat error: ${error.message}`);
    });
});

// findUserButton.addEventListener("click", async () => {
//   const no_resi =  document.getElementById("findno_resi").value;

//   const response = await fetch(baseURL + '/' + no_resi, {
//     method: "GET",
//   });
//   const result = await response.json();
//   output.innerHTML = JSON.stringify(result);
// });


fetch("http://localhost:3000/users")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Gagal mengambil data");
                }
            })
            .then((data) => {
                // Data berhasil diambil, tampilkan dalam tabel
                const dataContainer = document.getElementById("data-container");

                data.forEach((item) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${item.no_resi}</td>
                        <td>${item.nama_pengirim}</td>
                        <td>${item.nama_penerima}</td>
                        <td>${item.alamat}</td>
                        <td>${item.no_hp}</td>
                        <td>${item.keterangan}</td>
                    `;
                    dataContainer.appendChild(row);
                });
            })
            .catch((error) => {
                // Tangani kesalahan jika terjadi
                console.error(`Terdapat error: ${error.message}`);
            });

            document.addEventListener("DOMContentLoaded", function () {
                const noResiInput = document.getElementById("no_resi");
                const submitButton = document.getElementById("submitbutton");
        
                // Fungsi untuk menghasilkan nomor resi secara otomatis
                function generateNoResi() {
                    const timestamp = new Date().getTime(); // Menggunakan timestamp sebagai nomor resi
                    noResiInput.value = timestamp;
                }
        
                // Panggil fungsi generateNoResi saat halaman dimuat
                generateNoResi();
        
                // Tambahkan event listener untuk tombol "Submit" agar nomor resi dihasilkan lagi sebelum pengiriman
                submitButton.addEventListener("click", generateNoResi);
            });
// Panggil fungsi fetchData saat halaman dimuat
window.addEventListener('load', fetchData);
 
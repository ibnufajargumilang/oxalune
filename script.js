const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1csxZrlQ_Ub2Rc4hV9VA2fWAQyTh82x291stq9t_GFww/pub?output=csv";

fetch(SHEET_CSV_URL)
    .then(res => res.text())
    .then(csvText => {
        const rows = csvText.split("\n").slice(1); // Lewati header
        const produkContainer = document.getElementById("produk-container");

        rows.forEach(row => {
            const cols = row.split(",");
            const nama = cols[0] || "-";
            const harga = cols[1] || "-";
            const gambar = cols[2] || "";
            const deskripsi = cols[3] || "";

            const col = document.createElement('div');
            col.className = 'col-md-4';

            col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${gambar}" class="card-img-top" alt="${nama}" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${nama}</h5>
            <p class="card-text">${deskripsi}</p>
            <p class="text-primary fw-bold">Rp ${harga}</p>
          </div>
        </div>
      `;
            produkContainer.appendChild(col);
        });
    })
    .catch(err => {
        console.error("Gagal mengambil data:", err);
    });

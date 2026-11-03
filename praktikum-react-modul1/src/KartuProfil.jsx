import React from "react";
// Mengimpor aset foto profil default dari folder assets
import fotoLestari from "./assets/PW_2026.jpeg";

// Komponen KartuProfil menerima props 'nama', 'npm', 'kelas', 'status', dan 'fotourl' untuk menampilkan kartu identitas mahasiswa
function KartuProfil({ nama, npm, kelas, status, fotourl }) {
  return (
    // Wadah utama kartu profil dengan styling flexbox, border, latar belakang pink, dan bayangan
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Membuat isi kartu berada di tengah secara horizontal
        textAlign: "left", // Mengubah teks agar rata kiri (tidak center/justify)
        border: "2px solid #f3baeb",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f6d3e3",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* Sub-kontainer untuk menyusun foto profil dan informasi teks secara berdampingan */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Elemen gambar yang menggunakan fotourl jika tersedia, atau fallback ke fotoLestari */}
        <img
          src={fotourl || fotoLestari}
          alt={`Foto ${nama}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "70%",
            objectFit: "cover",
          }}
        />
        {/* Bagian teks informasi diri (Nama, NPM, Kelas) yang diatur rata kiri */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ margin: "0 0 4px 0", color: "#1B365D" }}>{nama}</h3>
          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#555",
              fontWeight: "bold",
              borderBottom: "1px solid #686b70",
            }}
          >
            NPM: {npm}
          </p>
          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#555",
              fontWeight: "bold",
              borderBottom: "1px solid #686b70",
            }}
          >
            Kelas: {kelas}
          </p>
        </div>
      </div>

      {/* Bagian bawah untuk menampilkan status akademik dengan badge warna dinamis */}
      <div
        style={{
          marginTop: "16px",
          borderTop: "2px solid #686b70",
          paddingTop: "10px",
          textAlign: "center", // Status akademik juga rata kiri
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "bold",
            // Mengatur warna latar belakang berdasarkan kondisi nilai status (Aktif/Tidak)
            backgroundColor: status === "Aktif" ? "#D4EDDA" : "#FFF3CD",
            color: status === "Aktif" ? "#155724" : "#856404",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;

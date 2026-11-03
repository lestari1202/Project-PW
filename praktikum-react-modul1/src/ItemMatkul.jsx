import React from "react";

// Komponen ItemMatkul menerima props 'kode', 'nama', 'sks', dan 'hari' untuk menampilkan informasi detail setiap praktikum
function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    // Wadah utama card item mata kuliah dengan tata letak flexbox dan border samping berwarna pink
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#faf4f7",
        borderLeft: "10px solid #f6d3e3",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      {/* Bagian kiri untuk menampilkan kode, nama mata kuliah, dan jadwal hari */}
      <div>
        {/* Menampilkan kode praktikum dengan cetak tebal dan warna biru */}
        <span style={{ fontWeight: "bold", color: "#1B365D" }}>
          {kode}
        </span> - {nama}
        {/* Sub-elemen untuk menampilkan informasi jadwal hari praktikum */}
        <div
          style={{
            fontSize: "12px",
            color: "#0d0d0d",
            marginTop: "4px",
            textAlign: "left",
          }}
        >
          Jadwal Sesi: {hari}
        </div>
      </div>
      {/* Bagian kanan untuk menampilkan badge jumlah SKS praktikum */}
      <span
        style={{
          backgroundColor: "#E1E4E8",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;

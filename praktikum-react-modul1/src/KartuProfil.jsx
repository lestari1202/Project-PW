import React from "react";
import fotoLestari from "./assets/PW_2026.jpeg";

function KartuProfil({ nama, npm, kelas, status, fotourl }) {
  return (
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
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
        {/* Bagian teks ini diatur rata kiri (left) */}
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

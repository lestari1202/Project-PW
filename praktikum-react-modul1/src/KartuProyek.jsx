import React from "react";

// Komponen KartuProyek menerima props 'judul', 'deskripsi', 'teknologi', dan 'linkGithub' untuk menampilkan detail proyek
function KartuProyek({ judul, deskripsi, teknologi, linkGithub }) {
  return (
    // Wadah utama kartu proyek menggunakan tata letak flexbox dengan border tebal dan efek bayangan
    <div
      style={{
        border: "5px solid #f6d3e3",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Sub-kontainer untuk menampung judul, deskripsi, dan daftar teknologi */}
      <div>
        {/* Menampilkan judul proyek dengan warna biru tua */}
        <h3 style={{ margin: "0 0 8px 0", color: "#1B365D" }}>{judul}</h3>
        {/* Menampilkan teks deskripsi proyek */}
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.4",
            marginBottom: "12px",
          }}
        >
          {deskripsi}
        </p>

        {/* Render Tagar Teknologi */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "16px",
            justifyContent: "center",
          }}
        >
          {/* Melakukan Looping pada array teknologi untuk merender tag badge teknologi */}
          {teknologi.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#f5c9e7",
                color: "#2B6CB0",
                fontSize: "11px",
                padding: "2px 8px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tautan tombol untuk mengarahkan pengguna ke repositori GitHub terkait */}
      <a
        href={linkGithub}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          textAlign: "center",
          backgroundColor: "#24292E",
          color: "#FFFFFF",
          padding: "8px 12px",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default KartuProyek;

import React from "react";

// Komponen BadgeSkill menerima props 'namaSkill' dan 'level' untuk menampilkan badge keahlian
function BadgeSkill({ namaSkill, level }) {
  // Fungsi helper untuk menentukan warna latar belakang, teks, dan border berdasarkan level keahlian
  const getBadgeStyle = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "mahir":
        return { bg: "#D4EDDA", text: "#155724", border: "#C3E6CB" };
      case "menengah":
        return { bg: "#CCE5FF", text: "#004085", border: "#B8DAFF" };
      case "pemula":
      default:
        // Warna default jika level tidak cocok atau merupakan pemula
        return { bg: "#FFF3CD", text: "#856404", border: "#FFEEBA" };
    }
  };

  // Menyimpan hasil konfigurasi objek warna berdasarkan nilai props level
  const style = getBadgeStyle(level);

  return (
    // Elemen span sebagai wadah utama badge dengan styling dinamis
    <span
      style={{
        display: "inline-block",
        padding: "6px 12px",
        margin: "4px",
        borderRadius: "16px",
        fontSize: "13px",
        fontWeight: "600",
        backgroundColor: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
      }}
    >
      {/* Menampilkan nama skill diikuti dengan tag small untuk menampilkan level secara dinamis */}
      - {namaSkill}
      <small style={{ fontWeight: "normal" }}>{level}</small>
    </span>
  );
}

export default BadgeSkill;

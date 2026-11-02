import React from "react";

function BadgeSkill({ namaSkill, level }) {
  // Penentuan warna badge berdasarkan level keahlian
  const getBadgeStyle = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "mahir":
        return { bg: "#D4EDDA", text: "#155724", border: "#C3E6CB" };
      case "menengah":
        return { bg: "#CCE5FF", text: "#004085", border: "#B8DAFF" };
      case "pemula":
      default:
        return { bg: "#FFF3CD", text: "#856404", border: "#FFEEBA" };
    }
  };

  const style = getBadgeStyle(level);

  return (
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
      {namaSkill} • <small style={{ fontWeight: "normal" }}>{level}</small>
    </span>
  );
}

export default BadgeSkill;

import React from "react";

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
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
      <div>
        <span style={{ fontWeight: "bold", color: "#1B365D" }}>{kode}</span> -{" "}
        {nama}
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

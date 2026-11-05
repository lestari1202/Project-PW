// src/ItemTransaksi.jsx
function ItemTransaksi({ transaksi, onHapus }) {
  // Indikator warna visual: Hijau untuk pemasukan, Merah untuk pengeluaran
  const warnaTeks = transaksi.jenis === "pemasukan" ? "#16A34A" : "#DC2626";
  const tandaSimbol = transaksi.jenis === "pemasukan" ? "+" : "-";

  return (
    <li
      className="item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <strong>{transaksi.keterangan}</strong>
        <div style={{ fontSize: "13px", color: warnaTeks, fontWeight: "bold" }}>
          {tandaSimbol} Rp {transaksi.nominal.toLocaleString("id-ID")}
        </div>
      </div>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;

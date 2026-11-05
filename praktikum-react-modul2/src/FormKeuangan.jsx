// src/FormKeuangan.jsx
import { useState } from "react";

function FormKeuangan({ onTambahTransaksi }) {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("Pemasukan");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keterangan.trim() || !nominal || isNaN(nominal)) return;

    onTambahTransaksi({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: Number(nominal), // Mengubah nilai input string menjadi angka
      jenis: jenis,
    });

    setKeterangan("");
    setNominal("");
    setJenis("Pemasukan");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="baris" style={{ flexDirection: "column" }}>
        <input
          className="input"
          type="text"
          placeholder="Keterangan (contoh: Jajan)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Nominal (contoh: 10000)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
        <button className="tombol" type="submit">
          Tambah Transaksi
        </button>
      </div>
    </form>
  );
}

export default FormKeuangan;

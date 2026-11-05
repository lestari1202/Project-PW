// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";
import FormKeuangan from "./FormKeuangan";

function App() {
  // 1. STATE UTAMA DAFTAR TUGAS (dengan inisialisasi localStorage)
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
      { id: 3, judul: "Pelajari useEffect", selesai: false },
    ];
  });

  // STATE UNTUK TUGAS 1: Filter tugas ('semua', 'belum', 'selesai')
  const [filter, setFilter] = useState("semua");

  // STATE UTAMA TUGAS 3: Catatan Keuangan Mini (dengan localStorage)
  const [transaksi, setTransaksi] = useState(() => {
    const dataKeuangan = localStorage.getItem("data-keuangan");
    if (dataKeuangan) {
      return JSON.parse(dataKeuangan);
    }
    return [];
  });

  // EFEK SAMPING (useEffect)
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas & Keuangan siap digunakan!");
  }, []);

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `${sisa} Tugas Belum Selesai`;
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem("data-keuangan", JSON.stringify(transaksi));
  }, [transaksi]);

  // FUNGSI PENGELOLA TUGAS
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const hapusTugasSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === "belum") return !tugas.selesai;
    if (filter === "selesai") return tugas.selesai;
    return true;
  });

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // FUNGSI PENGELOLA KEUANGAN (TUGAS 3)
  const tambahTransaksi = (itemBaru) => {
    setTransaksi([itemBaru, ...transaksi]);
  };

  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((t) => t.id !== id));
  };

  const totalSaldo = transaksi.reduce((acc, curr) => {
    return curr.jenis === "Pemasukan" ? acc + curr.nominal : acc - curr.nominal;
  }, 0);

  return (
    <div className="wadah">
      <h1 className="judul">Praktikum Modul 2</h1>
      <p className="subjudul">
        Laboratorium Informatika: React Lanjutan & Interaktivitas
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas Praktikum">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        <div className="baris" style={{ marginBottom: "16px" }}>
          <button
            className={`tombol tombol-kecil ${filter === "semua" ? "tombol-aktif" : ""}`}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>
          <button
            className={`tombol tombol-kecil ${filter === "belum" ? "tombol-aktif" : ""}`}
            onClick={() => setFilter("belum")}
          >
            Belum Selesai
          </button>
          <button
            className={`tombol tombol-kecil ${filter === "selesai" ? "tombol-aktif" : ""}`}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {jumlahSelesai > 0 && (
          <div style={{ marginBottom: "12px" }}>
            <button
              className="tombol tombol-merah tombol-kecil"
              onClick={hapusTugasSelesai}
            >
              Hapus Semua yang Selesai
            </button>
          </div>
        )}

        {tugasTampil.length === 0 ? (
          <p className="kosong">Belum ada tugas pada filter ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>

      {/* TUGAS 3: Catatan Keuangan Mini */}
      <Kartu judul="Catatan Keuangan Mini">
        <FormKeuangan onTambahTransaksi={tambahTransaksi} />
        <p
          className="ringkasan"
          style={{ marginTop: "16px", fontWeight: "bold" }}
        >
          Saldo: Rp {totalSaldo.toLocaleString("id-ID")}
        </p>
        {transaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi.</p>
        ) : (
          <ul className="daftar">
            {transaksi.map((t) => (
              <li key={t.id} className="item">
                <span>
                  {t.keterangan} -{" "}
                  <strong
                    className={
                      t.jenis === "Pemasukan"
                        ? "teks-pemasukan"
                        : "teks-pengeluaran"
                    }
                  >
                    {t.jenis === "Pemasukan" ? "+ Rp " : "- Rp "}
                    {t.nominal.toLocaleString("id-ID")}
                  </strong>
                </span>
                <button
                  className="tombol tombol-merah tombol-kecil"
                  onClick={() => hapusTransaksi(t.id)}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;

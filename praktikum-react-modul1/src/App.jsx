import React from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

function App() {
  // Data Daftar Praktikum (Tugas 2) yang berisi array objek mata kuliah praktikum
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF21W0506",
      nama: "Praktikum Web (React & Laravel)",
      sks: 2,
      hari: "Selasa",
    },
    {
      id: 102,
      kode: "IF2W0507",
      nama: "Praktikum Sistem Berorientasi Objek ",
      sks: 1,
      hari: "Selasa",
    },
    {
      id: 103,
      kode: "IF21W0508",
      nama: "Praktikum Pemograman II",
      sks: 2,
      hari: "Senin",
    },
    {
      id: 104,
      kode: "IF21W0308",
      nama: "Praktikum Infrastruktur",
      sks: 1,
      hari: "Rabu",
    },
  ];

  // Data Daftar Skill (Tugas 1) yang menyimpan informasi keahlian dan levelnya
  const daftarSkill = [
    { id: 1, namaSkill: "PHP", level: "Pemula" },
    { id: 2, namaSkill: "HTML & CSS", level: "Menengah" },
    { id: 3, namaSkill: "JavaScript", level: "Pemula" },
    { id: 4, namaSkill: "React JS", level: "Pemula" },
    { id: 5, namaSkill: "GitHub", level: "Pemula" },
  ];

  // Data Portofolio Mini (Tugas 3) yang berisi daftar proyek beserta detail dan link GitHub
  const daftarProyek = [
    {
      id: 1,
      judul: "Tugas Besar Pemrograman Web",
      deskripsi:
        "Aplikasi web interaktif yang dikembangkan sebagai tugas besar mata kuliah Pemrograman Web.",
      teknologi: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      linkGithub: "https://github.com/lestari1202/pw2025_tubes_243040044",
    },
    {
      id: 2,
      judul: "Sistem Manajemen Data & Operasi CRUD",
      deskripsi:
        "Aplikasi pengolahan data interaktif dengan fitur Create, Read, Update, dan Delete terintegrasi basis data.",
      teknologi: ["MySQL", "SQL", "PHP"],
      linkGithub: "https://github.com/lestari1202/Level2_CRUD",
    },
    {
      id: 3,
      judul: "Halaman Web Interaktif & Dinamis",
      deskripsi:
        "Pengembangan antarmuka web responsif dengan integrasi script interaktif untuk pengalaman pengguna yang lebih dinamis.",
      teknologi: ["JavaScript", "HTML5", "CSS3"],
      linkGithub: "https://github.com/lestari1202/itw2024_project2_243040044",
    },
    {
      id: 4,
      judul: "Perancangan & Manajemen Basis Data",
      deskripsi:
        "Modul pengelolaan skema relasional database, manipulasi data SQL, dan pengolahan data terstruktur.",
      teknologi: ["MySQL", "SQL", "Database"],
      linkGithub: "https://github.com/lestari1202/PBD2025_B_243040044",
    },
  ];

  // Fungsi event handler untuk menampilkan alert pop-up ketika tombol sapaan diklik
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di showcase proyek portofolio Mini Lestari Vebrianti!",
    );
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 50px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Memastikan seluruh elemen utama berada di tengah
        textAlign: "center",
      }}
    >
      {/* Header utama halaman */}
      <header style={{ marginBottom: "32px", width: "100%" }}>
        <h1 style={{ color: "#1B365D", margin: "30px 0 8px 0" }}>
          Praktikum Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* SECTION 1: PROFIL & SKILL */}
      <section style={{ marginBottom: "32px", width: "100%" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #010101",
            paddingBottom: "8px",
            textAlign: "center",
          }}
        >
          Profil Mahasiswa
        </h2>

        {/* Kontainer Kartu Profil agar presisi di tengah */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Pemanggilan komponen KartuProfil dengan props data mahasiswa */}
          <KartuProfil
            nama="Lestari Vebrianti"
            npm="243040044"
            kelas="TIF - A"
            status="Aktif"
          />
        </div>

        {/* Tugas 1: Daftar Skill */}
        <div style={{ marginTop: "60px", width: "100%" }}>
          <h4
            style={{
              margin: "0 0 10px 0",
              color: "#1B365D",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            Daftar Keahlian (Skills):
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {/* Melakukan Looping data daftarSkill untuk merender komponen BadgeSkill */}
            {daftarSkill.map((s) => (
              <BadgeSkill key={s.id} namaSkill={s.namaSkill} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LIST MATKUL (Tugas 2) */}
      <section style={{ marginBottom: "32px", width: "100%" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #090909",
            paddingBottom: "8px",
            textAlign: "center",
          }}
        >
          Daftar Praktikum
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Melakukan Looping data daftarPraktikum untuk merender komponen ItemMatkul */}
          {daftarPraktikum.map((matkul) => (
            <div key={matkul.id} style={{ width: "100%", maxWidth: "600px" }}>
              <ItemMatkul
                kode={matkul.kode}
                nama={matkul.nama}
                sks={matkul.sks}
                hari={matkul.hari}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SHOWCASE PORTOFOLIO (Tugas 3) */}
      <section style={{ marginBottom: "32px", width: "100%" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #040404",
            paddingBottom: "8px",
            textAlign: "center",
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          {/* Melakukan Looping data daftarProyek untuk merender komponen KartuProyek */}
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              linkGithub={proyek.linkGithub}
            />
          ))}
        </div>
      </section>

      {/* INTERAKTIVITAS EVENT */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "40px",
          width: "100%",
        }}
      >
        {/* Tombol interaktif yang memanggil fungsi notifikasiSapaan saat diklik */}
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;

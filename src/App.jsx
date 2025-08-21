import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('vania');

  return (
    <div className="App">
      <nav>
        <button onClick={() => setPage('vania')}>Biodata Vania</button>
        <button onClick={() => setPage('ciroo')}>Biodata Ciroo</button>
      </nav>

      {page === 'vania' && (
        <div className="card">
          <h1>Biodata Vania</h1>
          <table>
            <tbody>
              <tr>
                <td colSpan="2" align="center">
                  <img src="/me.jpg" alt="Vania" className="foto-tengah" />
                </td>
              </tr>
              <tr><td>Nama</td><td>: Vania Malva Salsabila</td></tr>
              <tr><td>Absen</td><td>: 33</td></tr>
              <tr><td>Kelas</td><td>: X RPL A</td></tr>
              <tr><td>Jenis Kelamin</td><td>: Perempuan</td></tr>
              <tr><td>Tanggal Lahir</td><td>: 24 Desember 2008</td></tr>
              <tr><td>Hobby</td><td>: Memasak</td></tr>
              <tr><td>Lagu Kesukaan</td><td>: Di Ujung Jalan - Samsonns</td></tr>
              <tr><td>Jurusan</td><td>: RPL (Rekayasa Perangkat Lunak)</td></tr>
              <tr><td>Alamat</td><td>: JL. Anusopati gg.6</td></tr>
            </tbody>
          </table>

          <div className="skills-container">
            <h2>My Skills</h2>
            <div className="skills-row">
              <img src="/html.png" alt="HTML" />
              <img src="/css-3.png" alt="CSS" />
              <img src="/js.png" alt="JavaScript" />
              <img src="/c-sharp.png" alt="C#" />
              <img src="/react.png" alt="React" />
            </div>
          </div>

          <p>
            <a
              href="https://www.instagram.com/pupapiessy?igsh=dGtmcGpscW1rZnlu"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Vania
            </a>
          </p>
        </div>
      )}

      {page === 'ciroo' && (
        <div className="card">
          <h1>Biodata Ciroo</h1>
          <table>
            <tbody>
              <tr>
                <td colSpan="2" align="center">
                  <img src="/ciro.jpeg" alt="Ciroo" className="foto-tengah" />
                </td>
              </tr>
              <tr><td>Nama</td><td>: Ciroo</td></tr>
              <tr><td>Umur</td><td>: 1 tahun kurang</td></tr>
              <tr><td>Jenis</td><td>: Campuran</td></tr>
              <tr><td>Jenis Kelamin</td><td>: Perempuan</td></tr>
              <tr><td>Hobby</td><td>: Ngerusakin Barang, Tidur</td></tr>
              <tr><td>Makanan Kesukaan</td><td>: Wiskas Tuna</td></tr>
              <tr><td>Warna bulu</td><td>: Putih</td></tr>
              <tr><td>Alamat</td><td>: JL. Anusopati gg.6</td></tr>
            </tbody>
          </table>
          <p>
            <a
              href="https://www.instagram.com/cilooyoo?igsh=Mzk2YzB1a2IwMWNx"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Ciroo
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

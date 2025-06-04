Panduan Multi Token Sender

Halo! Ini aplikasi untuk kirim token (USDT, POL, dll.) ke banyak alamat di Polygon Mainnet. Ikuti langkah mudah ini:

1. Persiapan:
   - Pakai Google Chrome atau Firefox.
   - Koneksi internet stabil.
   - Saldo token (misal: 4.999 USDT) dan gas (misal: 19.6715 POL).

2. Install MetaMask:
   - Buka https://metamask.io di browser.
   - Klik "Download", install extension.
   - Buat wallet baru atau import wallet (simpan seed phrase di tempat aman!).

3. Tambah Polygon Mainnet:
   - Di MetaMask, klik "Network" > "Add Network" > "Add Network Manually".
   - Isi:
     - Network Name: Polygon Mainnet
     - RPC URL: https://rpc-mainnet.matic.network
     - Chain ID: 137
     - Symbol: POL
     - Block Explorer: https://polygonscan.com
   - Klik "Save".

4. Buka Aplikasi:
   
   - Buka Command Prompt/Terminal.
   - Masuk ke folder aplikasi:
     cd "C:\Users\an\multi-sender\Multi-sender-web" (sesuai dengan dimana anda menyimpan folder aplikasi ini)
   - Jalankan server lokal:
     python -m http.server 5500
   - Buka browser dan akses:
     http://127.0.0.1:5500/token-sender.html
   - Aplikasi akan berjalan optimal (bisa install PWA, QR, dll).

5. Connect Wallet:
   - Klik tombol "Connect Wallet".
   - MetaMask muncul, klik "Connect".
   - Lihat status: "Connected: 0x123...abc".

6. Kirim Token:
   - Pilih Network: Polygon Mainnet.
   - Pilih Token: USDT (atau masukkan alamat token lain).
   - Masukkan Amount: Misal, 0.1 USDT per alamat.
   - Masukkan Alamat:
     - Upload file CSV (satu alamat per baris).
     - Atau ketik alamat di kolom (satu alamat per baris).
   - Klik "Send Tokens":
     - MetaMask muncul, konfirmasi "Approve" (gas ~0.01 POL).
     - Konfirmasi "Send" (gas ~0.01 POL).
   - Lihat status: Link ke PolygonScan.

Catatan:
- Keamanan: Jangan share seed phrase. Logout MetaMask setelah selesai.
- Batas: Maksimal 250 alamat, cooldown 1 jam antar transaksi.
- Error:
  - "Please install MetaMask": Install MetaMask.
  - "Insufficient balance": Cek saldo di MetaMask.
  - "Transaction failed": Coba lagi atau hubungi support.

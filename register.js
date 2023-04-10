function simpanData() {
    let nip = document.getElementById("nip").value;
    let nama = document.getElementById("nama").value;
    let password = document.getElementById("password").value;
    let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    let alamat = document.getElementById("alamat").value;
    let noTelepon = document.getElementById("no_telepon").value;
  
    // Membuat objek baru dengan data form
    let guruBaru = {
      nip: nip,
      nama: nama,
      password: password,
      jenis_kelamin: jenisKelamin,
      alamat: alamat,
      no_telepon: noTelepon
    };
  
    // Menyimpan data ke Firebase Realtime Database
    firebase.database().ref('guru').push().set(guruBaru);
  
    // Mengosongkan form
    document.getElementById("form_register").reset();
  }
function simpanData() {
  let nip = document.getElementById("nip").value;
  let nama = document.getElementById("nama").value;
  let password = document.getElementById("password").value;
  let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  let alamat = document.getElementById("alamat").value;
  let noTelepon = document.getElementById("no_telepon").value;

  // Membuat objek baru dengan data form
  let guruBaru = {
    nip: nip,
    nama: nama,
    password: password,
    jenis_kelamin: jenisKelamin,
    alamat: alamat,
    no_telepon: noTelepon
  };

  // Menyimpan data ke Firebase Realtime Database
  firebase.database().ref('guru').push().set(guruBaru);

  // Mengosongkan form
  document.getElementById("form_register").reset();
}
  
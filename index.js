import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push,onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBElrUrrKvje2PcoW6TyvCTq5flFIjV_8g",
    authDomain: "myproject-196eb.firebaseapp.com",
    projectId: "myproject-196eb",
    storageBucket: "myproject-196eb.appspot.com",
    messagingSenderId: "930827370547",
    appId: "1:930827370547:web:07b07bec1cc7e96d3c2346",
    measurementId: "G-CLQNSG94J1",
    databaseURL: "https://myproject-196eb-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

    
let nim = document.getElementById("nim")
let nama = document.getElementById("nama")
let kelas = document.getElementById("kelas")
let jenis_kelamin
let no_hp = document.getElementById("no_hp")


let simpan = document.getElementById('btnsimpan_siswa')
simpan.addEventListener("click", function(){
    let ele = document.getElementsByName('jekel');
    
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            jenis_kelamin = ele[i].value
        }
    }
    console.log(nama.value)

    if ($('#nis').val() == ""|| $('#nis').val() == 0) {
        // focus ke input provider pulsa
        $("#nis").focus();
        // tampilkan peringatan data tidak boleh kosong
        swal("Peringatan!", "Nim tidak boleh kosong.", "warning");
    }else if ($('#nama').val() == "" ) {
        // focus ke input nominal
        $("#nama").focus();
        // tampilkan peringatan data tidak boleh kosong
        swal("Peringatan!", "Nama tidak boleh kosong.", "warning");
    }
    // jika prodi kosong
    else if ($('#kelas').val() == "Pilih") {
        // focus ke input harga
        $("#kelas").focus();
        // tampilkan peringatan data tidak boleh kosong
        swal("Peringatan!", "kelas tidak boleh kosong.", "warning");
    }
    // jika semester kosong atau 0 (nol)
    else if ($('input[name="jekel"]:checked').length == 0) {
        // focus ke input nominal
        // $("#").focus();
        // tampilkan peringatan data tidak boleh kosong
        swal("Peringatan!", "kelamin tidak boleh kosong.", "warning");
    }
    
    else if ($('#no_hp').val() == "") {
        // focus ke input harga
        $("#no_hp").focus();
        // tampilkan peringatan data tidak boleh kosong
        swal("Peringatan!", "Nomor Telepon harus diisi.", "warning");
    }
    else {

        push(ref(db, 'siswa'), {
            nim: nim.value,
            nama : nama.value,
            kelas: kelas.value,
            jenis_kelamin: jenis_kelamin,
            no_hp: no_hp.value
          })
          .then(() => {
            // Refresh data setelah berhasil menambahkan
            swal({
                title: "Data berhasil ditambahkan!",
                icon: "success",
                button: "OK",})
            $("#staticBackdrop").modal("hide");
            showDataSiswa();
          })
          .catch((error) => {
            console.error(error);
          });
 
}
})

// let tabel_siswa = document.getElementById('tabel_siswa')
// tabel_siswa.addEventListener('load',function(){
//     console.log('tes')
// })
function showDataSiswa() {
let tabel_siswa = document.getElementById('tabel_siswa');
onValue(ref(db, 'siswa'), (snapshot) => {
    let data = snapshot.val();
    let tabel_siswa_html = '';

    let nomor = 1; // tambahkan variabel nomor

    for (let siswa_id in data) {
        tabel_siswa_html += '<tr>';
        tabel_siswa_html += '<td>' + nomor++ + '</td>'; // tambahkan nomor
        tabel_siswa_html += '<td>' + data[siswa_id].nim + '</td>';
        tabel_siswa_html += '<td>' + data[siswa_id].nama + '</td>';
        tabel_siswa_html += '<td>' + data[siswa_id].kelas + '</td>';
        tabel_siswa_html += '<td>' + data[siswa_id].jenis_kelamin + '</td>';
        tabel_siswa_html += '<td>' + data[siswa_id].no_hp + '</td>';
        tabel_siswa_html += '<td>';
        tabel_siswa_html += '<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditSiswa" onclick="editSiswa(\''+siswa_id+'\')">Edit</button>';
        tabel_siswa_html += ' <button type="button" class="btn btn-danger btn-sm" onclick="hapusSiswa(\''+siswa_id+'\')">Hapus</button>';
        tabel_siswa_html += '</td>';
        tabel_siswa_html += '</tr>';
    }

    $('#tabel_siswa tbody').html(tabel_siswa_html);
});}
//cari siswa
function cariSiswa() {
    let input = document.getElementById("cari_siswa").value.toLowerCase();
    let tabel_siswa = document.getElementById('tabel_siswa');
    let rowSiswa = tabel_siswa.getElementsByTagName("tr");
    
    for (let i = 0; i < rowSiswa.length; i++) {
      let cell = rowSiswa[i].getElementsByTagName("td")[1];
      if (cell) {
        let nama = cell.innerHTML.toLowerCase();
        if (nama.indexOf(input) > -1) {
          rowSiswa[i].style.display = "";
        } else {
          rowSiswa[i].style.display = "none";
        }
      }
    }
  }

// window.onload = function () {
//     showDataSiswa();}
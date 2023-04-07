import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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

  push(ref(db, 'siswa'), {
    nim: nim.value,
    nama : nama.value,
    kelas: kelas.value,
    jenis_kelamin: jenis_kelamin,
    no_hp: no_hp.value
  });
})
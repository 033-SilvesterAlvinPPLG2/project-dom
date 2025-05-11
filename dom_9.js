function tambah() {
    let p = document.createElement("p");
    p.innerHTML = "ini paragraf yang akan di hapus" ;
    p.id = "hapussaya";
    document.getElementById("container").appendChild(p);
}

function hapus() {
    let container = document.getElementById("container");
    let target = document.getElementById("hapussaya");
    if (target) {
        container.removeChild(target);
    } else {
        alert("paragraf belum di isi atau sudah di hapus")
    }
}
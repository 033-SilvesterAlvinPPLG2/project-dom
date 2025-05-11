function ubahWarnaParagraf (){
    const semuaParagraf = document.getElementsByTagName("p")

    for (let i = 0; i < semuaParagraf.length; i++) {
        semuaParagraf[i].style.color = "blue"
        semuaParagraf[i].style.backgroundColor = "purple"
    }
}
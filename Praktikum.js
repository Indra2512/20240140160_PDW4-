let tanggal = new Date();

function tampil(){
    alert("Ini adalah button");
}

function show(){
    alert("ini adalah pop up untuk tulisan perkenalan");
}

function toggleGrup(idElemen) {
    let grup = document.getElementById(idElemen);
    
 
    if (grup.classList.contains("tampil-animasi")) {
        grup.classList.remove("tampil-animasi");
        grup.style.display = "none";
    } 
 
    else {
        grup.style.display = "block";
       
        setTimeout(() => {
            grup.classList.add("tampil-animasi");
        }, 10);
    }
}
let tanggal = new Date();
console.log("Halaman dibuka pada: " + tanggal);

function tampil() {
    alert("Ini adalah button");
}

function show() {
    alert("ini adalah pop up untuk tulisan perkenalan");
    
    
    let deskripsi = document.querySelector('.deskripsi');
    if (deskripsi.style.display === "none") {
        deskripsi.style.display = "block";
    } else {
        deskripsi.style.display = "none";
    }
}

function toggleImages(namaClass) {
    
    let daftarGambar = document.querySelectorAll('.' + namaClass);
    
    daftarGambar.forEach(img => {
        
        let displayAsli = window.getComputedStyle(img).display;

        if (displayAsli === "none") {
            img.style.display = "block";  
            img.style.margin = "10px auto"; 
        } else {
            img.style.display = "none";  
        }
    });
}

compression = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)

    // Jika mengikuti yang sudah di sampaikan dikelas sepertinya hasil yang saya dapat tidak seperti di kompres, melainkan seperti di darken, mungkin kompresi quantisasi seperti yg diajarkan dikelas tidak kompatibel dengan bahasa pemrograman yang saya pakai yaitu nodejs (Javascript), sehingga saya memakai algoritma lossy lain dengan membuat kompresi pembagian dan perkalian 50, referensi yang saya pakai adalah pada web ini dengan saya coba cara saya sendiri: https://www.html5rocks.com/en/tutorials/speed/img-compression/

    // for(let i=0; i <= imageData.data.length; i+=4) {
    //     // compress
    //     imageData.data[i] = Math.round(imageData.data[i] / 2)
    //     imageData.data[i+1] = Math.round(imageData.data[i+1] / 2)
    //     imageData.data[i+2] = Math.round(imageData.data[i+2] / 2)


    //     // compress & decompress
    //     imageData.data[i] = Math.round(imageData.data[i] / 2) * 2
    //     imageData.data[i+1] = Math.round(imageData.data[i+1] / 2) * 2
    //     imageData.data[i+2] = Math.round(imageData.data[i+2] / 2) * 2
    // }


    for (let i = 0; i <= imageData.data.length; i+=4) {
        imageData.data[i] = Math.round(imageData.data[i] / 50) * 50
        imageData.data[i+1] = Math.round(imageData.data[i+1] / 50) * 50
        imageData.data[i+2] = Math.round(imageData.data[i+2] / 50) * 50

        if (imageData.data[i] > 255) {
            imageData.data[i] = 250
        }
    }

    // console.log(tens)
    context.putImageData(imageData, 0, 0);
}
dilation = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)

    // BENTUK PENEBAL HORIZONTAL 3 BARIS
    // DENGAN BAGIAN TENGAH NYA SEBAGAI POROS
    // ASUMSI DIKATAKAN NILAI JIKA BESAR PIXEL >100 DARI TITIK SEKITAR POROS YANG LAIN
    for(let i = 0; i < 3; i+=4) {
        for (let i = 0; i < imageData.data.length; i+=4) {
            if (
                // (imageData.data[i] >= (imageData.data[i - (image.width*4)] + 100)) ||
                // (imageData.data[i] >= (imageData.data[i + (image.width*4)] + 100)) ||
                (imageData.data[i] >= (imageData.data[i - 1] + 100)) ||
                (imageData.data[i] >= (imageData.data[i + 1] + 100))
            ) {
                // imageData.data[i - (image.width*4)] = imageData.data[i]
                // imageData.data[i + (image.width*4)] = imageData.data[i]
                imageData.data[i - 1] = imageData.data[i]
                imageData.data[i + 1] = imageData.data[i]
            }
        }
    }
    context.putImageData(imageData, 0, 0);
 }

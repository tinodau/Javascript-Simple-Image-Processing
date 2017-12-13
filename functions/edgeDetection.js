edgeDetection = (value) => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)


    let imageWidth  = image.width
    let imageHeight = image.height
    let kernel
    let kernelTipis = [
        1, 0, -1,
        0, 0, 0,
        -1,0, 1
    ]

    let kernelSedang = [
        0, 1, 0,
        1, -4, 1,
        0, 1, 0
    ]

    let kernelTebal = [
        -1, -1, -1,
        -1, 8, -1,
        -1, -1, -1
    ]
    for (let i = 0; i < imageData.data.length; i++) {
        if (value == 'tipis') {kernel = kernelTipis}
        if (value == 'sedang') {kernel = kernelSedang}
        if (value == 'tebal') {kernel = kernelTebal}

        imageData.data[i] = Math.round((
            // FIRST ROW
            imageData.data[i - 4 - (imageWidth*4)] * kernel[0] +
            imageData.data[i - (imageWidth*4)] * kernel[1] +
            imageData.data[i + 4 - (imageWidth*4)] * kernel[2] +

            // SECOND ROW
            imageData.data[i-4] * kernel[3] +
            imageData.data[i] * kernel[4] +
            imageData.data[i+4] * kernel[5] +

            // THIRD ROW
            imageData.data[i - 4 + (imageWidth*4)] * kernel[6] +
            imageData.data[i + (imageWidth*4)] * kernel[7] +
            imageData.data[i + 4 + (imageWidth*4)] * kernel[8]
        ))
    }
    context.putImageData(imageData, 0, 0);
 }

convolution = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)


    let imageWidth  = image.width
    let imageHeight = image.height
    let kernel = [
        3, -1, 3,
        -1, 5, -1,
        3, -1, 3
    ]

    for (let i = 0; i < imageData.data.length; i++) {
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
        )/9)
    }

    context.putImageData(imageData, 0, 0);
}
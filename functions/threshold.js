threshold = (value) => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    let thresholding

    for (let i = 0; i < imageData.data.length; i+=4) {
        thresholding = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3 >= 128 ? 255 : 0
        // IF AVERAGE OF R+G+B >= 128 THEN CHANGE TO WHITE

        imageData.data[i]   = thresholding  // R
        imageData.data[i+1] = thresholding  // G
        imageData.data[i+2] = thresholding  // B
    }
    context.putImageData(imageData, 0, 0);
}

CropImage = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    // context.drawImage(image, 0, 0, canvas.width, canvas.height)
    // let imageData = context.getImageData(0, 0, canvas.width, canvas.height)


    // coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context
    let sourceX = Math.round(canvas.width / 4)
    let sourceY = Math.round(canvas.height / 4)

    // width & height of the sub-rectangle of the source image to draw into the destination context
    let sourceWidth = Math.round(canvas.width / 2)
    let sourceHeight = Math.round(canvas.height / 2)

    // width & height to draw the image in the destination canvas
    let desWidth = sourceWidth
    let desHeight = sourceHeight

    // coordinate in the destination canvas
    let desX = canvas.width / 2 - desWidth / 2
    let desY = canvas.height / 2 - desHeight / 2

    // Draw Image
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, desX, desY, desWidth, desHeight)

    let imageData = context.getImageData(0, 0, desX, desY)
    context.putImageData(imageData, 0, 0)

    // context.putImageData(imageData, 0, 0)
}
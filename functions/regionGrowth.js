regionGrowth = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData   = context.getImageData(0, 0, canvas.width, canvas.height)
    let seed        = Math.round(imageData.data.length/2)

    // moveUp = (index) => {return imageData.data[index - (imageData.width*4)]}
    // moveRight = (index) => {return imageData.data[index + 1]}
    // moveDown = (index) => {return imageData.data[index + (imageData.width*4)]}
    // moveLeft = (index) => {return imageData.data[index - 1]}

    imagePixel  = (index) => {return imageData.data[index]}

    moveUp      = (index) => {return index - (imageData.width*4)}
    moveRight   = (index) => {return index + 1}
    moveDown    = (index) => {return index + (imageData.width*4)}
    moveLeft    = (index) => {return index - 1}

    // ASSUMPTION, RANGE THRESHOLD = -+10
    let range   = 5
    let pointer = seed
    imageData.data[pointer] += 30

    while (
        (imagePixel(moveUp(pointer)) - range) <=
        imagePixel(seed) <=
        (imagePixel(moveUp(pointer)) + range)
    ){
        pointer = moveUp(pointer)
        imageData.data[pointer] += 30
    }

    while (
        (imagePixel(moveRight(pointer)) - range) <=
        imagePixel(seed) <=
        (imagePixel(moveRight(pointer)) + range)
    ){
        pointer = moveRight(pointer)
        imageData.data[pointer] += 30
    }


    while (
        (imagePixel(moveDown(pointer)) - range) <=
        imagePixel(seed) <=
        (imagePixel(moveDown(pointer)) + range)
    ){
        pointer = moveDown(pointer)
        imageData.data[pointer] += 30
    }

    while (
        (imagePixel(moveLeft(pointer)) - range) <=
        imagePixel(seed) <=
        (imagePixel(moveLeft(pointer)) + range)
    ){
        pointer = moveLeft(pointer)
        imageData.data[pointer] += 30
    }

    context.putImageData(imageData, 0, 0);
}

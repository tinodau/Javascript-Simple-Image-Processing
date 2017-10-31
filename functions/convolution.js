// Filters.getCanvas = function (width, height) {
    //     var canvas = document.getElementById('loadCanvas')
    //     canvas.width = width
    //     canvas.height = height
    //     return canvas
    // }

Filters = {}
Filters.getPixels = () => {
    // let canvas = this.getCanvas(img.width, img.height)
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image = document.getElementById('loadImage')
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    return context.getImageData(0, 0, canvas.width, canvas.height)
}

Filters.filterImage = (filter, matrix) => {
    let args = [this.Filters.getPixels()]
    for (let i=2; i<matrix.length; i++) {
        args.push(matrix[i])
    }
    // return filter.apply(null, args)
    return this.Filters.convolute(this.Filters.getPixels(), matrix)
}

// Filters.tempCanvas = document.getElementById('loadCanvas')
// Filters.tempContext = Filters.tempCanvas.getContext('2d')
Filters.createImageData = (width,height) => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    return context.createImageData(width,height);
};

Filters.convolute = (pixels, matrix) => {
    console.log(pixels.width)
    console.log(matrix)
    // let side = Math.round(Math.sqrt(this.Filters.getPixels().data.length))
    let side = Math.round(Math.sqrt(matrix.length))
    let halfSide = Math.floor(side/2)
    let source = pixels.data
    let sourceWidth = pixels.width
    let sourceHeight = pixels.height

    let width = sourceWidth
    let height = sourceHeight
    let output = Filters.createImageData(width, height)
    let dst = output.data

    // let alpha = opaque ? 1 : 0
    for (let y=0; y<height; y++) {
        // console.log("loop 1")

        for (let x=0; x<width; x++) {
        // console.log("loop 2")
        let sourceY = y
        let sourceX = x
        let destOff = (y*width+x)*4
        let r=0, g=0, b=0, a=0

        for (let cy=0; cy<side; cy++) {
            // console.log("loop 3")

            for (let cx=0; cx<side; cx++) {
                // console.log("loop 4")

                // OUT OF MEMORY / CRASH
                // OUT OF MEMORY / CRASH

                let scy = sourceY + cy - halfSide
                let scx = sourceX + cx - halfSide
                if (scy >= 0 && scy < sourceHeight && scx >= 0 && scx < sourceWidth) {
                    console.log("condition")

                    let srcOff = (scy*sourceWidth+scx)*4
                    let wt = this.Filters.getPixels().data.length[cy*side+cx];
                    r += source[srcOff] * wt
                    g += source[srcOff+1] * wt
                    b += source[srcOff+2] * wt
                    a += source[srcOff+3] * wt
                }
            }
        }
        dst[destOff] = r
        dst[destOff+1] = g
        dst[destOff+2] = b
        // dst[destOff+3] = a + alpha*(255-a) // NO NEED ALPHA
        }
    }
    return output;
};

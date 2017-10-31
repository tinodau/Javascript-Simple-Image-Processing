noiseReduction = (value) => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)

    let imageWidth  = image.width
    let imageHeight = image.height

    // javascript canvas make 1 dimension array with array length = imageWidth * imageHeight * 4
    for (let i = 0; i<imageData.data.length; i++) {
        // 4 for skipping alpha value

        // Asumsi noise jika (pixel < 50) atau (pixel > 50)
        // Dengan dimensi filter 3 x 3
        if (
            (
                // firstRow
                (imageData.data[i] > (imageData.data[i - 4 - (imageWidth*4)] + 50)) &&
                (imageData.data[i] > (imageData.data[i - (imageWidth*4)] + 50)) &&
                (imageData.data[i] > (imageData.data[i + 4 - (imageWidth*4)] + 50)) &&

                // secondRow
                (imageData.data[i] > (imageData.data[i-4] + 50)) &&
                (imageData.data[i] > (imageData.data[i+4] + 50)) &&

                // thirdRow
                (imageData.data[i] > (imageData.data[i - 4 + (imageWidth*4)] + 50)) &&
                (imageData.data[i] > (imageData.data[i + (imageWidth*4)] + 50)) &&
                (imageData.data[i] > (imageData.data[i + 4 + (imageWidth*4)] + 50))
            ) ||
            (
                // firstRow
                (imageData.data[i] < (imageData.data[i - 4 - (imageWidth*4)] + 50)) &&
                (imageData.data[i] < (imageData.data[i - (imageWidth*4)] + 50)) &&
                (imageData.data[i] < (imageData.data[i + 4 - (imageWidth*4)] + 50)) &&

                // secondRow
                (imageData.data[i] < (imageData.data[i-4] + 50)) &&
                (imageData.data[i] < (imageData.data[i+4] + 50)) &&

                // thirdRow
                (imageData.data[i] < (imageData.data[i - 4 + (imageWidth*4)] + 50)) &&
                (imageData.data[i] < (imageData.data[i + (imageWidth*4)] + 50)) &&
                (imageData.data[i] < (imageData.data[i + 4 + (imageWidth*4)] + 50))
            )
        ) {
            if (value == 'mean') {
                imageData.data[i] = Math.round((
                    // firstRow
                    imageData.data[i - 4 - (imageWidth*4)] +
                    imageData.data[i - (imageWidth*4)] +
                    imageData.data[i + 4 - (imageWidth*4)] +

                    // secondRow
                    imageData.data[i-4] +
                    imageData.data[i] +
                    imageData.data[i+4] +

                    // thirdRow
                    imageData.data[i - 4 + (imageWidth*4)] +
                    imageData.data[i + (imageWidth*4)] +
                    imageData.data[i + 4 + (imageWidth*4)]
                ) / 9)
            } else {
                let arrayTmp = []

                // firstRow
                if (imageData.data[i - 4 - (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i - 4 - (imageWidth*4)])
                }
                if (imageData.data[i - (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i - (imageWidth*4)])
                }
                if (imageData.data[i + 4 - (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i + 4 - (imageWidth*4)])
                }

                // secondRow
                if (imageData.data[i-4] != null) {
                    arrayTmp.push(imageData.data[i-4])
                }
                if (imageData.data[i] != null) {
                    arrayTmp.push(imageData.data[i])
                }
                if (imageData.data[i+4] != null) {
                    arrayTmp.push(imageData.data[i+4])
                }

                // thirdRow
                if (imageData.data[i - 4 + (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i - 4 + (imageWidth*4)])
                }
                if (imageData.data[i + (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i + (imageWidth*4)])
                }
                if (imageData.data[i + 4 + (imageWidth*4)] != null) {
                    arrayTmp.push(imageData.data[i + 4 + (imageWidth*4)])
                }

                // if Median selected
                if (value == 'median') {
                    let sortarrayTmp = arrayTmp.sort()

                    if (sortarrayTmp.length % 2 === 0) {
                        // if array = even
                        imageData.data[i] = Math.round((sortarrayTmp[sortarrayTmp.length / 2] + sortarrayTmp[sortarrayTmp.length / 2 + 1]) / 2)
                    } else {
                        // if array = odd
                        imageData.data[i] = sortarrayTmp[(sortarrayTmp.length - 1) / 2]
                    }
                }

                // if modus selected
                if (value == 'modus') {
                    let modus = {}, max = 0, count = 0
                    arrayTmp.forEach(function(e) {
                        if(modus[e]) {
                            modus[e]++
                        } else {
                            modus[e] = 1
                        }
                        if (count < modus[e]) {
                            max = e
                            count = modus[e]
                        }
                    })
                    imageData.data[i] = max
                }
            }
        }
    }
    context.putImageData(imageData, 0, 0)
}

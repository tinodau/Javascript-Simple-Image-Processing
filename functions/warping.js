Warping = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    let x1  = image.width / 2
    let x2  = image.width

    let y1  = 25
    let y2  = 0


    let eb = (y2*x1*x1 - y1*x2*x2) / (x2*x1*x1 - x1*x2*x2);
    let ea = (y1 - eb*x1) / (x1*x1);

    // let eb = image.width / 2
    // let ea = image.height / 2

    for (let x = 0; x <= image.width; x++) {

        // calculate the current offset
        let currentYOffset = (ea * x * x) + eb * x;

        context.drawImage(image,x,0,1,image.height,x,currentYOffset,image.width,image.height);
    }
    // context.putImageData(imageData, 0, 0);
 }



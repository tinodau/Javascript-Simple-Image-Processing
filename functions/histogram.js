Histogram = () => {
    let canvas  = document.getElementById('loadCanvas')
    let context = canvas.getContext('2d')
    let image   = document.getElementById('loadImage')

    function copyImageScale(img, scale){
        var image = document.createElement("canvas");
        image.width = Math.floor(img.width * scale);
        image.height = Math.floor(img.height * scale);
        image.ctx = image.getContext("2d");
        image.ctx.drawImage(img, 0, 0,image.width,image.height);
        return image;
    }

    let R = []
    let G = []
    let B = []

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height)

    // SET 0 - 255 ARRAY VALUE TO ZERO
    for (let i = 0; i < 256; i++) {
        R[i] = 0
        G[i] = 0
        B[i] = 0
    }

    // for (let i = 0; i < imageData.data.length; i += 4) {
    //     let r, g, b
    //     r   = imageData.data[i]     // COLOR R
    //     g   = imageData.data[i+1]   // COLOR G
    //     b   = imageData.data[i+2]   // COLOR B
    //     R[r] += 1
    //     G[g] += 1
    //     B[b] += 1
    // }

    for (let i = 0; i <= imageData.data.length; i+=4) {
        R.push(imageData.data[i])       // GET RED COLOR
        G.push(imageData.data[i+1])     // GET GREEN COLOR
        B.push(imageData.data[i+2])     // GET BLUE COLOR
    }

    // console.log(R, G, B)

    // DRAW RED COLOR TO PLOTLY
    let redColor = {
      x: R,
      type: "histogram",
      opacity: 0.5,
      marker: {
         color: 'red',
      },
    }

    // DRAW GREEB COLOR TO PLOTLY
    let greenColor = {
      x: G,
      type: "histogram",
      opacity: 0.5,
      marker: {
         color: 'green',
      },
    }

    // DRAW BLUE COLOR TO PLOTLY
    let blueColor = {
        x: B,
        type: "histogram",
        opacity: 0.5,
        marker: {
           color: 'blue',
        },
    }

    let data = [redColor, greenColor, blueColor];
    let layout = {barmode: "overlay"};
    Plotly.newPlot("myDiv", data, layout);
}
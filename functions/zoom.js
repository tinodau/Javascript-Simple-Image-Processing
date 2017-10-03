Zoom = (value) => {
   let canvas  = document.getElementById('loadCanvas')
   let context = canvas.getContext('2d')
   let image   = document.getElementById('loadImage')
   let height  = canvas.height
   let width   = canvas.width

   context.drawImage(image, 0, 0, canvas.width, canvas.height)
   let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
   // let zoomImage = []
   if (value == 'in') {
      // ZOOM IN
      // for (let x = 0; x <= imageData.data.length ; x += 4) {
      //    let Red = imageData.data[x]
      //    let Green = imageData.data[x+1]
      //    let Blue = imageData.data[x+2]

      //    imageData.data[x+5].push(Math.round((Red + imageData.data[x+8])/2))
      //    imageData.data[x+6].push(Math.round((Green + imageData.data[x+9])/2))
      //    imageData.data[x+7].push(Math.round((Blue + imageData.data[x+10])/2))

      //    imageData.data.splice(x+5, 0, Math.round((Red + imageData.data[x+8])/2))
      //    imageData.data.splice(x+6, 0, Math.round((Green + imageData.data[x+9])/2))
      //    imageData.data.splice(x+7, 0, Math.round((Blue + imageData.data[x+10])/2))
      // }
      // for (let i = 0; i < (height*width*2); i+=2) {
      //    for (let j = 0; j < imageData.data.length; j += 4) {
      //       zoomImage.splice(i, 0, imageData.data[x])
      //       zoomImage.splice(i+1, 0, imageData.data[x])
      //    }
      // }

      context.drawImage(image, 0, 0, canvas.width *= 1.2 , canvas.height*= 1.2 )
   } else {
      // ZOOM OUT
      // for (let y = 0; y <= height; y++) {
      //    for (let y = 0; y <= width; x++) {

      //    }
      // }
      context.drawImage(image, 0, 0, canvas.width /= 1.2 , canvas.height/= 1.2 )
   }
//    context.putImageData(zoom, 0, 0);
}
            // TOP-RIGHT
            // r[x][y] += typeof(r[x+1][y]) ? r[x+1][y] : 0
            // g[x][y] += typeof(g[x+1][y]) ? g[x+1][y] : 0
            // b[x][y] += typeof(b[x+1][y]) ? b[x+1][y] : 0

            // BOTTOM-LEFT
            // r[x][y] += typeof(r[x-1][y]) ? r[x-1][y] : 0
            // g[x][y] += typeof(g[x-1][y]) ? g[x-1][y] : 0
            // b[x][y] += typeof(b[x-1][y]) ? b[x-1][y] : 0

            // BOTTOM-RIGHT
            // r[x][y] += typeof(r[x][y]) ? r[x][y] : 0
            // g[x][y] += typeof(g[x][y]) ? g[x][y] : 0
            // b[x][y] += typeof(b[x][y]) ? b[x][y] : 0

            // AVERAGE
            // r[x][y] = Math.round(r[x][y] / 4)
            // g[x][y] = Math.round(g[x][y] / 4)
            // b[x][y] = Math.round(b[x][y] / 4)


            // ELSE

            // r[x][y] = Math.round((r[x][y] + r[x+1][y] + r[x][y+1] + r[x+1][y+1]) / 4)
            // g[x][y] = Math.round((g[x][y] + g[x+1][y] + g[x][y+1] + g[x+1][y+1]) / 4)
            // b[x][y] = Math.round((b[x][y] + b[x+1][y] + b[x][y+1] + b[x+1][y+1]) / 4)
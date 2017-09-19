Grayscale = () => {
   // document.getElementById('loadImage').onload = () => {
      // console.log("grayscale")
      let canvas  = document.getElementById('loadCanvas')
      let context = canvas.getContext('2d')
      let image   = document.getElementById('loadImage')

      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      for ( let i = 0; i<imageData.data.length; i += 4 ) {
         newGrayscale = Math.round((imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3)
         imageData.data[i] = newGrayscale
         imageData.data[i+1] = newGrayscale
         imageData.data[i+2] = newGrayscale
      }

      context.putImageData(imageData, 0, 0);
   // }
}

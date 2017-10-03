Brightness = (value) => {
   let canvas  = document.getElementById('loadCanvas')
   let context = canvas.getContext('2d')
   let image   = document.getElementById('loadImage')

   context.drawImage(image, 0, 0, canvas.width, canvas.height)
   let imageData = context.getImageData(0, 0, canvas.width, canvas.height)

   for ( let i = 0; i<imageData.data.length; i += 4 ) {
      let R = i
      let G = i+1
      let B = i+2
      //  A = i+3

      if (value == 'darken') {
         // DARKEN IMAGE
         imageData.data[R] < 50 ? (imageData.data[R] = 0) : (imageData.data[R] -= 50)
         imageData.data[G] < 50 ? (imageData.data[G] = 0) : (imageData.data[G] -= 50)
         imageData.data[B] < 50 ? (imageData.data[B] = 0) : (imageData.data[B] -= 50)
      } else {
         // BRIGHTNESS IMAGE
         imageData.data[R] > 205 ? (imageData.data[R] = 255) : (imageData.data[R] += 50)
         imageData.data[G] > 205 ? (imageData.data[G] = 255) : (imageData.data[G] += 50)
         imageData.data[B] > 205 ? (imageData.data[B] = 255) : (imageData.data[B] += 50)
      }
   }
   context.putImageData(imageData, 0, 0)
}

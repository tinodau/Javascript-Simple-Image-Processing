Darken = () => {
   // document.getElementById('loadImage').onload = () => {
      let canvas  = document.getElementById('loadCanvas')
      let context = canvas.getContext('2d')
      let image   = document.getElementById('loadImage')

      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      for ( let i = 0; i<imageData.data.length; i += 4 ) {
         imageData.data[i] < 50 ? (imageData.data[i] = 0) : (imageData.data[i] = imageData.data[i] - 50)
         imageData.data[i+1] < 50 ? (imageData.data[i+1] = 0) : (imageData.data[i+1] = imageData.data[i+1] - 50)
         imageData.data[i+2] < 50 ? (imageData.data[i+2] = 0) : (imageData.data[i+2] = imageData.data[i+2] - 50)
      }

      context.putImageData(imageData, 0, 0);
   // }
}

Bright = () => {
   // document.getElementById('loadImage').onload = () => {
      let canvas  = document.getElementById('loadCanvas')
      let context = canvas.getContext('2d')
      let image   = document.getElementById('loadImage')

      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      // context.fillStyle = "rgba(0, 0, 0, 0.4)";
      // context.fillRect(0, 0, canvas.width, canvas.height);
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      for ( let i = 0; i<imageData.data.length; i += 4 ) {
         imageData.data[i] > 205 ? (imageData.data[i] = 255) : (imageData.data[i] = imageData.data[i] + 50)
         imageData.data[i+1] > 205 ? (imageData.data[i+1] = 255) : (imageData.data[i+1] = imageData.data[i+1] + 50)
         imageData.data[i+2] > 205 ? (imageData.data[i+2] = 255) : (imageData.data[i+2] = imageData.data[i+2] + 50)
      }

      context.putImageData(imageData, 0, 0);
   // }
}
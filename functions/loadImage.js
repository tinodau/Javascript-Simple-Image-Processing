// import { Grayscale } from 'grayscale'
// import { Blur } from 'blur'
// import { Brightness } from 'brightness'
// import { Brightness2 } from 'brightness2'
// import { Compression } from 'Compression'
// import { Convolution } from 'Convolution'
// import {} from 
// import {} from 
// import {} from 
// import {} from 
// import {} from 

loadImageFile = (input) => {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            $('#loadImage')
                .attr('src', e.target.result)
                .width(400)
                .height(250);
        };
        reader.readAsDataURL(input.files[0]);
    }

    document.getElementById('loadImage').onload = () => {
        let canvas  = document.getElementById('loadCanvas')
        let context = canvas.getContext('2d')
        let image   = document.getElementById('loadImage')

        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        context.putImageData(context.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
    }
}
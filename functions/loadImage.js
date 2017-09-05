loadImageFile = (input) => {
   if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
         $('#loadImage')
            .attr('src', e.target.result)
            .width(auto)
            .height(auto);
      };
      reader.readAsDataURL(input.files[0]);
   }
}
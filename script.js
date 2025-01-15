const imageInput = document.getElementById("image-input");
const container2 = document.querySelector(".container2");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");
const box13 = document.querySelector(".box13");
const optimize25Button = document.getElementById("optimize-25");
const optimize50Button = document.getElementById("optimize-50");
const optimize75Button = document.getElementById("optimize-75");
const imageContainer = document.querySelector(".image-container");
const message = document.querySelector(".message");

function displayImageInContainer(image) {
  imageContainer.innerHTML = ""; 
  imageContainer.appendChild(image); 
}

function resizeImage(image, percent, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = image.width * (percent / 100);
  const height = image.height * (percent / 100);

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);

  const resizedImage = new Image();
  resizedImage.src = canvas.toDataURL("image/jpeg");

  resizedImage.onload = function () {
    callback(resizedImage);
  };
}

imageInput.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const image = new Image();
      image.src = event.target.result;

      image.onload = function () {
        if (file.size > 2 * 1024 * 1024) {
          imageInput.style.display = "none";
          message.style.display = "flex";
          container2.style.display = "flex"; 

          resizeImage(image, 25, function (resizedImage25) {
            box11.innerHTML = ""; 
            box11.appendChild(resizedImage25); 
          });

          resizeImage(image, 50, function (resizedImage50) {
            box12.innerHTML = ""; 
            box12.appendChild(resizedImage50); 
          });

          resizeImage(image, 75, function (resizedImage75) {
            box13.innerHTML = ""; 
            box13.appendChild(resizedImage75); 
          });
        } else {
          container2.style.display = "none"; 
          displayImageInContainer(image); 
        }
      };
    };
    reader.readAsDataURL(file);
  }
});

optimize25Button.addEventListener("click", function () {
  const image = box11.querySelector("img"); 
  if (image) {
    resizeImage(image, 25, function (optimizedImage25) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage25.src;
      box11.innerHTML = ""; 
      box11.appendChild(optimizedImage25); 
      displayImageInContainer(optimizedImage);
    });
  }
});

optimize50Button.addEventListener("click", function () {
  const image = box12.querySelector("img"); 
  if (image) {
    resizeImage(image, 50, function (optimizedImage50) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage50.src;
      box12.innerHTML = ""; 
      box12.appendChild(optimizedImage50); 
      displayImageInContainer(optimizedImage);
    });
  }
});

optimize75Button.addEventListener("click", function () {
  const image = box13.querySelector("img"); 
  if (image) {
    resizeImage(image, 75, function (optimizedImage75) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage75.src;
      box13.innerHTML = ""; 
      box13.appendChild(optimizedImage75); 
      displayImageInContainer(optimizedImage);
    });
  }
});

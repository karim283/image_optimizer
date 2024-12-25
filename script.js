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

// Function to display the image in the image-container
function displayImageInContainer(image) {
  imageContainer.innerHTML = ""; // Clear any previous images
  imageContainer.appendChild(image); // Add the new image
}

// Function to resize image
function resizeImage(image, percent, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = image.width * (percent / 100);
  const height = image.height * (percent / 100);

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);

  // Create a new image element for resized image
  const resizedImage = new Image();
  resizedImage.src = canvas.toDataURL("image/jpeg");

  // Ensure the callback is executed once the resized image is loaded
  resizedImage.onload = function () {
    callback(resizedImage);
  };
}

// Handle image input change
imageInput.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const image = new Image();
      image.src = event.target.result;

      image.onload = function () {
        // Check if the image is larger than 2MB
        if (file.size > 2 * 1024 * 1024) {
          // Hide input, show message and optimization options
          imageInput.style.display = "none";
          message.style.display = "flex";
          container2.style.display = "flex"; // Show container2 for optimization buttons

          // Resize and replace images (25%, 50%, 75%) in the boxes
          resizeImage(image, 25, function (resizedImage25) {
            box11.innerHTML = ""; // Clear current image in box11
            box11.appendChild(resizedImage25); // Replace with resized image
          });

          resizeImage(image, 50, function (resizedImage50) {
            box12.innerHTML = ""; // Clear current image in box12
            box12.appendChild(resizedImage50); // Replace with resized image
          });

          resizeImage(image, 75, function (resizedImage75) {
            box13.innerHTML = ""; // Clear current image in box13
            box13.appendChild(resizedImage75); // Replace with resized image
          });
        } else {
          // If image is smaller than 2MB, directly display it
          container2.style.display = "none"; // Hide optimization options
          displayImageInContainer(image); // Display the original image in image-container
        }
      };
    };
    reader.readAsDataURL(file);
  }
});

// Optimize buttons functionality
optimize25Button.addEventListener("click", function () {
  const image = box11.querySelector("img"); // Get the resized image from box11
  if (image) {
    resizeImage(image, 25, function (optimizedImage25) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage25.src;
      box11.innerHTML = ""; // Clear current image in box11
      box11.appendChild(optimizedImage25); // Replace with 25% optimized image
      displayImageInContainer(optimizedImage);
    });
  }
});

optimize50Button.addEventListener("click", function () {
  const image = box12.querySelector("img"); // Get the resized image from box12
  if (image) {
    resizeImage(image, 50, function (optimizedImage50) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage50.src;
      box12.innerHTML = ""; // Clear current image in box12
      box12.appendChild(optimizedImage50); // Replace with 50% optimized image
      displayImageInContainer(optimizedImage);
    });
  }
});

optimize75Button.addEventListener("click", function () {
  const image = box13.querySelector("img"); // Get the resized image from box13
  if (image) {
    resizeImage(image, 75, function (optimizedImage75) {
      const optimizedImage = new Image();
      optimizedImage.src = optimizedImage75.src;
      box13.innerHTML = ""; // Clear current image in box13
      box13.appendChild(optimizedImage75); // Replace with 75% optimized image
      displayImageInContainer(optimizedImage);
    });
  }
});

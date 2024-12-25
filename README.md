
# Image Optimizer

## Description

**Image Optimizer** is a simple, user-friendly web application designed to help users optimize large images by reducing their file sizes. The app allows users to upload an image, and if the image is larger than 2MB, it provides options to reduce the image size by 25%, 50%, or 75%. The app features a responsive design, making it accessible on devices of various screen sizes such as desktops, tablets, and mobile phones. It also allows users to instantly preview the optimized image in real time.

This tool is helpful for users who want to reduce the file size of their images for web usage, email attachments, or simply to save space on their device.

## Features

- **Image Upload**: Upload an image file directly from your device.
- **Size Check**: The app checks if the image is larger than 2MB. If it is, it prompts the user to optimize the image.
- **Optimization Options**: Users can choose to resize the image to 25%, 50%, or 75% of its original size.
- **Real-Time Preview**: Optimized images are shown immediately after resizing so users can compare the results.
- **Responsive Layout**: The app layout adjusts to fit various screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.
- **Easy to Use**: The interface is simple and intuitive, with clear instructions for uploading and optimizing the image.

## Technologies Used

The project leverages the following technologies:

- **HTML5**: The basic structure of the web page, including elements for image display, file input, and buttons for optimization.
- **CSS3**: Used for styling the application, including the background, layout, and responsive design.
- **JavaScript**: Handles the logic for image processing, including loading, resizing, and displaying images based on user interactions.
  - **Canvas API**: Used to resize the images while maintaining their aspect ratio.

## Installation Instructions

To get started with the Image Optimizer project:

### 1. Clone the repository:
   If you haven't already, clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/image-optimizer.git
   ```

### 2. Open the `index.html` file:
   You can run the application locally by simply opening the `index.html` file in your web browser.

   - Navigate to the folder where the project is stored.
   - Open `index.html` in any modern web browser like Chrome, Firefox, or Safari.

### 3. View in Browser:
   Once you open the `index.html` file, the application will load, and you can start interacting with it immediately.

---

## Application Workflow

### 1. **Uploading an Image**

   - When the user selects an image file via the `input` element (`<input type="file" id="image-input" accept="image/*">`), the `change` event is triggered, and JavaScript captures the selected image file.
   - The file is read using the `FileReader` API, and the image is displayed in the app container.

### 2. **Checking Image Size**

   - Once the image is uploaded, its size is checked to see if it exceeds 2MB (2 * 1024 * 1024 bytes).
   - If the image is **larger than 2MB**, the app displays a warning message that the image needs to be optimized.
   - The optimization options (buttons to resize the image to 25%, 50%, or 75% of its size) are shown.

### 3. **Optimizing the Image**

   - When the user clicks any of the optimization buttons (`"Optimize 25%"`, `"Optimize 50%"`, or `"Optimize 75%"`), the image is resized accordingly.
   - The app uses the **Canvas API** to create a new image with a smaller file size by resizing the width and height based on the selected percentage.
   - The resized image is then displayed in the designated container (`box11`, `box12`, or `box13`).
   
 

### 4. **Viewing Optimized Image**

   - Once the image is resized, it is displayed on the screen, allowing users to compare the original image (if it was under 2MB) or the resized options.
   - The user can click to see the image at different sizes and choose which one best suits their needs.

---


## How It Works (Detailed Explanation)

### HTML (index.html)

- **Image Upload**: A file input allows users to select an image file.
- **Optimization Buttons**: If the image exceeds 2MB, buttons appear offering to reduce the image size by 25%, 50%, or 75%.
- **Image Display**: The image container dynamically updates based on the selected optimization level.

### CSS (style.css)

- **Background Styling**: A background image is set to create an aesthetic visual backdrop.
- **Responsive Design**: Media queries ensure the layout is adaptive, with changes to the size of containers and images based on screen width.
  - For instance, on smaller devices, images and containers shrink for a more compact layout.
  
### JavaScript (script.js)

- **File Handling**: JavaScript reads the file using the `FileReader` API and loads it into an `img` element.
- **Canvas API**: The script uses the `<canvas>` element to resize the image dynamically without loss of quality.
- **Resize Logic**: Different resizing functions for 25%, 50%, and 75% of the original image dimensions are defined, and the optimized images are displayed in their respective containers.

---

## Contributing

If you'd like to contribute to the project, follow these steps:

1. **Fork the repository**: Create a personal copy of the repository on GitHub.
2. **Make your changes**: Modify the code as needed to add features, fix bugs, or improve performance.
3. **Submit a pull request**: Once you're ready, submit a pull request with a detailed description of your changes. Please make sure your code is well-tested and follows the existing style conventions.

## License

This project is open-source and available under the MIT License.

---

## Acknowledgments

- **Background Image**: The background image used in this project is from [Pexels](https://www.pexels.com).
- **Image Resizing Concept**: The use of the Canvas API for image resizing is inspired by various web tutorials and guides on client-side image manipulation.
  

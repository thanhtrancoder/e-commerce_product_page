document.addEventListener("DOMContentLoaded", function () {
  const products = [
    "/images/products/LymoPDPImagesArtboard1.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard2.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard3.webp",
    "/images/products/LymoPDPImagesArtboard4.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard5.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard6.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard7.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard8.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard9.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard10.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard11.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard12.webp",
    "/images/products/LymphDrainageREWAMPEDvisualsArtboard13.webp",
  ];

  const productImg = document.getElementById("product-img");
  let leftProductIndex = 12;
  let productIndex = 0;
  let rightProductIndex = 1;
  let previewProduct4Index = 2;
  let previewProduct5Index = 3;
  let rightPreviewProductIndex = 4;
  const leftProductImg = document.getElementById("left-product-img");
  const previewProductImg = document.getElementById("preview-products-img");
  const rightProductImg = document.getElementById("right-product-img");
  const leftPreviewProductImg = document.getElementById(
    "left-preview-product-img",
  );
  const previewProduct1Img = document.getElementById("preview-product1-img");
  const previewProduct2Img = document.getElementById("preview-product2-img");
  const previewProduct3Img = document.getElementById("preview-product3-img");
  const previewProduct4Img = document.getElementById("preview-product4-img");
  const rightPreviewProductImg = document.getElementById(
    "right-preview-product-img",
  );

  // handle prev button
  productImg.src = products[productIndex];
  const prevProductBtn = document.getElementById("prev-product-btn");
  prevProductBtn.addEventListener("click", function () {
    productIndex -= 1;
    if (productIndex < 0) {
      productIndex = 12;
    }
    leftProductIndex = productIndex - 1;
    if (leftProductIndex < 0) {
      leftProductIndex = 12;
    }
    rightProductIndex = productIndex + 1;
    if (rightProductIndex > 12) {
      rightProductIndex = 0;
    }
    previewProduct4Index = rightProductIndex + 1;
    if (previewProduct4Index > 12) {
      previewProduct4Index = 0;
    }
    previewProduct5Index = previewProduct4Index + 1;
    if (previewProduct5Index > 12) {
      previewProduct5Index = 0;
    }
    rightPreviewProductIndex = previewProduct5Index + 1;
    if (rightPreviewProductIndex > 12) {
      rightPreviewProductIndex = 0;
    }
    productImg.classList.add("slide-to-right");
    leftProductImg.classList.add("slide-to-right");
    previewProductImg.classList.add("slide-to-right-1o4");
    setTimeout(() => {
      productImg.classList.remove("slide-to-right");
      leftProductImg.classList.remove("slide-to-right");
      previewProductImg.classList.remove("slide-to-right-1o4");
      productImg.src = products[productIndex];
      leftProductImg.src = products[leftProductIndex];
      rightProductImg.src = products[rightProductIndex];
      leftPreviewProductImg.src = products[leftProductIndex];
      previewProduct1Img.src = products[productIndex];
      previewProduct2Img.src = products[rightProductIndex];
      previewProduct3Img.src = products[previewProduct4Index];
      previewProduct4Img.src = products[previewProduct5Index];
      rightPreviewProductImg.src = products[rightPreviewProductIndex];
    }, 500);
  });

  // handle next button
  productImg.src = products[productIndex];
  const nextProductBtn = document.getElementById("next-product-btn");
  nextProductBtn.addEventListener("click", function () {
    productIndex += 1;
    if (productIndex > 12) {
      productIndex = 0;
    }
    leftProductIndex = productIndex - 1;
    if (leftProductIndex < 0) {
      leftProductIndex = 12;
    }
    rightProductIndex = productIndex + 1;
    if (rightProductIndex > 12) {
      rightProductIndex = 0;
    }
    previewProduct4Index = rightProductIndex + 1;
    if (previewProduct4Index > 12) {
      previewProduct4Index = 0;
    }
    previewProduct5Index = previewProduct4Index + 1;
    if (previewProduct5Index > 12) {
      previewProduct5Index = 0;
    }
    rightPreviewProductIndex = previewProduct5Index + 1;
    if (rightPreviewProductIndex > 12) {
      rightPreviewProductIndex = 0;
    }
    productImg.classList.add("slide-to-left");
    rightProductImg.classList.add("slide-to-left");
    previewProductImg.classList.add("slide-to-left-1o4");
    setTimeout(() => {
      productImg.classList.remove("slide-to-left");
      rightProductImg.classList.remove("slide-to-left");
      previewProductImg.classList.remove("slide-to-left-1o4");
      productImg.src = products[productIndex];
      rightProductImg.src = products[rightProductIndex];
      leftProductImg.src = products[leftProductIndex];
      leftPreviewProductImg.src = products[leftProductIndex];
      previewProduct1Img.src = products[productIndex];
      previewProduct2Img.src = products[rightProductIndex];
      previewProduct3Img.src = products[previewProduct4Index];
      previewProduct4Img.src = products[previewProduct5Index];
      rightPreviewProductImg.src = products[rightPreviewProductIndex];
    }, 500);
  });

  // handle small product move
});

// Product
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
const productLength = products.length;

const productImgContainer = document.getElementById("product-img-container");
const productImg = document.getElementById("product-img");
let leftProductIndex = productLength - 1;
let productIndex = 0;
let rightProductIndex = 1;
let right2ProductIndex = 2;
let right3ProductIndex = 3;
let previewProduct4Index = 2;
let previewProduct5Index = 3;
let rightPreviewProductIndex = 4;
let right2PreviewProductIndex = 5;
let right3PreviewProductIndex = 6;
const leftProductImg = document.getElementById("left-product-img");
const previewProductImg = document.getElementById("preview-products-img");
const rightProductImg = document.getElementById("right-product-img");
const right2ProductImg = document.getElementById("right2-product-img");
const right3ProductImg = document.getElementById("right3-product-img");
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
const right2PreviewProductImg = document.getElementById(
  "right2-preview-product-img",
);
const right3PreviewProductImg = document.getElementById(
  "right3-preview-product-img",
);
const newsaleImg = document.getElementById("newsale-img");
const leftProductImgContainer = document.getElementById(
  "left-product-img-container",
);
const rightProductImgContainer = document.getElementById(
  "right-product-img-container",
);
const right2ProductImgContainer = document.getElementById(
  "right2-product-img-container",
);
const right3ProductImgContainer = document.getElementById(
  "right3-product-img-container",
);
const nutritionalInfoBtn = document.getElementById("nutritional-info-btn");
const leftNewsaleImg = document.getElementById("left-newsale-img");
const leftNutritionalInfoBtn = document.getElementById(
  "left-nutritional-info-btn",
);
const rightNewsaleImg = document.getElementById("right-newsale-img");
const rightNutritionalInfoBtn = document.getElementById(
  "right-nutritional-info-btn",
);
const right2NewsaleImg = document.getElementById("right2-newsale-img");
const right2NutritionalInfoBtn = document.getElementById(
  "right2-nutritional-info-btn",
);
const right3NewsaleImg = document.getElementById("right3-newsale-img");
const right3NutritionalInfoBtn = document.getElementById(
  "right3-nutritional-info-btn",
);

function updateProductIndex() {
  leftProductIndex = productIndex - 1;
  if (leftProductIndex < 0) {
    leftProductIndex = productLength - 1;
  }
  rightProductIndex = productIndex + 1;
  if (rightProductIndex > productLength - 1) {
    rightProductIndex = 0;
  }
  right2ProductIndex = rightProductIndex + 1;
  if (right2ProductIndex > productLength - 1) {
    right2ProductIndex = 0;
  }
  right3ProductIndex = right2ProductIndex + 1;
  if (right3ProductIndex > productLength - 1) {
    right3ProductIndex = 0;
  }
  previewProduct4Index = rightProductIndex + 1;
  if (previewProduct4Index > productLength - 1) {
    previewProduct4Index = 0;
  }
  previewProduct5Index = previewProduct4Index + 1;
  if (previewProduct5Index > productLength - 1) {
    previewProduct5Index = 0;
  }
  rightPreviewProductIndex = previewProduct5Index + 1;
  if (rightPreviewProductIndex > productLength - 1) {
    rightPreviewProductIndex = 0;
  }
  right2PreviewProductIndex = rightPreviewProductIndex + 1;
  if (right2PreviewProductIndex > productLength - 1) {
    right2PreviewProductIndex = 0;
  }
  right3PreviewProductIndex = right2PreviewProductIndex + 1;
  if (right3PreviewProductIndex > productLength - 1) {
    right3PreviewProductIndex = 0;
  }
}

function updateProductImages() {
  productImg.src = products[productIndex];
  leftProductImg.src = products[leftProductIndex];
  rightProductImg.src = products[rightProductIndex];
  right2ProductImg.src = products[right2ProductIndex];
  right3ProductImg.src = products[right3ProductIndex];
  leftPreviewProductImg.src = products[leftProductIndex];
  previewProduct1Img.src = products[productIndex];
  previewProduct2Img.src = products[rightProductIndex];
  previewProduct3Img.src = products[previewProduct4Index];
  previewProduct4Img.src = products[previewProduct5Index];
  rightPreviewProductImg.src = products[rightPreviewProductIndex];
  right2PreviewProductImg.src = products[right2PreviewProductIndex];
  right3PreviewProductImg.src = products[right3PreviewProductIndex];
  if (leftProductIndex === 0) {
    leftNewsaleImg.classList.remove("hidden");
    leftNutritionalInfoBtn.classList.remove("hidden");
  } else {
    leftNewsaleImg.classList.add("hidden");
    leftNutritionalInfoBtn.classList.add("hidden");
  }
  if (productIndex === 0) {
    newsaleImg.classList.remove("hidden");
    nutritionalInfoBtn.classList.remove("hidden");
  } else {
    newsaleImg.classList.add("hidden");
    nutritionalInfoBtn.classList.add("hidden");
  }
  if (rightProductIndex === 0) {
    rightNewsaleImg.classList.remove("hidden");
    rightNutritionalInfoBtn.classList.remove("hidden");
  } else {
    rightNewsaleImg.classList.add("hidden");
    rightNutritionalInfoBtn.classList.add("hidden");
  }
  if (right2ProductIndex === 0) {
    right2NewsaleImg.classList.remove("hidden");
    right2NutritionalInfoBtn.classList.remove("hidden");
  } else {
    right2NewsaleImg.classList.add("hidden");
    right2NutritionalInfoBtn.classList.add("hidden");
  }
  if (right3ProductIndex === 0) {
    right3NewsaleImg.classList.remove("hidden");
    right3NutritionalInfoBtn.classList.remove("hidden");
  } else {
    right3NewsaleImg.classList.add("hidden");
    right3NutritionalInfoBtn.classList.add("hidden");
  }
}

// handle prev button
productImg.src = products[productIndex];
function handlePrevProductClick() {
  productIndex -= 1;
  if (productIndex < 0) {
    productIndex = productLength - 1;
  }
  updateProductIndex();
  productImgContainer.classList.add("slide-to-right");
  leftProductImgContainer.classList.add("slide-to-right");
  previewProductImg.classList.add("slide-to-right-1o4");
  setTimeout(() => {
    productImgContainer.classList.remove("slide-to-right");
    leftProductImgContainer.classList.remove("slide-to-right");
    previewProductImg.classList.remove("slide-to-right-1o4");
    updateProductImages();
  }, 500);
}

// handle next button
productImg.src = products[productIndex];
function handleNextProductClick() {
  productIndex += 1;
  if (productIndex > productLength - 1) {
    productIndex = 0;
  }
  updateProductIndex();
  productImgContainer.classList.add("slide-to-left");
  rightProductImgContainer.classList.add("slide-to-left");
  previewProductImg.classList.add("slide-to-left-1o4");

  setTimeout(() => {
    productImgContainer.classList.remove("slide-to-left");
    rightProductImgContainer.classList.remove("slide-to-left");
    previewProductImg.classList.remove("slide-to-left-1o4");
    updateProductImages();
  }, 500);
}

// handle show nutritional info button
function handleNutritionalInfoClick() {
  const productInfoPopup = document.getElementById("product-info-popup");
  productInfoPopup.classList.remove("hidden");
}

// handle close nutritional info button
function handleCloseNutritionalInfoPopup() {
  const productInfoPopup = document.getElementById("product-info-popup");
  productInfoPopup.classList.add("hidden");
}

// handle next 2 product
function handleNext2ProductClick() {
  productIndex += 2;
  if (productIndex > productLength - 1) {
    productIndex = productIndex - productLength;
  }
  updateProductIndex();
  productImgContainer.classList.add("slide-to-left-2");
  rightProductImgContainer.classList.add("slide-to-left-2");
  right2ProductImgContainer.classList.add("slide-to-left-2");
  previewProductImg.classList.add("slide-to-left-2o4");
  setTimeout(() => {
    productImgContainer.classList.remove("slide-to-left-2");
    rightProductImgContainer.classList.remove("slide-to-left-2");
    right2ProductImgContainer.classList.remove("slide-to-left-2");
    previewProductImg.classList.remove("slide-to-left-2o4");
    updateProductImages();
  }, 500);
}

// handle next 3 product
function handleNext3ProductClick() {
  productIndex += 3;
  if (productIndex > productLength - 1) {
    productIndex = productIndex - productLength;
  }
  updateProductIndex();
  productImgContainer.classList.add("slide-to-left-3");
  rightProductImgContainer.classList.add("slide-to-left-3");
  right2ProductImgContainer.classList.add("slide-to-left-3");
  right3ProductImgContainer.classList.add("slide-to-left-3");
  previewProductImg.classList.add("slide-to-left-3o4");
  setTimeout(() => {
    productImgContainer.classList.remove("slide-to-left-3");
    rightProductImgContainer.classList.remove("slide-to-left-3");
    right2ProductImgContainer.classList.remove("slide-to-left-3");
    right3ProductImgContainer.classList.remove("slide-to-left-3");
    previewProductImg.classList.remove("slide-to-left-3o4");
    updateProductImages();
  }, 500);
}

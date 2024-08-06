const arrOfAsset = [
  'assets/uniqlo_man.webp',
  'assets/men_fashion.jpg',
  'assets/women_fashion_1.webp',
  'assets/women_fashion_2.jpg',
  'assets/uniqlo_tshirt_men.webp',
];
const arrOfTitle = [
  'Parka Jacket',
  'Orange Sweater',
  'Chocolate Summer',
  'Pink Summer',
  'Shirt',
];
const productContainer = document.getElementById('product-container');

arrOfAsset.forEach((asset, index) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('h-[500px]', 'w-[400px]', 'm-5');

  const linkToDetailProduct = document.createElement('a');
  linkToDetailProduct.href = '#detailProduk';

  const imgElement = document.createElement('img');
  imgElement.src = asset;
  imgElement.classList.add('h-full', 'w-full', 'object-cover', 'object-top');

  linkToDetailProduct.appendChild(imgElement);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add(
    'flex',
    'items-center',
    'justify-between',
    'px-[20px]',
    'py-[10px]'
  );

  const productTitle = document.createElement('h2');
  productTitle.classList.add('text-xl', 'font-bold');
  productTitle.innerText = arrOfTitle[index]; // Use the index to get the corresponding title

  const productPrice = document.createElement('p');
  productPrice.classList.add('font-bold');
  productPrice.innerText = `Rp 200000`; // Adjust the price as needed or use another array if prices vary

  descriptionContainer.appendChild(productTitle);
  descriptionContainer.appendChild(productPrice);
  cardContainer.appendChild(linkToDetailProduct);
  cardContainer.appendChild(descriptionContainer);
  productContainer.appendChild(cardContainer);
});

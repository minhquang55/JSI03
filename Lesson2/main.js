const arrNum = [5, 3, 0, -1, 2, -5];

const positiveNum = arrNum.filter((item) => {
  if (item > 0) {
    return true;
  }
  return false;
});

const positiveNum1 = arrNum.filter((item) => item > 0);

console.log(positiveNum1);

const products = [
  { id: 1, name: "Iphone 13", price: 1000, quantity: 10 },
  { id: 2, name: "Macbook pro M2", price: 2000, quantity: 5 },
  { id: 3, name: "Màn hình Samsung 23 inch", price: 1500, quantity: 2 },
  { id: 4, name: "Airpod 2", price: 100, quantity: 20 },
];

// Filter ra nhung san pham co so luong >= 10
const product1 = products.filter((product) => product.quantity >= 10);
console.log(product1);
// Filter ra mot mang khong chua san pham co id = 3
// (["Iphone 13", "Macbook pro M2", "Airpod 2"])
const product2 = products.filter((product) => product.id !== 3).map((product) => product.name);

// Viet ham kiem tra san pham co ton tai trong mang products khong
const checkProduct = (productName) => {
  const filterProduct = products.filter(product => product.name === productName);
  if(filterProduct.length === 0) {
    console.log('khong ton tai');
  } else {
    console.log('ton tai');
  }
}
checkProduct('Iphone 13');

const checkProduct2 = (productName) => {
  const findProduct = products.find((product) => product.name === productName);
  if(findProduct) {
    console.log('ton tai');
  } else {
    console.log('khong ton tai');
  }
}
checkProduct2('Iphone 13');

const checkProduct3 = (productName) => {
  const productIndex = products.findIndex((product) => product.name === productName);
  if (productIndex > -1) {
    console.log('ton tai');
  } else {
    console.log('khong ton tai');
  }
}
checkProduct3('Iphone 132');

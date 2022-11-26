let addtoCartArr = JSON.parse(localStorage.getItem("addToCart")) || [];

product_data = [
  {
    brand: "Calvin Klein",
    rating: "*****",
    name: "Calvin Klein Eternity For Men Eau De Parfum",
    price: "468.00",
    productID: "product1",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/8/s8.jpg",
  },
  {
    brand: "Fogg",
    rating: "*****",
    name: "Fogg Bleu Series Island Fragrance Body Spray",
    price: "255.00",
    productID: "product2",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo21.jpg",
  },
  {
    brand: "Fogg",
    rating: "*****",
    name: "Fogg Force Fragrance Body Spray",
    price: "230.00",
    productID: "product3",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo20.jpg",
  },
  {
    brand: "Fogg",
    rating: "*****",
    name: "Fogg Bleu Series Mountain Fragrance Body Spray",
    price: "450.00",
    productID: "product4",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo18.jpg",
  },
  {
    brand: "Engage",
    rating: "*****",
    name: "Engage Yin Eau De Parfum For Men",
    price: "459.00",
    productID: "product5",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/e/5/e55.jpg",
  },
  {
    brand: "Engage",
    rating: "*****",
    name: "Engage Sport Cool Deodorant For Women, Citrus & Spicy, Skin Friendly",
    price: "318.00",
    productID: "product6",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e54.jpg",
  },
  {
    brand: "Fogg",
    rating: "*****",
    name: "Fogg Scent Beautiful Secret Women Fragrance Body Spray",
    price: "567.00",
    productID: "product7",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/r/rr.jpg",
  },
  {
    brand: "Fogg",
    rating: "* * * * *",
    name: "Fogg Master Cedar Body Spray",
    price: "278.00",
    productID: "product8",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo13.jpg",
  },
  {
    brand: "Engage",
    rating: "*****",
    name: "Engage Sport Fresh Deodorant For Women",
    price: "196.00",
    productID: "product9",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e52.jpg",
  },
  {
    brand: "Engage",
    rating: "*****",
    name: "Engage Spell Deodorant For Women",
    price: "210.00",
    productID: "product10",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e51.jpg",
  },
  {
    brand: "Engage",
    rating: "*****",
    name: "Engage W1 Perfume Spray For Women",
    price: "225.00",
    productID: "product11",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/4/e49.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Esteem Hamilton Perfume",
    price: "448.00",
    productID: "product12",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d37.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Noble Hamilton Deodorant Body Spray",
    price: "210.00",
    productID: "product13",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d36.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Imperial Deodorant For Men",
    price: "212.00",
    productID: "product14",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d35.jpg",
  },
  {
    brand: "Denver",
    rating: "* * * * *",
    name: "Denver Honour Hamilton Deo",
    price: "329.00",
    productID: "product15",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d33.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver SRK Emperor Deodorant Autograph Collection - 150ml",
    price: "345.00",
    productID: "product16",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d32.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Sporting Club Goal Perfume - 60ml",
    price: "257.00",
    productID: "product17",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d31.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Insight Eau De Perfume",
    price: "448.00",
    productID: "product18",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d30.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Sporting Club Rider Deo",
    price: "179.00",
    productID: "product19",
    catagory: "Deodorant",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d29.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Hamilton Caliber Perfume - 100ml",
    price: "567.00",
    productID: "product20",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d28.jpg",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Hamilton Imperial Perfume",
    price: "436.00",
    productID: "product21",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d26.png",
  },
  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Black Code Perfume",
    price: "212.00",
    productID: "product22",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d20.png",
  },

  {
    brand: "Denver",
    rating: "*****",
    name: "Denver Hamilton Imperial Perfume - 100ml",
    price: "449.00",
    productID: "product24",
    catagory: "Perfume",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d24.jpg",
  },
  {
    brand: "Fogg",
    rating: "*****",
    name: "Fogg Dynamic Fragrance Body Spray",
    price: "250.00",
    productID: "product25",
    catagory: "Body Spray",
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo7.jpg",
  },
];



let total_item = localStorage.getItem("totalProduct");
document.getElementsByClassName("totalItem").innerText=total_item;
// ............................................................................................

displayContainer(product_data);

document
  .querySelector("#filterCategory")
  .addEventListener("change", handleCategorySort);
document
  .querySelector("#filterBrand")
  .addEventListener("change", handleFilter);
document
  .querySelector("#sortPrice")
  .addEventListener("change", handlePrice);


// ............................................................................................

  function handlePrice() {
    let price = document.querySelector("#sortPrice").value;

    if (price == "true") {

      product_data.sort(function (a, b) {
        console.log(price);

        let x = a.price;
        let y = b.price;
        if (x > y) return 1;
        if (x < y) return -1;
        return 0;
      });

      displayContainer(product_data);
      console.log(product_data);
    }

    if (price == "false") {

      product_data.sort(function (a, b) {
        console.log(price);

        let x = a.price;
        let y = b.price;
        if (x > y) return -1;
        if (x < y) return 1;
        return 0;
      });

      displayContainer(product_data);
      console.log(product_data);
    }
  }

// ............................................................................................

function handleFilter() {
  let selected = document.querySelector("#filterBrand").value;
  console.log(selected);

  if(selected == ""){
    displayContainer(product_data);
  }
  else
  {
    let filterList = product_data.filter(function (elem) {
      return elem.brand == selected;
  });
    displayContainer(filterList);
  }
}

// ............................................................................................


function handleCategorySort() {
  let selected = document.querySelector("#filterCategory").value;
  console.log(selected);

  if(selected == ""){
    displayContainer(product_data);
  }
  else
  {
    let filterList = product_data.filter(function (elem) {
      return elem.catagory == selected;
  });
    displayContainer(filterList);
  }
}

// ............................................................................................


function displayContainer(product_data) {

  document.querySelector("#box22").innerHTML = "";

  product_data.forEach(function (elem, index) {
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    let rating = document.createElement("h3");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    let span5 = document.createElement("span");

    span1.setAttribute("class", "fa fa-star checked");
    span2.setAttribute("class", "fa fa-star checked");
    span3.setAttribute("class", "fa fa-star checked");
    span4.setAttribute("class", "fa fa-star checked");
    span5.setAttribute("class", "fa fa-star checked");

    let name = document.createElement("p");
    name.innerText = elem.name;

    let price = document.createElement("h5");
    price.innerText = elem.price;

    let brand = document.createElement("h3");
    brand.innerText = elem.brand;

    let productID = document.createElement("h4");
    productID.innerText = elem.productID;

    let category = document.createElement("h4");
    category.innerText = elem.catagory;

    let addtoCart = document.createElement("button");
    addtoCart.innerText = "Add to cart";
    addtoCart.addEventListener("click", function () {
      addtoCartFunc(elem, index);
    })

    rating.append(span1, span2, span3, span4, span5);
    div.append(img, rating, name, price, brand, category, addtoCart);
    console.log(div);
    document.querySelector("#box22").append(div);
  });

  function addtoCartFunc(elem, index) {
    console.log(addtoCartArr);
    alert("Product added Successfully");
    addtoCartArr.push(elem)
    localStorage.setItem("addToCart", JSON.stringify(addtoCartArr));
    console.log(addtoCartArr);
  }
}

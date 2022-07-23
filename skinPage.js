let addtoCartArr = JSON.parse(localStorage.getItem("addToCart")) || [];

product_data = [
    {
      brand: "Mamaearth",
      rating: "*****",
      name: "Mamaearth Rice Face Scrub For Glowing Skin With Rice Water & Niacinamide For Glass Skin",
      price: "304.00 ",
      productID: "women1",
      catagory: "Scrub",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",
    },
    {
      brand: "Lotus Herbals",
      rating: "*****",
      name: "Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",
      price: "428.00",
      productID: "women2",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/i/m/image1_600x.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Caffeine Face Serum",
      price: "515.00",
      productID: "women3",
      catagory: "Face serum",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/6/3699c478906105612174-2.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Activated Charcoal Face Scrub",
      price: "375.00",
      productID: "women4",
      catagory: "Scrub",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8904304651284_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Activated Charcoal Face Mask",
      price: "435.00",
      productID: "women5",
      catagory: "Face Mask",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/a/c/activated_charcoal_face_mask2.jpg",
    },
    {
      brand: "Lotus Organics",
      rating: "*****",
      name: "Lotus Organics+ Bakuchiol Plant Retinol Miracle Facial Oil",
      price: "896.00",
      productID: "women6",
      catagory: "Facial Oil",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/0/f0c4f25lotus00000014.jpg",
    },
    {
      brand: "Organic Harvest",
      rating: "*****",
      name: "Organic Harvest Masseuscious Damage Control Cleanser With Acai Berry",
      price: "1,420.00",
      productID: "women7",
      catagory: "Damage Control Cleanser",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53f7f568906080030383_rvn1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science AM2PM Sunscreen SPF 50 Lotion",
      price: "385.00",
      productID: "women8",
      catagory: "Lotion",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901495_1_1_.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Activated Charcoal Peel Off Face Mask",
      price: "399.00",
      productID: "women9",
      catagory: "Face Mask",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/d/fd794d08904304373124.jpg",
    },
    {
      brand: "Mamaearth",
      rating: "*****",
      name: "Mamaearth Flowers Of Youth Essence Serum With Hyaluronic Acid & Hibiscus For Youthful Skin",
      price: "599.00",
      productID: "women10",
      catagory: "Serum",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg"
    },
    {
      brand: "Biotique",
      rating: "*****",
      name: "Biotique Advanced Organics Tea Tree Treament Oil Essential Oil For Face",
      price: "504.00 ",
      productID: "women11",
      catagory: "Facial Oil",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/7/b/7ba61598904352001284_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Kids Cool-The-Rays Sunscreen Cream - SPF 30+ PA+++",
      price: "349.00",
      productID: "women12",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8904311901631_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Raw African Shea Body Butter",
      price: "440.00",
      productID: "women13",
      catagory: "Body Butter",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/e/3eb5e308904311902874_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Apple Cider Vinegar Face Wash Bottle",
      price: "999",
      productID: "women14",
      catagory: "Face Wash",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/5/759639c8904311903499__1_.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Pink Rose Clay Face Mask",
      price: "979",
      productID: "women19",
      catagory: "Face Mask",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/2/b2917c28904311900818-_2_.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Ubtan Face Wash Bottle",
      price: "2000",
      productID: "women20",
      catagory: "Face Wash",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/3/232439c8904311903550__1_.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Himalayan Rose Body Lotion",
      price: "347",
      productID: "women21",
      catagory: "Lotion",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/b/9b82c478906105611962-2.jpg",
    },
    {
      brand: "Lotus Organics",
      rating: "*****",
      name: "Lotus Organics+ Bakuchiol Plant Retinol Super Serum",
      price: "976",
      productID: "women22",
      catagory: "Serum",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/3/83cff25lotus00000011.jpg",
    },
    {
      brand: "Joy",
      rating: "*****",
      name: "Joy Calming Stress Relief & Relaxing Lavender Body Serum Lotion",
      price: "456",
      productID: "women23",
      catagory: "Lotion",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/5/b/5b9d6c8joyxx00000028_n1.jpg"
    },
    {
      brand: "Joy",
      rating: "*****",
      name: "Joy Revivify Activated Charcoal Deep Detoxifying & Purifying Mask",
      price: "986",
      productID: "women24",
      catagory: "Mask",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/4/e4236c8joyxx00000024_n1.jpg",
    },
    {
      brand: "L'Oreal Paris",
      rating: "*****",
      name: "L'Oreal Paris Revitalift Hyaluronic Acid Plumping Day Cream",
      price: "567",
      productID: "women25",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/511e948lorea00000092_2.jpg",
    },
    {
      brand: "Nivea",
      rating: "*****",
      name: "NIVEA Body Lotion For Normal Skin, Express Hydration, For Fast Absorption",
      price: "567",
      productID: "women26",
      catagory: "Lotion",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/5/8/583d5ae4005808353149new.jpg",
    },
    {
      brand: "Nivea",
      rating: "*****",
      name: "Nivea Soft Light Moisturizer Cream Peppy Pomegranate For Hands And Body",
      price: "325",
      productID: "women27",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/3/43a6fecnivea00000064_1.jpg",
    },
    {
      brand: "Nivea",
      rating: "*****",
      name: "NIVEA Refreshing Aloe Hydration Cream For Face- Body & Hands",
      price: "231",
      productID: "women28",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/f/cf7485b4005900144652_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Hyaluronic Acid Face Serum",
      price: "347",
      productID: "women15",
      catagory: "Face Serum",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/a/a/aae1c478906105612136-2.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Aloe Vera Multi-Vitamin Face Cream",
      price: "790",
      productID: "women16",
      catagory: "Cream",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/7/0/70bf0be8904311901860_1.jpg",
    },
    {
      brand: "Wow",
      rating: "*****",
      name: "WOW Skin Science Ubtan Face Serum",
      price: "200",
      productID: "women17",
      catagory: "Serum",
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/e/e/ee32c478906105612372-2.jpg",
    },
  ];




  let total_item = localStorage.getItem("totalProduct");
document.getElementById("totalItem").innerText=total_item;

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

    span1.setAttribute("class","fa fa-star checked");
    span2.setAttribute("class","fa fa-star checked");
    span3.setAttribute("class","fa fa-star checked");
    span4.setAttribute("class","fa fa-star checked");
    span5.setAttribute("class","fa fa-star checked");


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
    
    rating.append(span1,span2, span3, span4, span5);
    div.append(img, rating, name, price, brand, category, addtoCart);
    console.log(div);
    document.querySelector("#box22").append(div);
  });

  function addtoCartFunc(elem, index) {
    //console.log(addtoCartArr);
    alert("Product added Successfully");
    addtoCartArr.push(elem)
    localStorage.setItem("addToCart", JSON.stringify(addtoCartArr));
    console.log(addtoCartArr);
  }
}

let addtoCartData = JSON.parse(localStorage.getItem("addToCart")) || [];
console.log(addtoCartData.length);

let total_item = addtoCartData.length;
document.getElementsByClassName("totalItem").innerText = total_item ;

localStorage.setItem("totalProduct", total_item );


  addtoCartData.forEach(function (elem, index) {

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div3.setAttribute("id","lastdiv");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");



    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    let rating = document.createElement("h3");
    rating.innerText="Rating:- "
    rating.style.color="red";
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
    price.innerText ="Price:- "+ elem.price;

    let brand = document.createElement("h3");
    brand.innerText = elem.brand;
    brand.style.color="rgb(248, 26, 200)"

    let productID = document.createElement("h4");
    productID.innerText = elem.productID;

    let category = document.createElement("h4");
    category.innerText = elem.catagory;

    let removetoCart = document.createElement("button");
    removetoCart.innerText = "Remove Item";
    removetoCart.addEventListener("click", function () {
      removetoCartFunc(index);
    });

    let edit = document.createElement("button");
    edit.innerText="Edit";

    rating.append(span1, span2, span3, span4, span5);
    div1.append(img, rating);
    div2.append(name, brand, price);
    div3.append(edit,removetoCart);
    div4.append(div1,div2);
    div5.append(div4,div3);

    
    document.querySelector("#cartContainer").append(div5);
  });

  function removetoCartFunc(index) {
    alert("Product removed Successfully");
    addtoCartData.splice(index, 1);
    localStorage.setItem("addToCart", JSON.stringify(addtoCartData));
  }

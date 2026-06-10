const Products = [
    {
    nameProduct:"Đây là một giống Heo",
    price:"110/1kg",
    description:" A liu liu :)) Đây là một loại HEO nói chính xác là bạn thân của tôi ",
    Image:"../assets/images/liu.jpg",
    linkProduct:"chi tiet.html"
    },
    {
    nameProduct:"Đây là một giống Heo",
    price:"110/1kg",
    description:"Đây là một loại HEO nổi tiếng ở nước và Việt Nam .... thích hợp với điều kiện khí hậu nhiệt đới",
    Image:"../assets/images/heoden.gpj.jfif",
    linkProduct:"page 2.html"
    },
];
function creataItem(ojb)
{

//Xác định khung chứa product-list
const listProducts = document.getElementById("product-list");

//Tạo 1 container có class = "item"
const item = document.createElement("div");
item.setAttribute("class", "item");

//Tạo 2 khung chứa Hình ảnh và Thông tin
//Tạo 1 container chứa hình ảnh có class = "image" ==> chỉ có 1 con là img
const containerImage = document.createElement("div");
containerImage.setAttribute("class", "image");

//Tạo ảnh
const img = document.createElement("img");
img.setAttribute("src",ojb.Image);
img.setAttribute("alt",ojb.nameProduct);
img.setAttribute("style", "width:100%; max-width:150px");

//Đưa vào khung chứa ảnh
containerImage.appendChild(img);

//Tạo 1 container chứa thông tin sản phẩm có class = "info" ==> có 3 <p> và 1 <a>
const containerInfo = document.createElement("div");
containerInfo.setAttribute("class", "info");

//Tạo <p> chứa tên sản phẩm
const nameProduct = document.createElement("p");
nameProduct.innerHTML = "Loại heo ngu nhất ở Việt Nam ";

//Tạo <p> chứa giá sản phẩm
const price = document.createElement("p");
price.innerHTML = ojb.price + "/1kg";

//Tạo <p> chứa mô tả sản phẩm
const description = document.createElement("p");
description.innerHTML =
    "Đây là một loại HEO nổi tiếng ở nước và Việt Nam .... thích hợp với điều kiện khí hậu nhiệt đới. Ăn nhìu , làm biến, đặc biệt là thích ngủ";

//Tạo <a> chứa liên kết
const linkProduct = document.createElement("a");
linkProduct.innerHTML = "Xem chi tiết";
linkProduct.setAttribute("href", "page6.html");


//Gần 4 con vào khung chứng Info
containerInfo.appendChild(nameProduct);
containerInfo.appendChild(price);
containerInfo.appendChild(description);
containerInfo.appendChild(linkProduct);

//Thêm khung chứa image vào Info
item.appendChild(containerImage);
item.appendChild(containerInfo);

//Thêm item vào list product
listProducts.appendChild(item);


}
window.onload = function() 
{
    Products.forEach(product =>{
            creataItem(product);
    });
}
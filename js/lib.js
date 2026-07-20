const Products = [
    {
    nameProduct:"SUZUKI",
    price:"203kg",
    description:"Suzuki GSX-R1000R là mẫu superbike hiệu năng cao, nổi bật với động cơ 4 xi-lanh 999,8cc tích hợp van biến thiên từ MotoGP, công nghệ điện tử hàng đầu, và khung sườn nhôm siêu nhẹ. Xe tập trung vào sức mạnh dải vòng tua tầm trung và khả năng kiểm soát linh hoạt.",
    Image:"../assets/images/bmw.webp",
    linkProduct:"chitiet.html"
    },
    {
    nameProduct:"KAWASAKI NINJA H2R",
    price:"213kg",
    description:"Kawasaki Ninja H2R là mẫu siêu mô tô chuyên dụng dành cho đường đua, được chế tác thủ công với số lượng giới hạn. Xe sở hữu khối động cơ siêu nạp 998cc mạnh mẽ bậc nhất thế giới, cung cấp công suất tối đa lên tới 326 mã lực.",
    Image:"../assets/images/h2r.jfif",
    linkProduct:"chitiet.html"
    },
     {
    nameProduct:"HONDA CBR1000RR",
    price:"202kg",
    description:"Honda CBR1000 (hay còn gọi là Fireblade) là dòng siêu mô tô thể thao (superbike) 1000cc đầu bảng của Honda. Kiểm soát toàn diện và độ linh hoạt cao",
     description1:" ",
    Image:"../assets/images/honda.jpg",
    linkProduct:"chitiet.html"
   

    },
    {
    nameProduct:"HONDA CBR650R",
    price:"207kg",
    description:"Honda CBR650 (hay CBR650R) là dòng mô tô thể thao phân khối lớn hạng trung được ưa chuộng, nổi bật với khối động cơ 4 xi-lanh mạnh mẽ, thiết kế thừa hưởng từ đàn anh CBR1000RR và tư thế lái cân bằng, mang lại sự phấn khích nhưng vẫn dễ dàng điều khiển hàng ngày",
    Image:"../assets/images/cbr650rr.jpg",
    linkProduct:"page 2.html"
    },
    {
    nameProduct:"KAWASAKI ZX10R",
    price:"209kg",
    description:"Kawasaki Ninja ZX-10R là dòng mô tô thể thao phân khối lớn (Superbike) danh tiếng, nổi bật với khối động cơ 998cc mạnh mẽ. Về trọng lượng, chiếc xe có trọng lượng ướt (kerb weight - đã bao gồm đầy đủ dầu nhớt và xăng).",
    Image:"../assets/images/zx10r.jpg",
    linkProduct:"page 2.html"
    },
    {
    nameProduct:"DUCATI SUPERA V4S",
    price:"184kg",
    description:"Ducati Panigale V4 S là dòng siêu mô tô thương mại đỉnh cao thừa hưởng công nghệ từ đường đua MotoGP. Xe có khối lượng khô (chưa bao gồm nhiên liệu) cực nhẹ. ",
    Image:"../assets/images/ducati.jpg",
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

//Tạo <p> chứa tên sản phẩm (lấy đúng tên thật của từng sản phẩm)
const nameProduct = document.createElement("p");
nameProduct.innerHTML = "<strong>" + ojb.nameProduct + "</strong>";

//Tạo <p> chứa giá sản phẩm (không nối thêm "/1kg" vì price đã có sẵn)
const price = document.createElement("p");
price.innerHTML = ojb.price;

//Tạo <p> chứa mô tả sản phẩm (lấy đúng mô tả thật của từng sản phẩm)
const description = document.createElement("p");
description.innerHTML = ojb.description;

//Tạo <a> chứa liên kết (trỏ đúng đến trang chi tiết của từng sản phẩm)
const linkProduct = document.createElement("a");
linkProduct.innerHTML = "Xem chi tiết";
linkProduct.setAttribute("href", ojb.linkProduct);


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

const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://dellxps.com.vn/library/module_new/dell-xps-15-9500-i7-10875h-ram-16gb-ssd-512gb-vga-roi-nvidia-geforce-gtx-1650-ti-man-hinh-15-6-inch-ips_s4291.png',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://cdn.hoanghamobile.com/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://bizweb.dktcdn.net/100/456/021/products/p1820143.jpg?v=1684316412570',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];

localStorage.setItem("products", JSON.stringify(products));
products = JSON.parse(localStorage.getItem("products")) || [];
function showProducts(filteredProducts = products) {
    let productsList = document.getElementById("productsList");
    productsList.innerHTML = "";

    filteredProducts.forEach(function (item) {
        productsList.innerHTML += `
  <div class="card">
    <img src="${item.image}" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
      <p><strong>Giá: ${item.price.toLocaleString()} VND</strong></p>
      <a href="#" class="btn btn-primary">Mua</a>
    </div>
  </div>`;
    });
}

function findProduct() {
    let input = document.getElementById("input").value.trim().toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));
    showProducts(filteredProducts);
}

let cancel = document.getElementById("delete")
cancel.onclick = function () {
    document.getElementById("input").value = ""
    showProducts()
}

showProducts()
// Book Data
const books = [
    { 
        title: "Structural Analysis",
        author: "R. C. Hibbeler",
        image: "https://m.media-amazon.com/images/I/51AXTSfNRfL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Surveying Vol. 1",
        author: "B. C. Punmia",
        image: "https://m.media-amazon.com/images/I/61U2M+E2M4L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Concrete Technology",
        author: "M. S. Shetty",
        image: "https://m.media-amazon.com/images/I/51xnwwYF5GL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Soil Mechanics",
        author: "B. C. Punmia",
        image: "https://m.media-amazon.com/images/I/91CAK9MMakL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Water Resources Enghineering",
        author: "Larry W. Mays",
        image: "https://m.media-amazon.com/images/I/91aGpPcC7gL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Transportation Engineering",
        author: "C. S. Papacostas",
        image: "https://covers.openlibrary.org/b/id/84353-L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Building Materials",
        author: "S. K. Duggal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo4uLPG977S19Eozy-pQmeuRrzAVWEZDtg&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Hydrology and Floodplain Analysis",
        author: "Bedient",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ABryc8IJ4kwHcYWUF0hqJJucAuKTftsgw&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Design of Steel Structures",
        author: "S. K. Duggal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUC7QMSX9wMkE-LaReKWcDq0KI_soQ_a3k20KAOWLFBK9a-hKloeQ1IBcJwhkrUIpkt5yi-KJsrwL6DGO8TGTpBFUMdHwUhdpDSUloI5-sp-51JpZsTs9Omo_6VYLWDDwu5Owh8a7pXg6BR3jlur8E7iWfAstHzKGsnSf_vj3t-iqtrlaB8hMwxXmMS8M/w900-c/merged_image_7105dSXURFL._SL1100.jpg1708437607.jpg",
        read: "#",
        download: "#"
    },
    
];

let cart = [];
const bookContainer = document.getElementById("bookContainer");

// Show books on home page
books.forEach((book, index) => {
    bookContainer.innerHTML += `
        <div class="book-card">
            <img src="${book.image}">
            <h3>${book.title}</h3>
            <button onclick="openModal(${index})">View</button>
        </div>
    `;
});

// Modal
function openModal(i){
    modal.style.display = "flex";
    document.getElementById("modal-title").innerText = books[i].title;
    document.getElementById("modal-author").innerText = books[i].author;
    readBtn.onclick = () => window.open(books[i].read);
    downloadBtn.onclick = () => window.open(books[i].download);
    addCartBtn.onclick = () => addToCart(books[i]);
    reserveBtn.onclick = () => window.open(books[i],reserve);
}

document.getElementById("closeBtn").onclick = () => modal.style.display = "none";

// Add to cart
function addToCart(book){
    cart.push(book);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${book.title} added to your books list`);
}

// Show cart
document.getElementById("openCart").onclick = showCart;
document.getElementById("closeCart").onclick = () => cartModal.style.display="none";

function showCart(){
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if(cart.length === 0){
        cartItems.innerHTML = "<p>Your book list is empty!</p>";
    }

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-book-card">
                <img src="${item.image}">
                <div>
                    <h4>${item.title}</h4>
                    <div class="cart-options">
                        <button onclick="window.open('${item.read}')">📖 Read</button>
                        <button onclick="window.open('${item.download}')">⬇️ Download</button>
                        <button class="remove-btn" onclick="removeItem(${index})">❌ Remove</button>
                        <button class="rserve-btn" onclick="studreserve.html">📕🔒 Reserve</button>
                    </div>
                </div>
            </div>
        `;
    });

    cartModal.style.display = "flex";
}

// Remove item
function removeItem(i){
    cart.splice(i,1);
    document.getElementById("cart-count").innerText = cart.length;
    showCart();
}

// Close modals when clicking outside
window.onclick = (e) => {
    if(e.target === modal) modal.style.display="none";
    if(e.target === cartModal) cartModal.style.display="none";
};

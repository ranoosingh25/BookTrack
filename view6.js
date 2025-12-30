// Book Data
const books = [
    { 
        title: "Electronic Devices and Circuit Theory",
        author: "Robert L. Boylestad",
        image: "https://m.media-amazon.com/images/I/91kgLctmApL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Microelectronic Circuits",
        author: "Sedra & Smith",
        image: "https://m.media-amazon.com/images/I/51xgl-YwvzL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Communication Systems",
        author: "Simon Haykin",
        image: "https://m.media-amazon.com/images/I/815stYE4tkL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Digital Electronics",
        author: "R. P. Jain",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQuy12X51Dra9qfSb4lD93x9QWYB5faNgpQ&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Signals and Systems",
        author: "Alan V. Oppenheim",
        image: "https://m.media-amazon.com/images/I/51YDWWTIEiL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electronic Principles",
        author: "Albert Malvino",
        image: "https://pictures.abebooks.com/isbn/9780028028330-uk.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Microwave Engineering",
        author: "David M. Pozar",
        image: "https://covers.openlibrary.org/b/id/10497037-L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Digital Communications",
        author: "John G. Proakis",
        image: "https://m.media-amazon.com/images/I/711wfy3qkGL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Analog Electronics",
        author: "Sedra & Smith",
        image: "https://m.media-amazon.com/images/I/817PmVQmB2L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "VLSI Design",
        author: "Kamran Eshraghian",
        image: "https://5.imimg.com/data5/CH/YM/MY-9509120/basic-vlsi-design.png",
        read: "#",
        download: "#"
    },
    { 
        title: "Optical Fiber Communications",
        author: "Gerd Keiser",
        image: "https://m.media-amazon.com/images/I/61R1+zG3AJL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Digital Logical Design",
        author: "Morris Mano",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV0uXLpwti3RUHD0BalnJNenVWjXcbuI8xw&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Embedded Systems",
        author: "Raj Kamal",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677799002i/6932247.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Wireless Communications",
        author: "Theodore S. Rappaport",
        image: "https://m.media-amazon.com/images/I/518z4Fx9hTL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Radar Systems",
        author: "Skolnik",
        image: "https://m.media-amazon.com/images/I/61lcWMlBmPL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    }
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

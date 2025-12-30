// Book Data
const books = [
    { 
        title: "Electrical Machinery",
        author: "P. S. Bimbhra",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfY4sMoe8z93czqyGu08oSNuwFbnhFhO7Vg&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Power System Engineering",
        author: "Nagrath & Kothari",
        image: "https://m.media-amazon.com/images/I/71qWaNBPH+L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Control System Engineering",
        author: "Norman S. Nise",
        image: "https://www.tbooks.solutions/wp-content/archivos/2021/10/0471366013-01--sclzzzzzzz-sx500-.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electrical Circuit Analysis",
        author: "A. Chakrabarti",
        image: "https://m.media-amazon.com/images/I/81fT2Yq-JJL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Digital Signal Processing",
        author: "Proakis & Manolakis",
        image: "https://m.media-amazon.com/images/I/71SYI1PcjVL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electrical Power Systems",
        author: "C. L. Wadhwa",
        image: "https://images-na.ssl-images-amazon.com/images/P/9393159173.01.LZZZZZZZ.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Switchgear Protection and Power System",
        author: "Sunil S. Rao",
        image: "https://m.media-amazon.com/images/I/81bN81+IiQL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electrical Engineering Fundamentals",
        author: "Del Torso",
        image: "https://m.media-amazon.com/images/I/61rc0RQeoEL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Signals and Systems",
        author: "Alan V. Oppenheim",
        image: "https://m.media-amazon.com/images/I/51YDWWTIEiL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Power Electronics",
        author: "M. H. Rashid",
        image: "https://m.media-amazon.com/images/I/710oJjxp+aL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electrical Machinery",
        author: "Fitzgerald & Kingsley",
        image: "https://m.media-amazon.com/images/I/81QUSURMJtL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "High Voltage Engineering",
        author: "M. S. Naidu",
        image: "https://m.media-amazon.com/images/I/71Udr5Gs4hL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Renewable Energy Systems",
        author: "Godfrey Boyle",
        image: "https://books.google.com/books/content?id=TrewQgAACAAJ&printsec=frontcover&img=1&zoom=5",
        read: "#",
        download: "#"
    },
    { 
        title: "Electrical Measurements",
        author: "A. K. Sawhney",
        image: "https://m.media-amazon.com/images/I/41UTuyJzwPS.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Electromagnetic Field Theory",
        author: "Bakshi",
        image: "https://m.media-amazon.com/images/I/61ujZy1gOiL._UF1000,1000_QL80_.jpg",
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

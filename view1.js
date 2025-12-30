// Book Data
const books = [
    { 
        title: "Database System Concepts",
        author: "Silberschatz, Korth",
        image: "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/database-system-concepts-6e_FrontImage_830.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Operating System Concepts",
        author: "Silberschatz, Galvin",
        image: "https://img.perlego.com/book-covers/3866215/thumbnail_9781118507414.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Introduction to Algorithms",
        author: "Cormen et al.",
        image: "https://m.media-amazon.com/images/I/61ZYxrQEpCL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        image: "https://image5.slideserve.com/9673064/computer-networks-4-th-edition-andrew-s-tanebaum-l.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Compilers:Principles,      Technologies,and Tools",
        author: "Aho, Lam, Sethi, Ullman",
        image: "https://m.media-amazon.com/images/I/71GKSIHfJ-L._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Programming Pearls",
        author: "Jon Bentley",
        image: "https://m.media-amazon.com/images/I/61biXaIiAGL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Design Patterns",
        author: "Gamma et al.",
        image: "https://m.media-amazon.com/images/I/71sjeQGh7VL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Modern Operation Systems",
        author: "Andrew S. Tanenbaum",
        image: "https://m.media-amazon.com/images/I/71khXluu+iL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Distributed Systems",
        author: "Maarten van Steen",
        image: "https://m.media-amazon.com/images/I/71SV45P9vwL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Computer Organization and Design",
        author: "David A. Patterson",
        image: "https://m.media-amazon.com/images/I/51aKONCOqaL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Artificial Intellifence",
        author: "Elaine Rich",
        image: "https://m.media-amazon.com/images/I/612agSUP9NL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Data Structures using C",
        author: "Reema Thareja",
        image: "https://m.media-amazon.com/images/I/51S+tOq9jEL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Java: The Complete Reference",
        author: "Herbert Schildt",
        image: "https://m.media-amazon.com/images/I/81ghlRWDxTL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Python Programming",
        author: "Mark Lutz",
        image: "https://m.media-amazon.com/images/I/81uCXHuaHfL._AC_UF1000,1000_QL80_.jpg",
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

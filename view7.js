// Book Data
const books = [
    { 
        title: "Artificial Intelligence: A Modern Approach",
        author: "Russell & Norving",
        image: "https://m.media-amazon.com/images/I/610+0VFgdJL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Machine Learning",
        author: "Tom M. Mitchell",
        image: "https://m.media-amazon.com/images/I/71NIrX79-HL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Deep Learning",
        author: "Ian Goodfellow",
        image: "https://m.media-amazon.com/images/I/A10G+oKN3LL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Pattern Recognition and Machine Learning",
        author: "Christopher Bishop",
        image: "https://m.media-amazon.com/images/I/71zMmruR+uL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Reinforcement Learning",
        author: "Sutton & Barto",
        image: "https://m.media-amazon.com/images/I/71nk3rOK3jL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Data Science from Scratch",
        author: "Sebastian Raschka ",
        image: "https://m.media-amazon.com/images/I/812I0mhF0DL._AC_UF894,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Agile Software Development",
        author: "Robert C. Martin",
        image: "https://cdn.waterstones.com/bookjackets/large/9780/1359/9780135974445.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Hands-On Machine Learning with Scikit-Learn",
        author: "AurÃOlien GÄOron",
        image: "https://m.media-amazon.com/images/I/71UF9mDAX3L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Bayesian Reasoning and Machine Learning",
        author: "David Barber",
        image: "https://m.media-amazon.com/images/I/51S4TrsLZHL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Natural Language Processing with Python",
        author: "Bird, Klein,Loper",
        image: "https://www.oreilly.com/covers/urn:orm:book:9780596803346/300w/",
        read: "#",
        download: "#"
    },
    { 
        title: "Data Analytics Made Accessible",
        author: "Anil Maheshwari",
        image: "https://m.media-amazon.com/images/I/81x-XhcIB+L._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Applied Predictive Modeleling",
        author: "Kuhn & Johnson",
        image: "https://m.media-amazon.com/images/I/61hI7GUaUSL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Neural Networks and Learning Machines",
        author: "Simon Haykin",
        image: "https://m.media-amazon.com/images/I/816s8JvdPSL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Computer Vision: Algorithms and Applications",
        author: "Richard Szeliski",
        image: "https://m.media-amazon.com/images/I/51qgx0XJAQL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Speech and Language Processing",
        author: "Jurafsky & Martin",
        image: "https://m.media-amazon.com/images/I/71EiA0VHG3L._UF1000,1000_QL80_.jpg",
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

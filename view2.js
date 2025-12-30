// Book Data
const books = [
    { 
        title: "Data Mining: Concepts and Techniques",
        author: "Han, Kamber",
        image: "https://d16jkos453if22.cloudfront.net/9780123814791.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Cloud Computing Bible",
        author: "Barrie Sosinsky",
        image: "https://m.media-amazon.com/images/I/61BXyywt8YL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Big Data Analytics",
        author: "Seema Acharya",
        image: "https://m.media-amazon.com/images/I/71Kxb8HIqqL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Web Technologies",
        author: "Uttam K. Roy",
        image: "https://m.media-amazon.com/images/I/51xAqEKyaRL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Cryptography and Network Security",
        author: "William Stallings",
        image: "https://m.media-amazon.com/images/I/714NhxDVqJL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Software Engineering",
        author: "Ian Sommerville ",
        image: "https://m.media-amazon.com/images/I/817JtF6e7YL._UF1000,1000_QL80_.jpg",
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
        title: "Human-Computer Interaction",
        author: "Alan Dix",
        image: "https://m.media-amazon.com/images/I/71ugfMarPKL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Information Retrieval",
        author: "Christopher D. Manning",
        image: "https://m.media-amazon.com/images/I/413ZoucOunL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Cloud Security",
        author: "Ronald L. Krutz",
        image: "https://m.media-amazon.com/images/I/51OC79SXBKL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Mobile Computing",
        author: "Asoke K. Talukder",
        image: "https://m.media-amazon.com/images/I/51SKhV4mrXL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "E-Commerce Technologies",
        author: "David Whiteley",
        image: "https://m.media-amazon.com/images/I/71tlD4amtoL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "IT Infrastructure & Management",
        author: "Phalguni Gupta",
        image: "https://m.media-amazon.com/images/I/51xsgrnqvtL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Network Security Essentials",
        author: "William Stallings",
        image: "https://m.media-amazon.com/images/I/91kNMHV93uL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Cloud Native Patterns",
        author: "Cornelia Davis",
        image: "https://m.media-amazon.com/images/I/71bUthRlRhL._UF1000,1000_QL80_.jpg",
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

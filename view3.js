// Book Data
const books = [
    { 
        title: "Engineering Thermodynamics",
        author: "P. K. Nag",
        image: "https://m.media-amazon.com/images/I/51qD1aW50YL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Theory of Machines",
        author: "R. S. Khurmi",
        image: "https://m.media-amazon.com/images/I/61+0Uwjk01L._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Strength of Materials",
        author: "R. K. Bansal",
        image: "https://m.media-amazon.com/images/I/81sgxtS84UL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Fluid Mechanics",
        author: "Frank M. White",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF4eWCXU0iS223xk1fTje1SrsUx82A0YYhg&s",
        read: "#",
        download: "#"
    },
    { 
        title: "Heat Transfer",
        author: "J. P. Holman",
        image: "https://m.media-amazon.com/images/I/31wsOVw6auL._AC_UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Machine Design",
        author: "R. S. Khurmi",
        image: "https://m.media-amazon.com/images/I/51MFgRmvqLL._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Applied Thermodynamics",
        author: "Onkar Singh",
        image: "https://www.bagchee.com/assets/images/books/2010/06/60178/thumb_286_63747.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "IC Engines",
        author: "V. Ganeshan",
        image: "https://m.media-amazon.com/images/I/61P2ebQe57L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Refrigeration and Air Conditioning",
        author: "C. P. Arora",
        image: "https://m.media-amazon.com/images/I/51x9dIgJv+L._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Engineering Mechanics",
        author: "Timoshenko",
        image: "https://mybooksfactory.com/wp-content/uploads/2024/06/1-68.webp",
        read: "#",
        download: "#"
    },
    { 
        title: "Dynamics of Machinery",
        author: "J. S. Rao",
        image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-94-007-1165-5",
        read: "#",
        download: "#"
    },
    { 
        title: "Manufacturing Processes",
        author: "Kalpakjian",
        image: "https://m.media-amazon.com/images/I/91vSa5hQ0dL.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Robotics and Control",
        author: "Mittal & Nagrath",
        image: "https://m.media-amazon.com/images/I/71oJQOUG02L.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "Finite Element Analysis",
        author: "S. S. Rao",
        image: "https://m.media-amazon.com/images/I/51TuonhA25L._UF1000,1000_QL80_.jpg",
        read: "#",
        download: "#"
    },
    { 
        title: "CAD/CAM Principles",
        author: "Zeid",
        image: "https://blogger.googleusercontent.com/img/a/AVvXsEgUZQQc0eUfT-4PnEOQo85LYgFW-PpvF5juLi5iNLv3apAN7l7fkZKD1Lu_2DgpH3_yo6JhBWABs74V5FHwsd1EPNVe0cNssfu7VDZk9GfNNNpTeyz4pCdVm-FoU8tnHEkbezeAoEFJgIxtnF7l5Iv49d-xEtO5ITqzi1GvnlreuiEAxAY6FVQjsxrO=s320",
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

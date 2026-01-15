let searchQuery = "";

const params = new URLSearchParams(window.location.search);
const searchFromHome = params.get("search");

if (searchFromHome) {
  searchQuery = searchFromHome.toLowerCase();
  document.getElementById("searchInput").value = searchFromHome;
}

document.addEventListener("DOMContentLoaded", () => {

  const library = document.getElementById("library");
  const searchInput = document.getElementById("searchInput");

  if (!library || !searchInput) {
    console.error("library or searchInput not found in HTML");
    return;
  }

  const departments = [
    {
      name: "Computer Science & Engineering",
      books: [
        { title: "Database System Concepts", author: "Silberschatz, Korth", img: "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/database-system-concepts-6e_FrontImage_830.jpg" },
        { title: "Operating System Concepts", author: "Silberschatz, Galvin", img: "https://img.perlego.com/book-covers/3866215/thumbnail_9781118507414.jpg" },
        { title: "Introduction to Algorithms", author: "Cormen et al.", img: "https://m.media-amazon.com/images/I/61ZYxrQEpCL.jpg" },
        { title: "Computer Networks", author: "Andrew S. Tanenbaum", img: "https://image5.slideserve.com/9673064/computer-networks-4-th-edition-andrew-s-tanebaum-l.jpg" },
        { title: "Compilers:Principles,      Technologies,and Tools", author: "Aho, Lam, Sethi, Ullman", img: "https://m.media-amazon.com/images/I/71GKSIHfJ-L._UF1000,1000_QL80_.jpg" },
        { title: "Programming Pearls", author: "Jon Bentley", img: "https://m.media-amazon.com/images/I/61biXaIiAGL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Clean Code", author: "Robert C. Martin", img: "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg" },
        { title: "Design Patterns", author: "Gamma et al.", img: "https://m.media-amazon.com/images/I/71sjeQGh7VL.jpg" },
        { title: "Modern Operation Systems", author: "Andrew S. Tanenbaum", img: "https://m.media-amazon.com/images/I/71khXluu+iL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Distributed Systems", author: "Maarten van Steen", img: "https://m.media-amazon.com/images/I/71SV45P9vwL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Computer Organization and Design", author: "David A. Patterson", img: "https://m.media-amazon.com/images/I/51aKONCOqaL._UF1000,1000_QL80_.jpg" },
        { title: "Artificial Intellifence", author: "Elaine Rich", img: "https://m.media-amazon.com/images/I/612agSUP9NL.jpg" },
        { title: "Data Structures using C", author: "Reema Thareja", img: "https://m.media-amazon.com/images/I/51S+tOq9jEL._UF1000,1000_QL80_.jpg" },
        { title: "Java: The Complete Reference", author: "Herbert Schildt", img: "https://m.media-amazon.com/images/I/81ghlRWDxTL._UF1000,1000_QL80_.jpg" },
        { title: "Python Programming", author: "Mark Lutz", img: "https://m.media-amazon.com/images/I/81uCXHuaHfL._AC_UF1000,1000_QL80_.jpg" },
      ]
    },
    {
      name: "Information Technology",
      books: [
        { title: "Cloud Computing", author: "Han, Kamber", img: "https://m.media-amazon.com/images/I/61BXyywt8YL.jpg" },
        { title: "Data Mining", author: "Barrie Sosinsky", img: "https://d16jkos453if22.cloudfront.net/9780123814791.jpg" },
        { title: "Big Data", author: "Seema Acharya", img: "https://m.media-amazon.com/images/I/71Kxb8HIqqL.jpg" },
        { title: "Web Technology", author: "Uttam K. Roy", img: "https://m.media-amazon.com/images/I/51xAqEKyaRL.jpg" },
        { title: "Cyber Security", author: "William Stallings", img: "https://m.media-amazon.com/images/I/714NhxDVqJL.jpg" },
        { title: "Software Engineering", author: "Ian Sommerville ", img: "https://m.media-amazon.com/images/I/817JtF6e7YL._UF1000,1000_QL80_.jpg" },
        { title: "Agile Software Development", author: "Robert C. Martin", img: "https://cdn.waterstones.com/bookjackets/large/9780/1359/9780135974445.jpg" },
        { title: "Human-Computer Interaction", author: "Alan Dix", img: "https://m.media-amazon.com/images/I/71ugfMarPKL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Information Retrieval", author: "Christopher D. Manning", img: "https://m.media-amazon.com/images/I/413ZoucOunL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Cloud Security", author: "Ronald L. Krutz", img: "https://m.media-amazon.com/images/I/51OC79SXBKL._UF1000,1000_QL80_.jpg" },
        { title: "Mobile Computing", author: "Asoke K. Talukder", img: "https://m.media-amazon.com/images/I/51SKhV4mrXL._AC_UF1000,1000_QL80_.jpg" },
        { title: "E-Commerce Technologies", author: "David Whiteley", img: "https://m.media-amazon.com/images/I/71tlD4amtoL._AC_UF1000,1000_QL80_.jpg" },
        { title: "IT Infrastructure & Management", author: "Phalguni Gupta", img: "https://m.media-amazon.com/images/I/51xsgrnqvtL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Network Security Essentials", author: "William Stallings", img: "https://m.media-amazon.com/images/I/91kNMHV93uL._UF1000,1000_QL80_.jpg" },
        { title: "Cloud Native Patterns", author: "Cornelia Davis", img: "https://m.media-amazon.com/images/I/71bUthRlRhL._UF1000,1000_QL80_.jpg" },
      ]
    },
    {
      name: "Mechanical Engineering",
      books: [
        { title: "Engineering Thermodynamics", author: "P. K. Nag", img: "https://m.media-amazon.com/images/I/51qD1aW50YL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Theory of Machines", author: "R. S. Khurmi", img: "https://m.media-amazon.com/images/I/61+0Uwjk01L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Strength of Materials", author: "R. K. Bansal", img: "https://m.media-amazon.com/images/I/81sgxtS84UL._UF1000,1000_QL80_.jpg" },
        { title: "Fluid Mechanics", author: "Frank M. White", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF4eWCXU0iS223xk1fTje1SrsUx82A0YYhg&s" },
        { title: "Heat Transfer", author: "J. P. Holman", img: "https://m.media-amazon.com/images/I/31wsOVw6auL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Machine Design", author: "R. S. Khurmi", img: "https://m.media-amazon.com/images/I/51MFgRmvqLL._UF1000,1000_QL80_.jpg" },
        { title: "Applied Thermodynamics", author: "Onkar Singh", img: "https://www.bagchee.com/assets/images/books/2010/06/60178/thumb_286_63747.jpg" },
        { title: "IC Engines", author: "V. Ganeshan", img: "https://m.media-amazon.com/images/I/61P2ebQe57L.jpg" },
        { title: "Refrigeration and Air Conditioning", author: "C. P. Arora", img: "https://m.media-amazon.com/images/I/51x9dIgJv+L._UF1000,1000_QL80_.jpg" },
        { title: "Engineering Mechanics", author: "Timoshenko", img: "https://mybooksfactory.com/wp-content/uploads/2024/06/1-68.webp" },
        { title: "Dynamics of Machinery", author: "J. S. Rao", img: "https://media.springernature.com/full/springer-static/cover-hires/book/978-94-007-1165-5" },
        { title: "Manufacturing Processes", author: "Kalpakjian", img: "https://m.media-amazon.com/images/I/91vSa5hQ0dL.jpg" },
        { title: "Robotics and Control", author: "Mittal & Nagrath", img: "https://m.media-amazon.com/images/I/71oJQOUG02L.jpg" },
        { title: "Finite Element Analysis", author: "S. S. Rao", img: "https://m.media-amazon.com/images/I/51TuonhA25L._UF1000,1000_QL80_.jpg" },
        { title: "CAD/CAM Principles", author: "Zeid", img: "https://blogger.googleusercontent.com/img/a/AVvXsEgUZQQc0eUfT-4PnEOQo85LYgFW-PpvF5juLi5iNLv3apAN7l7fkZKD1Lu_2DgpH3_yo6JhBWABs74V5FHwsd1EPNVe0cNssfu7VDZk9GfNNNpTeyz4pCdVm-FoU8tnHEkbezeAoEFJgIxtnF7l5Iv49d-xEtO5ITqzi1GvnlreuiEAxAY6FVQjsxrO=s320" }
      ]
    },
    {
      name: "Civil Engineering",
      books: [
        { title: "Structural Analysis", author: "R. C. Hibbeler", img: "https://m.media-amazon.com/images/I/51AXTSfNRfL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Surveying Vol. 1", author: "B. C. Punmia", img: "https://m.media-amazon.com/images/I/61U2M+E2M4L.jpg" },
        { title: "Concrete Technology", author: "M. S. Shetty", img: "https://m.media-amazon.com/images/I/51xnwwYF5GL._UF1000,1000_QL80_.jpg" },
        { title: "Soil Mechanics", author: "B. C. Punmia", img: "https://m.media-amazon.com/images/I/91CAK9MMakL._UF1000,1000_QL80_.jpg" },
        { title: "Water Resources Enghineering", author: "Larry W. Mays", img: "https://m.media-amazon.com/images/I/91aGpPcC7gL.jpg" },
        { title: "Transportation Engineering", author: "C. S. Papacostas", img: "https://covers.openlibrary.org/b/id/84353-L.jpg" },
        { title: "Building Materials", author: "S. K. Duggal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo4uLPG977S19Eozy-pQmeuRrzAVWEZDtg&s" },
        { title: "Hydrology and Floodplain Analysis", author: "Bedient", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ABryc8IJ4kwHcYWUF0hqJJucAuKTftsgw&s" },
        { title: "Design of Steel Structures", author: "S. K. Duggal", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUC7QMSX9wMkE-LaReKWcDq0KI_soQ_a3k20KAOWLFBK9a-hKloeQ1IBcJwhkrUIpkt5yi-KJsrwL6DGO8TGTpBFUMdHwUhdpDSUloI5-sp-51JpZsTs9Omo_6VYLWDDwu5Owh8a7pXg6BR3jlur8E7iWfAstHzKGsnSf_vj3t-iqtrlaB8hMwxXmMS8M/w900-c/merged_image_7105dSXURFL._SL1100.jpg1708437607.jpg" },
      ]
    },
    {
      name: "Electrical Engineering",
      books: [
        { title: "Electrical Machinery", author: "P. S. Bimbhra", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfY4sMoe8z93czqyGu08oSNuwFbnhFhO7Vg&s" },
        { title: "Power System Engineering", author: "Nagrath & Kothari", img: "https://m.media-amazon.com/images/I/71qWaNBPH+L.jpg" },
        { title: "Control System Engineering", author: "Norman S. Nise", img: "https://www.tbooks.solutions/wp-content/archivos/2021/10/0471366013-01--sclzzzzzzz-sx500-.jpg" },
        { title: "Electrical Circuit Analysis", author: "A. Chakrabarti", img: "https://m.media-amazon.com/images/I/81fT2Yq-JJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Digital Signal Processing", author: "Proakis & Manolakis", img: "https://m.media-amazon.com/images/I/71SYI1PcjVL.jpg" },
        { title: "Electrical Power Systems", author: "C. L. Wadhwa", img: "https://images-na.ssl-images-amazon.com/images/P/9393159173.01.LZZZZZZZ.jpg" },
        { title: "Switchgear Protection and Power System", author: "Sunil S. Rao", img: "https://m.media-amazon.com/images/I/81bN81+IiQL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Electrical Engineering Fundamentals", img: "https://m.media-amazon.com/images/I/61rc0RQeoEL.jpg" },
        { title: "Signals and Systems", author: "Alan V. Oppenheim", img: "https://m.media-amazon.com/images/I/51YDWWTIEiL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Power Electronics", author: "M. H. Rashid", img: "https://m.media-amazon.com/images/I/710oJjxp+aL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Electrical Machinery", author: "Fitzgerald & Kingsley", img: "https://m.media-amazon.com/images/I/81QUSURMJtL._UF1000,1000_QL80_.jpg" },
        { title: "High Voltage Engineering", author: "M. S. Naidu", img: "https://m.media-amazon.com/images/I/71Udr5Gs4hL.jpg" },
        { title: "Renewable Energy Systems", author: "Godfrey Boyle", img: "https://books.google.com/books/content?id=TrewQgAACAAJ&printsec=frontcover&img=1&zoom=5" },
        { title: "Electrical Measurements", author: "A. K. Sawhney", img: "https://m.media-amazon.com/images/I/41UTuyJzwPS.jpg" },
        { title: "Electromagnetic Field Theory", author: "Bakshi", img: "https://m.media-amazon.com/images/I/61ujZy1gOiL._UF1000,1000_QL80_.jpg" },
      ]
    },
    {
      name: "Electronics & Telecommunication",
      books: [
        { title: "Electronic Devices and Circuit Theory", author: "Robert L. Boylestad", img: "https://m.media-amazon.com/images/I/91kgLctmApL._UF1000,1000_QL80_.jpg" },
        { title: "Microelectronic Circuits", author: "Sedra & Smith", img: "https://m.media-amazon.com/images/I/51xgl-YwvzL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Communication Systems", author: "Simon Haykin", img: "https://m.media-amazon.com/images/I/815stYE4tkL.jpg" },
        { title: "Digital Electronics", author: "R. P. Jain", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQuy12X51Dra9qfSb4lD93x9QWYB5faNgpQ&s" },
        { title: "Signals and Systems", author: "Alan V. Oppenheim", img: "https://m.media-amazon.com/images/I/51YDWWTIEiL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Electronic Principles", author: "Albert Malvino", img: "https://pictures.abebooks.com/isbn/9780028028330-uk.jpg" },
        { title: "Microwave Engineering", author: "David M. Pozar", img: "https://covers.openlibrary.org/b/id/10497037-L.jpg" },
        { title: "Digital Communications", author: "John G. Proakis", img: "https://m.media-amazon.com/images/I/711wfy3qkGL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Analog Electronics", author: "Sedra & Smith", img: "https://m.media-amazon.com/images/I/51Y2+1k+JSL._AC_UF1000,1000_QL80_.jpg" },
        { title: "VLSI Design", author: "Kamran Eshraghian", img: "https://5.imimg.com/data5/CH/YM/MY-9509120/basic-vlsi-design.png" },
        { title: "Optical Fiber Communications", author: "Gerd Keiser", img: "https://m.media-amazon.com/images/I/61R1+zG3AJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Digital Logical Design", author: "Morris Mano", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV0uXLpwti3RUHD0BalnJNenVWjXcbuI8xw&s" },
        { title: "Embedded Systems", author: "Raj Kamal", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677799002i/6932247.jpg" },
        { title: "Wireless Communications", author: "Theodore S. Rappaport", img: "https://m.media-amazon.com/images/I/518z4Fx9hTL._UF1000,1000_QL80_.jpg" },
        { title: "Radar Systems", author: "Skolnik", img: "https://m.media-amazon.com/images/I/61lcWMlBmPL._AC_UF1000,1000_QL80_.jpg" }
      ]
    },
    {
      name: "Artificial Intelligence & Data Science",
      books: [
        { title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norving", img: "https://m.media-amazon.com/images/I/610+0VFgdJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Machine Learning", author: "Tom M. Mitchell", img: "https://m.media-amazon.com/images/I/71NIrX79-HL.jpg" },
        { title: "Deep Learning", author: "Ian Goodfellow", img: "https://m.media-amazon.com/images/I/A10G+oKN3LL.jpg" },
        { title: "Pattern Recognition and Machine Learning", author: "Christopher Bishop", img: "https://m.media-amazon.com/images/I/71zMmruR+uL._UF1000,1000_QL80_.jpg" },
        { title: "Reinforcement Learning", author: "Sutton & Barto", img: "https://m.media-amazon.com/images/I/71nk3rOK3jL.jpg" },
        { title: "Data Science from Scratch", author: "Sebastian Raschka ", img: "https://m.media-amazon.com/images/I/812I0mhF0DL._AC_UF894,1000_QL80_.jpg" },
        { title: "Agile Software Development", author: "Robert C. Martin", img: "https://cdn.waterstones.com/bookjackets/large/9780/1359/9780135974445.jpg" },
        { title: "Hands-On Machine Learning with Scikit-Learn", author: "AurÃOlien GÄOron", img: "https://m.media-amazon.com/images/I/71UF9mDAX3L.jpg" },
        { title: "Bayesian Reasoning and Machine Learning", author: "David Barber", img: "https://m.media-amazon.com/images/I/51S4TrsLZHL._UF1000,1000_QL80_.jpg" },
        { title: "Natural Language Processing with Python", author: "Steven Bird", img: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._UF1000,1000_QL80_.jpg" },
        { title: "Data Analytics Made Accessible", author: "Anil Maheshwari", img: "https://m.media-amazon.com/images/I/81x-XhcIB+L._UF1000,1000_QL80_.jpg" },
        { title: "Applied Predictive Modeleling", author: "Kuhn & Johnson", img: "https://m.media-amazon.com/images/I/61hI7GUaUSL._UF1000,1000_QL80_.jpg" },
        { title: "Neural Networks and Learning Machines", author: "Simon Haykin", img: "https://m.media-amazon.com/images/I/816s8JvdPSL._UF1000,1000_QL80_.jpg" },
        { title: "Computer Vision: Algorithms and Applications", author: "Richard Szeliski", img: "https://m.media-amazon.com/images/I/51qgx0XJAQL._UF1000,1000_QL80_.jpg" },
        { title: "Speech and Language Processing", author: "Jurafsky & Martin", img: "https://m.media-amazon.com/images/I/71EiA0VHG3L._UF1000,1000_QL80_.jpg" },
      ]
    },
  ]

  function renderBooks() {
    library.innerHTML = "";

    const query = searchQuery.trim().toLowerCase();

    departments.forEach(dep => {

      const matchedBooks = dep.books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        dep.name.toLowerCase().includes(query)
      );

      // ❌ If searching & no match → skip department
      if (query && matchedBooks.length === 0) return;

      const section = document.createElement("div");
      section.className = "subject";

      section.innerHTML = `
        <div class="subject-header">
          <h2>${dep.name}</h2>
          <span class="view-more">View More →</span>
        </div>

        <div class="books-row">
          ${(query ? matchedBooks : dep.books.slice(0, 20))
          .map(book => `
              <div class="book">
                <img src="${book.img}">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
              </div>
          `).join("")}
        </div>
      `;

      section.querySelector(".view-more").onclick = () => {
        const role = localStorage.getItem("role");
        window.location.href = role ? "studdash.html" : "login.html";
      };

      library.appendChild(section);
    });

    // ❌ No results message
    if (!library.innerHTML.trim()) {
      library.innerHTML = `<p style="text-align:center;font-size:18px;">
        No books found
      </p>`;
    }
  }

  // 🔍 LIVE SEARCH
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderBooks();
  });

  // 🚀 Initial load
  renderBooks();
});
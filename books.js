const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search")?.toLowerCase() || "";


document.addEventListener("DOMContentLoaded", () => {

 
  const library = document.getElementById("library");

  const departments = [
    {
      name: "Computer Science & Engineering",
      books: [
        { title: "Database System Concepts", img: "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/database-system-concepts-6e_FrontImage_830.jpg" },
        { title: "Operating System Concepts", img: "https://img.perlego.com/book-covers/3866215/thumbnail_9781118507414.jpg" },
        { title: "Introduction to Algorithms", img: "https://m.media-amazon.com/images/I/61ZYxrQEpCL.jpg" },
        { title: "Computer Networks", img: "https://image5.slideserve.com/9673064/computer-networks-4-th-edition-andrew-s-tanebaum-l.jpg" },
        { title: "Compilers:Principles,      Technologies,and Tools", img: "https://m.media-amazon.com/images/I/71GKSIHfJ-L._UF1000,1000_QL80_.jpg" },
        { title: "Programming Pearls", img: "https://m.media-amazon.com/images/I/61biXaIiAGL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Clean Code", img: "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg" },
        { title: "Design Patterns", img: "https://m.media-amazon.com/images/I/71sjeQGh7VL.jpg" },
      ]
    },
    {
      name: "Information Technology",
      books: [
        { title: "Cloud Computing", img: "https://m.media-amazon.com/images/I/61BXyywt8YL.jpg" },
        { title: "Data Mining", img: "https://d16jkos453if22.cloudfront.net/9780123814791.jpg" },
        { title: "Big Data", img: "https://m.media-amazon.com/images/I/71Kxb8HIqqL.jpg" },
        { title: "Web Technology", img: "https://m.media-amazon.com/images/I/51xAqEKyaRL.jpg" },
        { title: "Cyber Security", img: "https://m.media-amazon.com/images/I/714NhxDVqJL.jpg" },
        { title: "Software Engineering", img: "https://m.media-amazon.com/images/I/817JtF6e7YL._UF1000,1000_QL80_.jpg" },
        { title: "Agile Software Development", img: "https://cdn.waterstones.com/bookjackets/large/9780/1359/9780135974445.jpg" },
        { title: "Human-Computer Interaction", img: "https://m.media-amazon.com/images/I/71ugfMarPKL._AC_UF1000,1000_QL80_.jpg" },
      ]
    },
    {
      name: "Mechanical Engineering",
      books: [
        { title: "Engineering Thermodynamics", img: "https://m.media-amazon.com/images/I/51qD1aW50YL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Theory of Machines", img: "https://m.media-amazon.com/images/I/61+0Uwjk01L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Strength of Materials", img: "https://m.media-amazon.com/images/I/81sgxtS84UL._UF1000,1000_QL80_.jpg" },
        { title: "Fluid Mechanics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF4eWCXU0iS223xk1fTje1SrsUx82A0YYhg&s" },
        { title: "Heat Transfer", img: "https://m.media-amazon.com/images/I/31wsOVw6auL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Machine Design", img: "https://m.media-amazon.com/images/I/51MFgRmvqLL._UF1000,1000_QL80_.jpg" },
        { title: "Applied Thermodynamics", img: "https://www.bagchee.com/assets/images/books/2010/06/60178/thumb_286_63747.jpg" },
        { title: "IC Engines", img: "https://m.media-amazon.com/images/I/61P2ebQe57L.jpg" },
      ]
    },
    {
      name: "Civil Engineering",
      books: [
        { title: "Structural Analysis", img: "https://m.media-amazon.com/images/I/51AXTSfNRfL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Surveying Vol. 1", img: "https://m.media-amazon.com/images/I/61U2M+E2M4L.jpg" },
        { title: "Concrete Technology", img: "https://m.media-amazon.com/images/I/51xnwwYF5GL._UF1000,1000_QL80_.jpg" },
        { title: "Soil Mechanics", img: "https://m.media-amazon.com/images/I/91CAK9MMakL._UF1000,1000_QL80_.jpg" },
        { title: "Water Resources Enghineering", img: "https://m.media-amazon.com/images/I/91aGpPcC7gL.jpg" },
        { title: "Transportation Engineering", img: "https://covers.openlibrary.org/b/id/84353-L.jpg" },
        { title: "Building Materials", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo4uLPG977S19Eozy-pQmeuRrzAVWEZDtg&s" },
        { title: "Hydrology and Floodplain Analysis", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ABryc8IJ4kwHcYWUF0hqJJucAuKTftsgw&s" },
      ]
    },
    {
      name: "Electrical Engineering",
      books: [
        { title: "Electrical Machinery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfY4sMoe8z93czqyGu08oSNuwFbnhFhO7Vg&s" },
        { title: "Power System Engineering", img: "https://m.media-amazon.com/images/I/71qWaNBPH+L.jpg" },
        { title: "Control System Engineering", img: "https://www.tbooks.solutions/wp-content/archivos/2021/10/0471366013-01--sclzzzzzzz-sx500-.jpg" },
        { title: "Electrical Circuit Analysis", img: "https://m.media-amazon.com/images/I/81fT2Yq-JJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Digital Signal Processing", img: "https://m.media-amazon.com/images/I/71SYI1PcjVL.jpg" },
        { title: "Electrical Power Systems", img: "https://images-na.ssl-images-amazon.com/images/P/9393159173.01.LZZZZZZZ.jpg" },
        { title: "Switchgear Protection and Power System", img: "https://m.media-amazon.com/images/I/81bN81+IiQL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Electrical Engineering Fundamentals", img: "https://m.media-amazon.com/images/I/61rc0RQeoEL.jpg" },
      ]
    },
    {
      name: "Electronics & Telecommunication",
      books: [
        { title: "Electronic Devices and Circuit Theory", img: "https://m.media-amazon.com/images/I/91kgLctmApL._UF1000,1000_QL80_.jpg" },
        { title: "Microelectronic Circuits", img: "https://m.media-amazon.com/images/I/51xgl-YwvzL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Communication Systems", img: "https://m.media-amazon.com/images/I/815stYE4tkL.jpg" },
        { title: "Digital Electronics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQuy12X51Dra9qfSb4lD93x9QWYB5faNgpQ&s" },
        { title: "Signals and Systems", img: "https://m.media-amazon.com/images/I/51YDWWTIEiL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Electronic Principles", img: "https://pictures.abebooks.com/isbn/9780028028330-uk.jpg" },
        { title: "Microwave Engineering", img: "https://covers.openlibrary.org/b/id/10497037-L.jpg" },
        { title: "Digital Communications", img: "https://m.media-amazon.com/images/I/711wfy3qkGL._AC_UF1000,1000_QL80_.jpg" },
      ]
    },
    {
      name: "Artificial Intelligence & Data Science",
      books: [
        { title: "Artificial Intelligence: A Modern Approach", img: "https://m.media-amazon.com/images/I/610+0VFgdJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Machine Learning", img: "https://m.media-amazon.com/images/I/71NIrX79-HL.jpg" },
        { title: "Deep Learning", img: "https://m.media-amazon.com/images/I/A10G+oKN3LL.jpg" },
        { title: "Pattern Recognition and Machine Learning", img: "https://m.media-amazon.com/images/I/71zMmruR+uL._UF1000,1000_QL80_.jpg" },
        { title: "Reinforcement Learning", img: "https://m.media-amazon.com/images/I/71nk3rOK3jL.jpg" },
        { title: "Data Science from Scratch", img: "https://m.media-amazon.com/images/I/812I0mhF0DL._AC_UF894,1000_QL80_.jpg" },
        { title: "Agile Software Development", img: "https://cdn.waterstones.com/bookjackets/large/9780/1359/9780135974445.jpg" },
        { title: "Hands-On Machine Learning with Scikit-Learn", img: "https://m.media-amazon.com/images/I/71UF9mDAX3L.jpg" },
      ]
    },
  ];

// 🔍 SEARCH FILTER
  const filteredDepartments = departments
    .map(dep => {
      const matchedBooks = dep.books.filter(book =>
        book.title.toLowerCase().includes(searchQuery) ||
        dep.name.toLowerCase().includes(searchQuery)
      );
      return { ...dep, books: matchedBooks };
    })
    .filter(dep => dep.books.length > 0);


    const dataToRender = searchQuery ? filteredDepartments : departments;


    dataToRender.forEach(dep => {
  const section = document.createElement("div");
  section.className = "subject";

  section.innerHTML = `
    <div class="subject-header">
      <h2>${dep.name}</h2>
      <span class="view-more">View More →</span>
    </div>

    <div class="books-row">
      ${dep.books.slice(0, 9).map(book => `
        <div class="book">
          <img src="${book.img}">
          <p>${book.title}</p>
        </div>
      `).join("")}
    </div>
  `;

  section.querySelector(".view-more").onclick = () => {
    const role = localStorage.getItem("role");
    if (!role) {
      window.location.href = "login.html";
    } else {
      window.location.href = "studdash.html";
    }
  };

  document.getElementById("library").appendChild(section);
});

});


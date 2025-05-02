const products = [
    {
      name: "Wireless Headphones",
      price: "₹7,999",
      description: "Noise-cancelling over-ear headphones.",
      image: "images/IMG_2518.PNG"
    },
    {
      name: "Smartwatch",
      price: "₹12,999",
      description: "Fitness tracking smartwatch.",
      image: "images/smartwatch.jpg"
    },
    {
      name: "Gaming Mouse",
      price: "₹2,499",
      description: "Ergonomic gaming mouse.",
      image: "images/mouse.jpg"
    },
    {
      name: "Laptop Stand",
      price: "₹1,999",
      description: "Adjustable aluminium stand.",
      image: "images/stand.jpg"
    },
    {
      name: "Bluetooth Speaker",
      price: "₹3,499",
      description: "Portable wireless speaker with bass.",
      image: "images/speaker.jpg"
    },
    {
      name: "Tablet",
      price: "₹18,999",
      description: "10-inch Android tablet.",
      image: "images/tablet.jpg"
    },
    {
      name: "Webcam",
      price: "₹1,299",
      description: "HD webcam with microphone.",
      image: "images/webcam.jpg"
    },
    {
      name: "External Hard Drive",
      price: "₹5,499",
      description: "1TB USB 3.0 external hard disk.",
      image: "images/harddrive.jpg"
    },
    {
      name: "Mechanical Keyboard",
      price: "₹4,999",
      description: "Backlit mechanical keyboard.",
      image: "images/keyboard.jpg"
    },
    {
      name: "Wireless Charger",
      price: "₹999",
      description: "Fast wireless charging pad.",
      image: "images/charger.jpg"
    },
    {
      name: "Fitness Band",
      price: "₹1,499",
      description: "Heart rate and activity tracker.",
      image: "images/fitnessband.jpg"
    },
    {
      name: "Smart Bulb",
      price: "₹799",
      description: "Color-changing smart LED bulb.",
      image: "images/bulb.jpg"
    },
    {
      name: "Tripod",
      price: "₹1,199",
      description: "Adjustable mobile tripod.",
      image: "images/tripod.jpg"
    },
    {
      name: "Drawing Tablet",
      price: "₹6,499",
      description: "Digital drawing pad with pen.",
      image: "images/drawingtablet.jpg"
    },
    {
      name: "USB Hub",
      price: "₹699",
      description: "4-port USB 3.0 hub.",
      image: "images/usbhub.jpg"
    }
  ];
  
  let page = 1;
  let perPage = 5;
  
  function showProducts() {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = products.slice(start, end);
  
    const body = document.getElementById("tableBody");
    body.innerHTML = "";
  
    for (let i = 0; i < items.length; i++) {
      const p = items[i];
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td><img src="${p.image}" alt="Product" /></td>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.description}</td>
      `;
  
      body.appendChild(row);
    }
  
    const total = Math.ceil(products.length / perPage);
    document.getElementById("pageInfo").innerText = "Page " + page + " of " + total;
  }
  
  function prevPage() {
    if (page > 1) {
      page--;
      showProducts();
    }
  }
  
  function nextPage() {
    const total = Math.ceil(products.length / perPage);
    if (page < total) {
      page++;
      showProducts();
    }
  }
  
  showProducts();
  
const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

hamburger.addEventListener('click', function(){
    
    mobileNav.classList.toggle('hidden')
})

document.addEventListener("DOMContentLoaded", function () {
  const evelynImages = [
    "./images/evelyn-yara.jpeg",
      "./images/evelyn3.jpg",
      "./images/evelyn-black.jpg",
      "./images/evelyn2.jpg",
      "./images/evelyn4.jpg"
  ];

  const eloiseImages = [
      "./images/eloise-yara.jpg",
      "./images/eloise2.jpg", 
      "./images/eloise3.jpg" 
  ];

  const hanaImages = [
      "./images/hana2.jpg",
      "./images/hana-yara.jpg", 
      "./images/hana-black.jpg",
      "./images/hana3.jpg",
      "./images/hana4.jpg",
      "./images/hana-3-warna.jpg",
      "./images/hana-sizechart.jpg"
      
  ];

  let currentIndex = 0;
  const productImage = document.getElementById("product-image");
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  
  let images = [];
  if (name && name.includes("Evelyn")) {
      images = evelynImages; 
  } else if (name && name.includes("Eloise")) {
      images = eloiseImages;  
  } else if (name && name.includes("Hana")) {
      images = hanaImages;
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      productImage.src = images[currentIndex];
  });

  document.getElementById("next-btn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      productImage.src = images[currentIndex];
  });

  const productDescriptions = {
      "Evelyn Yara Shoes": `
          <div class="text-gray-800">
              <button class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]" id="detail-produk-btn">Detail Produk</button>
              <ul id="detail-list-produk" class="list-disc ml-5 space-y-1">
                  <li class="font-poppins text-sm md:text-base">Model: Heels dengan aksen 2 tali sabuk</li>
                  <li class="font-poppins text-sm md:text-base">Tinggi Hak: ±3cm</li>
                  <li class="font-poppins text-sm md:text-base">Bahan Upper: PU Leather Premium</li>
                  <li class="font-poppins text-sm md:text-base">Bahan Sol: Karet TPR Anti-Slip</li>
                  <li class="font-poppins text-sm md:text-base">Pilihan Warna: Hitam, Marun, Mocca, Cream</li>
                  <li class="font-poppins text-sm md:text-base">Size: 37 | 38 | 39 | 40 | 41</li>
              </ul>
              <h3 class="font-semibold font-poppins  text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (Insole Length)</h3>
              <ul class="list-disc ml-5 space-y-1">
                  <li class="font-poppins text-sm md:text-base">37 = 23 cm</li>
                  <li class="font-poppins text-sm md:text-base">38 = 23,5 cm</li>
                  <li class="font-poppins text-sm md:text-base">39 = 24 cm</li>
                  <li class="font-poppins text-sm md:text-base">40 = 24,5 cm</li>
                  <li class="font-poppins text-sm md:text-base">41 = 25 cm</li>
              </ul>
              <p class="mt-3 font-poppins text-sm text-red-600 font-semibold">⚠️ Disarankan pilih 1 size lebih besar jika kaki lebar atau lebih suka longgar.</p>
          </div>
      `,
      "Eloise Yara Shoes": `
          <div class="text-gray-800">
              <h3 class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
              <ul class="list-disc ml-5 space-y-1">
                    <li class="font-poppins text-sm md:text-base">Model: Heels bahan mengkilat dengan tali belakang karet</li>
    <li class="font-poppins text-sm md:text-base">Tinggi Hak: ±3cm</li>
    <li class="font-poppins text-sm md:text-base">Bahan Upper: PU Leather Glossy (Mengkilat)</li>
    <li class="font-poppins text-sm md:text-base">Bahan Sol: Karet TPR Anti-Slip</li>
    <li class="font-poppins text-sm md:text-base">Pilihan Warna: Hitam, Maroon, Mocca, Cream</li>
    <li class="font-poppins text-sm md:text-base">Size: 37 | 38 | 39 | 40 | 41</li>
              </ul>
              <h3 class="font-semibold font-poppins  text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (Insole Length)</h3>
              <ul class="list-disc ml-5 space-y-1">
                  <li class="font-poppins text-sm md:text-base">37 = 23 cm</li>
                  <li class="font-poppins text-sm md:text-base">38 = 23,5 cm</li>
                  <li class="font-poppins text-sm md:text-base">39 = 24 cm</li>
                  <li class="font-poppins text-sm md:text-base">40 = 24,5 cm</li>
                  <li class="font-poppins text-sm md:text-base">41 = 25 cm</li>
              </ul>
                <p class="mt-3 font-poppins text-sm text-red-600 font-semibold">⚠️ Disarankan pilih 1 size lebih besar jika kaki lebar atau lebih suka longgar.</p>
          </div>
      `,
      "Hana Yara Shoes": `
          <div class="text-gray-800">
              <h3 class="font-semibold text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
              <ul class="list-disc ml-5 space-y-1">
                 <li class="font-poppins text-sm md:text-base">Bahan Utama: Kulit sintetis premium, inner suede lembut</li>
<li class="font-poppins text-sm md:text-base">Sole: Karet anti-slip, ringan, dan fleksibel</li>
<li class="font-poppins text-sm md:text-base">Model: Open-back, slip-on, sangat praktis untuk dipakai dan dilepas</li>
<li class="font-poppins text-sm md:text-base">Warna: Tersedia dalam warna netral dan pastel seperti hitam, putih, beige, cokelat, dan dusty pink</li>
<li class="font-poppins text-sm md:text-base">Detail Desain: Minimalis dengan aksen elegan seperti pita kecil, buckle logam, atau jahitan rapi</li>

              </ul>

              <ul class="font-poppins text-sm md:text-base">
    <h3 class="font-semibold font-poppins  text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (CM): </h3>
    <li>36 →  22.5 - 23 CM</li>
    <li>37 →  23 - 23.5 CM</li>
    <li>38 →  23.5 - 24 CM</li>
    <li>39 →  24 - 24.5 CM</li>
    <li>40 →  24.5 - 25 CM</li>
</ul>

          </div>
      `
  };

  if (name && params.get("price") && params.get("image")) {
      document.getElementById("product-name").textContent = name;
      document.getElementById("product-price").textContent = params.get("price");
      document.getElementById("product-image").src = params.get("image");
      document.getElementById("product-description").innerHTML = productDescriptions[name] || "";

  }

  if (name === "Evelyn Yara Shoes") {
      document.getElementById("shopee-link").href = "https://shopee.co.id/Evelyn-Yara-Footwear-Papake.id-Heels-Wanita-3cm-i.255026444.28224928826?sp_atk=c10f4f25-778f-4e7a-b197-b7480c19f007";
      document.getElementById("tiktok-link").href = "";
  } else if (name === "Eloise Yara Shoes"){
    document.getElementById("shopee-link").href= "https://shopee.co.id/Eloise-Yara-Footwear-Papake.id-Heels-Wanita-Aksen-Tali-Karet-Hak-3cm-Nyaman-Elegan-i.255026444.26474925503"
  }
});



  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
});
  

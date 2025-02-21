

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const sidebar = document.getElementById("sidebar");
  const btnSidebarToggler = document.getElementById("btnSidebarToggler");
  const navClosed = document.getElementById("navClosed");
  const navOpen = document.getElementById("navOpen");
  const body = document.body;

  btnSidebarToggler.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.classList.toggle("show");
      navClosed.classList.toggle("hidden");
      navOpen.classList.toggle("hidden");

      // Perbaikan: Atur overflow-hidden pada body hanya saat sidebar terbuka
      if (sidebar.classList.contains("show")) {
          body.classList.add("overflow-hidden");
      } else {
          body.classList.remove("overflow-hidden");
      }
  });

  sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px";

    const evelynImages = [
        "./images/evelyn-yara.jpeg",
        "./images/evelyn3.jpg",
        "./images/evelyn-black.jpg",
        "./images/evelyn2.jpg",
        "./images/evelyn4.jpg"
    ];

  const eloiseImages = [
      "./images/eloise-maroon-side.jpg",
      "./images/eloise-cream-side.jpg",
      "./images/eloise-black-side.jpg",
      "./images/eloise-moca-side.jpg",
      "./images/eloise-maroon-top.jpg",
      "./images/eloise-cream-top.jpg",
      "./images/eloise-black-top.jpg",
      "./images/eloise-moca-top.jpg",
      "./images/eloise-maroon-2.jpg",
      "./images/eloise-cream-2.jpg",
      "./images/eloise-black-2.jpg",
      "./images/eloise-moca-2.jpg",
      "./images/eloise-all-colors.jpg",
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

  const millieImages = [
    "./images/millie-biscuit-side.heic",
    "./images/millie-black-side.heic",
    "./images/millie-cream-side.jpg",
    "./images/millie-beige-side.heic",
    "./images/millie-beige-2.jpg",
    "./images/millie-black-2.jpg",
    "./images/millie-cream-2.jpg",
    "./images/millie-biscuit-2.jpg",
    "./images/millie-beige-top.jpg",
    "./images/millie-black-top.jpg",
    "./images/millie-cream-top.jpg",
    "./images/millie-biscuit-top.jpg",
    "./images/millie-all-colors.jpg"
  ];

  const fayeImages = [
    "./images/faye-salem-side.jpg",
    "./images/faye-black-side.jpg",
    "./images/faye-moca-side.jpg",
    "./images/faye-beige-side.jpg",
    "./images/faye-cream-side.jpg",
    "./images/faye-salem-top.jpg",
    "./images/faye-black-top.jpg",
    "./images/faye-moca-top.jpg",
    "./images/faye-beige-top.jpg",
    "./images/faye-cream-top.jpg",
    "./images/faye-salem-2.jpg",
    "./images/faye-black-2.jpg",
    "./images/faye-moca-2.jpg",
    "./images/faye-beige-2.jpg",
    "./images/faye-cream-2.jpg",
    "./images/faye-all-colors.jpg",
    "./images/faye-all-colors-2.jpg"
  ];

  const lylieImages = [
    "./images/lylie-white-side.jpg",
    "./images/lylie-cream-side.jpg",
    "./images/lylie-biscuit-side.jpg",
    "./images/lylie-beige-side.jpg",
    "./images/lylie-tan-side.jpg",
    "./images/lylie-white-top.jpg",
    "./images/lylie-cream-top.jpg",
    "./images/lylie-biscuit-top.jpg",
    "./images/lylie-beige-top.jpg",
    "./images/lylie-tan-top.jpg",
    "./images/lylie-white-2.jpg",
    "./images/lylie-cream-2.jpg",
    "./images/lylie-biscuit-2.jpg",
    "./images/lylie-beige-2.jpg",
    "./images/lylie-tan-2.jpg",
    "./images/lylie-all-colors.jpg",
  ];

  const nikiImages = [
    "./images/niki-mocca-2.jpeg",
    "./images/niki-cream-2.jpg",
    "./images/niki-black-2.jpg",
    "./images/niki-3-colors.jpg",
    "./images/niki-all-colors.jpg"
  ];

  const diaraImages = [
    "./images/diara-pink.jpg",
    "./images/diara-black.jpg",
    "./images/diara-mint.jpg",
    "./images/diara-cream-black.jpg",
    "./images/diara-cream-black-side.jpg",
    "./images/diara-all-colors.jpg",
    "./images/diara-all-colors-realpic.jpg"
  ];

const alulaImages = [
  "./images/alula-pink.jpg",
  "./images/alula-mocca.jpg",
  "./images/alula-black.jpg",
  "./images/alula-gray.jpg",
  "./images/alula-white.jpg",
  "./images/alula-salem.jpg",
  "./images/alula-all-colors.jpg",
  "./images/alula-realpic.jpg",
  "./images/alula-black-realpic.jpg"
];

const levinaImages = [
  "./images/levina-mocca.jpg",
  "./images/levina-tan.jpg",
  "./images/levina-black.jpg",
  "./images/levina-white.jpg",
]


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
  } else if (name && name.includes("Millie")) {
    images = millieImages;
  } else if (name && name.includes("Faye")){
    images = fayeImages;
  } else if (name && name.includes("Lylie")){
    images = lylieImages;
  } else if (name && name.includes("Niki")){
    images = nikiImages;
  } else if (name && name.includes("Diara")){
    images = diaraImages;
  } else if (name && name.includes("Alula")){
    images = alulaImages;
  
  } else if (name && name.includes("Levina")){
    images = levinaImages;
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
      "Evelyn Yara Heels": `
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
      "Eloise Yara Heels": `
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

      "Millie Yara Heels": `
   <div class="text-gray-800">
    <button class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]" id="detail-produk-btn">Detail Produk</button>
    <ul id="detail-list-produk" class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Model: Heels mules dengan tali belakang</li>
        <li class="font-poppins text-sm md:text-base">Tinggi Hak: ±3cm</li>
        <li class="font-poppins text-sm md:text-base">Bahan Upper: Kulit Sintetis Premium</li>
        <li class="font-poppins text-sm md:text-base">Bahan Sol: Karet TPR Anti-Slip</li>
        <li class="font-poppins text-sm md:text-base">Warna: Hitam, Beige, Biscuit, Cream</li>
        <li class="font-poppins text-sm md:text-base">Size: 37 | 38 | 39 | 40 | 41</li>
        <li class="font-poppins text-sm md:text-base">Berat: ±500gr</li>
    </ul>
    <h3 class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (Insole Length)</h3>
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
  "Faye Yara Heels": `
   <div class="text-gray-800">
    <button class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]" id="detail-produk-btn">Detail Produk</button>
    <ul id="detail-list-produk" class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Model: Heels dengan tali belakang & aksen pengait sabuk</li>
        <li class="font-poppins text-sm md:text-base">Tinggi Hak: ±3cm</li>
        <li class="font-poppins text-sm md:text-base">Bahan Upper: Kulit Sintetis Premium</li>
        <li class="font-poppins text-sm md:text-base">Bahan Sol: Karet TPR Anti-Slip</li>
        <li class="font-poppins text-sm md:text-base">Pilihan Warna: Salem, Hitam, Beige, Mocca, Cream</li>
        <li class="font-poppins text-sm md:text-base">Size: 37 | 38 | 39 | 40 | 41</li>
    </ul>
    <h3 class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (Insole Length)</h3>
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
  "Lylie Yara Heels": `
 <div class="text-gray-800">
   <button class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]" id="detail-produk-btn">Detail Produk</button>
   <ul id="detail-list-produk" class="list-disc ml-5 space-y-1">
       <li class="font-poppins text-sm md:text-base">Model: Mules Heels</li>
       <li class="font-poppins text-sm md:text-base">Tinggi Hak: ±3cm</li>
       <li class="font-poppins text-sm md:text-base">Bahan Upper: PU Leather Premium</li>
       <li class="font-poppins text-sm md:text-base">Bahan Sol: Karet TPR Anti-Slip</li>
       <li class="font-poppins text-sm md:text-base">Warna: Hitam, Putih, Beige, Biscuit, Cream, Tan</li>
       <li class="font-poppins text-sm md:text-base">Size: 37 | 38 | 39 | 40 | 41</li>
       <li class="font-poppins text-sm md:text-base">Berat: ±500gr</li>
   </ul>
   <h3 class="font-semibold font-poppins text-md md:text-lg mt-2 text-[#697565]">Panduan Ukuran (Insole Length)</h3>
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
      "Hana Yara Flat": `
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
      `,

      "Niki Yara Flat": `
      <div class="text-gray-800">
    <h3 class="font-semibold text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
    <ul class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Bahan: PU Leather premium</li>
        <li class="font-poppins text-sm md:text-base">Sol: Karet Non-Slip</li>
        <li class="font-poppins text-sm md:text-base">Tinggi: 1,5 cm</li>
    </ul>

    <h3 class="font-semibold text-md md:text-lg mt-4 text-[#697565]">Panjang Sandal Total:</h3>
    <ul class="list-disc ml-5 space-y-1 font-poppins text-sm md:text-base">
        <li>Size 37 : 22 cm (untuk panjang kaki 21 cm)</li>
        <li>Size 38 : 23 cm (untuk panjang kaki 22 cm)</li>
        <li>Size 39 : 24 cm (untuk panjang kaki 23 cm)</li>
        <li>Size 40 : 25 cm (untuk panjang kaki 24 cm)</li>
    </ul>

     <p class="mt-3 font-poppins text-sm text-red-600 font-semibold">⚠️ Disarankan pilih 1 size lebih besar jika kaki lebar atau lebih suka longgar.</p>
</div>

  `,
  "Diara Yara Footwear": `
  <div class="text-gray-800">
    <h3 class="font-semibold text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
    <ul class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Material: Spons, atas lapis PU Leather PREMIUM</li>
        <li class="font-poppins text-sm md:text-base">Sol bawah: Karet</li>
        <li class="font-poppins text-sm md:text-base">Tinggi: 4 cm</li>
    </ul>

    <h3 class="font-semibold text-md md:text-lg mt-4 text-[#697565]">Ketentuan Size Standar:</h3>
    <ul class="list-disc ml-5 space-y-1 font-poppins text-sm md:text-base">
        <li>36, 37, 38, 39, 40</li>
    </ul>

    <h3 class="font-semibold text-md md:text-lg mt-4 text-[#697565]">Panjang Sandal Total:</h3>
    <ul class="list-disc ml-5 space-y-1 font-poppins text-sm md:text-base">
        <li>Size 36 : 24 cm (untuk panjang kaki 22,5 cm)</li>
        <li>Size 37 : 24,5 cm (untuk panjang kaki 23 cm)</li>
        <li>Size 38 : 25 cm (untuk panjang kaki 23,5 cm)</li>
        <li>Size 39 : 25,5 cm (untuk panjang kaki 24 cm - 24,5 cm)</li>
        <li>Size 40 : 26 cm (untuk panjang kaki 25 cm - 25,5 cm)</li>
    </ul>

    <p class="mt-3 font-poppins text-sm text-red-600 font-semibold">
        ⚠️ Untuk size/ukuran pada sandal ini termasuk Normal yaa sist.
    </p>
</div>


`,


  "Alula Yara Footwear": `
   <div class="text-gray-800">
    <h3 class="font-semibold text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
    <ul class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Bahan: PU Leather</li>
        <li class="font-poppins text-sm md:text-base">Sol: Karet</li>
        <li class="font-poppins text-sm md:text-base">Tinggi Hak: 3 cm</li>
        <li class="font-poppins text-sm md:text-base">Size: 37 - 40</li>
    </ul>

    <h3 class="font-semibold text-md md:text-lg mt-4 text-[#697565]">Panjang Sandal Total:</h3>
    <ul class="list-disc ml-5 space-y-1 font-poppins text-sm md:text-base">
        <li>Size 37 : 24,5 cm (untuk panjang kaki 22,5 cm)</li>
        <li>Size 38 : 25 cm (untuk panjang kaki 23 cm)</li>
        <li>Size 39 : 25,5 cm (untuk panjang kaki 23,5 cm - 24 cm)</li>
        <li>Size 40 : 26 cm (untuk panjang kaki 24,5 cm - 25 cm)</li>
    </ul>

    <p class="mt-3 font-poppins text-sm text-green-600 font-semibold">✅ Untuk size/ukuran pada sandal ini termasuk Normal yaa sist.</p>
</div>
`,
"Levina Yara Footwear": `
   <div class="text-gray-800">
    <h3 class="font-semibold text-md md:text-lg mt-2 text-[#697565]">Detail Produk</h3>
    <ul class="list-disc ml-5 space-y-1">
        <li class="font-poppins text-sm md:text-base">Material: Spons, atas lapis PU Leather PREMIUM</li>
        <li class="font-poppins text-sm md:text-base">Sol bawah: Karet</li>
        <li class="font-poppins text-sm md:text-base">Tinggi: 4 cm</li>
        <li class="font-poppins text-sm md:text-base">Size: 36 - 40</li>
    </ul>

    <h3 class="font-semibold text-md md:text-lg mt-4 text-[#697565]">Panjang Sandal Total:</h3>
    <ul class="list-disc ml-5 space-y-1 font-poppins text-sm md:text-base">
        <li>Size 36 : 24 cm (untuk panjang kaki 22,5 cm)</li>
        <li>Size 37 : 24,5 cm (untuk panjang kaki 23 cm)</li>
        <li>Size 38 : 25 cm (untuk panjang kaki 23,5 cm)</li>
        <li>Size 39 : 25,5 cm (untuk panjang kaki 24 cm - 24,5 cm)</li>
        <li>Size 40 : 26 cm (untuk panjang kaki 25 cm - 25,5 cm)</li>
    </ul>

    <p class="mt-3 font-poppins text-sm text-green-600 font-semibold">✅ Untuk size/ukuran pada sandal ini termasuk Normal yaa sist.</p>
</div>
`
  };

  if (name && params.get("price") && params.get("image")) {
      document.getElementById("product-name").textContent = name;
      document.getElementById("product-price").textContent = params.get("price");
      document.getElementById("product-image").src = params.get("image");
      document.getElementById("product-description").innerHTML = productDescriptions[name] || "";

  }

  if (name === "Evelyn Yara Heels") {
      document.getElementById("shopee-link").href = "https://shopee.co.id/Evelyn-Yara-Footwear-Papake.id-Heels-Wanita-3cm-i.255026444.28224928826?sp_atk=c10f4f25-778f-4e7a-b197-b7480c19f007";
      document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMhUUCT6/";

  } else if (name === "Eloise Yara Heels"){
    document.getElementById("shopee-link").href= "https://shopee.co.id/Eloise-Yara-Footwear-Papake.id-Heels-Wanita-Aksen-Tali-Karet-Hak-3cm-Nyaman-Elegan-i.255026444.26474925503";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjTEBvb/";

  } else if(name === "Millie Yara Heels"){
    document.getElementById("shopee-link").href= "https://shopee.co.id/Millie-Yara-Footwear-Papake.id-Mules-Hak-3cm-i.255026444.25940979008";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwF93a/";

  } else if(name === "Faye Yara Heels"){
    document.getElementById("shopee-link").href= "https://shopee.co.id/Faye-Yara-Footwear-Papake.id-Heels-Wanita-3cm-Pengait-Sabuk-Modis-i.255026444.25740968599";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwxnfL/";
    
  } else if(name === "Lylie Yara Heels"){
    document.getElementById("shopee-link").href= "https://shopee.co.id/Lylie-Yara-Footwear-Papake.id-Sandal-Heels-Cantik-Sepatu-Mules-3-cm-i.255026444.26274896167";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwjU2r/";
  }
   
  else if (name == "Hana Yara Flat") {
    document.getElementById("shopee-link").href= "https://shopee.co.id/HANA-SEPATU-MULES-TERBARU-WANITA-KEKINIAN-TERLARIS-YARA-FOOTWEAR-PAPAKE-i.255026444.15012313199";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwf6uR/";
  }
  else if (name == "Niki Yara Flat") {
    document.getElementById("shopee-link").href= "https://shopee.co.id/NIKI-SANDAL-WANITA-FLAT-MOTIF-ANYAM-PAPAKE-BY-YARA-FOOTWEAR-i.255026444.24258976097";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjTsD4w/";
  }
  else if (name == "Diara Yara Footwear") {
    document.getElementById("shopee-link").href= "https://shopee.co.id/Diara-Yara-Footwear-Papake.id-Sandal-Heels-Cantik-Sandal-Wanita-Platform-Puffy-Empuk-Winod-i.255026444.15590025677?sp_atk=7bf557d4-75a6-4c25-97c7-c007d4a450de";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwHfum/";
  }
  else if (name == "Alula Yara Footwear") {
    document.getElementById("shopee-link").href= "https://shopee.co.id/ALULA-SANDAL-SENDAL-WANITA-SARA-SARA-LAPEPA-WEDGES-SOL-KARET-i.255026444.21576958412?sp_atk=4b7e6ceb-262c-410f-9eac-b14f0951e849";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjwmWkP/";

  } else if (name == "Levina Yara Footwear") {
    document.getElementById("shopee-link").href= "https://shopee.co.id/Levina-Sandal-Wanita-Korea-Delisha-Damelia-Sandals-i.255026444.18624034724?sp_atk=d3936e7f-f0c3-4ca6-9e08-719771a8b02b";
    document.getElementById("tiktok-link").href = "https://vt.tokopedia.com/t/ZSMjw7akK/";
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
  

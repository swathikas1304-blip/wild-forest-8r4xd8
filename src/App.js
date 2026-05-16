export default function App() {
  const products = [
    {
      title: "Resin Jewellery",
      desc: "Elegant handmade resin earrings, pendants, and accessories.",
      image:
        "https://i.pinimg.com/1200x/c3/15/4f/c3154fb6a94ffa2eccf245d291102224.jpg",
    },
    {
      title: "Floral Preservation",
      desc: "Preserve your special flowers forever in resin keepsakes.",
      image:
        "https://i.pinimg.com/1200x/22/f7/bb/22f7bbbf5ff087c65ef1373008efd604.jpg",
    },
    {
      title: "Custom Frames",
      desc: "Personalized resin frames for memories and gifting.",
      image:
        "https://i.pinimg.com/1200x/95/37/f7/9537f72d8d0780eb7ef036ac5e9568b7.jpg",
    },
    {
      title: "Keychains & Coasters",
      desc: "Unique handmade resin creations crafted with care.",
      image:
        "https://i.pinimg.com/736x/e1/9b/b7/e19bb7d23171e4d2f2fbae60a8c12fa3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff1f2] via-[#fdf2f8] to-[#ede9fe] text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <p className="uppercase tracking-[0.5em] text-sm text-pink-500 mb-5 font-medium">
            Handmade Resin Art
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
            ArtnCraftBytes
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
            Swathi's Creation
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed">
            Creating timeless handmade resin art, jewellery, floral
            preservations, keepsakes, keychains, coasters, clocks, and
            personalized gifts crafted with elegance and love.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://www.instagram.com/artncraftbytes"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white rounded-2xl shadow-[0_10px_40px_rgba(236,72,153,0.4)] transition duration-300"
            >
              Visit Instagram
            </a>

            <a
              href="https://wa.me/917200667960"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/70 backdrop-blur-md border border-pink-200 hover:bg-pink-100 rounded-2xl shadow-lg transition duration-300"
            >
              DM to Order
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://i.pinimg.com/1200x/1c/10/d0/1c10d0b9888b5e87ef00bf7c70155bea.jpg"
            alt="Resin Art"
            className="rounded-[35px] shadow-2xl w-full h-[500px] object-cover border border-pink-100"
          />
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            About The Brand
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ArtnCraftBytes is a handmade resin art brand focused on turning
            memories into elegant keepsakes. Every piece is carefully
            handcrafted with creativity, emotion, and premium finishing.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            From floral preservation to personalized gifts, every creation is
            uniquely designed to preserve beautiful moments forever.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Our Creations
          </h3>

          <p className="text-gray-600 text-lg">
            Handmade resin products crafted with love, creativity, and elegance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-500 border border-pink-100"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-gray-800">
                  {product.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-r from-rose-50 to-violet-50 rounded-[40px] my-16 shadow-lg">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Why Customers Love Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "100% Handmade",
            "Customized Designs",
            "Premium Finishing",
            "Emotional Keepsakes",
            "Beautiful Packaging",
            "Made with Love",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md border border-pink-100 text-center hover:scale-105 transition duration-300"
            >
              <p className="text-xl font-semibold text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-r from-[#ec4899] via-[#d946ef] to-[#8b5cf6] text-white py-24 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Place Your Custom Orders
        </h3>

        <p className="max-w-2xl mx-auto text-lg mb-12 text-pink-100 leading-relaxed">
          Looking for personalized resin gifts or floral preservation art?
          Contact us through Instagram or WhatsApp to create something truly
          special.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://www.instagram.com/artncraftbytes"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-pink-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/917200667960"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-pink-500 transition duration-300"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-white">
        © 2026 ArtnCraftBytes • Swathi's Creation • Handmade with Love
      </footer>
    </div>
  );
}

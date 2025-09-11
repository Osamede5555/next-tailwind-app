import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf6e3] text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-xl tracking-wide text-gray-800">KREA</span>
        </div>

        {/* Middle: Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-gray-100 rounded-lg">🏠</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">📷</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">✏️</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">📁</button>
        </div>

        {/* Right: Buttons + Avatar */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200">
            Gallery
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200">
            Support
          </button>
          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300"></div>
        </div>
      </nav>

      <div className="w-[700px] mx-auto mt-20">  {/* mt-10 = margin-top */}
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={2}   // ✅ show 2 slides side by side
    navigation
    pagination={{ clickable: true }}
    className="rounded-2xl"
  >
    {[
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "WAN 2.2",
        desc: "Generate complex images with the powerful WAN 2.2 model."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "FLUX.1 Krea",
        desc: "We’re making the weights to our FLUX.1 Krea model open-source."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "Realtime Render",
        desc: "Realtime AI rendering with instant feedback loops."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "Video Generator",
        desc: "Generate stunning AI-powered videos seamlessly."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "Image Enhancer",
        desc: "Enhance and upscale images up to 4K with AI."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxxJOqlo90KtDNxQGNnrV2rEUgn6PKrnGtQ&s",
        title: "AI Avatar",
        desc: "Create personalized avatars using AI."
      },
    ].map((item, index) => (
      <SwiperSlide key={index}>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[200px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex flex-col justify-end rounded-xl">
            <h2 className="text-sm font-bold text-white">{item.title}</h2>
            <p className="text-white/80 text-xs">{item.desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>





      {/* Hero Section */}
      <section className="px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="../image0_large.jpg"
              alt="WAN 2.2"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
              <h2 className="text-3xl font-extrabold text-white">WAN 2.2</h2>
              <p className="text-white/90 mt-2">
                Generate complex images with the brand new and powerful WAN 2.2 model.
              </p>
              <button className="mt-4 px-5 py-2 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200">
                Try WAN 2.2
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://placehold.co/600x400/444/fff?text=FLUX+1"
              alt="FLUX.1"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
              <h2 className="text-3xl font-extrabold text-white">FLUX.1 Krea</h2>
              <p className="text-white/90 mt-2">
                We’re making the weights to our FLUX.1 Krea model open-source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-12">
  <h3 className="text-xl font-bold mb-6">Generate</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        name: "Image",
        desc: "Generate images with custom styles in Flux and Ideogram.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s", // Example
      },
      {
        name: "Video",
        desc: "Generate videos with Haiku, Pika, Runway, Luma, and more.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Edit",
        desc: "Add objects, change styles, or expand photos and generations.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Video Lipsync",
        desc: "Lip sync any video to any audio.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Realtime",
        desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Enhancer",
        desc: "Upscale and enhance images and videos up to 2K.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Motion Transfer",
        desc: "Transfer motion to images and animate characters.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Train",
        desc: "Teach Krea to replicate your style, products, or characters.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
    ].map((feature) => (
      <div
        key={feature.name}
        className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
      >
        {/* Left: Image + Text */}
        <div className="flex items-center space-x-3">
          {/* Feature image */}
          <img
            src={feature.img}
            alt={feature.name}
            className="w-8 h-8 object-cover rounded-md"
          />

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-gray-800 text-sm">
                {feature.name}
              </h4>
              {feature.new && (
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                  New
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{feature.desc}</p>
          </div>
        </div>

        {/* Right: Button */}
        <button className="ml-4 rounded-lg border border-gray-300 bg-white px-4 py-1 text-xs hover:bg-gray-100">
          Open
        </button>
      </div>
    ))}
  </div>
</section>


?

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-8 flex justify-between items-center">
        <span className="font-medium">Krea AI</span>
        <span className="text-sm text-gray-400">curated by Mobbin</span>
      </footer>
    </div>
  );
}

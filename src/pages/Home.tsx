import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-20">

      {/* 🔷 HERO */}
      <section className="bg-linear-to-r from-primary to-blue-700 text-white py-24 px-6 text-center rounded-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Trade smarter. <br /> Live better.
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Buy and sell items easily in a modern marketplace designed for speed, simplicity, and trust.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/items"
            className="bg-accent px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Browse Items
          </Link>
          <Link
            to="/items/add"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition"
          >
            Sell an Item
          </Link>
        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Fast Listings",
            desc: "Post your items in seconds with a simple, clean interface.",
          },
          {
            title: "Smart Search",
            desc: "Find exactly what you need with powerful filtering.",
          },
          {
            title: "Secure Deals",
            desc: "Safe and reliable platform for buyers and sellers.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* 🔷 POPULAR ITEMS (placeholder for now) */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Items</h2>
          <Link to="/items" className="text-accent">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Sample Item</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Short description goes here
                </p>
                <p className="text-accent font-bold mt-2">$120</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 TESTIMONIAL */}
      <section className="bg-gray-100 p-10 rounded-xl text-center">
        <p className="text-lg italic max-w-2xl mx-auto">
          “Trade Square made selling my products incredibly easy. Clean UI and fast!”
        </p>
        <h4 className="mt-4 font-semibold">— Happy User</h4>
      </section>

      {/* 🔷 CTA BANNER */}
      <section className="bg-primary text-white text-center py-16 rounded-xl">
        <h2 className="text-3xl font-bold">Start Trading Today</h2>
        <p className="mt-2 text-gray-200">
          Join the marketplace and turn your unused items into value.
        </p>

        <Link
          to="/items/add"
          className="inline-block mt-6 bg-accent px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Add Your First Item
        </Link>
      </section>

    </div>
  );
};

export default Home;
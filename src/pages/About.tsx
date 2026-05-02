const About = () => {
  return (
    <div className="space-y-20">

      {/* 🔷 HERO */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Trade Square
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A modern digital marketplace built to make buying and selling simple,
          fast, and reliable — just like a real-world trading hub.
        </p>
      </section>

      {/* 🔷 MISSION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Trade Square exists to simplify everyday trading. Whether you're
            selling unused items or searching for great deals, we aim to provide
            a smooth and intuitive experience for everyone.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe in transparency, ease of use, and building a platform
            that feels like a real marketplace — not just another website.
          </p>
        </div>

        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Image / Illustration</span>
        </div>
      </section>

      {/* 🔷 WHY CHOOSE US */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Trade Square?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Simple Experience",
              desc: "Clean UI that anyone can use without confusion.",
            },
            {
              title: "Fast Performance",
              desc: "Optimized for speed so you can browse and post instantly.",
            },
            {
              title: "User Focused",
              desc: "Designed with real users in mind, not complexity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 STATS */}
      <section className="bg-gray-100 py-16 rounded-xl">
        <div className="grid md:grid-cols-3 text-center gap-6">
          {[
            { value: "100+", label: "Items Listed" },
            { value: "50+", label: "Active Users" },
            { value: "24/7", label: "Marketplace Access" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 CTA */}
      <section className="bg-primary text-white text-center py-16 rounded-xl">
        <h2 className="text-3xl font-bold">
          Ready to start trading?
        </h2>
        <p className="mt-2 text-gray-200">
          Join Trade Square and experience a smarter way to buy and sell.
        </p>

        <a
          href="/items"
          className="inline-block mt-6 bg-accent px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Explore Items
        </a>
      </section>

    </div>
  );
};

export default About;
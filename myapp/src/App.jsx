// src/App.jsx
import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

// Import blog post components
import Blog1 from "./blog_posts/blogpost1.jsx";
import Blog2 from "./blog_posts/blogpost2.jsx";
import Blog3 from "./blog_posts/blogpost3.jsx";
import Blog4 from "./blog_posts/blogpost4.jsx";
import Blog5 from "./blog_posts/blogpost5.jsx";

function App() {
  const images = [
    { src: "/corolla.jpg", caption: "Best Budget Cars for First-Time Buyers in Nigeria", route: "/blog1" },
    { src: "/usedcar.jpg", caption: "How to Check a Used Car Before Buying – A Complete Guide", route: "/blog2" },
    { src: "/tesla.jpg", caption: "Electric Vehicles, what you need to Know!", route: "/blog3" },
    { src: "/picture7.jpg", caption: "How to Improve Your Car’s Resale Value with Simple Upgrades", route: "/blog4" },
    { src: "/picture9.jpg", caption: "Top 10 Car Maintenance Tips Every Owner Should Know", route: "/blog5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rssPosts, setRssPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://www.autoblog.com/rss.xml")
        );
        const data = await response.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        const posts = Array.from(items).slice(0, 9).map((item) => {
          const mediaContent = item.getElementsByTagName("media:content")[0];
          const imageUrl = mediaContent?.getAttribute("url") || "";

          return {
            title: item.querySelector("title")?.textContent,
            link: item.querySelector("link")?.textContent,
            pubDate: item.querySelector("pubDate")?.textContent,
            description: item.querySelector("description")?.textContent,
            imageUrl,
          };
        });

        setRssPosts(posts);
      } catch (error) {
        console.error("RSS fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);

  return (
    <Routes>
      {/* Home page with everything (header, slider, rss, footer) */}
      <Route
        path="/"
        element={
          <div className="bg-slate-200 min-h-screen">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-orange-300 p-4 gap-4">
              <div className="flex justify-center sm:justify-start">
                <img src="src/assets/ngbukalogo.jpg" className="w-24 sm:w-32" />
              </div>

              <div className="text-center font-bold text-gray-500 hover:text-blue-400 transition duration-300 hover:scale-105 text-sm sm:text-base">
                <a href="https://app.ngbuka.com/">Our <br /> Services</a>
              </div>

              <div className="flex justify-center sm:justify-end gap-4 text-gray-500 text-2xl sm:text-3xl">
                <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="https://web.facebook.com/profile.php?id=61562792144632"><FaFacebookSquare /></a>
                <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="https://wa.me/07073042235"><FaSquareWhatsapp /></a>
                <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="mailto:info@ngbuka.com.ng"><MdEmail /></a>
                <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="tel:+2347072448434"><FaPhoneSquareAlt /></a>
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-md mt-4">
              <img
                src={images[currentIndex].src}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-48 sm:h-64 object-cover transition duration-500"
              />
              <Link to={images[currentIndex].route}>
                <div className="bg-gray-200 text-center py-2 text-sm font-semibold text-gray-600 hover:underline">
                  {images[currentIndex].caption}
                </div>
              </Link>
              <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-r">‹</button>
              <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-l">›</button>
            </div>

            {/* RSS Feed Section */}
            <div className="max-w-6xl mx-auto p-4 mt-8 space-y-8">
              <h2 className="text-xl font-bold text-center text-gray-700">TRENDING CAR POSTS!</h2>
              {loading ? (
                <p className="text-center text-gray-500">Loading feed...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rssPosts.map((post, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                      {post.imageUrl && (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-40 sm:h-48 object-cover rounded mb-3"
                        />
                      )}
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-blue-600 hover:underline"
                      >
                        {post.title}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(post.pubDate).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mt-2 text-sm">
                        {post.description.replace(/<[^>]+>/g, "").slice(0, 180)}...
                      </p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-blue-500 hover:underline"
                      >
                        Read full article →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <hr className="border-t-2 border-purple-200 my-6 mx-auto" />
            <div className="p-4 text-center font-bold text-orange-500 text-sm sm:text-base pb-9">
              &#169; NGBUKA LIMITED 2025
            </div>
          </div>
        }
      />

      {/* Blog routes */}
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
      <Route path="/blog4" element={<Blog4 />} />
      <Route path="/blog5" element={<Blog5 />} />
    </Routes>
  );
}

export default App;

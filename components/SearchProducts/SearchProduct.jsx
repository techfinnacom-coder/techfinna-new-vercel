"use client";
 
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import products from "../../data/products.json";
 
const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};
 
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
 
const SearchProduct = () => {
  const [searchBar, setSearchBar] = useState("");
  const [priceSlider, setPriceSlider] = useState(2000);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortDrop, setSortDrop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const searchInputRef = useRef(null);
 
  const showAllProducts = () => {
    setFilteredProducts(
      products.filter(
        (p) =>
          p.demo === false && (typeof p.price === "number" ? p.price > 0 : true)
      )
    );
  };
 
  useEffect(() => {
    showAllProducts();
  }, []);
 
  useEffect(() => {
    const newProd = products.filter(
      (prod) =>
        prod.keywords.toLowerCase().includes(searchBar.toLowerCase()) &&
        prod.demo === false
    );
    setFilteredProducts(newProd);
  }, [searchBar]);
 
  const handleClickOutside = (event) => {
    const target = event.target;
    if (!target.closest("#sortDropdownButton1")) {
      setSortDrop(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
 
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
 
  const categories = [
    {
      key: "connector",
      label: "Connectors",
      icon: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "service",
      label: "Services",
      icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
      color: "from-purple-500 to-pink-500",
    },
    {
      key: "productivity",
      label: "Productivity",
      icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
      color: "from-orange-500 to-red-500",
    },
  ];
 
  return (
    <main
      id="searchProduct"
      className="min-h-screen bg-transparent"
      aria-labelledby="search-title"
    >
      <div className="w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Search Products
          </div>
          <h1
            id="search-title"
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
          >
            Discover Amazing Tools
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Find the perfect solutions for your Odoo workflow. Browse through
            our curated collection of premium tools and integrations.
          </p>
        </motion.header>
 
        <div className="md:hidden mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              ref={searchInputRef}
              placeholder="Search products..."
              className="w-full pl-12 pr-20 py-4 bg-white border-2 border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
              onChange={(e) => setSearchBar(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <kbd className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
 
        <div className="flex gap-8">
          <aside className="hidden md:block w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 py-6 px-4"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    ref={searchInputRef}
                    placeholder="Quick search..."
                    className="w-full pl-12 pr-16 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
                    onChange={(e) => setSearchBar(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <kbd className="px-2 py-1 text-xs font-semibold text-slate-500 bg-white border border-slate-200 rounded shadow-sm">
                      ⌘K
                    </kbd>
                  </div>
                </div>
              </motion.div>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl mt-8 shadow-lg border border-slate-200 p-6"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                  Categories
                </h3>
                <div>
                  {categories.map((item) => {
                    const active = searchBar === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setSearchBar(item.key);
                          setSelectedCategory(item.key);
                        }}
                        className={`group w-full flex items-center gap-2 rounded-xl py-1 text-left transition-all duration-200 ${
                          active
                            ? "bg-gradient-to-r " +
                              item.color +
                              " text-white shadow-lg shadow-blue-200 scale-105"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            active
                              ? "bg-white/20"
                              : "bg-slate-100 group-hover:bg-slate-200"
                          }`}
                        >
                          <svg
                            className={`w-5 h-5 ${active ? "text-white" : "text-slate-600"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d={item.icon} />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold">
                            {item.label}
                          </span>
                        </div>
                        {active && (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <input
                      onChange={(event) => {
                        const val = Number(event.target.value);
                        setPriceSlider(val);
                        const newProducts = products.filter(
                          (item) => item.price >= 10 && item.price <= val
                        );
                        setFilteredProducts(newProducts);
                      }}
                      step={50}
                      type="range"
                      value={priceSlider}
                      min="100"
                      max="2000"
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
                      style={{
                        background: `linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) ${((priceSlider - 100) / 1900) * 100}%, rgb(226, 232, 240) ${((priceSlider - 100) / 1900) * 100}%, rgb(226, 232, 240) 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      $100
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      $2000
                    </span>
                  </div>
                </div>
              </motion.div>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-black to-blue-900 rounded-2xl shadow-lg p-6 text-white"
              >
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
                  Need Help?
                </h3>
                <p className="text-sm text-blue-50 mb-4">
                  Our team is here to help you find the perfect solution.
                </p>
                <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
                  Contact Support
                </button>
              </motion.div>
            </div>
          </aside>
 
          <section className="flex-1 min-w-0">
            <div className="mx-auto">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {searchBar ? `Results for "${searchBar}"` : "All Products"}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {filteredProducts?.length || 0} products found
                  </p>
                </div>
 
                <div className="relative">
                  <button
                    id="sortDropdownButton1"
                    type="button"
                    onClick={() => setSortDrop((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                      />
                    </svg>
                    Sort By
                    <svg
                      className={`w-4 h-4 transition-transform ${sortDrop ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
 
                  <AnimatePresence>
                    {sortDrop && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 z-50 mt-2 w-56 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 border border-slate-200 overflow-hidden"
                      >
                        <div className="p-2">
                          <button
                            onClick={() => {
                              showAllProducts();
                              setSearchBar("");
                              setSortDrop(false);
                            }}
                            className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            All Products
                          </button>
                          <button
                            onClick={() => {
                              let newProducts = filteredProducts.sort(
                                (a, b) => a.price - b.price
                              );
                              newProducts = newProducts.filter(
                                (item) => item.price > 0
                              );
                              setFilteredProducts([...newProducts]);
                              setSortDrop(false);
                            }}
                            className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            Price: Low to High
                          </button>
                          <button
                            onClick={() => {
                              let newProducts = filteredProducts.sort(
                                (a, b) => b.price - a.price
                              );
                              newProducts = newProducts.filter(
                                (item) => item.price > 0
                              );
                              setFilteredProducts([...newProducts]);
                              setSortDrop(false);
                            }}
                            className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            Price: High to Low
                          </button>
                          <button
                            onClick={() => {
                              let newProducts = filteredProducts.sort(
                                (a, b) => b.totalReviews - a.totalReviews
                              );
                              newProducts = newProducts.filter(
                                (item) => item.price > 0
                              );
                              setFilteredProducts([...newProducts]);
                              setSortDrop(false);
                            }}
                            className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            Most Reviewed
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
 
              {filteredProducts?.length === 0 && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="rounded-2xl bg-white border-2 border-dashed border-slate-300 p-12 text-center shadow-lg"
                >
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filters to find what you're
                    looking for.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchBar("");
                      showAllProducts();
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Reset Filters
                  </button>
                </motion.div>
              )}
 
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
              >
                {filteredProducts?.map((prod, index) => (
                  <motion.article
                    key={`${prod?.name}-${index}`}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
                  >
                    <a
                      href={prod?.websiteLink}
                      className="block relative overflow-hidden bg-gradient-to-br from-white to-white h-[147px]"
                    >
                      <img
                        src={prod?.banner}
                        alt={prod?.name}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
 
                    <div className="p-6">
                      <a
                        href={prod?.websiteLink}
                        className="block min-h-[60px] mb-1"
                      >
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {prod?.name}
                        </h3>
                      </a>
 
                      {/* Rating */}
                      {prod?.totalReviews > 0 ? (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-bold text-slate-900">
                            {prod?.aggregatedRating}
                          </span>
                          <span className="text-sm text-slate-500">
                            ({prod?.totalReviews})
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-bold text-slate-900">
                            {prod?.aggregatedRating}
                          </span>
                          <span className="text-sm text-slate-500">
                            ({prod?.totalReviews})
                          </span>
                        </div>
                      )}
 
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                        <div>
                          <p
                            className={`${prod.price === "Get a quote" ? "text-xl" : "text-2xl"} font-black bg-gradient-to-r from-black to-black bg-clip-text text-transparent`}
                          >
                            {prod.price === "Get a quote"
                              ? prod.price
                              : `$${prod.price}`}
                          </p>
                        </div>
 
                        <a
                          href={prod?.websiteLink}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-black text-white font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Buy
                        </a>
                      </div>
                    </div>
 
                    {/* Hover overlay badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        View Details →
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
 
export default SearchProduct;
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Gaming Laptop', price: '$1200', image: 'https://i.pcmag.com/imagery/reviews/00ujXpkUDw1FIczR1gVekQk-1.fit_lim.size_919x518.v1722353639.jpg' },
  { id: 2, name: 'Mechanical Keyboard', price: '$80', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvj4G46zTMVMXBrnWMp24dnqtszjwpCluoAg&s' },
  { id: 3, name: 'Gaming Mouse', price: '$45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xMA8raBV_tcl-KgDlJCH65HxUEkbwfWaJA&s' },
  { id: 4, name: '4K Monitor', price: '$200', image: 'https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHQG2FW-36.fit_lim.size_1050x.webp' },
  { id: 5, name: 'Gaming Headset', price: '$99', image: 'https://i5.walmartimages.com/seo/Gaming-Headset-for-PS4-Headset-with-Microphone-Noise-Cancelling-PC-Headset-with-LED-Lights-Gaming-Headphones-Blue_c3f7c8b8-69c0-4c5f-a675-0561d42627a5.548139c2f3040ff7f7274a50074c73e6.jpeg' },
  { id: 6, name: 'RGB Mouse Pad', price: '$25', image: 'https://cdn.mos.cms.futurecdn.net/HAwSBEHaTfmKXeQGMQP8MR.jpg' },
  { id: 7, name: 'Webcam HD', price: '$60', image: 'https://backend.intelbras.com/sites/default/files/2022-04/HD-webcam-CAM-HD-720P.jpg' },
  { id: 8, name: 'USB-C Hub MHW', price: '$35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX14KkGEyFjKhPgiKy_fAT-g6UsWD4PcjO5X8xoZsgQNpsr4AQW0OUn7MY5JVgBSAtQk&usqp=CAU' }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (priceFilter === 'all') return matchesSearch;
    const price = parseInt(product.price.replace('$', ''));
    switch(priceFilter) {
      case 'under50': return matchesSearch && price < 50;
      case '50to100': return matchesSearch && price >= 50 && price <= 100;
      case 'over100': return matchesSearch && price > 100;
      default: return matchesSearch;
    }
  });

  return (
    <main className="min-h-screen bg-neutral-800 text-gray-50">
      <header className="fixed w-full bg-neutral-800/20 backdrop-blur-3xl border-b border-white/10 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechZone Computers</h1>
          <div className='flex gap-5 items-center'>
            <nav className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <img src='img/profile.jpg' alt='' className='size-10 object-cover rounded-full'/>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br to-neutral-900 from-blue-900 text-gray-50 py-10 text-center pt-40">
        <h2 className="text-4xl font-semibold">Our Products</h2>
        <p className="text-lg mt-2">Find the perfect tech for your needs</p>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="over100">Over $100</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-neutral-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative pb-[75%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-neutral-300 font-bold mt-1">{product.price}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600 transition-colors">
                    ♥
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-neutral-900 text-white p-6 mt-10 text-center">
        &copy; {new Date().getFullYear()} TechZone Computers. All rights reserved.
      </footer>
    </main>
  );
}
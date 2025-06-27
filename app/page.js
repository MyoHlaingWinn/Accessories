// app/page.jsx (Next.js 13+ structure)
import React from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Gaming Laptop', price: '$1200', image: 'https://i.pcmag.com/imagery/reviews/00ujXpkUDw1FIczR1gVekQk-1.fit_lim.size_919x518.v1722353639.jpg' },
  { id: 2, name: 'Mechanical Keyboard', price: '$80', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvj4G46zTMVMXBrnWMp24dnqtszjwpCluoAg&s' },
  { id: 3, name: 'Gaming Mouse', price: '$45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xMA8raBV_tcl-KgDlJCH65HxUEkbwfWaJA&s' },
  { id: 4, name: '4K Monitor', price: '$200', image: 'https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHcetHQG2FW-36.fit_lim.size_1050x.webp' },
  { id: 5, name: 'Gaming Headset', price: '$99', image: 'https://i5.walmartimages.com/seo/Gaming-Headset-for-PS4-Headset-with-Microphone-Noise-Cancelling-PC-Headset-with-LED-Lights-Gaming-Headphones-Blue_c3f7c8b8-69c0-4c5f-a675-0561d42627a5.548139c2f3040ff7f7274a50074c73e6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
  { id: 6, name: 'RGB Mouse Pad', price: '$25', image: 'https://cdn.mos.cms.futurecdn.net/HAwSBEHaTfmKXeQGMQP8MR.jpg' },
  { id: 7, name: 'Webcam HD', price: '$60', image: 'https://backend.intelbras.com/sites/default/files/2022-04/HD-webcam-CAM-HD-720P.jpg' },
  { id: 8, name: 'USB-C Hub MHW', price: '$35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX14KkGEyFjKhPgiKy_fAT-g6UsWD4PcjO5X8xoZsgQNpsr4AQW0OUn7MY5JVgBSAtQk&usqp=CAU' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-800 text-gray-50">
      <header className="fixed w-full bg-neutral-800/20 backdrop-blur-3xl border-b border-white/10 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sky Tech Computers မှာ နွေးထွေးစွာ ကြိုဆိုပါတယ်။</h1>

          <div className='flex gap-5 items-center'>
            <nav className="space-x-4">
              <Link href="/" className='border-b-4 border-blue-500 text-blue-500'>Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <img src='img/profile.jpg' alt='' className='size-10 object-cover rounded-full'/>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br to-neutral-900 from-blue-900 text-gray-50 py-10 text-center pt-40">
        <h2 className="text-4xl font-semibold">Best Deals on Tech</h2>
        <p className="text-lg mt-2">Explore our latest products with unbeatable prices</p>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-neutral-900 shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg text-white font-semibold">{product.name}</h4>
                <p className="text-neutral-200 font-bold">{product.price}</p>
                <button className="mt-2 px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-700">
                  Buy Now
                </button>
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
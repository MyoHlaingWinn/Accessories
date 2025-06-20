'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-800 text-gray-50">
      <header className="fixed z-20 w-full bg-neutral-800/20 backdrop-blur-3xl border-b border-white/10 text-white p-4 shadow-md">
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

      <section className="bg-gradient-to-br to-neutral-900 from-blue-900 text-gray-50 py-20 text-center pt-40">
        <h2 className="text-4xl font-semibold mb-4">About TechZone Computers</h2>
        <p className="text-xl max-w-2xl mx-auto">Your trusted partner in technology since 2010</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              At TechZone Computers, we're dedicated to bringing cutting-edge technology to everyone. We believe that quality computer accessories should be accessible, reliable, and enhance your digital experience.
            </p>
            <p className="text-gray-300">
              Our commitment to excellence drives us to carefully curate our product selection, ensuring that every item meets our high standards for performance and durability.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg"
              alt="Modern tech workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-12 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-neutral-800 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Assured</h4>
              <p className="text-gray-400">Every product undergoes rigorous testing to ensure the highest quality standards</p>
            </div>
            <div className="text-center p-6 bg-neutral-800 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-gray-400">Quick and reliable shipping to get your tech to you when you need it</p>
            </div>
            <div className="text-center p-6 bg-neutral-800 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-400">Our dedicated team is always here to help with any questions or concerns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-12 text-center">Our Global Impact</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 p-8 rounded-lg">
            <h4 className="text-2xl font-semibold mb-4">Sustainability Initiative</h4>
            <p className="text-gray-300 mb-4">
              We're committed to reducing our environmental impact through eco-friendly packaging and responsible recycling programs.
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>100% recyclable packaging</li>
              <li>E-waste recycling program</li>
              <li>Energy-efficient operations</li>
            </ul>
          </div>
          <div className="bg-neutral-900 p-8 rounded-lg">
            <h4 className="text-2xl font-semibold mb-4">Community Engagement</h4>
            <p className="text-gray-300 mb-4">
              We actively participate in local tech communities and support STEM education initiatives.
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Tech workshops for students</li>
              <li>Local hackathon sponsorships</li>
              <li>Internship programs</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 text-white p-6 mt-10 text-center">
        &copy; {new Date().getFullYear()} TechZone Computers. All rights reserved.
      </footer>
    </main>
  );
}
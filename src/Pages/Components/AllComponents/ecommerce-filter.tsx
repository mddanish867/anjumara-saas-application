'use client'

import { useState } from 'react'
import { X, Filter, Star } from 'lucide-react'

export default function EcommerceFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  const toggleFilters = () => setIsOpen(!isOpen)

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden']
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Amazon Basics']

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={toggleFilters}
        className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4 flex items-center"
      >
        <Filter className="mr-2" /> Filters
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <aside
          className={`${
            isOpen ? 'fixed inset-0 z-50 bg-background' : 'hidden'
          } md:relative md:block w-full md:w-64 p-4 overflow-y-auto`}
        >
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={toggleFilters} className="text-gray-500">
              <X />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map((category) => (
                <div key={category} className="flex items-center mb-2">
                  <input type="checkbox" id={category} className="mr-2" />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Brands</h3>
              {brands.map((brand) => (
                <div key={brand} className="flex items-center mb-2">
                  <input type="checkbox" id={brand} className="mr-2" />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Rating</h3>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
                  <label htmlFor={`rating-${rating}`} className="flex items-center">
                    {Array.from({ length: rating }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="ml-1">& Up</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product cards would go here */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-card text-card-foreground rounded-lg shadow p-4">
                <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                <h2 className="font-semibold mb-2">Product Name</h2>
                <p className="text-sm text-gray-600 mb-2">$99.99</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">(123)</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
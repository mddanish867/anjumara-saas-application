'use client'

import { useState } from 'react'
import { X, Filter, Star, ChevronDown } from 'lucide-react'

export default function EcommerceFilter2() {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState(500)

  const toggleFilters = () => setIsOpen(!isOpen)

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden']
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Amazon Basics']
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White']

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={toggleFilters}
        className="md:hidden mb-4 w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-primary/90"
      >
        <Filter className="mr-2 h-4 w-4" /> Filters
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <aside
          className={`${
            isOpen ? 'fixed inset-0 z-50 bg-background' : 'hidden'
          } md:relative md:block w-full md:w-72 p-6 overflow-y-auto shadow-lg rounded-lg transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button onClick={toggleFilters} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map((category) => (
                <div key={category} className="flex items-center mb-2">
                  <input type="checkbox" id={category} className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                  <label htmlFor={category} className="ml-2 text-sm">{category}</label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Brands</h3>
              {brands.map((brand) => (
                <div key={brand} className="flex items-center mb-2">
                  <input type="checkbox" id={brand} className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                  <label htmlFor={brand} className="ml-2 text-sm">{brand}</label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full cursor-pointer border border-gray-300 transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Rating</h3>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <input type="checkbox" id={`rating-${rating}`} className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                  <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                    {Array.from({ length: rating }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="ml-1 text-sm">& Up</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary/90">
            Apply Filters
          </button>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Product Listing</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <button className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center hover:bg-gray-50 transition-colors duration-300">
                Popularity <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-64 bg-gray-300 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Product Name</h2>
                  <p className="text-2xl font-bold mb-2">$99.99</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">(123)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
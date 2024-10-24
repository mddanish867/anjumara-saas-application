'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'

export default function EcommerceFilter3() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState(500)

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(item => item !== section)
        : [...prev, section]
    )
  }

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden']
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Amazon Basics']
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White']

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Price Range Accordion */}
        <div className="py-4 px-6">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection('price')}
          >
            <span className="text-sm font-medium text-gray-800">Price Range</span>
            {openSections.includes('price') ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          {openSections.includes('price') && (
            <div className="mt-4">
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
          )}
        </div>

        {/* Categories Accordion */}
        <div className="py-4 px-6">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection('categories')}
          >
            <span className="text-sm font-medium text-gray-800">Categories</span>
            {openSections.includes('categories') ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          {openSections.includes('categories') && (
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor={category} className="ml-2 text-sm text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brands Accordion */}
        <div className="py-4 px-6">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection('brands')}
          >
            <span className="text-sm font-medium text-gray-800">Brands</span>
            {openSections.includes('brands') ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          {openSections.includes('brands') && (
            <div className="mt-4 space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={brand}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor={brand} className="ml-2 text-sm text-gray-700">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Colors Accordion */}
        <div className="py-4 px-6">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection('colors')}
          >
            <span className="text-sm font-medium text-gray-800">Colors</span>
            {openSections.includes('colors') ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          {openSections.includes('colors') && (
            <div className="mt-4 flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full cursor-pointer border border-gray-300 transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Ratings Accordion */}
        <div className="py-4 px-6">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection('ratings')}
          >
            <span className="text-sm font-medium text-gray-800">Ratings</span>
            {openSections.includes('ratings') ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          {openSections.includes('ratings') && (
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                    {Array.from({ length: rating }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="ml-1 text-sm text-gray-700">& Up</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary/90">
          Apply Filters
        </button>
      </div>
    </div>
  )
}
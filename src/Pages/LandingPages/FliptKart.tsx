import { Search, ShoppingCart, User, Heart, } from 'lucide-react'

const categories = [
  "Electronics", "TVs & Appliances", "Men", "Women", "Baby & Kids", "Home & Furniture", "Sports, Books & More"
]

const featuredProducts = [
  { id: 1, name: "Smartphone", price: "₹9,999", image: "https://framerusercontent.com/images/nXggtbNhHmwaiJ4rt1ePCAwZUdc.png?scale-down-to=1024" },
  { id: 2, name: "Laptop", price: "₹49,999", image: "https://framerusercontent.com/images/nXggtbNhHmwaiJ4rt1ePCAwZUdc.png?scale-down-to=1024" },
  { id: 3, name: "Headphones", price: "₹1,999", image: "https://framerusercontent.com/images/nXggtbNhHmwaiJ4rt1ePCAwZUdc.png?scale-down-to=1024" },
  { id: 4, name: "Smart TV", price: "₹29,999", image: "https://framerusercontent.com/images/nXggtbNhHmwaiJ4rt1ePCAwZUdc.png?scale-down-to=1024" },
]

export default function FlipkartHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Flipkart</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-96 p-2 rounded text-primary"
              />
              <Search className="absolute right-2 top-2 text-primary" />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-1">
              <User size={20} />
              <span>Login</span>
            </a>
            <a href="#" className="flex items-center space-x-1">
              <Heart size={20} />
              <span>Wishlist</span>
            </a>
            <a href="#" className="flex items-center space-x-1">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </a>
          </nav>
        </div>
      </header>

      <nav className="bg-secondary text-secondary-foreground p-2">
        <div className="container mx-auto flex justify-between items-center">
          {categories.map((category, index) => (
            <a key={index} href="#" className="hover:text-primary-foreground">
              {category}
            </a>
          ))}
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8">
        <section className="mb-8">
          <div className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Big Billion Days Sale!</h2>
            <p className="text-xl mb-4">Up to 80% off on popular products</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90">
              Shop Now
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category, index) => (
              <div key={index} className="bg-card text-card-foreground p-4 rounded-lg text-center">
                <img
                  src="https://framerusercontent.com/images/nXggtbNhHmwaiJ4rt1ePCAwZUdc.png?scale-down-to=1024"
                  alt={category}
                  className="w-24 h-24 mx-auto mb-2"
                />
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-card text-card-foreground p-4 rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-primary font-bold">{product.price}</p>
                <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded w-full hover:bg-primary/90">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-8 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary-foreground">Payments</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Shipping</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Cancellation & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Policy</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary-foreground">Return Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Social</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary-foreground">Facebook</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Twitter</a></li>
              <li><a href="#" className="hover:text-primary-foreground">YouTube</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
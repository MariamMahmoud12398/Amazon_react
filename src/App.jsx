import './App.css';
import Cards from './Card.jsx';
import Navbar from './Navbar.jsx';
import products from './Product.js';
import Footer from './Footer.jsx';
import { SearchIcon } from 'lucide-react';
import { ShoppingCartIcon } from 'lucide-react';

export default function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>

      <Navbar />
   <div className="flex flex-wrap  gap-1 px-2 w-full  mx-auto">
  {products.map(product => (
    <Cards
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      rating={product.rating}
      priceCents={product.priceCents}
    />
  ))}
</div>


      <Footer />
    </div>
  );
}

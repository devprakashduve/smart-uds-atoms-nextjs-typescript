'use client';

import React, { useState, useMemo } from 'react';
import EcommerceTemplate from '../../../Templates/EcommerceTemplate';
import Button from '../../../Atoms/Button';
import Icon from '../../../Atoms/Icon';
import ProductCardWithRating from '../../../Molecules/CardsGroup/ProductCardWithRating';
import MegaMenu from '../../../Organisms/NavBarGroup/MegaMenu';
import ToastNotification from '../../../Molecules/ToastNotification';
import FooterWithCategories from '../../../Organisms/FooterGroup/FooterWithCategories';
import { MenuItem } from '@/Components/Organisms/NavBarGroup/MegaMenu/MegaMenu.interface';

// Enhanced Mock product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Audio',
    description:
      'Experience studio-quality sound with our flagship wireless headphones.',
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 399,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Wearables',
    description:
      'Track your health and stay connected with the most advanced smartwatch.',
  },
  {
    id: 3,
    name: 'Laptop Stand Aluminum',
    price: 89,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Accessories',
    description: 'Ergonomic aluminum stand for improved posture and cooling.',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard RGB',
    price: 159,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Accessories',
    description: 'Tactile mechanical switches with customizable RGB lighting.',
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 49,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Accessories',
    description: 'Precision tracking and long-lasting battery life.',
  },
  {
    id: 6,
    name: 'USB-C Hub 7-in-1',
    price: 79,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Accessories',
    description: 'Connect all your devices with a single compact hub.',
  },
  {
    id: 7,
    name: 'Noise Cancelling Earbuds',
    price: 199,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Audio',
    description: 'Silence the world and enjoy your music anywhere.',
  },
  {
    id: 8,
    name: 'Gaming Chair Elite',
    price: 349,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Furniture',
    description: 'Maximum comfort for long gaming sessions.',
  },
];

const CATEGORIES = ['All', 'Audio', 'Wearables', 'Accessories', 'Furniture'];
const PRICE_RANGES = ['Under $50', '$50 - $200', 'Over $200'];

const MEGA_MENU_DATA: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/home' },
  {
    id: 'category-1', // Changed ID
    label: 'Category 1', // Changed Label

    href: '/category-1', // Changed href
    megaMenuColumns: [
      {
        // Level 1
        id: 'cat1-col1', // Changed ID
        level: 1,
        title: 'Category 1',
        widthClass: 'w-60',
        links: [
          {
            label: 'Sub Category 1.1',
            href: '/cat1/sub1',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col2-sub1',
          }, // Changed label, href, revealsId
          { label: 'Feature 1.2', href: '/cat1/feat2', styleType: 'default' }, // Changed label, href
          { label: 'Feature 1.3', href: '/cat1/feat3', styleType: 'default' }, // Changed label, href
          {
            label: 'About Category 1',
            href: '/cat1/about',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Support for Cat 1',
            href: '/cat1/support',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
      {
        // Level 2 - Triggered by '/cat1/sub1'
        id: 'cat1-col2-sub1', // Changed ID
        level: 2,
        parentColumnId: 'cat1-col1',
        triggerLinkHref: '/cat1/sub1', // Matches trigger link href
        title: 'About Sub Category 1.1', // Changed title
        widthClass: 'w-60',
        links: [
          {
            label: 'Product A',
            href: '/cat1/sub1/prod-a',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col3-prod-a',
          }, // Changed label, href, revealsId
          {
            label: 'Product B',
            href: '/cat1/sub1/prod-b',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col3-prod-b',
          }, // Changed label, href, revealsId
          {
            label: 'Service C',
            href: '/cat1/sub1/serv-c',
            styleType: 'chevron',
          }, // Changed label, href
        ],
      },
      {
        // Level 3 - Triggered by '/cat1/sub1/prod-a'
        id: 'cat1-col3-prod-a', // Changed ID
        level: 3,
        parentColumnId: 'cat1-col2-sub1',
        triggerLinkHref: '/cat1/sub1/prod-a', // Matches trigger link href
        title: 'About Product A', // Changed title
        widthClass: 'w-72',
        links: [
          {
            label: 'Specifications',
            href: '/cat1/sub1/prod-a/specs',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Usage Guide',
            href: '/cat1/sub1/prod-a/guide',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
      {
        // Level 3 - Triggered by '/cat1/sub1/prod-b'
        id: 'cat1-col3-prod-b', // Changed ID
        level: 3,
        parentColumnId: 'cat1-col2-sub1',
        triggerLinkHref: '/cat1/sub1/prod-b', // Matches trigger link href
        title: 'About Product B', // Changed title
        widthClass: 'w-72',
        links: [
          {
            label: 'Product B Info 1',
            href: '/cat1/sub1/prod-b/info1',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Product B Info 2',
            href: '/cat1/sub1/prod-b/info2',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
    ],
  },
  {
    // Top Level "Category 2" - Simpler Example
    id: 'category-2', // Changed ID
    label: 'Category 2', // Changed Label
    href: '/category-2', // Changed href
    megaMenuColumns: [
      {
        // Only Level 1
        id: 'cat2-col1', // Changed ID
        level: 1,
        widthClass: 'w-72',
        links: [
          { label: 'All Category 2 Items', href: '/category-2/all' }, // Changed label, href
          { label: 'Featured Item Y', href: '/category-2/item-y' }, // Changed label, href
        ],
      },
    ],
  },
  { id: 'support', label: 'Support Center', href: '/support' }, // Changed label
  { id: 'resources', label: 'Resource Hub', href: '/resources' }, // Changed label
];

const FOOTER_DATA = {
  categories: [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '#' },
        { name: 'Flash Sales', href: '#' },
        { name: 'Corporate Gifting', href: '#' },
        { name: 'New Arrivals', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Info', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { name: 'twitter', href: '#' },
    { name: 'linkedin', href: '#' },
    { name: 'github', href: '#' },
  ],
  subscribePlaceholder: 'Email address',
  subscribeButtonText: 'Join',
  subscribeMessage:
    'Join 50k+ tech enthusiasts for exclusive early access and deep discounts.',
};

const EcommercePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('featured');
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPriceRanges.some((range) => {
          if (range === 'Under $50') return product.price < 50;
          if (range === '$50 - $200')
            return product.price >= 50 && product.price <= 200;
          if (range === 'Over $200') return product.price > 200;
          return false;
        });
      });
    }

    const sorted = [...filtered];
    switch (sortOrder) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, selectedPriceRanges, sortOrder]);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const searchSuggestions = useMemo(
    () => PRODUCTS.map((p) => ({ name: p.name, href: '#' })),
    []
  );

  return (
    <>
      <EcommerceTemplate
        megaMenu={
          <MegaMenu
            menuData={MEGA_MENU_DATA}
            showSearch={true}
            searchValue={searchQuery}
            onSearchChange={(val) => setSearchQuery(val)}
            searchPlaceholder="Search products..."
            searchData={searchSuggestions}
            cart={
              <div className="group relative">
                <Button variant="icon" className="relative">
                  <Icon
                    name="shoppingCart"
                    variant="outline"
                    className="h-6 w-6"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white ring-2 ring-white">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            }
            isLoggedIn={true}
            onLogoutClick={() => console.log('logout')}
          />
        }
        hero={
          <div className="relative my-6 overflow-hidden rounded-3xl bg-gray-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 mix-blend-multiply" />
            <div className="relative mx-auto max-w-7xl px-8 py-24 sm:px-12">
              <h1 className="mb-6 text-6xl font-extrabold tracking-tight">
                Summer Tech Sale
              </h1>
              <p className="mb-10 max-w-2xl text-2xl text-blue-100">
                Elevate your digital life with premium tech. Up to 50% off on
                award-winning essentials.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white px-8 text-blue-600 hover:bg-gray-100"
                >
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white px-8 text-white hover:bg-white/10"
                >
                  View Deals
                </Button>
              </div>
            </div>
          </div>
        }
        filters={
          <div className="sticky top-6 space-y-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full rounded-xl px-4 py-2 text-left transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-50 font-semibold text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Price Range
              </h3>
              <div className="space-y-3">
                {PRICE_RANGES.map((range) => (
                  <label
                    key={range}
                    className="group flex cursor-pointer items-center"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedPriceRanges.includes(range)}
                        onChange={() => handlePriceRangeChange(range)}
                      />
                    </div>
                    <span className="ml-3 text-gray-600 transition-colors group-hover:text-gray-900">
                      {range}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        }
        products={
          <div className="flex-1">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'All'
                    ? 'All Products'
                    : `${selectedCategory} Products`}
                </h2>
                <p className="mt-1 text-gray-500">
                  Showing {filteredProducts.length} items
                </p>
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="rounded-xl border-none bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCardWithRating
                    key={product.id}
                    imageUrl={product.image}
                    productName={product.name}
                    price={product.price}
                    description={product.description}
                    rating={product.rating}
                    reviewsCount={Math.floor(Math.random() * 200) + 50}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-gray-50 py-20 text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="text-xl font-bold text-gray-900">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedPriceRanges([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        }
        footer={
          <FooterWithCategories
            categories={FOOTER_DATA.categories}
            socialLinks={FOOTER_DATA.socialLinks}
            subscribePlaceholder={FOOTER_DATA.subscribePlaceholder}
            subscribeButtonText={FOOTER_DATA.subscribeButtonText}
            subscribeMessage={FOOTER_DATA.subscribeMessage}
          />
        }
      />
      {showToast && (
        <div className="fixed bottom-10 right-10 z-50">
          <ToastNotification
            message="Item added to your cart."
            type="success"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </>
  );
};

export default EcommercePage;

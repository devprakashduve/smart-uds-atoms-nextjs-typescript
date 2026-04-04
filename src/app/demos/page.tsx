import Link from 'next/link';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

export default function DemosPage() {
  const demos = [
    {
      title: 'E-commerce Store',
      description: 'A complete e-commerce template with product grid, filters, cart, and checkout flow.',
      href: '/demos/ecommerce',
      icon: '🛍️',
      features: ['Product Grid', 'Filters & Search', 'Shopping Cart', 'Hero Section'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog template with featured posts, article listings, and sidebar widgets.',
      href: '/demos/blog',
      icon: '📝',
      features: ['Featured Posts', 'Article Grid', 'Categories', 'Newsletter'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Social Media Feed',
      description: 'A social media template with post creation, feed, trending topics, and suggestions.',
      href: '/demos/social',
      icon: '💬',
      features: ['Post Creation', 'Activity Feed', 'Trending Topics', 'User Suggestions'],
      color: 'from-pink-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Template Demos</h1>
              <p className="text-gray-600 mt-1">Explore our pre-built application templates</p>
            </div>
            <Link href="/">
              <Button variant="outline" size="md">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Built with Atomic Design Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our comprehensive component library enables you to build complex, 
            production-ready applications with ease and scalability.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group block relative"
            >
              <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col transform group-hover:-translate-y-2">
                {/* Enhanced Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[0.7rem] font-bold text-gray-900 uppercase tracking-widest shadow-sm z-10 border border-gray-200">
                  Enhanced
                </div>

                {/* Card Header */}
                <div className={`bg-gradient-to-br ${demo.color} p-12 text-white text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{demo.icon}</div>
                  <h3 className="text-3xl font-bold tracking-tight">{demo.title}</h3>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-8 leading-relaxed italic">&ldquo;{demo.description}&rdquo;</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {demo.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-700 font-medium">
                          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mr-3">
                            <Icon name="check" className="w-3 h-3 text-green-600" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full rounded-2xl group-hover:shadow-xl transition-all duration-300 font-bold tracking-wide"
                    >
                      Explore Template
                      <Icon name="arrowRight" className="w-4 h-4 ml-2 inline transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Component Info */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                <Icon name="cog" className="w-5 h-5 text-white" />
              </span>
              Why use these templates?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-600">
              <div className="space-y-3">
                <div className="text-2xl">🧩</div>
                <h4 className="font-bold text-gray-900">Atomic Design</h4>
                <p className="text-sm leading-relaxed">
                  Strict adherence to atomic methodology ensures maximum reusability and clean architecture.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">🎨</div>
                <h4 className="font-bold text-gray-900">Themable</h4>
                <p className="text-sm leading-relaxed">
                  Easily customize colors, spacing, and typography using Tailwind CSS tokens.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">📱</div>
                <h4 className="font-bold text-gray-900">Responsive</h4>
                <p className="text-sm leading-relaxed">
                  Mobile-first layouts that work flawlessly across all screen sizes and devices.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">⚡</div>
                <h4 className="font-bold text-gray-900">Performance</h4>
                <p className="text-sm leading-relaxed">
                  Optimized for speed and SEO with Next.js best practices built-in from the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

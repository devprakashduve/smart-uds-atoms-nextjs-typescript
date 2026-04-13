import Link from 'next/link';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

export default function DemosPage() {
  const demos = [
    {
      title: 'E-commerce Store',
      description:
        'A complete e-commerce template with product grid, filters, cart, and checkout flow.',
      href: '/demos/ecommerce',
      icon: '🛍️',
      features: [
        'Product Grid',
        'Filters & Search',
        'Shopping Cart',
        'Hero Section',
      ],
      color: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog template with featured posts, article listings, and sidebar widgets.',
      href: '/demos/blog',
      icon: '📝',
      features: ['Featured Posts', 'Article Grid', 'Categories', 'Newsletter'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Social Media Feed',
      description:
        'A social media template with post creation, feed, trending topics, and suggestions.',
      href: '/demos/social',
      icon: '💬',
      features: [
        'Post Creation',
        'Activity Feed',
        'Trending Topics',
        'User Suggestions',
      ],
      color: 'from-pink-600 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Template Demos
              </h1>
              <p className="mt-1 text-gray-600">
                Explore our pre-built application templates
              </p>
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
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900">
            Built with Atomic Design Principles
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover how our comprehensive component library enables you to
            build complex, production-ready applications with ease and
            scalability.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group relative block"
            >
              <div className="flex h-full transform flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-2">
                {/* Enhanced Badge */}
                <div className="absolute right-4 top-4 z-10 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-gray-900 shadow-sm backdrop-blur-sm">
                  Enhanced
                </div>

                {/* Card Header */}
                <div
                  className={`bg-gradient-to-br ${demo.color} relative overflow-hidden p-12 text-center text-white`}
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="mb-6 transform text-7xl transition-transform duration-500 group-hover:scale-110">
                    {demo.icon}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">
                    {demo.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-8">
                  <p className="mb-8 italic leading-relaxed text-gray-600">
                    &ldquo;{demo.description}&rdquo;
                  </p>

                  <div className="mb-8">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {demo.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm font-medium text-gray-700"
                        >
                          <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                            <Icon
                              name="check"
                              className="h-3 w-3 text-green-600"
                            />
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
                      className="w-full rounded-2xl font-bold tracking-wide transition-all duration-300 group-hover:shadow-xl"
                    >
                      Explore Template
                      <Icon
                        name="arrowRight"
                        className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Component Info */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-12 shadow-xl">
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="mb-8 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Icon name="cog" className="h-5 w-5 text-white" />
              </span>
              Why use these templates?
            </h3>
            <div className="grid gap-10 text-gray-600 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="text-2xl">🧩</div>
                <h4 className="font-bold text-gray-900">Atomic Design</h4>
                <p className="text-sm leading-relaxed">
                  Strict adherence to atomic methodology ensures maximum
                  reusability and clean architecture.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">🎨</div>
                <h4 className="font-bold text-gray-900">Themable</h4>
                <p className="text-sm leading-relaxed">
                  Easily customize colors, spacing, and typography using
                  Tailwind CSS tokens.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">📱</div>
                <h4 className="font-bold text-gray-900">Responsive</h4>
                <p className="text-sm leading-relaxed">
                  Mobile-first layouts that work flawlessly across all screen
                  sizes and devices.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">⚡</div>
                <h4 className="font-bold text-gray-900">Performance</h4>
                <p className="text-sm leading-relaxed">
                  Optimized for speed and SEO with Next.js best practices
                  built-in from the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-gray-600 sm:px-6 lg:px-8">
          <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

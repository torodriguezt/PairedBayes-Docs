export default function Navigation() {
  return (
    <nav className="w-full md:w-64 bg-gray-100 p-8 fixed h-auto md:h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Contents</h2>
      {['info', 'installation', 'usage', 'api', 'examples', 'authors'].map((item) => (
        <a key={item} href={`#${item}`} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </nav>
  )
}


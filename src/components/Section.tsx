interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-12 p-6 border border-gray-200 rounded-lg shadow-sm relative">
      <div className="absolute top-0 left-0 w-12 h-1 bg-blue-600 rounded-tl-lg"></div>
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      {children}
    </section>
  )
}


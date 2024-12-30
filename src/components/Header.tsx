interface HeaderProps {
  language: 'R' | 'Python'
  toggleLanguage: () => void
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  return (
    <h1 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-8 flex justify-between items-center">
      PairBayes
      <button
        onClick={toggleLanguage}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors text-sm"
      >
        Switch to {language === 'R' ? 'Python' : 'R'}
      </button>
    </h1>
  )
}


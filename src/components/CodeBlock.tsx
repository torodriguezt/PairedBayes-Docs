interface CodeBlockProps {
  language: 'R' | 'Python'
  type: 'installation' | 'usage' | 'examples'
}

const codeExamples = {
  R: {
    installation: '# R installation\ninstall.packages("pairbayes")',
    usage: `# R example
library(pairbayes)

# Example usage
result <- paired_test(c(1, 2, 3), c(1.5, 2.5, 3.5))
print(result)`,
    examples: `# R example
library(pairbayes)

# Example with options
result <- paired_test(c(1, 2, 3), c(1.5, 2.5, 3.5), prior="default")
print(result)`
  },
  Python: {
    installation: '# Python installation\npip install pairbayes',
    usage: `# Python example
from pairbayes import paired_test

# Example usage
result = paired_test([1, 2, 3], [1.5, 2.5, 3.5])
print(result)`,
    examples: `# Python example
from pairbayes import paired_test

# Example with options
result = paired_test([1, 2, 3], [1.5, 2.5, 3.5], prior="default")
print(result)`
  }
}

export default function CodeBlock({ language, type }: CodeBlockProps) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <code>{codeExamples[language][type]}</code>
    </pre>
  )
}


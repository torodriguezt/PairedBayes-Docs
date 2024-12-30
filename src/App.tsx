import React, { useState } from "react";
import "./styles/doc-styles.css"; // Importa los estilos personalizados

function App() {
  const [isRGlobal, setIsRGlobal] = useState(true);

  const toggleGlobal = () => {
    setIsRGlobal(!isRGlobal);
  };

  return (
    <div>
      <nav>
        <h2>Contents</h2>
        <a href="#info" className="nav-link">Package Info</a>
        <a href="#installation" className="nav-link">Installation</a>
        <a href="#usage" className="nav-link">Usage</a>
        <a href="#examples" className="nav-link">Examples</a>
        <a href="#authors" className="nav-link">Authors</a>
      </nav>

      <main className="content">
        <h1>
          PairedBayes
          <button className="toggle-button" onClick={toggleGlobal}>
            {isRGlobal ? "Switch to Python" : "Switch to R"}
          </button>
        </h1>

        <section id="info" className="section">
          <h2>Package Info</h2>
          <p>
            <strong>PairedBayes</strong> is a Bayesian package for pretest-posttest studies with binary outcomes.
             It uses the bivariate beta distribution and Fully Bayesian Significance Testing (FBST) to evaluate hypotheses, 
             offering alternatives to p-values with adaptive significance levels. Ideal for small-sample studies, such as clinical 
             or educational interventions.
          </p>
        </section>

        <section id="installation" className="section">
          <h2>Installation</h2>
          <pre>
            {isRGlobal
              ? `# R installation
install.packages("pairedbayes")`
              : `# Python installation
pip install pairedbayes`}
          </pre>
        </section>

        <section id="usage" className="section">
          <h2>Usage</h2>
          <pre>
            {isRGlobal
              ? `# R example
library(pairedbayes)

result <- paired_test(c(1, 2, 3), c(1.5, 2.5, 3.5))
print(result)`
              : `# Python example
from pairedbayes import paired_test

result = paired_test([1, 2, 3], [1.5, 2.5, 3.5])
print(result)`}
          </pre>
        </section>

        <section id="examples" className="section">
          <h2>Examples</h2>
          <pre>
            {isRGlobal
              ? `# R example
library(pairedbayes)

result <- paired_test(c(1, 2, 3), c(1.5, 2.5, 3.5), prior="default")
print(result)`
              : `# Python example
from pairedbayes import paired_test

result = paired_test([1, 2, 3], [1.5, 2.5, 3.5], prior="default")
print(result)`}
          </pre>
        </section>

        <section id="authors" className="section">
          <h2>Authors</h2>
          <p>The PairedBayes package was developed by:</p>
          <ul>
            <li>
              <strong>Alejandra Estefanía Patiño Hoyos:</strong> Professor at Institución Universitaria Pascual Bravo
            </li>
            <li>
              <strong>Johnatan Cardona Jimenez:</strong> Professor at Universidad Nacional de Colombia
            </li>
            <li>
              <strong>Tomas Rodriguez Taborda:</strong> Student at Universidad Nacional de Colombia
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

//React Hooks içerir
import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  //Hook functions 'her zaman!' en üst seviyede çağırılır buradaki gibi
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent =
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>

        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  return (
    <div>
      {/* Oluşturulan componentler (fonksşyonlar) jsx dosylarında html tagi gibi kullanılabilir */}
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {/* Yeni Dynamic hali */}
            {CORE_CONCEPTS.map((conceptItems) => <CoreConcept key={conceptItems.title} {...conceptItems} />)}
            
            {/* Eski Static hali */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

            {/* Spread operatörü (...) kullanırsak tüm parametleri otomatik olarak alır */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              label="Components"
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            />
            <TabButton
              label="JSX"
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            />
            <TabButton
              label="Props"
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            />
            <TabButton
              label="State"
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            />
          </menu>

        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;

//React Hooks içerir
import { Fragment } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import TabButtons from './components/TabButton/TabButtons.jsx'

function App() {
  return (
    // 'Fragment' tag is one of the alternative way to avoid redundant 'div' tag
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <TabButtons />
      </main>
    </Fragment>
  );
}

export default App;

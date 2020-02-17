import React from 'react';
import './app.scss';
import Template from './components/template/Template.js';
import Heading from './components/heading/Heading.js';
import Subheading from './components/subheading/Subheading.js';
import Description from './components/description/Description.js';

function App() {
  return (
    <Template>
      <Heading text="kreator zaproszeń ślubnych online" />
      <Subheading text="Stwórzcie zaproszenia ślubne i pobierzcie w formacie pdf" />
      <Description>
        <p>Przygotowania do ślubu wymagają dużo czasu, poświęcenia i wydatków. W końcu każda para młoda chce, by ten dzień był wyjątkowy. Ponieważ z pewnością przed Wami dużo przygotowań, warto ułatwić sobie zadanie i zaoszczędzić czas i pieniądze tam, gdzie to możliwe</p>
        <p>Kreator zaproszeń ślubnych pomoże Wam przygotować zaproszenia na ślub za darmo i w stosunkowo krótkim czasie (choć to oczywiście zależy od liczby gości).</p>
        <p>Wystarczy, że wypełnicie kolejne pola kreatora a na koniec pobierzecie pdf z gotowymi zaproszeniami.</p>
        <p>Następnie wystarczy wydrukować zaproszenia na ładnym papierze i gotowe!</p>
      </Description>
    </Template>
  );
}

export default App;

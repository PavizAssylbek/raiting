import React from 'react';
import {Raiting} from './component'

function App() {

  const obj = {
    reviewCount: 4.0,
    overallRating: 223,
    rates: {
      one: 186,
      two: 18,
      three: 12,
      four: 5,
      five: 2
    }
  }


  return (
    <div className="App">
      <Raiting data={obj} />
    </div>
  );
}

export default App;

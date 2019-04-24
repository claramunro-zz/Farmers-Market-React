import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import ProductList from './ProductList';

function App(){
  let columns = {
    display: 'grid',
    gridTemplateColumns: '30vw 50vw',
    gridgap: '80px'
  }
  return (
    <div>
      <style jsx global>{`
        body {
          padding: 50px;
        }
        .clickable {
          color: black;
        }
        .clickable:hover {
          cursor: pointer;
          color: white;
        }
      `}</style>
        <div>
      <Header/>
      </div>
      <div style={columns}>
      <div>
      <MarketSchedule/>
      </div>
      <div>
      <ProductList/>
      </div>
      </div>
    </div>
  );
}

export default App;
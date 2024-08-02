
import * as React from 'react';
// const user = {
//     name: 'photo',
//     imageUrl: "Screenshot (390).png",
//     imageSize: 90,
    
//   };
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  // const products1 = [
  //   { title: 'Cabbage', isFruit: false, id: 1 },
  //   { title: 'Garlic', isFruit: true, id: 2 },
  //   { title: 'Apple', isFruit: true, id: 3 },
  // ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  const listItems1 = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'yellow' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  
  
 function MyButton() {
    return (
        <>
      
  <ul>{listItems}</ul><br/>
  <ul>{listItems1}</ul>     
        </>
    );
  }
  
  export default MyButton ;
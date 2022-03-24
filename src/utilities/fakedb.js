// use local storage to manage cart data
const addToDb = id =>{

    let shoppingCart = {};           //it is a object
  //get the shopping cart from local storage
   const storedCart = localStorage.getItem('shopping-cart');
   if(storedCart){
       shoppingCart = JSON.parse(storedCart);   //all values should be number using parse
   }

 // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
     
        const newQuantity = quantity + 1 ;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] =1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = (id) =>{
  const storedCart = localStorage.getItem('shopping-cart')

  if(storedCart){
      const shoppingCart = JSON.parse(storedCart)  //bcz storedCart is string nd u cant check in string using in loop
      if( id in shoppingCart){
         delete shoppingCart[id];
         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
      }
  }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}
export{addToDb, removeFromDb, deleteShoppingCart}
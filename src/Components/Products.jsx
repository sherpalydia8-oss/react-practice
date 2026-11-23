function ProductCard(item){
    return<>
   {Products.map((item,index)=>(
      <div className="card">
         <h1>{value.name}</h1>
            <h3>${value.price.toFixed(2)}</h3>
            <p>{value.category}</p>
            <p>Stock: {value.stock}</p>
            <p>Rating: {value.rating}</p>
            <img src={value.image} alt={value.name} />
                  </div>
    </>
}
      export default Products;
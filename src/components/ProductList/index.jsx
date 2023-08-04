import { ProductCard } from "./ProductCard";
import style from "./style.module.sass"

export const ProductList = ({ productList,addCart }) => {
   return (
      <ul className={style.prducts_container}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCart={addCart}/>
         ))}
      </ul>
   );
};

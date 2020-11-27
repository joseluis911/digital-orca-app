import React from "react";

import  classes from './Product.module.css';
import DishImage from '../../images/dish.png';

const Product = props => {
    return (
     <div className={classes.Product}>
        <div>
             <img src={DishImage} width="auto" height="150px" alt="platillo" />
        </div>
        <div className={classes.Product__Description}>
        <h2>{props.name}</h2>
            <p>Este platillo lleva cebolla y pescado sabe mamon</p>
            </div>
        <div className={classes.Price}>
            <p>$ 60 varos</p>
        </div>
     </div>


    )
}
export default Product
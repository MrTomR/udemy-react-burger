import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transfromedIngredients = 
        Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
            });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
                {transfromedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger; 
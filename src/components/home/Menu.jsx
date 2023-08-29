import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = () => {};
  return (
    <div id="menu">
      <h1>MENU   <RestaurantMenuIcon/> </h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={320}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={570}
          title="Veg Cheese Burger"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1080}
          title="Cheese Burger with French Fries"
          handler={addToCartHandler}
          delay={0.9}
        />
      </div>
    </div>
  );
};

export default Menu;

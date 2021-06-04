import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import ShoppingList from "./ShoppingList";
const Shop = () => {
  const currentHouse = useSelector((state) => state.house.house);
  const info = useSelector((state) =>
    state.house.info.filter((data) => data.name === currentHouse)
  );
  console.log(currentHouse); //test/
  console.log(info);
  if (!currentHouse) return "";
  return (
    <section className="shop fadein ">
      <Grid stretched>
        <Grid.Column width={3} className="side-list">
          <Segment></Segment>
        </Grid.Column>
        <Grid.Column width={13} className="list">
          <Segment>
            <ShoppingList />
          </Segment>
        </Grid.Column>
      </Grid>
    </section>
  );
};

export default Shop;

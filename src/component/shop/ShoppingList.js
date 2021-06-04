import React from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";

const ShoppingList = () => {
  // const currentHouse = useSelector((state) => state.house.house);
  const itemList = useSelector((state) => state.house.itemList);

  return (
    <Container className="shopping-list">
      <Card.Group itemsPerRow={4}>
        {itemList
          ? itemList.map((item) => {
              let { image, name, gender, eyeColour, hairColour, wand } = item;
              let { wood, core, length } = wand;
              let wandDescrip = wand ? `${wood} ${core} ${length}` : "";
              return (
                <Card
                  image={image}
                  header={name}
                  meta={gender}
                  description={`${eyeColour} eyes and ${hairColour} hair`}
                  extra={<p>{wandDescrip}</p>}
                />
              );
            })
          : ""}
      </Card.Group>
    </Container>
  );
};

export default ShoppingList;

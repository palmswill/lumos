import React from "react";
import { Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setHouse, removeHouse } from "../../store/reducers/HouseReducer";

const HouseCard = () => {
  const [currentHouse, houseList] = useSelector((state) => [
    state.house.house,
    state.house.info
  ]);
  const dispatch = useDispatch();

  const handleClickCard = (house) => {
    dispatch(setHouse(house));
  };

  return (
    <section className="house-section">
      {currentHouse ? (
        <button onClick={() => dispatch(removeHouse())}>REMOVE</button>
      ) : (
        <Card.Group centered itemsPerRow={4}>
          {houseList
            .filter(
              (house) => currentHouse === "" || house.name === currentHouse
            )
            .map((house) => {
              return (
                <Card
                  key={house.name}
                  image={house.image}
                  header={house.name}
                  description={house.descrp}
                  className="fadein delay-05s"
                  // style={{ animationDelay: "3s" }}
                  onClick={() => handleClickCard(house.name)}
                />
              );
            })}
        </Card.Group>
      )}
    </section>
  );
};

export default HouseCard;

import React from "react";
import { useParams } from "react-router-dom";
import { Block, Flex } from "vcc-ui";

function ShopPage() {
  const params = useParams();

  return (
    <Block extends={{ padding: "20px" }}>
      <Flex extend={{ paddingLeft: "20px" }}>
        <h1>Shop {params.carId}</h1>
      </Flex>
    </Block>
  );
}

export default ShopPage;

import React from "react";
import { Flex, Text, Link } from "vcc-ui";

function CarouselItem({ data }) {
  const { id, modelName, modelType, bodyType, imageUrl } = data;

  return (
    <Flex
      extend={{
        "@media (min-width: 1024px)": {
          width: "25%",
          padding: "0 20px",
        },
        "@media (min-width: 480px) and (max-width: 1023px)": {
          width: "40%",
        },
        width: "80%",
        textAlign: "left",
        padding: "0 8px",
      }}
    >
      <Flex extend={{ flex: "1 1 auto" }}>
        <Text variant="bates" extend={{ textTransform: "uppercase" }}>
          {bodyType}
        </Text>
        <Text variant="columbus" subStyle="emphasis">
          {modelName}
        </Text>
        <Text variant="columbus">{modelType}</Text>
      </Flex>
      <Flex
        extend={{
          margin: "16px 0",
        }}
      >
        <picture>
          <img src={imageUrl} width="280" height="auto" alt={id} />
        </picture>
      </Flex>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Flex>
          <Link href={`/cars/${id}`} arrow="right">
            Learn
          </Link>
        </Flex>
        <Link href={`/shop/${id}`} arrow="right">
          Shop
        </Link>
      </Flex>
    </Flex>
  );
}

export default CarouselItem;

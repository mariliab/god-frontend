import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Car } from "../types/cars";
import { Block, Flex, Text } from "vcc-ui";

function CarPage() {
  const params = useParams();
  const [car, setCar] = useState<Car[]>([]);

  useEffect(() => {
    axios
      .get<Car[]>("api/cars.json", { baseURL: "/" })
      .then((response) => {
        let car = response.data.filter((car) => car.id === params.carId);
        return car;
      })
      .then((car) => setCar(car))
      .catch((err) => console.log(err));
  }, [params.carId]);

  return (
    <Block extends={{ padding: "20px" }}>
      <Flex extend={{ paddingLeft: "20px" }}>
        <h1>{car[0]?.id}</h1>
        <Flex extend={{ flex: "1 1 auto" }}>
          <Text variant="bates" extend={{ textTransform: "uppercase" }}>
            {car[0]?.bodyType}
          </Text>
          <Text variant="columbus" subStyle="emphasis">
            {car[0]?.modelName}
          </Text>
          <Text variant="columbus">{car[0]?.modelType}</Text>
          <Flex extend={{ margin: "16px 0" }}>
            <picture>
              <img
                src={car[0]?.imageUrl}
                width="1080"
                height="auto"
                alt={car[0]?.id}
              />
            </picture>
          </Flex>
        </Flex>
      </Flex>
    </Block>
  );
}

export default CarPage;

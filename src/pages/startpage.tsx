import React, { useEffect, useState } from "react";
import axios from "axios";
import { Car } from "../types/cars";
import { Block, Flex } from "vcc-ui";
import CarouselBlock from "../components/carousel-block";

function StartPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios
      .get<Car[]>("api/cars.json")
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Block extends={{ padding: "20px" }}>
      <Flex extend={{ paddingLeft: "20px" }}>
        <h1>Volvo cars</h1>
      </Flex>
      <CarouselBlock data={cars} />
    </Block>
  );
}

export default StartPage;

import React, { useRef } from "react";
import { Block, Flex, Click } from "vcc-ui";
import CarouselItem from "./carousel-item";

function CarouselBlock({ data }) {
  const carouselRef = useRef(null);

  function previousSlide() {
    if (carouselRef.current != null) {
      carouselRef.current.scrollBy({
        left: -200,
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function nextSlide() {
    if (carouselRef.current != null) {
      carouselRef.current.scrollBy({
        left: 200,
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <Block extend={{ padding: 20 }}>
      <Flex
        ref={carouselRef}
        extend={{
          flexDirection: "row",
          flexFlow: "row nowrap",
          overflow: "hidden",
        }}
      >
        {data.length > 0 &&
          data.map((item) => {
            return <CarouselItem data={item} key={item.id} />;
          })}
      </Flex>
      <Flex
        extend={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <Click
          onClick={previousSlide}
          extend={{ transform: "rotate(180deg)", lineHeight: "0" }}
          type="button"
          aria-pressed="false"
          aria-labelledby="Previous slide"
          tabIndex="0"
        >
          <img
            src="/images/chevron-circled.svg"
            width="25"
            height="25"
            alt="previous slide"
          />
        </Click>
        <Click
          onClick={nextSlide}
          extend={{ lineHeight: "0", marginLeft: "10px" }}
          type="button"
          aria-pressed="false"
          aria-label="Next slide"
          tabIndex="0"
        >
          <img
            src="/images/chevron-circled.svg"
            width="25"
            height="25"
            alt="next slide"
          />
        </Click>
      </Flex>
    </Block>
  );
}

export default CarouselBlock;

import { useEffect } from "react";
import { HeroeList } from "../components/HeroeList";
import { getHeroesByPublisher } from "../helpers";

export const MarvelPage = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5px",
          fontWeight: "bolder",
          textShadow: "2px 2px 3px gray",
        }}
      >
        MarvelPage
      </h1>{" "}
      <hr />
      <HeroeList publisher={"Marvel Comics"} />
    </>
  );
};

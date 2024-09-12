import { useEffect } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroeList } from "../components/HeroeList";

export const DcPage = () => {
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
        DC Comics
      </h1>
      <hr />
      <HeroeList publisher={"DC Comics"} />
    </>
  );
};

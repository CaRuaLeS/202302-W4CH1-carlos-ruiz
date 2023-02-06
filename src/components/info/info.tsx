import { GENTLEMAN } from "../../mocks/mock-gentleman";
import { Button } from "../button/button";
import { Gentleman } from "../gentleman/gentleman";

export function Info() {
  return (
    <>
      {" "}
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <Button></Button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {GENTLEMAN.map((item) => (
            <Gentleman
              id={item.id}
              name={item.name}
              status={item.status}
              profession={item.profession}
              twitter={item.twitter}
              picture={item.picture}
              alternativeText={item.alternativeText}
              selected={item.selected}
            ></Gentleman>
          ))}
        </ul>
      </main>
    </>
  );
}

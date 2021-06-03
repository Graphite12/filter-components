import { useState } from "react";
import "./display.css";
import items from "./dummy.json";

function Display() {
  const categories = ["All", "Nvidia", "AMD"];
  const [activeCat, setActiveCat] = useState(["All"]);
  const [data, setData] = useState(items);
  console.log(data);
  return (
    <main>
      <header>그래픽 카드 현황</header>
      <section>
        <article>
          {categories.map((c) => {
            const active = activeCat.includes(c);

            return (
              <p>
                <button className={`button ${active && "is-primary"}`}>
                  {c}
                </button>
              </p>
            );
          })}
        </article>
      </section>
      <footer></footer>
    </main>
  );
}
export default Display;

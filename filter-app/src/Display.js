import { useState } from "react";
import Card from "./components/Card";
import "./display.css";
import items from "./dummy.json";

export default function Display() {
  const categories = ["All", ...new Set(items.map((item) => item.company))];
  const [activeCat, setActiveCat] = useState(categories);
  const [data, setData] = useState(items);

  const activeCategory = (btn) => {
    if (btn === "All") {
      setData(items);
      return;
    }

    const filteredData = items.filter((item) => item.company === btn);
    setData(filteredData);
  };

  return (
    <>
      <header>그래픽 카드 정보</header>
      <section>
        <article>
          {activeCat.map((cate) => {
            return (
              <p>
                <button className="btn" onClick={() => activeCategory(cate)}>
                  {cate}
                </button>
              </p>
            );
          })}
        </article>
        <article>
          {data.map((g, i) => {
            return (
              <div>
                <Card card={g} key={i} />
              </div>
            );
          })}
        </article>
      </section>
      <footer></footer>
    </>
  );
}

//   const categories = ["ALL", ...new Set(items.map((item) => item.company))];
//   const [activeCat, setActiveCat] = useState(["All"]);
//   const [data, setData] = useState(items);

//   const activeCategory = (e) => {
//     const category = e.target.innerText.toUpperCase();
//     e.target.classList.toggle("is-primary");

//     if (activeCat.includes(category)) {
//       let newState = activeCat.filter((cat) => {
//         return cat !== category;
//       });
//       setActiveCat(newState);
//     } else {
//       let newState = activeCat.concat(category);
//       setActiveCat(newState);
//     }
//   };

//   if (activeCat.length === 0) {
//     return <p>None!!</p>;
//   }

//   return (
//     <main>
//       <header>그래픽 카드</header>
//       <section>
//         <article>
//           {categories.map((cate) => {
//             const active = activeCat.includes(cate);
//             console.log(cate);
//             return (
//               <p>
//                 <button
//                   className={`button ${active && "is-primary"}`}
//                   onClick={activeCategory}
//                 >
//                   {cate}
//                 </button>
//               </p>
//             );
//           })}
//         </article>
//         <article>
//           {data.map((g, i) => {
//             const active = activeCat.includes(g.company.toUpperCase());
//             return (
//               <div className={`vga ${!active && "is-hidden"}`}>
//                 <Card card={g} key={i} />
//               </div>
//             );
//           })}
//         </article>
//       </section>
//       <footer></footer>
//     </main>
//   );
// }
// export default Display;

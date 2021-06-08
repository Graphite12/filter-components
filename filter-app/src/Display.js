import { useState, useEffect } from "react";
import Card from "./components/Card";
import Catbtn from "./components/Catbtn";
import SearchBar from "./components/SearchBar";
import "./display.css";

import items from "./dummy.json";

export default function Display() {
  // const categories = ["All", ...new Set(items.map((item) => item.company))];

  // console.log(categories);
  // const [activeCat, setActiveCat] = useState(categories);'

  // const activeCategory = (btn) => {
  //   if (btn === "All") {
  //     setData(items);
  //     return;
  //   }

  //   const filteredData = items.filter((item) => item.company === btn);
  //   setData(filteredData);
  // };

  const [activeCat, setActiveCat] = useState("All");
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const [filterVga, setFilterVga] = useState([]);

  useEffect(() => {
    activeCat === "All"
      ? setData(items)
      : setData(items.filter((vga) => vga.company === activeCat));
  }, [activeCat]);

  useEffect(() => {
    setFilterVga(
      data.filter((gpu) =>
        gpu.model.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const renderList = filterVga.map((g, i) => {
    return (
      <div className="card_container">
        <Card card={g} key={i} />
      </div>
    );
  });

  console.log(data);
  return (
    <main>
      <header>
        <h1>그래픽 카드</h1>
      </header>
      <SearchBar onChange={(e) => setSearch(e.target.value)} />
      <section>
        <article className="categories">
          {/* {activeCat.map((cate) => {
            return <button className="cat_btn hover">{cate}</button>;
          })} */}
          {/* {activeCat.map((cat) => {
            <Card name={cat} />;
          })} */}
          <Catbtn
            name="All"
            catActive={activeCat === "All" ? true : false}
            handleSetCat={setActiveCat}
          />
          <Catbtn
            name="Nvidia"
            catActive={activeCat === "Nvidia" ? true : false}
            handleSetCat={setActiveCat}
          />
          <Catbtn
            name="AMD"
            catActive={activeCat === "AMD" ? true : false}
            handleSetCat={setActiveCat}
          />
        </article>
        <article className="card_list">
          {renderList.length > 0 ? renderList : "제품이 존재하지 않습니다."}
        </article>
      </section>
      <footer></footer>
    </main>
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

import { specialChars } from "@testing-library/user-event";
import "./card.css";

export default function Card({ card }) {
  // console.log(card);
  const { model, kind, company, image, spec } = card;
  console.log(spec.architecture);
  return (
    <>
      <header>
        <h1>{model}</h1>
      </header>
      <figure className="image_box">
        <img src={image} />
      </figure>
      <span>제조사: {company}</span>
      <span>종류: {kind}</span>
      <span>모델명: {model}</span>
      <span>아키텍쳐: {spec.architecture}</span>
      <span>메모리: {spec.vram}</span>
    </>
  );
}

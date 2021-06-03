export default function Card({ card }) {
  // console.log(card);
  const { model, kind, company, image } = card;
  return (
    <div>
      <figure>
        <img src={image} />
      </figure>

      {model}
      {kind}
      {company}
    </div>
  );
}

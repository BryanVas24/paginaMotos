type Cardprops = {
  card;
};
export default function Card({ card }: Cardprops) {
  return (
    <div>
      {card.icon}
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <a href={card.link}>Ver más</a>
    </div>
  );
}

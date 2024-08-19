import { HomeCardsinfo } from "@/src/types";
import Link from "next/link";

type Cardprops = {
  card: HomeCardsinfo;
};
export default function Card({ card }: Cardprops) {
  return (
    <div className="bg-alice-blue border rounded-sm w-3/4 md:w-1/4 text-center my-9">
      <div className="text-8xl flex justify-center text-davys-gray">
        {card.icon}
      </div>

      <h3 className="text-2xl font-bold text-davys-gray">{card.title}</h3>
      <p className="px-10 text-justify my-4">{card.description}</p>
      <button className="mb-4">
        <Link
          className="bg-stone-700 hover:bg-stone-800 w-full px-3 py-1 border rounded hover:shadow-lg text-white font-black text-xl "
          href={card.link}
        >
          Ver más
        </Link>
      </button>
    </div>
  );
}

/* eslint-disable react/prop-types */
export default function Card({ data }) {
  const { name, tagline, image_url, abv, ibu, food_pairing, brewers_tips } =
    data;
  return (
    <div className="flex w-96 bg-gray-100 shadow-md rounded-lg p-4 font-['Open_Sans']">
      <div className="h-96 flex justify-center w-32">
        <img className="h-full" src={image_url} alt={name} />
      </div>
      <div className="w-2/6 flex flex-col grow text-gray-700">
        <div className="text-black font-black font-['IM_Fell_English'] text-2xl">
          {name}
        </div>
        <div className="italic">{tagline}</div>
        <div className="text-teal-600 font-semibold mt-2 uppercase">
          Alcohol: {abv}%
        </div>
        <div className="text-red-700 font-semibold uppercase">
          Bitterness: {ibu} IBU
        </div>
        <div className="mt-2">Tastes better with {food_pairing.join(", ")}</div>
        <div className="mt-2 grow  text-justify text-gray-600">
          Tips: {brewers_tips}
        </div>
      </div>
    </div>
  );
}

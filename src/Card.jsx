import "./App.css"
export default function Cards({ id, image, name, description, rating, priceCents }) {

  return (
    <div className="flex flex-col bg-white w-65 overflow-hidden rounded-lg shadow-md p-4 m-4 ">
      <p className="text-xl font-semibold text-black mb-2">{name}</p>
       <div className="flex items-center justify-center mb-2">
       <p className="text-yellow-500 font-medium ">⭐ {rating.stars} ({rating.count} reviews)</p>
        </div> 
        <img src={image} alt="" className="w-fit h-60 object-cover m-5 p-5 px-2 py-1 " />
    
        <div className="flex gap-44">
        <p className="text-black font-bold">${priceCents}.00</p>
     
      <select className="rounded px-2 py-1 mb-2">
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
      </select>
      </div>
      <button className="bg-black text-white py-2 rounded hover:bg-orange-400">Add To Cart</button>
    </div>
  );
}




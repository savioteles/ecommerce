import { useContext } from "react"
import { ShoppingContext } from "../../contexts/ShoppingProvider";

export function Product({image, title, description, price, product}){

    const {addToCart} = useContext(ShoppingContext); 

    return (
        <div className="w-80 h-full aspect-square flex flex-col items-center p-2.5 gap-2.5 ring-1 ring-black/30 rounded">
            <figure className="">
                <img src={`data:image/png;base64,${image}`} alt={description} className="h-44" />
            </figure>
            <h2 className="text-xl font-bold text-center">
                {title.length > 20 ? title.slice(0, 20) + '...' : title}
            </h2>
            <p className="text-center">
                {description.length > 100 ? description.slice(0, 100) + '...' : description}
            </p>
            <p className="text-center font-thin text-2xl border-y-[1px] border-y-black/30 w-full p-2">
                $ {price.toFixed(2)}
            </p>
            <div className="flex gap-2.5 flex-wrap justify-center items-center">
                <button className="text-white font-bold bg-black/80 rounded p-2 cursor-pointer text-center hover:bg-black/100 transition-all">Comprar agora</button>
                <button className="text-white font-bold bg-black/80 rounded p-2 cursor-pointer text-center hover:bg-black/100 transition-all" onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

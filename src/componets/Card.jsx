import { Link } from "react-router-dom";

function Card({ imagen, title, link }) {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg w-full">
            {/* // max-w-sm mx-auto */}
            <img
                src={imagen}
                alt={title}
                className="w-full h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Link to={link}>
                <div
                    className="absolute bottom-0 w-full bg-black
                               bg-opacity-60 text-white text-center 
                               py-4 font-bold text-lg cursor-pointer 
                               transition-colors duration-300 group-hover:text-black group-hover:bg-primario"
                >
                    {title}
                </div>
            </Link>
        </div>
    );
}

export default Card;

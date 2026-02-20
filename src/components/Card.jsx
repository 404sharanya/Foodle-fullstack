import {Link} from "react-router-dom";
import "./Card.css";

function Card ({title, image, path}){
    return (
        <Link to={path} className="card-link">
            <div className="card">
                {/*Image */}
                <img src={image} alt={title} className="card-img" />
                    <h3>{title}</h3>
            </div>
        </Link>
    );
}

export default Card;
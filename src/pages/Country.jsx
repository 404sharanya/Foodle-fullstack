import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./Country.css";

function Country(){
    const {name} = useParams();
    
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDishes = async () => {
            try{
                const res = await fetch(
                    `http://localhost:5000/recipes?country=${name}`
                );

                const data = await res.json();
                setDishes(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchDishes();
    }, [name]);

    if(loading) return <p>Loading...</p>;

    return (
        <div className="country-page">
            <h1>
                {name.toUpperCase()} Cuisine
            </h1>
            
            <div className="card-grid">
            {dishes ? (dishes.map((dish) => (
                    <Card
                        key={dish.id} 
                        title={dish.dishName} 
                        image={dish.image} 
                        path={`/recipe/${dish._id}`}
                        />
            ))
        ) : (
            <p>No dishes found.</p>
        )}
        </div>
    </div>
    );
}

export default Country;
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import "./Recipe.css";

function Recipe(){
    const unitGroups = {
        weight: ["g", "ml", "pieces"],
        volume: ["cups", "tbsp", "tsp", "pieces"]
    };

    const {dishId} = useParams();

    const [selectedDish, setSelectedDish] = useState(null);
    const [loading, setLoading] = useState(true);
    const [servings, setServings] = useState(1);
    const [unitType, setUnitType] = useState("weight");

    useEffect(() => {
        const fetchDish = async() => {
            try {
                const res = await fetch(`http://localhost:5000/recipes/${dishId}`);
                if(!res.ok) throw new Error("Dish not found");

                const data = await res.json();
                setSelectedDish(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchDish();
    }, [dishId]);

    if(loading) return <p>Loading...</p>;
    if(!selectedDish) return <p>Dish not found</p>

    return (
        <div className="recipe-page">
            <h1>{selectedDish.dishName}</h1>
            <img src={selectedDish.image} alt={selectedDish.dishName} className="recipe-img"/>
            
            <section>
            <h2>Ingredients:</h2>

            {/*servings control */}
            <div className="controls">
            <div>
                <label className="label-text">Servings: </label>
                <div className="servings-control">
                    <button 
                    onClick={() => servings > 1 && setServings(servings-1)}>
                        -
                    </button>

                    <span>{servings}</span>

                    <button onClick={() => setServings(servings+1)}>
                        +
                    </button>
                </div>
            </div>

            {/*Unit control */}
            <div className="unit-toggle">
                <span className="unit-label">Unit:</span>

                <div className="unit-buttons">
                <button
                    className={unitType === "weight" ? "active" : ""}
                    onClick={() => setUnitType("weight")}
                >
                    Weight
                </button>

                <button
                    className={unitType === "volume" ? "active" : ""}
                    onClick={() => setUnitType("volume")}
                >
                    Volume
                </button>
                </div>
            </div>
            </div>

            {/*Components Rendering*/}
            {selectedDish.components.map((comp, i) => (
                <div key={i}>
                    <h3>{comp.name}</h3>

                    <ul>
                        {comp.ingredients.map((ing, index) => {
                            const availableUnits = unitGroups[unitType];
                            let baseQty = null;
                            let usedUnit = null;

                            for(let u of availableUnits){
                                if(ing.units?.[u]){
                                    baseQty = ing.units[u];
                                    usedUnit = u;
                                    break;
                                }
                            }

                            if(!baseQty) return null;

                            return (
                                <li key={index}>
                                    {Number((baseQty  *  servings).toFixed(2))} {usedUnit} {ing.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
            </section>

            <section>
                <div className="steps-section">
            <h2>Steps:</h2>
                {selectedDish.steps.map((section, index) => (
                    <div key={index} className="step-group">

                        {selectedDish.steps.length > 1 && (
                            <h3 className="step-title">{section.name}</h3>
                        )}

                        <ol>
                            {section.instructions.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                        </div>
                ))}
            </div>
            </section>
        </div>
    );
}

export default Recipe;
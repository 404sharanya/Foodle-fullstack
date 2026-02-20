import Card from "../components/Card.jsx";
import "./Home.css";

function Home(){
    return (
        <div className="home-page">
            <h1 className="home-title">Foodle 🍱</h1>

            <div className="card-grid">
            <Card title="India"  image="/images/India.jpeg" path="/country/india"/>
            <Card title="Japan" image="/images/Japan.jpeg" path="/country/japan" />
            </div>
        </div>
    )
}

export default Home;
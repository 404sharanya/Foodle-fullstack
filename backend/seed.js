import mongoose from "mongoose";
import dotenv from "dotenv";
import Recipe from "./models/Recipe.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const recipes = [
    {
        country: "india",
        dishName: "Dal Baati Churma",
        image: "/images/DalBati.jpeg",
        servings: 1,
        components: [
            {
                name: "Baati",
                ingredients: [
                    {name: "Wheat Flour", units: {g:60, cups: 0.5}},
                    {name: "Semolina", units: {g:10, tbsp: 1}},
                    {name: "Ghee", units: {g:15, tbsp: 1}},
                    {name: "Salt", units: {g:1.5, tsp: 0.25}},
                    {name: "Water", units: {ml:45, tbsp: 3}}
                ]
            },
            {
                name: "Dal",
                ingredients: [
                    {name: "Toor dal", units: {g:15, tbsp:1}},
                        {name: "Moong dal", units: {g:15, tbsp:1}},
                        {name: "Chana dal", units: {g:10, tsp:2}},
                        {name: "Water", units: {ml:230, cups: 1}},
                        {name: "Ghee", units: {g:9, tsp: 2}},
                        {name: "Cumin seeds", units: {g:1, tsp: 0.5}},
                        {name: "Garlic", units: {g:4 , tsp: 1}},
                        {name: "Onion", units: {g:20, tbsp: 2}},
                        {name: "Turmeric", units: {g:0.5, tsp: 0.25}},
                        {name: "Red Chili Powder", units: {g:0.5, tsp: 0.25}},
                        {name: "Coriander powder", units: {g:1 , tsp: 0.5}},
                        {name: "Salt", units: {g:1.5, tsp: 0.5}}
                ]
            },
            {
                name: "Churma",
                ingredients: [
                    {name: "Crushed Baati", units: {pieces: 1}},
                    {name: "Powder sugar", units: {g: 13, tbsp: 1}},
                    {name: "Ghee", units: {g: 10, tbsp: 1}},
                    {name: "Cardamom powder", units: {pinch: 1}}
                ]
            },
            {
                name: "Green Chutney",
                ingredients: [
                    {name: "Coriander Leaves", units: {g: 10, cups: 0.5}},
                    {name: "Mint", units: {g: 4, tbsp: 2}},
                    {name: "Green Chillies", units: {pieces: 1}},
                    {name: "Salt", units: {g: 1, tsp: 0.25}}
                ]
            }
        ],
            steps: [
                {
                    name: "Baati",
                    instructions: [
                        "Mix all dry ingredients. Add ghee, rub well.",
                       "Add water, knead tight dough. Rest 10 min.",
                       "Make balls, crack top.",
                       "Bake at 180°C for 30–35 min (or cook covered on low flame).",
                       "Dip hot baati in ghee."
                    ]
                },
                {
                    name: "Dal",
                    instructions: [
                        "Pressure cook dals with water & turmeric (3 whistles).",                    
                        "In a separate pan, heat ghee, add cumin, garlic, onion.",
                        "Add spices, pour into dal.",
                        "Simmer 5 min."
                    ]
                },
                {
                    name: "Churma",
                    instructions: [
                        "In a bowl, crush baati finely.",
                        "Mix sugar, ghee & cardamom. Combine with crushed baati.",
                        "Serve with dal, baati and chutney."
                    ]
                },
                {
                    name: "Green Chutney",
                    instructions: [
                        "Blend all the ingredients together in a blender.",
                        "Serve in a small bowl."
                    ]
                }
            ]
    },
    {
        country: "India",
        dishName: "Butter Paneer Masala",
        image: "/images/ButterPaneerMasala.jpeg",
        servings: 1,
        components: [
            {
                name: "Butter Paneer Masala",
                ingredients: [
                    {name: "Paneer",  units: {g: 120, cups: 1.5 }},                        {name: "Butter",  units: {g: 30, tbsp: 2}},
                        {name: "Oil", units: {ml: 5, tsp: 1}},
                        {name: "Tomato Puree",  units: {g: 180, cups: 1.5}},
                        {name: "Onion Paste",  units: {g: 60, cups: 0.5}},
                        {name: "Cashews(Soaked)",  units: {g: 12, tbsp: 1}},
                        {name: "Ginger-Garlic Paste",  units: {g: 10, tsp: 2}},
                        {name: "Cream",  units: {ml: 45, tbsp: 3}},
                        {name: "Sugar",  units: {g: 1, tsp: 0.25}},
                        {name: "Water",  units: {ml: 120, cups: 0.5}},
                        {name: "Garam Masala",  units: {g: 0.5,tsp: 0.25}},
                        {name: "Red Chili Powder",  units: {g: 1, tsp: 0.5}},
                        {name: "Kashmiri chilli powder",  units: {g: 1, tsp: 0.5}},
                        {name: "Turmeric Powder",  units: {g: 0.5, tsp: 0.25}},
                        {name: "Coriander Powder",  units: {g: 2, tsp: 1}},
                        {name: "Kasuri Methi (crushed)",  units: {g: 0.5, tsp: 0.5}},
                        {name: "Salt",  units: {g: 4, tsp: 1.5}}
                ]
            }
        ],
        steps: [
            {
                name: "Base and Gravy",
                instructions: [
                    "Blend tomato, onion and cashews to a smooth paste, using a grinder.",
                    "Heat oil + butter, sauté ginger-garlic for 1 min.",
                    "Add paste, cook 8–10 min till butter separates.",
                    "Add spices + salt, mix well.",
                    "Add water, simmer 3 min."  
                ]
            },
            {
                name: "Main",
                instructions: [
                    "Add paneer cubes and butter, simmer for 5 min.",
                    "Add cream, sugar,kasuri methi, simmer 2 min.",
                    "Serve with naan or rice."
                ]
            }
        ]
    },
    {
        country: "Japan",
        dishName: "Shoyu Ramen",
        image: "/images/ShoyuRamen.jpeg",
        servings: 1,
        components: [
            {
                name: "Shoyu Ramen",
                ingredients: [
                    {name: "Ramen Noodles", units: {g: 100, cups: 1.25}},
                        {name: "Chicken or Veg Stock", units: {ml: 470, cups: 2}},
                        {name: "Soy Sauce (shoyu)", units: {ml: 30, tbsp: 2}},
                        {name: "Garlic (minced)", units: {g: 3,tsp: 1}},
                        {name: "Ginger (minced)", units: {g: 3, tsp: 1}},
                        {name: "Sesame Oil", units: {ml: 5,tsp: 1}},
                        {name: "Neutral Oil", units: {ml: 5,tsp: 1}},
                        {name: "Sugar", units: {g: 2, tsp: 0.25}},
                        {name: "Salt", units: {g: 1, tsp: 0.25}},
                        {name: "Green Onions (Optional)", units: {g: 10, tbsp: 2}},
                        {name: "Soft-Boiled Egg (Optional)", units: {pieces: 1}},
                        {name: "Mushrooms/ Chicken/ Tofu (Optional)", units: {g: 50, cups: 0.5}},
                        {name: "Nori Sheets (Optional)", units: {pieces: 1}}
                ]
            }
        ],
        steps: [
            {
                name: "Shoyu Ramen",
                instructions: [
                    "Cook noodles in boiling water for 3–4 min. Drain the excess water.",
                    "In a pan, heat oil + sesame oil; sauté garlic & ginger 30 sec.",
                    "Add stock, soy sauce, sugar; simmer 5 min.",
                    "Add mushrooms/chicken/tofu; cook 2–3 min.",
                    "Add noodles to bowl, pour hot broth.",
                    "Top with egg, spring onion & nori."
                ]
            }
        ]
    },
    {
        country: "Japan",
        dishName: "Vegetable Maki Sushi",
        image: "/images/vegetableMakiSushi.jpeg",
        servings: 1,
        components: [
            {
                name: "Vegetable Maki Sushi",
                ingredients: [
                    {name: "Sushi Rice (cooked)", units: {g: 190, cups: 1}},
                    {name: "Nori Sheets", units: {pieces: 1}},
                    {name: "Cucumber (Julienned)", units: {g: 35, cups: 0.25}},
                    {name: "Avocado (Sliced)", units: {g: 40, cups: 0.25}},
                    {name: "Carrot (Julienned)", units: {g: 30, cups: 0.25}},
                    {name: "Rice Vinegar", units    : {ml: 15, tbsp: 1}},
                    {name: "Sugar", units: {g: 6, tsp: 1.5}},
                    {name: "Salt", units: {g: 1.5, tsp: 0.25}},
                    {name: "Water (for sealing)", units: {ml: 15, tbsp: 1}},
                    {name: "Soy Sauce (for serving, Optional)", units: {ml: 15, tbsp: 1}},
                    {name: "Wasabi (for serving, Optional)", units: {g: 1, tsp: 0.25}},
                    {name: "Pickled Ginger (for serving, Optional)", units: {g: 10, tbsp: 2}}
                ]
            }
        ],
        steps: [
            {
                name: "Vegetable Maki Sushi",
                instructions: [
                    "Mix warm rice with vinegar, sugar & salt. Cool slightly.",
                    "Place nori on mat, spread rice thinly.",
                    "Add vegetables in a line.",
                    "Roll tightly using mat; seal edge with water.",
                    "Slice into 6–8 pieces.",
                    "Serve with soy sauce, wasabi & pickled ginger.(Optional)"
                ]
            }
        ]
    }
];

const seedDB = async() => {
    try{
        //connect
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");

        //delete old data
        await Recipe.deleteMany({});
        console.log("Old recipes deleted");

        //insert new data
        await Recipe.insertMany(recipes);
        console.log("New recipes inserted");

        //exit after success
        process.exit();
    } catch(error){
        console.log(error);
        process.exit(1);
    }
};

seedDB();
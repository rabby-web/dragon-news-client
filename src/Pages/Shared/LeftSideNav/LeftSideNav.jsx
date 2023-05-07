import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news-categories')
        .then( res => res.json())
        .then(data => setCategory(data));
    }, [])

    return (
        <div>
            <h4>All Category: {category.length}</h4>
            <div>
                {
                    category.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
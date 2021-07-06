
import React, { useContext} from 'react';
import './styles.scss';
import MovieItem from '../../Components/Movie/MovieItem';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { CategoriesContext } from '../../Contexts/CategoryContext';
import './styles.scss'


const Home = ({playerTrigger}) => {
    const [categories, setCategories] = useContext(CategoriesContext);

    return <div className="home">
        <SearchBar />
        <div className="row">
            {categories.map(category=>
                { return category.MoviesList.map((movie)=> 
                <div className="col col-md-6">
                    <p className="categoryName">{category.CategoryName}</p>
                        <MovieItem playerTrigger={playerTrigger} movie={movie} />
                </div>
                )}      
            )}
        </div>
    </div>
}

export default Home;
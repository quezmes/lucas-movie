import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../Contexts/CategoryContext';
import FilterService from '../../Services/FIlterService';
import CategoriesCheckBoxes from '../CategoriesCheckBoxes/CategoriesCheckBoxes';
import Tags from '../Tags/Tags';
import './styles.scss'

const SearchBar = () => {

    const [categories, setCategories] = useState([]);
    const [selectedTag, setSelectedTag] = useState();
    const [searchResult, setSearchResult] = useContext(CategoriesContext);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        search()
    }, [selectedTag]);

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await axios.get("http://lucas-movie-app.azurewebsites.net/umbraco/api/moviedata/getcategories");
            data.forEach(category => {
                category.isChecked = true;
            });
            setCategories([...data]);
            setSearchResult(data);


        }
        getCategories();
    },
        []);

    const handleChangeSearchText = e => {
        setSearchText(e.target.value);
    }

    const search = () => {
        const copy = JSON.stringify(categories)
        if (searchText !== '')
            setSearchResult(FilterService.FilterByText({ categories, selectedTag, searchText }))
        else
            setSearchResult(FilterService.FilterByCategory({ categories, selectedTag }));
        console.log('copy: ' + JSON.stringify(JSON.parse(copy)))
        console.log('categories: ' + JSON.stringify(categories))
    }

    const handleCheckChieldElement = e => {
        categories.forEach(category => {
            if (category.CategoryName === e.target.id) {
                category.isChecked = !category.isChecked;
            }
        });
        search();
    }

    return <div className="col align-items-center">
        <div className="main row g-2">
            <p className="logo">Logo</p>
            <div className="searchBar">
                <p className=" searchBar-shape">
                <button type="submit" className="button-shape" onClick={search}>
                <i className="fa fa-search"></i>
                </button>
                <input className="search-input"
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleChangeSearchText} />
                    </p>
            </div>
        </div>
        <div className="row g-5">
            <CategoriesCheckBoxes categories={categories} handleCheckChieldElement={handleCheckChieldElement} />
        </div>
        <div className="row g-5">
            <Tags setSelectedTag={setSelectedTag} />
        </div>


    </div>
}

export default SearchBar;
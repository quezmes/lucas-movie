const getCategoriesByTag = ({categories, selectedTag}) => {

    let movies = []
    let resultByTag = [];
    categories.forEach(category => {
        category.MoviesList.forEach(movie => {
            movie.Tags.forEach(tag => {
                if (tag.Title === selectedTag.Title) 
                    movies.push(movie);
            });
            resultByTag.push({ CategoryName: category.CategoryName, MoviesList: movies })
            movies = [];
        });
    });
    return resultByTag;
}

const FilterByCategory = ({ categories, selectedTag }) => {
    let result = categories
        .filter(category =>
            category.isChecked
        );

    if (result.length <= 0)
        result = categories;

    if (selectedTag) {
      result = getCategoriesByTag({categories: result, selectedTag});
    }
    return result;
}

const FilterByText = ({ categories, selectedTag, searchText }) => {
    return FilterByCategory({ categories, selectedTag }).filter(category =>
        category.CategoryName.toLowerCase().includes(searchText)
    )
}



const FilterService = {

    log: () => {
        console.log('Hello from, filter service');
    },

    FilterByCategory: FilterByCategory,

    FilterByText: FilterByText
}

export default FilterService;
const getSeriesName = (searchValue) => {
return fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
.then((response) => response.json())
.then((data)=> {
    return data;
});
};

export default getSeriesName;
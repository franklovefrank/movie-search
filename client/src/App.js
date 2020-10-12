import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieContainer from "./components/MovieContainer";
import Paginate from "./components/Paginate";

const App = (props) => {
    const [page, setPage] = useState(1);
    const [queryString, setQueryString] = useState('');
    const [resultCount, setResultCount] = useState({
        pagesCount: 0,
        TotalResultsCount: 0,
        curResults: 0,
    });

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    return (
        <div className="App">
            <SearchBar queryString={queryString} setQueryString={setQueryString} />
            {resultCount.TotalResultsCount > 0 ? (
                <Paginate
                    curResults={resultCount.curResults}
                    total_pages={resultCount.pagesCount}
                    total_results={resultCount.TotalResultsCount}
                    handleChange={handlePageChange}
                />
            ) : null}
            <MovieContainer queryString={queryString} page={page} setResultCount={setResultCount} />
        </div>
    );
};

export default App;

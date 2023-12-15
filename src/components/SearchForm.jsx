import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {

        setSearchText(e.target.value)

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/results?search_query=${searchText}`);
        setSearchText('')
    }


    // const handleSearch = () => {
    //     navigate(`/results?search_query=${encodeURIComponent(searchText)}`);    }


    return (
        <form
            className="search-box"
            onSubmit={handleSubmit}
        >
            <input
                placeholder='örneğin komik videolar'
                type="text"
                className='px-4 py-2 rounded-full bg-black outline-none'
                value={searchText}
                onChange={handleChange}
            />
            <button className="btn-search">
                <AiOutlineSearch />
            </button>
        </form>

    );
};

export default SearchForm;

import React, { useState } from 'react';
import "./module.search.scss";
import { HiMagnifyingGlass, HiChevronDown, HiChevronUp } from "react-icons/hi2";

const top100Films = [
    { title: 'Sort By Date', value: 1 },
    { title: 'Price Low to High', value: 2 },
    { title: 'Price High to Low', value: 3 },
    { title: 'Sort By Name', value: 4 },
    { title: 'Sort By Popularity', value: 5 },
    { title: "Sort By Review Score", value: 6 },
];

function Search() {

    const [check, setCheck] = useState(false);

    return (
        <div className="search">
            <div className="one_fourth">
                <input
                    // className="search__keyword" 
                    id="keyword"
                    name="keyword"
                    type="text"
                    autocomplete="off"
                    placeholder="Destination, city" />
                <div className="keyword-icon"><HiMagnifyingGlass /></div>
            </div>

            <div className="one_fourth">
                <select id="month" name="month">
                    <option value="">Any Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
                <span class="ti-calendar"></span>
            </div>

            <div className="one_fourth">
                <select id="month" name="month">
                    <option value="">Any Month</option>
                    <option value="Sort-By-Date">Sort By Date</option>
                    <option value="Price-Low-to-High">Price Low to High</option>
                    <option value="Price-High-to-Low">Price High to Low</option>
                    <option value="Sort-By-Name">Sort By Name</option>
                    <option value="Sort-By-Popularity">Sort By Popularity</option>
                    <option value="Sort-By-Review-Score">Sort By Review Score</option>
                </select>
                <span class="ti-calendar"></span>
            </div>

            <div className="one_fourth">
                <button className="btn-Search" type="submit" value="Search">Search</button>
            </div>

            {check ?
                <>
                    <div className="one_fourth">
                        <select id="month" name="month">
                            <option value="">Any Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                        <span class="ti-calendar"></span>
                    </div>

                    <div className="one_fourth">
                        <select id="month" name="month">
                            <option value="">Any Month</option>
                            <option value="Sort-By-Date">Sort By Date</option>
                            <option value="Price-Low-to-High">Price Low to High</option>
                            <option value="Price-High-to-Low">Price High to Low</option>
                            <option value="Sort-By-Name">Sort By Name</option>
                            <option value="Sort-By-Popularity">Sort By Popularity</option>
                            <option value="Sort-By-Review-Score">Sort By Review Score</option>
                        </select>
                        <span class="ti-calendar"></span>
                    </div>

                    <div className="one_fourth">
                        <select id="month" name="month">
                            <option value="">Any Month</option>
                            <option value="Sort-By-Date">Sort By Date</option>
                            <option value="Price-Low-to-High">Price Low to High</option>
                            <option value="Price-High-to-Low">Price High to Low</option>
                            <option value="Sort-By-Name">Sort By Name</option>
                            <option value="Sort-By-Popularity">Sort By Popularity</option>
                            <option value="Sort-By-Review-Score">Sort By Review Score</option>
                        </select>
                        <span class="ti-calendar"></span>
                    </div>
                </>
                : <></>
            }

            <div className="isCheck" onClick={() => setCheck(!check)} >
                {check ? <HiChevronUp /> : <HiChevronDown />}
                Advanced Search
            </div>

        </div>
    )
}

export default Search
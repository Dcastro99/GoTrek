import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from '../../api';
import './search.css';
const Search = ({ OnSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {  // this will autofill the cities when we type them
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions
    )

      .then(response => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      });

  };

  const handleOnChange = (searchData) => {  // here we are passing the data
    setSearch(searchData);  // we are setting the new value 
    OnSearchChange(searchData);  // we are calling the on search change
  }


  return (
    <div className="Search-bar">

      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}  // this is calling handleOnChange
        loadOptions={loadOptions}
      />

    </div>
  );
}
export default Search;

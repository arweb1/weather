import React from 'react'

import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react'
import { GEO_API_URL, geoApiOptions } from './SearchCityAPI';

import './SearchCity.scss'

function SearchCity({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=100000namePrefix=${inputValue}`, geoApiOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder='Search'
      className="inputSearch"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default SearchCity
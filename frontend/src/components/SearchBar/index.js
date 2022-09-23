import React from 'react'
import { SearchBarContainer, SearchBarForm, Button, Input} from './SearchBarElements';

function SearchBar() {
  return (
    <SearchBarContainer>
        <SearchBarForm>
            <Input id='search' type='text' class='input' placeholder='Search' />
        </SearchBarForm>
        <Button>search</Button>
    </SearchBarContainer>
  )
}

export default SearchBar;
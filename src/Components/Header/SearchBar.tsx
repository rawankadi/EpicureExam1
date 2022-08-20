import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { SearchInput } from '../HomePage/HomePageMobile/SearchBar/styles';
import {SElement,Menu,SearchBar, Btn, InputBox} from './styles'

export default function SearchIcon() {


  return (
    <SearchBar>
      <Menu>
        {/* <Btn>
        <FontAwesomeIcon icon={faClose}/>
        </Btn> */}
          <SElement>
            Search
          </SElement><br/>
          <InputBox>
                  <FontAwesomeIcon icon={faSearch}/>
                  <SearchInput/>
          </InputBox>
          
        </Menu>
    </SearchBar>
  )
}

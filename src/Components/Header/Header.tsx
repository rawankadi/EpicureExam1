import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom';
import { BurgerIcon, RightIcons, Logo, NavBar,  BagIcon, SignIcon, SearchIcon, Btn } from './styles'
import BurgerSideBar from './BurgerSideBar';
import SearchBar from './SearchBar';



export default function Header() {

  const Navigate= useNavigate();
  const onContactBtnClicked=() =>{
    Navigate('/HomePage');
}
  const [burgerSideBar, setSidebar] = useState(false);
  const showSidebar =() => {
    setSidebar(!burgerSideBar);
  }
  const [searchBar, setSearchBar] = useState(false);
  const showSearchBar =() => {
    setSearchBar(!searchBar);
  }

  return (
    <NavBar>
          <BurgerIcon>
            <FontAwesomeIcon onClick={showSidebar} icon={burgerSideBar ? faClose : faBars}/>
          </BurgerIcon><br/>
          <Btn onClick={onContactBtnClicked}>
            <Logo/>
          </Btn>
            <RightIcons>
                <Btn>
                  {/* <SearchIcon onClick={()=>(setSearchBar()}/> */}
                  <FontAwesomeIcon onClick={showSearchBar} icon={searchBar ? faClose : faSearch} />
                </Btn>
                <Btn>
                  <SignIcon />
                </Btn>
                <Btn>
                  <BagIcon/>
                </Btn>
            </RightIcons>
            {searchBar && (<SearchBar/>) }
        {burgerSideBar && (<BurgerSideBar/>)}
    </NavBar>
  )
}

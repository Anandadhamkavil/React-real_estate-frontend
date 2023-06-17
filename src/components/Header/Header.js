import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

        const getMenuStyles = (menuOpened) => {
            if(document.documentElement.clientWidth <= 800){
                return {right: !menuOpened &&  '-100%'}
            }
        }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src='./logo.png' alt='logo' width={100}/>


             <OutsideClickHandler
             onOutsideClick={()=>{
                setMenuOpened(false)
             }}
             >   
            <div className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
            >
                <a href='#r-wrapper'>Residencies</a>
                <a href='#v-wrapper'>Our Values</a>
                <a href='#c-wrapper'>Contact Us</a>
                <a href='#g-wrapper'>Get Started</a>
                <button className='button'>
                    <a href=''>Login</a>
                </button>
            </div>
            </OutsideClickHandler>

            <div className='menu-icon' onClick={()=> setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
    )
}

export default Header
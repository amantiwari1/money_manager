import { useRef, useState } from 'react'
import tw, { styled } from 'twin.macro'
import Toggle from '../../theme/themeToggle'
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri"
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick'
import { Link } from 'react-router-dom'

const Icon = tw.div`h-8 w-8 bg-red-300 rounded-full cursor-pointer  `

const Brand = tw.h1`text-2xl font-bold flex text-center text-white`

interface Props {
  isOpen: boolean;
}

const NavbarTop = styled.div`
    left: ${(props: Props) => props.isOpen ? "0" : "-100%"};
    ${tw`h-screen pt-4 top-0  md:left-0 dark:bg-black fixed   shadow-2xl bg-gray-500  w-52 md:w-20 z-10`}
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    
    &:hover {
     ${tw`w-52`}
    }

    p {
      ${tw`md:hidden`}
      animation: fadeIn linear 0.3s; 
    }

    &:hover {
      p {
        ${tw`md:block`}
      }
    }

    @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
`

const NavbarItem = tw(Link)`flex space-x-4 whitespace-nowrap cursor-pointer filter grayscale text-red-300 hover:(grayscale-0)`
const Navbar = () => {

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick(dropdownRef, false); useState(false)
  return (
    <>
      <NavbarTop isOpen={isOpen} ref={dropdownRef} >
        <div tw="flex flex-col space-y-10 justify-center md:space-y-96 items-center" >

          <div tw="flex flex-col   space-y-14" >

            <div tw="flex justify-evenly items-center text-white space-x-9" >
              <Brand>MM</Brand>
              <RiCloseLine tw="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} >X</RiCloseLine>
            </div>

            <NavbarItem to="/"  >
              <Icon />
              <p>Overview Tracker</p>
            </NavbarItem>
            <NavbarItem to="/"    >
              <Icon />
              <p>Add Transaction</p>
            </NavbarItem>

            <NavbarItem to="/" >
              <Icon />
              <p>Check Price</p>
            </NavbarItem>
            <NavbarItem to="/login" >
              <Icon />
              <p>Log In</p>
            </NavbarItem>
            <Toggle />

          </div>


          <div tw="flex flex-col space-y-5 " >
            <div tw="flex space-x-5 cursor-pointer filter grayscale text-red-300 hover:(grayscale-0)" >
              <Icon />
              <p>Setting</p>
            </div>
          </div>
        </div>


      </NavbarTop>

      <div tw="flex items-center w-full bg-red-300 h-14 shadow-md">

        <RiMenu3Fill tw="text-2xl ml-4" onClick={() => setIsOpen(!isOpen)} >Menu</RiMenu3Fill>

      </div>
    </>
  )
}

export default Navbar;

import tw, { styled } from 'twin.macro'
import Toggle from '../../theme/themeToggle'

const Icon = tw.div`h-8 w-8 bg-white rounded-full cursor-pointer`

const Brand = tw.h1`text-2xl font-bold flex text-center text-white`


const NavbarItem = styled.div`
    ${tw`min-h-screen pt-4 dark:bg-black fixed   shadow-2xl bg-gray-400 `}
  

    


    p {
      ${tw`hidden`}
    }

    &:hover {
      p {
        ${tw`block`}
      }
    }
 
`
const Narbar = () => {
  return (
    <>
      <NavbarItem>
        <div tw="flex flex-col md:space-y-96 items-center" >

          <div tw="flex flex-col m-5  items-center  justify-between space-y-14" >
            <Brand>MM</Brand>

            <div tw="flex space-x-5 cursor-pointer" >
              <Icon />
              <p>Hello</p>
            </div>
            <div tw="flex space-x-5 cursor-pointer" >
              <Icon />
              <p>Hello</p>
            </div>
            <div tw="flex space-x-5 cursor-pointer" >
              <Icon />
              <p>Hello</p>
            </div>
            <Toggle />

          </div>


          <div tw="flex flex-col space-y-5 " >
            <Icon />
            <Icon />
          </div>
        </div>


      </NavbarItem>
    </>
  )
}

export default Narbar

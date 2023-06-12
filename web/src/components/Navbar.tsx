import craiqoBlue from '../images/CraiqoBlue.svg'
import craiqoWhite from '../images/CraiqoWhite.svg'
import { useColorMode, useColorModeValue } from '@chakra-ui/system'
import { BiMoon, BiSun } from 'react-icons/bi'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#000', '#011627')
  return (
    <div className={`width-layout bg-[${bg}] transition-colors`}>
      <div className="flex items-center justify-between py-4">
        <img
          className="h-6 md:h-8 lg:h-10 hover:cursor-pointer"
          src={colorMode === 'light' ? craiqoBlue : craiqoWhite}
          alt="Craiqo"
        />
        <div>
          <div className="flex items-center">
            <p className="px-3 py-1 transition-colors hover:text-craiqo-blue hover:cursor-pointer">
              Planner
            </p>
            <p className="px-3 py-1 transition-colors hover:text-craiqo-blue hover:cursor-pointer">
              About
            </p>
            <button
              className="hover:bg-[#1e5e9628] my-auto p-1 ml-2 rounded-lg transition-colors"
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? (
                <BiMoon
                  className="text-xl md:text-2xl lg:text-3xl"
                  color="black"
                />
              ) : (
                <BiSun
                  className="text-xl md:text-2xl lg:text-3xl"
                  color="white"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import craiqoBlue from '../images/CraiqoBlue.svg'
import craiqoWhite from '../images/CraiqoWhite.svg'
import { useColorMode, useColorModeValue } from '@chakra-ui/system'
import { BiMoon, BiSun, BiMenu, BiTrip, BiQuestionMark } from 'react-icons/bi'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/menu'
import { IconButton, useMediaQuery } from '@chakra-ui/react'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#000', '#011627')
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <div className={`width-layout mt-2 bg-[${bg}] transition-colors`}>
      {isMobile ? (
        <div className="flex items-center justify-between py-4">
          <img
            className="h-6 md:h-8 lg:h-10 hover:cursor-pointer"
            src={colorMode === 'light' ? craiqoBlue : craiqoWhite}
            alt="Craiqo"
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BiMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<BiTrip size="1.5rem" />}>Planner</MenuItem>
              <MenuItem icon={<BiQuestionMark size="1.5rem" />}>About</MenuItem>
              <MenuDivider />
              <MenuItem
                icon={
                  colorMode === 'light' ? (
                    <BiMoon size="1.5rem" />
                  ) : (
                    <BiSun size="1.5rem" />
                  )
                }
                onClick={toggleColorMode}
              >
                Theme
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      ) : (
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
                  <BiMoon className="text-xl md:text-2xl" color="black" />
                ) : (
                  <BiSun className="text-xl md:text-2xl" color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

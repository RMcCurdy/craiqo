import craiqo from '../images/Craiqo.svg'
import { useColorMode, useColorModeValue } from '@chakra-ui/system'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#000', '#011627')
  // #011627
  return (
    <div className={`width-layout bg-[${bg}]`}>
      <div className="py-4 flex justify-between">
        <img className="h-10" src={craiqo} alt="Craiqo" />
        <div className="flex">
          <p>Planner</p>
          <p>About</p>
        </div>
        <button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </div>
  )
}

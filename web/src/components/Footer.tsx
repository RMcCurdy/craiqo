import craiqoBlue from '../images/CraiqoBlue.svg'
import craiqoWhite from '../images/CraiqoWhite.svg'
import { useColorMode } from '@chakra-ui/system'

export const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <div className="pb-10">
      <div className="width-layout ">
        <div className="grid grid-cols-3 mb-8">
          <img
            className="h-4 md:h-6 lg:h-8 hover:cursor-pointer"
            src={colorMode === 'light' ? craiqoBlue : craiqoWhite}
            alt="Craiqo"
          />
          <div>
            <div className="mb-2">About</div>
            <div className="mb-1 text-xs">About us</div>
            <div className="mb-1 text-xs">Contact us</div>
            <div className="mb-1 text-xs">Documentation</div>
            <div className="mb-1 text-xs">Privacy and Terms</div>
          </div>
          <div>
            <div className="mb-2">Pages</div>
            <div className="mb-1 text-xs">Planner</div>
            <div className="mb-1 text-xs">About</div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="text-xs">© 2023 Craiqo. All rights reserved.</div>
      </div>
    </div>
  )
}

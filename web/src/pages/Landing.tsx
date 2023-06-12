import skylineBlue from '../images/skyline.svg'
import { useColorModeValue, useColorMode } from '@chakra-ui/system'

export const Landing = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('#000', '#000')
  return (
    <div className="h-full">
      <button className={`bg-[${bg}] py-2 px-4`}>Start planning!</button>
      <img
        className="w-full hover:cursor-pointer"
        src={skylineBlue}
        alt="Skyline"
      />
      <div
        className="h-full"
        style={{
          backgroundImage:
            colorMode === 'light'
              ? 'linear-gradient(to bottom, #1E5E96, #FFF)'
              : 'linear-gradient(to bottom, #1E5E96, #1A202C)',
        }}
      >
        {/* Content of the div */}
      </div>
    </div>
  )
}

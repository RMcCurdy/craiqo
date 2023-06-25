import skylineBlue from '../images/skyline.svg'
import { useColorMode } from '@chakra-ui/system'
import { Button } from '@chakra-ui/button'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full">
      <div className="mt-4 mb-10 text-center width-layout">
        <div className="mb-4 text-2xl lg:mb-8 md:text-3xl lg:text-4xl">
          Get where you wanna go!
        </div>
        <Button onClick={() => navigate('/planner')} fontWeight="normal">
          Start planning
        </Button>
      </div>
      <img
        className="w-full hover:cursor-pointer"
        src={skylineBlue}
        alt="Skyline"
      />
      <div
        className="flex-grow"
        style={{
          backgroundImage:
            colorMode === 'light'
              ? 'linear-gradient(to bottom, #1E5E96, #FFF)'
              : 'linear-gradient(to bottom, #1E5E96, #1A202C)',
        }}
      >
        <div className="pt-16 width-layout">hi</div>
      </div>
    </div>
  )
}

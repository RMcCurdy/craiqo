import craiqoQ from '../images/Q.svg'
import { Spinner } from '@chakra-ui/react'

export const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spinner size="xl" speed="0.8s" color="#1E5E96" />
    </div>
  )
}

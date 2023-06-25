import skylineBlue from '../images/skyline.svg'
import { useColorMode } from '@chakra-ui/system'
import { Button } from '@chakra-ui/button'
import { useEffect } from 'react'

export const Planner = () => {
  const { colorMode } = useColorMode()

  useEffect(() => {
    // const payload = {
    //   q: 'your_search_query',
    //   rows: 10,
    // }
    // const buildQueryString = (params: Record<string, string | number>) => {
    //   return Object.keys(params)
    //     .map(
    //       (key) =>
    //         `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    //     )
    //     .join('&')
    // }
    // const queryString = buildQueryString(payload)
    // fetch(
    //   `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=storefronts-inventory&${queryString}`,
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Process the data here
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.error(error)
    //   })
  }, [])

  return <div>Planner</div>
}

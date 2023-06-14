import { type FC } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps<any>, 'direction'>
export const VStack: FC<VStackProps> = (props) => {
  return (
      <Flex {...props} direction={'column'} />
  )
}

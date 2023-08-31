import { type FC } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>
export const VStack: FC<VStackProps> = (props) => {
  const { children, ...rest } = props
  return (
      <Flex {...rest} direction={'column'}>
          {children}
      </Flex>
  )
}

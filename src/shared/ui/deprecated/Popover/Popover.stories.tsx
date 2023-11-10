import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonVariants } from '../Button'
import { Text } from '../Text'
import { Popover } from './Popover'

export default {
    title: 'shared/Popover',
    component: Popover,
    decorators: [
        Story => (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>

// eslint-disable-next-line i18next/no-literal-string
const trigger = <Button variant={ButtonVariants.OUTLINE}>Trigger</Button>

const content = (
    <Text
        title={'Popover'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'}
    />
)

const Template: ComponentStory<typeof Popover> = args => <Popover {...args} />

export const Normal = Template.bind({})

Normal.args = {
    children: content,
    trigger,
}

export const BottomRightPosition = Template.bind({})

BottomRightPosition.args = {
    children: content,
    trigger,
    direction: 'bottom-start',
}

export const TopLeftPosition = Template.bind({})

TopLeftPosition.args = {
    children: content,
    trigger,
    direction: 'top-end',
}

export const TopRightPosition = Template.bind({})

TopRightPosition.args = {
    children: content,
    trigger,
    direction: 'top-start',
}

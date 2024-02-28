import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Button } from '../../../Button'
import { Dropdown } from './Dropdown'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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
        withRouter,
    ],
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />

const items = [
    { content: 'First First First First' },
    { href: '/test', content: 'Second Second Second Second' },
    { content: 'license license license license', disabled: true },
]

// eslint-disable-next-line i18next/no-literal-string
const trigger = <Button>Trigger</Button>

export const Normal = Template.bind({})

Normal.args = {
    items,
    trigger,
}

export const BottomLeftPosition = Template.bind({})

BottomLeftPosition.args = {
    items,
    trigger,
    direction: 'bottom-end',
}

export const TopLeftPosition = Template.bind({})

TopLeftPosition.args = {
    items,
    trigger,
    direction: 'top-end',
}

export const TopRightPosition = Template.bind({})

TopRightPosition.args = {
    items,
    trigger,
    direction: 'top-start',
}

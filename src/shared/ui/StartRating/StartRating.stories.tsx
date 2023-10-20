import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StartRating } from './StartRating'

export default {
	title: 'shared/StartRation',
	component: StartRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof StartRating>

const Template: ComponentStory<typeof StartRating> = args => (
	<StartRating {...args} />
)

export const Normal = Template.bind({})

Normal.args = {}

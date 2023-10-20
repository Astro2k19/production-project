import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text } from '../Text'
import { Drawer } from './Drawer'

export default {
	title: 'shared/Drawer',
	component: Drawer,
	parameters: {
		loki: { skip: true },
	},
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = args => <Drawer {...args} />

const content = (
	<div style={{ padding: '15px' }}>
		<Text
			title={'Drag me:)'}
			text={'again!'}
		/>
		<Text
			title={'Drag me:)'}
			text={'again!'}
		/>
	</div>
)
export const Normal = Template.bind({})

Normal.args = {
	isOpen: true,
	children: content,
	withPortal: false,
}

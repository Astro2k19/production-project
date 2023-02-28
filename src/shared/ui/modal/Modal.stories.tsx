import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalComponent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalComponent.args = {
  isOpen: true,
  children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus odio pariatur quasi similique. Accusamus architecto iste obcaecati officia perspiciatis quis rem repellat rerum similique, totam? Assumenda dicta nostrum tempore!',
  withPortal: false
}

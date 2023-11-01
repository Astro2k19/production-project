import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const ModalComponent = Template.bind({})

ModalComponent.args = {
    isOpen: true,
    children:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus odio pariatur quasi similique. Accusamus architecto iste obcaecati officia perspiciatis quis rem repellat rerum similique, totam? Assumenda dicta nostrum tempore!',
    withPortal: false,
}

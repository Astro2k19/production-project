import { type ComponentMeta, type StoryObj } from '@storybook/react'

import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>

type Story = StoryObj<typeof Flex>

/* eslint-disable i18next/no-literal-string */
const list = (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
        <div>fifth</div>
    </>
)

export const Row: Story = {
    args: {
        children: list,
    },
}

export const RowGap4: Story = {
    args: {
        children: list,
        gap: '4',
    },
}
export const RowGap8: Story = {
    args: {
        children: list,
        gap: '8',
    },
}

export const RowGap16: Story = {
    args: {
        children: list,
        gap: '12',
    },
}

export const Column: Story = {
    args: {
        children: list,
        direction: 'column',
    },
}

export const ColumnGap16: Story = {
    args: {
        children: list,
        direction: 'column',
        gap: '16',
    },
}

export const ColumnAlignItemsCenter: Story = {
    args: {
        children: list,
        direction: 'column',
        gap: '8',
        alignItems: 'center',
    },
}

export const RowJustifyCenter: Story = {
    args: {
        children: list,
        gap: '8',
        justify: 'center',
    },
}

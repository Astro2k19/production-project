import { type Story } from '@storybook/react'

import '@/app/styles/index.scss'

import { getAllFeatureFlag, setFeatureFlag } from '@/shared/lib/features'

export const RedesignedDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlag({ ...getAllFeatureFlag(), isAppRedesigned: true })
    console.log(getAllFeatureFlag(), 'getAllFeatureFlag')
    console.log(<StoryComponent />)
    return <StoryComponent />
}

import React, { LegacyRef } from 'react'

const FileMock = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
    <div
        ref={ref}
        {...props}
    />
))

export default FileMock

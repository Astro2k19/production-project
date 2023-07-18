import { type FC } from 'react'
import { Page } from 'widgets/Page/Page'

interface AdminPanelProps {
  className?: string
}

const ForbiddenPage: FC<AdminPanelProps> = ({ className }) => {
  return (
      <Page>
          <h1>This page is forbidden for you!</h1>
      </Page>
  )
}

export default ForbiddenPage

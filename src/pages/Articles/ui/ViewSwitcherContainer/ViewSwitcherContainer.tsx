import { ArticlesListViewSwitcher } from '@/features/ArticlesListViewSwitcher'

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

export const ViewSwitcherContainer = () => {
    const { view, onChangeListView } = useArticlesFilters()

    return (
        <ArticlesListViewSwitcher
            view={view}
            onChangeView={onChangeListView}
        />
    )
}

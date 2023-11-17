import { ArticlesFilters } from '@/widgets/ArticlesFilters'

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

export const FiltersContainer = () => {
    const {
        sort,
        order,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
        search,
        articleType,
    } = useArticlesFilters()

    return (
        <ArticlesFilters
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            search={search}
            articleType={articleType}
            onChangeType={onChangeType}
        />
    )
}

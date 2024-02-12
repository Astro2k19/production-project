import { ArticleBlockType } from '../../model/const/articleConst'
import { ArticleBlockTypes } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

export const renderArticleBlock = (block: ArticleBlockTypes, index: number) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={index}
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={index}
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={index}
                />
            )
        default:
            return null
    }
}

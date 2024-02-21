import { memo } from 'react'

import { Code as CodeRedesigned } from '@/shared/ui/redesigned/Code'

import { type ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => {
        const Code = CodeRedesigned

        return (
            <Code
                className={className}
                text={block.code}
            />
        )
    },
)

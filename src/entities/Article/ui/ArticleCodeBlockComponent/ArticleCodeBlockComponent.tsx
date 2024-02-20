import { memo } from 'react'

import { toggleFeature } from '@/shared/lib/features/lib/toggleFeatures'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code'
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

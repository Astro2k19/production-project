import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { TextAligns, Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Text } from '@/shared/ui/redesigned/Text'

import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <div
                className={classNames([
                    cls.articleImageBlockComponent,
                    className,
                ])}
            >
                <AppImage
                    src={block.src}
                    alt={block.title}
                    className={cls.image}
                />
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text
                            text={block.title}
                            align={'center'}
                        />
                    }
                    off={
                        <TextDeprecated
                            text={block.title}
                            align={TextAligns.CENTER}
                        />
                    }
                />
            </div>
        )
    },
)

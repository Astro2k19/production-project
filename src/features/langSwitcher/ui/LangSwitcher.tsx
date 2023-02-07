import cls from './LangSwitcher.module.scss';
import {classNames} from "shared/lib";
import {useTranslation} from "react-i18next";
import {Button, ButtonVariants} from "shared/ui";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        console.log(i18n.language, 'test')
        i18n.changeLanguage(i18n.language === 'eng' ? 'ua' : 'eng')
    }

    return (
        <Button className={classNames([cls.switcher, className])} onClick={toggleLanguage} variant={ButtonVariants.CLEAR}>
            {t('Language')}
        </Button>
    )
}
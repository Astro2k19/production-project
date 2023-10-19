import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button, ButtonVariants } from '@/shared/ui/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = async (): Promise<void> => {
		await i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
	};

	return (
		<Button
			className={classNames([cls.switcher, className])}
			onClick={toggleLanguage}
			variant={ButtonVariants.CLEAR}
		>
			{t('Language', { ns: 'translation' })}
		</Button>
	);
});

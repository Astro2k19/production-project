import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/router/ui/AppRouter';

import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import './styles/index.scss';

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, []); // eslint-disable-line

	console.log(inited, 'inited');

	return (
		<div className={classNames(['app'])}>
			<Navbar />
			<div className="page-content">
				<Sidebar />
				{inited && <AppRouter />}
			</div>
		</div>
	);
};

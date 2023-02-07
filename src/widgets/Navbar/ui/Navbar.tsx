import {Link} from "react-router-dom";
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib";
import {AppLink, AppLinkVariants} from "shared/ui";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames([cls.navbar, className])}>
            <div className={cls.links}>
                <AppLink to={'/'} variant={AppLinkVariants.PRIMARY} >Home</AppLink>
                <AppLink to={'/about'} variant={AppLinkVariants.PRIMARY} >About</AppLink>
            </div>
        </div>
    )
}
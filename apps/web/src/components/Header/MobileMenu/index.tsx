import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';

import PlanBLogo from '../../../assets/planb_logo_horizontal_white.svg?react';
import { useDisclosure } from '../../../hooks/use-disclosure';
import { compose } from '../../../utils';
import { MetaElements } from '../MetaElements';
import { NavigationSection } from '../props';

import { MobileMenuSection } from './MobileMenuSection';

export interface MobileMenuProps {
  sections: NavigationSection[];
  onClickLogin: () => void;
  onClickRegister: () => void;
}

export const MobileMenu = ({
  sections,
  onClickLogin,
  onClickRegister,
}: MobileMenuProps) => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } =
    useDisclosure();
  const { t } = useTranslation();

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <>
      <div className="flex w-full flex-row justify-center">
        <Link to="/">
          <PlanBLogo className="h-[34px]" />
        </Link>
      </div>
      <div className="absolute right-6 flex w-full flex-row justify-end place-self-center text-sm font-semibold">
        <p className="cursor-pointer text-white" onClick={onClickLogin}>
          {t('auth.signIn')}
        </p>
      </div>
      <FaBars
        className={compose(
          'absolute z-40 cursor-pointer left-[6vw] text-white mt-1',
          isMobileMenuOpen ? 'rotate-90' : 'rotate-0',
        )}
        style={{
          transition: 'transform 0.4s, color 0.2s',
        }}
        size={28}
        color="#fff"
        onClick={toggleMobileMenu}
      />
      <nav
        className={compose(
          'flex fixed top-0 left-0 flex-col items-center px-2 pt-28 pb-5 w-screen h-full bg-blue-1000 duration-300',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <ul className="my-0 flex-1 list-none space-y-6 overflow-auto pl-10">
          {sections.map((section) => (
            <MobileMenuSection section={section} key={section.id} />
          ))}
        </ul>
        <MetaElements
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      </nav>
    </>
  );
};

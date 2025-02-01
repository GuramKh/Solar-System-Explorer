import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-primary-light dark:bg-primary-dark border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              {t('planets')}
            </Link>
          </div>
          
          <div className="hidden md:flex md:space-x-8">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

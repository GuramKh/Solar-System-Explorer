import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PLANETS } from '../../utils/constants';

export const NavLinks = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <>
      {PLANETS.map((planet) => (
        <Link
          key={planet}
          to={`/planet/${planet.toLowerCase()}`}
          className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
            pathname.includes(planet.toLowerCase())
              ? 'text-indigo-600 dark:text-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          {t(planet.toLowerCase()).charAt(0).toUpperCase() + t(planet.toLowerCase()).slice(1)}
        </Link>
      ))}
    </>
  );
};

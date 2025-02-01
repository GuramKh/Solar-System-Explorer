import { NavLinks } from './NavLinks';

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <NavLinks />
      </div>
    </div>
  );
};
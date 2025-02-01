import { NavLinks } from './NavLinks';

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-x-4 flex flex-wrap gap-4">
        <NavLinks />
      </div>
    </div>
  );
};
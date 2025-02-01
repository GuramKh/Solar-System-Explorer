import { useTranslation } from 'react-i18next';

interface PlanetHeaderProps {
  name: string;
  activeTab: string;
}

export const PlanetHeader = ({ name, activeTab }: PlanetHeaderProps) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-4xl font-bold">
        {t(name.toLowerCase())}
      </h1>
      <p className="text-lg">
        {t(`${name.toLowerCase()}_${activeTab}`)}
      </p>
    </>
  );
};
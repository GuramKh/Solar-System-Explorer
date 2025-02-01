import { Planet } from '../../types/planet';
import { ViewType } from '../../utils/constants';
import { Statistics } from '../Statistics/Statistics';
import { PlanetHeader } from './PlanetInfo/PlanetHeader';
import { SourceLink } from './PlanetInfo/SourceLink';

interface PlanetInfoProps {
  planet: Planet;
  activeTab: ViewType;
}

export const PlanetInfo = ({ planet, activeTab }: PlanetInfoProps) => {
  const getActiveContent = () => {
    switch (activeTab) {
      case 'overview':
        return planet.overview;
      case 'structure':
        return planet.structure;
      case 'geology':
        return planet.geology;
    }
  };

  const activeContent = getActiveContent();

  return (
    <div className="space-y-4">
      <PlanetHeader name={planet.name} activeTab={activeTab} />
      <SourceLink source={activeContent.source} />
      <Statistics 
        rotation={planet.rotation}
        revolution={planet.revolution}
        radius={planet.radius}
        temperature={planet.temperature}
      />
    </div>
  );
};
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePlanetData } from '../hooks/useApi';
import { PlanetImage } from '../components/PlanetView/PlanetImage';
import { PlanetInfo } from '../components/PlanetView/PlanetInfo';
import { InfoTabs } from '../components/InfoTabs/InfoTabs';
import { ViewType, VIEW_TYPES } from '../utils/constants';

export const Planet = () => {
  const { planetName } = useParams<{ planetName: string }>();
  const { data: planet, loading, error } = usePlanetData(planetName || '');
  const [activeTab, setActiveTab] = useState<ViewType>(VIEW_TYPES.OVERVIEW);

  const getImageType = () => {
    switch (activeTab) {
      case VIEW_TYPES.STRUCTURE:
        return 'internal';
      case VIEW_TYPES.GEOLOGY:
        return 'planet';
      default:
        return 'planet';
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error || !planet) return <div>Error loading planet data</div>;

  return (
    <motion.div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <PlanetImage
            imageUrl={planet.images[getImageType()]}
            name={planet.name}
            viewType={activeTab}
          />
        </div>
        
        <div className="space-y-8">
          <PlanetInfo planet={planet} activeTab={activeTab} />
          <InfoTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </motion.div>
  );
};
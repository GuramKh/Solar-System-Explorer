import { motion, AnimatePresence } from 'framer-motion';
import { ViewType, VIEW_TYPES } from '../../utils/constants';

interface PlanetImageProps {
  imageUrl: string;
  name: string;
  viewType: ViewType;
}

export const PlanetImage = ({ imageUrl, name, viewType }: PlanetImageProps) => {
  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full max-w-2xl mx-auto">
        <motion.img
          key={imageUrl}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          src={imageUrl}
          alt={`${name} ${viewType}`}
          className="w-full h-auto"
        />
        
        {viewType === VIEW_TYPES.GEOLOGY && (
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={`/assets/geology-${name.toLowerCase()}.png`}
            alt={`${name} geology`}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[163px] h-[199px]"
          />
        )}
      </div>
    </AnimatePresence>
  );
};
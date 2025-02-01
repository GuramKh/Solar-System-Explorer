import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePlanetsData } from '../hooks/useApi';

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: planets, loading } = usePlanetsData();

  useEffect(() => {
    if (planets && planets.length > 0) {
      navigate(`/planet/${planets[0].name.toLowerCase()}`);
    }
  }, [planets, navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (loading || !planets) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl"
        >
          {t('loading')}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-12">
        {t('planets')}
      </h1>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {planets.map((planet) => (
          <motion.div
            key={planet.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/planet/${planet.name.toLowerCase()}`)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer"
          >
            <img
              src={planet.images.planet}
              alt={planet.name}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">
              {t(planet.name.toLowerCase())}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
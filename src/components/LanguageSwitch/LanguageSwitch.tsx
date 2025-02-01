import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

export const LanguageSwitch = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('LanguageSwitch must be used within a LanguageProvider');
  }

  const { language, toggleLanguage } = context;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-lg bg-opacity-20 hover:bg-opacity-30 transition-colors font-bold"
    >
      {language === 'en' ? 'ქართული' : 'ENG'}
    </motion.button>
  );
};

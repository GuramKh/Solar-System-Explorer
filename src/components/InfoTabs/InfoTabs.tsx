import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface InfoTabsProps {
  activeTab: string;
  onTabChange: (tab: 'overview' | 'structure' | 'geology') => void;
}

export const InfoTabs = ({ activeTab, onTabChange }: InfoTabsProps) => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'overview', label: t('overview') },
    { id: 'structure', label: t('structure') },
    { id: 'geology', label: t('geology') }
  ];

  return (
    <div className="flex flex-col space-y-4">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTabChange(tab.id as 'overview' | 'structure' | 'geology')}
          className={`px-6 py-3 text-left border ${
            activeTab === tab.id
              ? 'bg-indigo-600 text-white'
              : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <span className="text-gray-500 mr-4">0{tabs.indexOf(tab) + 1}</span>
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};

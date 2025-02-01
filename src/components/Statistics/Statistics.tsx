import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface StatisticsProps {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export const Statistics = ({ rotation, revolution, radius, temperature }: StatisticsProps) => {
  const { t } = useTranslation();

  const stats = [
    { label: 'rotation', value: rotation },
    { label: 'revolution', value: revolution },
    { label: 'radius', value: radius },
    { label: 'temperature', value: temperature },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border border-gray-200 dark:border-gray-800 p-4"
        >
          <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400">
            {t(stat.label)}
          </h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};
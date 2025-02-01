import { motion } from 'framer-motion';
import { Navigation } from '../components/Header/Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white"
    >
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Solar System Explorer
        </div>
      </footer>
    </motion.div>
  );
};
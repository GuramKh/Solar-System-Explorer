import { useTranslation } from 'react-i18next';

interface SourceLinkProps {
  source: string;
}

export const SourceLink = ({ source }: SourceLinkProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-400">{t('source')}:</span>
      <a 
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Wikipedia
      </a>
    </div>
  );
};
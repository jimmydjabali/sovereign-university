import { useTranslation } from 'react-i18next';

import { ResourceLayout } from '../layout';

export const Calendar = () => {
  const { t } = useTranslation();

  return (
    <ResourceLayout title={t('words.calendar')}>
      <div className="space-y-8 px-4 text-gray-100 sm:px-8">
        <p>Under construction</p>
      </div>
    </ResourceLayout>
  );
};

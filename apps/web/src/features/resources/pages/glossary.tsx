import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../../../components/MainLayout';
import { FilterBar2 } from '../components/FilterBar2';
import { ItemCard } from '../components/ItemCard';
import { LetterGroupButton } from '../components/LetterGroupButton';
import { PageTitle2 } from '../components/PageTitle2';

export const Glossary = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(1);
  const [currentLetter, setCurrentLetter] = useState('A');

  return (
    <MainLayout footerVariant="light">
      <div className="flex flex-col justify-center bg-gray-100">
        <div className="mx-auto mt-12 w-10/12 lg:w-11/12">
          <div className="flex w-full flex-col space-y-8">
            <PageTitle2 />
            <div className="flex w-full flex-col items-center lg:flex-row lg:space-x-5">
              <FilterBar2
                label={t('glossary.filterBarLabel')}
                onChange={() => {
                  console.log('filter');
                }}
              />
              <LetterGroupButton
                currentLetter={currentLetter}
                setCurrentLetter={setCurrentLetter}
              />
            </div>
            <ItemCard expanded={expanded} setExpanded={setExpanded} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

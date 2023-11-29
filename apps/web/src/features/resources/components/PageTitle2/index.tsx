import { useTranslation } from 'react-i18next';

interface PageTitleProps {
  children?: string;
  variant?: 'primary' | 'alternate';
}

export const PageTitle2 = ({ children, variant }: PageTitleProps) => {
  const { t } = useTranslation();
  if (variant === 'alternate')
    return (
      <h1 className="my-8 ml-24 w-96 border-b-4 border-solid border-b-blue-800 text-5xl font-bold uppercase leading-tight text-blue-800">
        {children}
      </h1>
    );

  return (
    <div className="flex w-full flex-wrap space-y-4 bg-transparent md:items-end lg:space-x-3.5">
      <h1 className="bg-orange-500 p-[3px] text-5xl font-bold text-white">
        {t('glossary.title')}
      </h1>
      <span className="mb-1 text-base uppercase  text-orange-500">
        {t('glossary.headerThanksText')}
      </span>
      <button className="z-10 rounded-sm bg-red-300 p-2 px-3 text-white shadow-lg">
        D
      </button>
      <span className="font-extralight uppercase italic">
        {t('glossary.headerHelp')}
      </span>
    </div>
  );
};

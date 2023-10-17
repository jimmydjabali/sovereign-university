import { useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import DonateLightning from '../../../assets/icons/donate_lightning.svg?react';
import { AuthorCard } from '../../../components/author-card';
import { MarkdownBody } from '../../../components/MarkdownBody';
import { TooltipWithContent } from '../../../components/tooptip-with-content';
import { computeAssetCdnUrl, trpc } from '../../../utils';
import { TutorialLayout } from '../layout';

export const TutorialDetails = () => {
  const { i18n } = useTranslation();
  const { category, name } = useParams({
    from: '/tutorials/$category/$name',
  });

  const { data: tutorial } = trpc.content.getTutorial.useQuery({
    category,
    name,
    language: i18n.language,
  });

  const { t } = useTranslation();

  function headerAndFooterText() {
    return (
      <div className="text-red-500">
        <div>
          <span>{t('tutorials.details.madeBy')}</span>
          <span className="font-semibold"> Rogzy</span>
        </div>
        <div>
          <span className="uppercase">{t('tutorials.details.source')}</span>
          <span className="font-semibold">
            https://grunch.dev/blog/rgbnode-tutorial/
          </span>
        </div>
      </div>
    );
  }

  return (
    <TutorialLayout
      currentCategory={tutorial?.category}
      currentSubcategory={tutorial?.subcategory}
      currentTutorialId={tutorial?.id}
    >
      {tutorial && (
        <div className="flex flex-col items-center justify-center md:px-2">
          <div className="mt-4 space-y-6 px-5 text-blue-900 md:max-w-3xl md:px-0">
            <div className="max-w-5xl px-5 md:px-0">
              <h1 className="border-b-[0.2rem] border-gray-400/50 py-2 text-left text-2xl font-bold uppercase text-blue-800 md:text-4xl">
                {tutorial.title}
              </h1>
              <div className="mt-4 flex flex-row justify-between">
                {headerAndFooterText()}

                <div>
                  <TooltipWithContent
                    text={t('tutorials.details.tipTooltip')}
                    position="bottom"
                  >
                    <DonateLightning />
                  </TooltipWithContent>
                </div>
              </div>
            </div>
            <MarkdownBody
              content={tutorial.raw_content}
              assetPrefix={computeAssetCdnUrl(
                tutorial.last_commit,
                tutorial.path,
              )}
            />
            <div>{headerAndFooterText()}</div>
          </div>
          <div className="mt-4 flex w-screen flex-col items-center space-y-2 bg-gray-200 p-5 text-blue-900 md:px-0">
            <h2 className="text-2xl font-semibold">
              {t('tutorials.details.enjoyed')}
            </h2>
            <p className="text-xl">{t('tutorials.details.checkAuthor')}</p>
            <AuthorCard className="py-4" name="ARMAN THE PARMAND"></AuthorCard>
          </div>
        </div>
      )}
    </TutorialLayout>
  );
};

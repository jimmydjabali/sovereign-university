import exchangeSvg from '../../assets/tutorials/exchange.svg';
import merchantSvg from '../../assets/tutorials/merchant.svg';
import miningSvg from '../../assets/tutorials/mining.svg';
import nodeSvg from '../../assets/tutorials/node.svg';
import privacySvg from '../../assets/tutorials/privacy.svg';
import walletSvg from '../../assets/tutorials/wallet.svg';
import { TRPCRouterOutput } from '../../utils/trpc';

export const TUTORIALS_CATEGORIES = [
  {
    name: 'wallet',
    image: walletSvg,
  },
  {
    name: 'node',
    image: nodeSvg,
  },
  {
    name: 'mining',
    image: miningSvg,
  },
  {
    name: 'merchant',
    image: merchantSvg,
  },
  {
    name: 'exchange',
    image: exchangeSvg,
  },
  {
    name: 'privacy',
    image: privacySvg,
  },
] as const;

export const extractSubCategories = (
  tutorials: NonNullable<TRPCRouterOutput['content']['getTutorials']>,
) => {
  return [
    ...new Set(
      tutorials.filter((tutorial) => tutorial).map((t) => t.subcategory),
    ),
  ] as string[];
};

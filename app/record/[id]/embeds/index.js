import { lazy } from 'react';

export const PoisonWormsEmbed = lazy(() => import('./poison-worms-embed'));
// export const PoisonWormsEmbed = lazy(() => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(import('./poison-worms-embed'));
//   }, 10000);
// }));

export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed'));

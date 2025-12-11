const load = async () => {
  console.log(
    await import('./imp1').then((m) => m.imp1),
    await import('./imp2').then((m) => m.imp2)
  );
};
load();

import {imp1} from './imp1'
console.log(`imp1: `, imp1)

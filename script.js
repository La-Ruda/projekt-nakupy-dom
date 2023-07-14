
console.log("Spirit of this Machine, heed my will!")

import { ShopList } from "./ShopList/index.js";

document
  .querySelector('main')
  .append(
    ShopList({ day: 'mon', dayResult: 'loading' }),
    ShopList({ day: 'tue', dayResult: 'loading' }),
  );

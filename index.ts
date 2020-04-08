import {ArrayUtil} from './array-util';

let a = [1,2,3,4,5,6,7];
let b = [1,4,6,8];

document.write(ArrayUtil.intersection(a,b).join(','));
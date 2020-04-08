export class ArrayUtil{
  
  static intersection1(arrayA:any[], arrayB:any[]):any[]{
    console.time('intersection 1');
    const args = Array.from(arguments).sort((a,b)=> a.length - b.length );
    const intersection = args[0].filter(a => args[1].includes(a));
    console.timeEnd('intersection 1');
    return intersection;
  }

  static intersection2(arrayA:any[], arrayB:any[]):any[]{
    console.time('intersection 2');
    const keys = new Set(arrayA);
    const intersection = arrayB.filter(b => keys.has(b));
    console.timeEnd('intersection 2');
    return intersection;
  }

  static intersection3(arrayA:any[], arrayB:any[]):any[]{
    console.time('intersection 3');
    const keys = [];
    arrayA.forEach(el => keys[el] = true );
    const intersection = arrayB.filter(b => keys[b]);
    console.timeEnd('intersection 3');
    return intersection;
  }
  
}
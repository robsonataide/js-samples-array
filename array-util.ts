export class ArrayUtil{
  
  static intersection(arrayA:any[], arrayB:any[]):any[]{
    console.time('intersection o(n^2)')
    const args = Array.from(arguments).sort((a,b)=> a.length - b.length );
    const intersection = args[0].filter(a => args[1].includes(a));
    console.timeEnd('intersection o(n^2)')
    return intersection;
  }

  static intersectionFast(arrayA:any[], arrayB:any[]):any[]{
    console.time('intersection o(n)')
    const hashMap = {}
    arrayA.forEach(a => hashMap[a] = true)
    console.timeEnd('intersection o(n)')
    const intersection = arrayB.filter(b => hashMap[b]);
    return intersection;
  }
  
}
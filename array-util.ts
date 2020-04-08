export class ArrayUtil{
  
  static intersection(arrayA:any[], arrayB:any[]):any[]{
    const args = Array.from(arguments).sort((a,b)=> a.length - b.length );
    const intersection = args[0].filter(a => args[1].includes(a));
    return intersection;
  }
}
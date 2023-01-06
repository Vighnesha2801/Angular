import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], filterString: string): any[] {
  //   const resultArray=[];
  //   if(value.length === 0 || filterString===''){
  //     return value;
  //   }

  //   for(const item of value){
  //     if(item.includes(filterString)){
  //       resultArray.push(item);
  //     }
  //   }
  //   console.log(resultArray);
  //   return resultArray;
  // }

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data:any){
        return JSON.stringify(data).toLowerCase().includes(args);
        // return data.id==args;
    });
}

}

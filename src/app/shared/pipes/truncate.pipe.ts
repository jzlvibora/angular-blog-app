import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit:number): string {
    if(text.length > limit){
      let truncated:string = text.substring(0,limit).trim() + '...';
      return truncated;
    }

    return text;
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear:any=new Date().getFullYear();
    let userbirth:any= new Date(value).getFullYear();
    let userage:any= currentYear-userbirth
    return userage;
  }

}

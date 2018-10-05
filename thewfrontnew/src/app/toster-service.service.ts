import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable()
export class TosterService {

  constructor() { }

  Success(title :string,message?:string)
  {
    toastr.success(message,title);
  }

  Error(title :string,message?:string)
  {
    toastr.error(message,title);
  }

  Warning(title :string,message?:string)
  {
    toastr.warning(message,title);
  }

  Info(message?:string) 
  {
    toastr.info(message);
  }

}

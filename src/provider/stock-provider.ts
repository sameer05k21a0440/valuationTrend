
import { Injectable } from '@angular/core';

/*Generated class for the StockListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockListProvider {

  stockListData :Array<any> =[
   { "Stock_date" :"2018-05-03","stock_Company":"Industry1","stock_status":"Good","stock_trading":"1900.08" },
   {"Stock_date" :"2018-01-03","stock_Company":"Industry2","stock_status":"Up","stock_trading":"5890.08" }
  ];
  constructor() {
    console.log('Hello StockListProvider Provider');
  }


}
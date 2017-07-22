import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "dataFilter"
})
export class PaginationFilterPipe implements PipeTransform {

  transform(array: any[], query: string, allUsers: any[]): any {
    if (query) {

      return _.filter(
      	allUsers, 
      	(row) => {
      		query = query.toLowerCase(); //all lowercase
      		if ( row.name.toString().toLowerCase().indexOf(query)>-1 )
	      		return true;
	      	else if ( row.email.toString().toLowerCase().indexOf(query)>-1 )
	      		return true;
	      	else if ( row.city.toString().toLowerCase().indexOf(query)>-1 )
	      		return true;
	      	else if ( row.age.toString().toLowerCase().indexOf(query)>-1 )
	      		return true
	      	else
	      		return false;
      	}
      );


      // return _.filter(allUsers, row=>row.name.indexOf(query) > -1);


    }
    return array;
  }
  
}
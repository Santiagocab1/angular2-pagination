import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UsersServices } from '../users/users.service';
import { User } from '../users/user.model';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit, OnDestroy {

  users:User[] = [];
  rowsOnPage:number = 10;
  sortBy:string = "name";
  sortOrder:string = "asc";
  subscription: Subscription;
  query:string = "";

  constructor( private usersService:UsersServices ) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.subscription = this.usersService.usersSortedBy
      .subscribe(
        (sortedBy:string) => { 
          this.sortBy = sortedBy;
        }
      );
  }

  onSortByChange( by:string ) {
    this.usersService.sortUsersBy(by);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  

}
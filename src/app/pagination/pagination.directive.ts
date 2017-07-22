import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UsersServices } from '../users/users.service';
import { User } from '../users/user.model'; 
import * as _ from 'lodash';

@Directive({
	selector: '[paginate]',
	exportAs: 'paginationData'
})
export class PaginationDirective implements OnInit, OnDestroy {
	
	@Input('paginate') data: User[];
	subscription: Subscription;

	users: User[];
	paginatedData: User[];
	offset: number = 1;
	currentPage:number = 1;
	rowsPerPage:number = 10;
	totalPages:number = 0;

	constructor( private usersService:UsersServices ) {}

	ngOnInit(){
		
		//when the main data changes(sorted) then update the list order
		this.subscription = this.usersService.usersChanged
			.subscribe(
				(users:User[]) => { 
					this.data = users;
					// this.totalPages = ( users.length%this.rowsPerPage ) ? (users.length/this.rowsPerPage)+1 : (users.length/this.rowsPerPage);
					this.totalPages = Math.round((this.data.length/this.rowsPerPage));
					this.setActivePage(1);
				}
			);
			
		//initial set of users per page
		// this.totalPages = ( this.data.length%this.rowsPerPage ) ? (this.data.length/this.rowsPerPage)+1 : (this.data.length/this.rowsPerPage);
		this.totalPages = Math.round((this.data.length/this.rowsPerPage));
		this.setActivePage(1);
	}

	setActivePage(page:number) {
		this.offset = page * this.rowsPerPage;
		this.currentPage = page;
		this.paginatedData = _.slice(this.data, (this.offset-this.rowsPerPage), this.offset );
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
	}

}
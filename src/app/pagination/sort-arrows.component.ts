import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UsersServices } from '../users/users.service';

@Component({
	selector: 'sortArrows',
	template: `
        <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            <span *ngIf="isSortedByMeAsc" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            <span *ngIf="isSortedByMeDesc" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
        </a>`
})

export class SortArrowsComponent implements OnInit, OnDestroy {

	@Input("by") sortByName: string;
	subscription: Subscription;

	isSortedByMeDesc: boolean = false;
	isSortedByMeAsc: boolean = false;

	constructor( private usersService:UsersServices ) {}

	ngOnInit() {
		this.subscription = this.usersService.usersSortedBy
			.subscribe( 
				(sortedBy:string) => { 
					if( this.sortByName != sortedBy ){
						this.isSortedByMeAsc = false;
						this.isSortedByMeDesc = false;
					}
				} 
			);
	}

	sort(){
		if(this.isSortedByMeAsc){
			this.usersService.sortUsersBy(this.sortByName, 'DESC');
			this.isSortedByMeAsc = false;
		}else{
			this.usersService.sortUsersBy(this.sortByName);
			this.isSortedByMeAsc = true;
		}
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
	}

}
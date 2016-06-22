import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'first',
	template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
})

export class AppComponent { 
	public title = 'Tour of Heroes';
	public hero: Hero = {
	 id: 1,
	 name: 'Windstorm'
	};
}
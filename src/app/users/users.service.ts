import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
import { isNumeric } from 'rxjs/util/isNumeric';
import * as _ from 'lodash';

export class UsersServices {

	usersChanged = new Subject<User[]>();
	usersSortedBy = new Subject<string>();

	private users: User[] = [
	  new User( "Wing", "tellus.eu.augue@arcu.com", "2016-01-09T14:48:34-08:00", "Paglieta", 25 ),
	  new User( "Whitney", "sed.dictum@Donec.org", "2017-01-23T20:09:52-08:00", "Bear", 32 ),
	  new User( "Oliver", "mauris@Craslorem.ca", "2015-11-19T19:11:33-08:00", "Bruderheim", 31 ),
	  new User( "Vladimir", "mi.Aliquam@Phasellus.net", "2015-11-02T07:59:34-08:00", "Andenne", 50 ),
	  new User( "Maggy", "ligula@acorciUt.edu", "2017-02-25T15:42:17-08:00", "HomprŽ", 24 ),
	  new User( "Unity", "Nunc.commodo@justo.org", "2016-03-07T03:47:55-08:00", "Ried im Innkreis", 23 ),
	  new User( "Ralph", "augue@penatibuset.net", "2017-02-27T20:03:50-08:00", "Cwmbran", 45 ),
	  new User( "Medge", "sagittis.augue@taciti.edu", "2016-03-02T03:59:17-08:00", "Maranguape", 21 ),
	  new User( "Orli", "nascetur@mipedenonummy.edu", "2016-11-07T20:48:43-08:00", "Gibbons", 38 ),
	  new User( "Ainsley", "morbi.tristique.senectus@enim.ca", "2016-02-11T22:14:36-08:00", "Guardia Perticara", 43 ),
	  new User( "Candice", "turpis.non.enim@fringillami.com", "2015-04-23T12:29:39-07:00", "Aylmer", 25 ),
	  new User( "Alexis", "lacinia.orci.consectetuer@dolorFuscefeugiat.ca", "2016-08-18T12:06:56-07:00", "Halkirk", 35 ),
	  new User( "Diana", "pede.Cras@a.edu", "2016-12-24T00:53:04-08:00", "Palermo", 31 ),
	  new User( "Tyrone", "ornare.In@duilectus.co.uk", "2015-03-31T11:45:57-07:00", "Bellevue", 36 ),
	  new User( "Brennan", "scelerisque.lorem@enim.net", "2016-09-07T16:12:31-07:00", "Oxford County", 38 ),
	  new User( "Lillith", "non@lectus.edu", "2016-08-01T12:45:06-07:00", "Lillois-WitterzŽe", 25 ),
	  new User( "Wayne", "at.egestas.a@Pellentesque.edu", "2016-02-23T10:20:18-08:00", "Baie-Saint-Paul", 32 ),
	  new User( "Vielka", "Nam.porttitor@Uttincidunt.ca", "2016-07-18T19:26:59-07:00", "Rodgau", 21 ),
	  new User( "Armando", "Aliquam@orciin.net", "2016-12-07T17:31:26-08:00", "Khanewal", 30 ),
	  new User( "Justin", "gravida.non.sollicitudin@placerataugue.edu", "2016-09-23T20:17:41-07:00", "İslahiye", 20 ),
	  new User( "Zorita", "enim@risus.org", "2015-06-14T12:12:00-07:00", "Burdinne", 20 ),
	  new User( "Mariam", "purus.mauris.a@odiosagittis.ca", "2016-10-14T18:52:48-07:00", "Bharatpur", 22 ),
	  new User( "Malik", "Nam@enimEtiam.org", "2016-09-20T18:06:55-07:00", "Neerheylissem", 28 ),
	  new User( "Claire", "sapien@Nullamlobortis.ca", "2016-12-29T09:49:13-08:00", "San Fratello", 24 ),
	  new User( "Hilel", "tempor@purusmaurisa.edu", "2016-07-09T12:03:31-07:00", "La Cruz", 30 ),
	  new User( "Alea", "vulputate@orciUt.ca", "2015-03-21T02:28:40-07:00", "Leominster", 43 ),
	  new User( "Nash", "Nunc.ullamcorper.velit@egetmetuseu.edu", "2016-10-21T10:38:41-07:00", "Gravataí", 20 ),
	  new User( "Brennan", "Vestibulum@Sedpharetra.org", "2016-06-06T22:37:33-07:00", "Carleton", 31 ),
	  new User( "Diana", "Cras.vulputate@erosturpisnon.edu", "2016-09-07T18:40:26-07:00", "Ripabottoni", 36 ),
	  new User( "Farrah", "dignissim.tempor.arcu@gravidamaurisut.edu", "2016-11-30T23:52:41-08:00", "Aguacaliente (San Francisco)", 37 ),
	  new User( "August", "tincidunt.Donec@dictumeleifendnunc.org", "2016-11-21T05:57:31-08:00", "Hameln", 21 ),
	  new User( "Reese", "et.magnis.dis@montesnasceturridiculus.net", "2015-07-01T14:09:53-07:00", "St. Catharines", 22 ),
	  new User( "Pascale", "pede.ultrices@lacinia.com", "2016-02-18T05:11:43-08:00", "Newmarket", 50 ),
	  new User( "Gage", "In.mi.pede@diameu.edu", "2016-07-31T17:51:58-07:00", "Ilhéus", 20 ),
	  new User( "Nora", "Ut.semper.pretium@luctussit.net", "2016-01-23T17:01:09-08:00", "Kirkintilloch", 32 ),
	  new User( "Jameson", "dolor.Fusce.feugiat@tempusnon.ca", "2016-06-24T08:52:43-07:00", "Uikhoven", 46 ),
	  new User( "Ryder", "Vestibulum.accumsan@egetmetus.co.uk", "2015-08-02T00:01:28-07:00", "São Gonçalo", 28 ),
	  new User( "Lyle", "libero.nec.ligula@euaugueporttitor.co.uk", "2015-11-15T05:40:15-08:00", "Vieux-Genappe", 29 ),
	  new User( "Carly", "vitae.sodales@pretium.co.uk", "2016-01-11T16:09:51-08:00", "Spresiano", 48 ),
	  new User( "Hector", "luctus@orci.com", "2016-12-20T18:58:28-08:00", "Jerzu", 35 ),
	  new User( "Luke", "luctus.aliquet.odio@bibendumDonecfelis.edu", "2016-03-06T03:19:08-08:00", "Bothey", 45 ),
	  new User( "Celeste", "et.malesuada.fames@utdolordapibus.org", "2015-10-04T23:37:46-07:00", "Armstrong", 42 ),
	  new User( "Ila", "urna.Nullam@nullaCraseu.ca", "2015-05-10T09:00:25-07:00", "Flint", 34 ),
	  new User( "Leila", "vehicula@orciUtsagittis.net", "2016-11-13T02:20:11-08:00", "Ulloa (Barrial)", 35 ),
	  new User( "Zahir", "eleifend.non.dapibus@auguescelerisque.edu", "2015-07-13T14:10:16-07:00", "Ñuñoa", 21 ),
	  new User( "Jin", "fames.ac.turpis@Namligula.edu", "2015-06-17T23:31:55-07:00", "San Felipe", 25 ),
	  new User( "Wallace", "natoque.penatibus@tortorIntegeraliquam.com", "2016-11-02T22:00:54-07:00", "Rock Springs", 39 ),
	  new User( "Wallace", "nulla.magna.malesuada@cursusNuncmauris.edu", "2016-01-25T09:13:43-08:00", "Copiapó", 31 ),
	  new User( "Buffy", "est@Vestibulumanteipsum.edu", "2016-10-10T13:54:26-07:00", "Sens", 48 ),
	  new User( "Jin", "orci.in@nuncsitamet.org", "2017-01-23T07:56:18-08:00", "Drumheller", 44 ),
	  new User( "Ethan", "ad@enimcommodohendrerit.com", "2015-07-09T20:16:24-07:00", "Ghaziabad", 32 ),
	  new User( "Sheila", "dictum@rhoncus.com", "2015-10-15T05:15:47-07:00", "Hay River", 25 ),
	  new User( "Jolie", "facilisis@uterat.net", "2016-04-30T20:48:31-07:00", "Anderlues", 32 ),
	  new User( "Eugenia", "dolor@nibhsit.ca", "2017-01-23T06:17:22-08:00", "Wardha", 36 ),
	  new User( "Suki", "pretium.neque@consequatnecmollis.net", "2016-04-20T07:03:02-07:00", "Meldert", 42 ),
	  new User( "Barrett", "a@lobortismaurisSuspendisse.edu", "2015-08-27T11:25:51-07:00", "Keith", 40 ),
	  new User( "Tashya", "nascetur@tinciduntadipiscingMauris.ca", "2015-05-31T10:57:18-07:00", "Sint-Amandsberg", 30 ),
	  new User( "Doris", "vitae@Ut.net", "2015-03-17T08:21:56-07:00", "Freirina", 27 ),
	  new User( "Herrod", "arcu.Vestibulum@augueporttitorinterdum.co.uk", "2016-08-31T10:30:49-07:00", "Hollabrunn", 47 ),
	  new User( "Patience", "gravida@in.ca", "2017-02-26T03:44:58-08:00", "Borsbeek", 21 ),
	  new User( "arden", "tincidunt.nunc.ac@nibhenim.ca", "2017-01-29T12:42:50-08:00", "Wolkrange", 36 ),
	  new User( "Harper", "tempor.lorem@quisturpis.edu", "2016-04-07T12:53:49-07:00", "Marano Lagunare", 49 ),
	  new User( "Burke", "lobortis@velpede.ca", "2015-06-01T22:29:44-07:00", "Nadiad", 49 ),
	  new User( "Jael", "hendrerit.a.arcu@montes.edu", "2016-05-08T03:28:35-07:00", "Cuenca", 32 ),
	  new User( "Stephanie", "dictum@Inmi.net", "2016-03-29T01:03:51-07:00", "Driekapellen", 39 ),
	  new User( "Frances", "lectus.quis.massa@non.ca", "2015-05-21T14:05:00-07:00", "Bama", 38 ),
	  new User( "Mark", "est.Mauris@arcuvel.ca", "2015-08-01T19:53:38-07:00", "St. Andrews", 44 ),
	  new User( "Roth", "enim.non.nisi@Lorem.net", "2016-10-12T15:20:15-07:00", "Teltow", 26 ),
	  new User( "Dakota", "sed.orci@ligulaAeneaneuismod.org", "2016-05-21T06:15:26-07:00", "Dover", 25 ),
	  new User( "Teegan", "augue.eu.tempor@Integervulputate.org", "2017-02-18T17:49:14-08:00", "Hattem", 40 ),
	  new User( "Chandler", "a.odio@sedturpis.edu", "2015-05-23T17:57:39-07:00", "Wellington", 34 ),
	  new User( "Kathleen", "Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu", "2016-03-09T13:50:40-08:00", "Weelde", 30 ),
	  new User( "Scarlet", "Suspendisse.non@montesnascetur.com", "2015-06-21T11:13:19-07:00", "Tuktoyaktuk", 32 ),
	  new User( "Haley", "risus@Cras.net", "2017-01-22T07:25:39-08:00", "Hudiksvall", 23 ),
	  new User( "Jesse", "odio@amet.org", "2016-01-29T13:03:43-08:00", "Veere", 43 ),
	  new User( "Noble", "vulputate.risus.a@Quisqueliberolacus.co.uk", "2016-08-16T08:07:57-07:00", "Cornwall", 47 ),
	  new User( "Phelan", "nascetur.ridiculus@fringilla.edu", "2015-11-09T06:20:07-08:00", "Oosterhout", 50 ),
	  new User( "Amos", "Phasellus.fermentum@montesnascetur.ca", "2016-01-20T22:02:46-08:00", "Llaillay", 31 ),
	  new User( "Pandora", "aliquet.Phasellus@sociis.ca", "2016-02-21T02:47:32-08:00", "São José dos Pinhais", 38 ),
	  new User( "Jada", "eu@a.edu", "2016-01-10T23:12:06-08:00", "Venezia", 33 ),
	  new User( "Abraham", "Nunc@Vivamus.com", "2017-02-15T20:23:36-08:00", "Wambeek", 41 ),
	  new User( "Bert", "non.bibendum@mollisduiin.org", "2015-07-17T06:27:40-07:00", "Vezzi Portio", 35 ),
	  new User( "Lars", "dolor.Fusce.feugiat@metusurnaconvallis.ca", "2015-07-05T17:29:50-07:00", "Pinneberg", 21 ),
	  new User( "Bethany", "Sed.nulla.ante@sociosquadlitora.net", "2015-12-23T01:47:18-08:00", "Idaho Falls", 20 ),
	  new User( "Jasmine", "id.enim.Curabitur@tellus.com", "2016-11-23T15:51:48-08:00", "Narbonne", 48 ),
	  new User( "Brody", "ac.orci@facilisisnon.com", "2015-11-18T20:56:24-08:00", "Livingston", 30 ),
	  new User( "alec", "in@aliquameu.org", "2015-04-21T03:17:43-07:00", "Harlingen", 21 ),
	  new User( "Audrey", "Donec@Aliquamadipiscinglobortis.org", "2016-12-06T20:14:43-08:00", "Sars-la-Buissire", 25 ),
	  new User( "Forrest", "leo.elementum@ridiculus.co.uk", "2015-09-15T11:17:42-07:00", "Langholm", 50 ),
	  new User( "Jessica", "a.mi.fringilla@montes.net", "2016-07-29T15:13:38-07:00", "Sioux City", 42 ),
	  new User( "Cedric", "Praesent.eu.nulla@tempordiamdictum.co.uk", "2016-10-02T05:17:43-07:00", "Nazilli", 21 ),
	  new User( "Maile", "pharetra@Duisatlacus.edu", "2016-12-29T18:47:43-08:00", "Salerno", 40 ),
	  new User( "acton", "consequat.auctor@Quisque.org", "2017-01-19T05:53:38-08:00", "Motta Camastra", 46 ),
	  new User( "Macey", "faucibus@tellus.org", "2015-10-30T13:07:22-07:00", "St. Thomas", 40 ),
	  new User( "Iona", "rutrum.justo@eu.org", "2015-11-10T14:36:30-08:00", "Legal", 48 ),
	  new User( "Eve", "risus.Morbi@aliquameros.com", "2015-12-21T09:25:33-08:00", "Illapel", 42 ),
	  new User( "Jayme", "a.nunc.In@convallisante.ca", "2016-02-07T10:22:09-08:00", "Ville de Maniwaki", 30 )
	  // new User( "Bo", "posuere.cubilia.Curae@estNunclaoreet.net", "2016-08-16T20:42:44-07:00", "Pak Pattan", 24 ),
	  // new User( "Matthew", "enim.Mauris.quis@vehicula.edu", "2015-05-01T01:53:59-07:00", "Alacant", 35 ),
	  // new User( "Justina", "Donec.nibh@Vivamusmolestie.ca", "2015-06-24T14:38:07-07:00", "Kobbegem", 22 )
	];
	
	cosntructor() {}

	getUser(index:number){
		return this.users[index];
	}

	getUsers(sortedBy:string='name') {
		return _.orderBy( 
				this.users.slice(), 
				function(i){
					if( !isNumeric(i[sortedBy]) )
						return i[sortedBy].toLowerCase();
					else
						return i[sortedBy]
				}, 
				['asc'] 
			);
	}

	sortUsersBy( columnName:string, order:string='ASC' ){
		if(order=='ASC')
			this.users = _.orderBy( 
				this.users.slice(), 
				function(i){
					if( !isNumeric(i[columnName]) )
						return i[columnName].toLowerCase();
					else
						return i[columnName]
				}, 
				['asc'] 
			);
		else
			this.users = _.orderBy( 
				this.users.slice(), 
				function(i){
					if( !isNumeric(i[columnName]) )
						return i[columnName].toLowerCase();
					else
						return i[columnName]
				}, 
				['desc'] 
			);

		this.usersChanged.next(this.users.slice());
		this.usersSortedBy.next(columnName);
	}

}
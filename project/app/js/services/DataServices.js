app.factory('UsersDataService', function(filterFilter, $localStorage) {
	var users = [
		{
			"role": "admin",
			"username": "admin",
			"password": "root",
			"name":"Alejandro Martin",
		},
		{
			"role": "user",
			"username": "roberto",
			"password": "123",
			"name":"Roberto Garcia",
		},
		{
			"role": "user",
			"username": "juan",
			"password": "123",
			"name":"Juan Lopez",
		}
	];

	if(!$localStorage.users){
		$localStorage.users = users;
	}

	return {
	  query: function(params) {
	    return filterFilter($localStorage.users, params);
	  },
	  get: function(params) {
	    return this.query(params)[0];
	  },
	  register: function(user) {
	  	$localStorage.users.push(user);
	  }
	};
});

app.factory('ComicsDataService', function(filterFilter, $localStorage, urlComicsJson) {

	var comics = [
		{
			"id":"1",
			"title":"Wolverine",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"1-wolverine.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'},{'5':'s'}],
			"borrowed": false
		},
		{
			"id":"2",
			"title":"Daredevil",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"2-daredevil.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'},{'5':'s'}],
			"borrowed": false
		},
		{
			"id":"3",
			"title":"The Silver Surfer",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"3-silver.jpg",
			"genre":"drama",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'}],
			"borrowed": false
		},
		{
			"id":"4",
			"title":"Spider-Man",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"4-spiderman.jpg",
			"genre":"superhero",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'}],
			"borrowed": false
		},
		{
			"id":"5",
			"title":"Capitain America",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"5-capitan.jpg",
			"genre":"drama",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}],
			"borrowed": false
		},
		{
			"id":"6",
			"title":"Fantastic Four",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"6-fantastic.jpg",
			"genre":"superhero",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}],
			"borrowed": false
		},
		{
			"id":"7",
			"title":"Superman",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"7-superman.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}],
			"borrowed": false
		},
		{
			"id":"8",
			"title":"Green Arrow",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"8-green.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}],
			"borrowed": false
		},
		{
			"id":"9",
			"title":"Hex",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"9-hex.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}],
			"borrowed": false
		},
		{
			"id":"10",
			"title":"The Incredible Hulk",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"10-hulk.jpg",
			"stars": [{'1':'s'},{'2':'s'}],
			"borrowed": false
		},
		{
			"id":"11",
			"title":"Inception",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"11-inception.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'}],
			"borrowed": false
		},
		{
			"id":"12",
			"title":"Iron Man",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"12-iron.jpg",
			"genre":"superheroe",
			"stars": [{'1':'s'},{'2':'s'}],
			"borrowed": false
		},
		{
			"id":"13",
			"title":"ShadowMan",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"13-shadow.jpg",
			"genre":"european",
			"stars": [{'1':'s'}],
			"borrowed": false
		},
		{
			"id":"14",
			"title":"Batman Detective",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"14-detective.jpg",
			"genre":"action",
			"stars": [{'1':'s'}],
			"borrowed": false
		}
	];

	if(!$localStorage.comics){
		$localStorage.comics = comics;
	}

	return {
	  query: function(params) {
	    return filterFilter($localStorage.comics, params);
	  },
	  get: function(params) {
	    return this.query(params)[0];
	  },
	  add: function(comic) {
	  	$localStorage.comics.push(comic);
	  	return true;
	  },
	  delete: function(comic) {
	  	var index = $localStorage.comics.indexOf(comic);
 			$localStorage.comics.splice(index, 1);
	  },
	  loan: function(comic) {
	  	var index = $localStorage.comics.indexOf(comic);
	  	$localStorage.comics[index].borrowed = true;
	  }
	};
});
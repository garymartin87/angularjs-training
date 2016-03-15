app.factory('UsersDataService', function(filterFilter) {
	var users = [
		{
			"username": "admin",
			"password": "root",
			"name":"Alejandro Martin",
			"avatar": "admin.jpg",
			"profile": "admin.jpg",
			"address": "Viamonte 1581 6° B",
			"phone": "(0341) 156 158589",
			"email": "alejandro.martin@globant.com"
		},
		{
			"username": "roberto",
			"password": "123",
			"name":"Roberto Garcia",
			"avatar": "roberto.png",
			"profile": "roberto.jpg",
			"address": "Pellegrini 2131",
			"phone": "(0341) 155 498158",
			"email": "roberto.garcia@globant.com"
		},
		{
			"username": "juan",
			"password": "123",
			"name":"Juan Lopez",
			"avatar": "juan.jpg",
			"profile": "juan.jpg",
			"address": "San Lorenzo 1897",
			"phone": "(0341) 156 156815",
			"email": "juan.lopez@globant.com"
		}
	];

	return {
	  query: function(params) {
	    return filterFilter(users, params);
	  },
	  get: function(params) {
	    return this.query(params)[0];
	  }
	};
});
/*
app.factory('ComicsDataService', function(filterFilter, $http, urlComicsJson) {
	var comics = [
		{
			"id":"1",
			"title":"Wolverine",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"1-wolverine.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'},{'5':'s'}]
		},
		{
			"id":"2",
			"title":"Daredevil",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"2-daredevil.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'},{'5':'s'}]
		},
		{
			"id":"3",
			"title":"The Silver Surfer",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"3-silver.jpg",
			"genre":"drama",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'}]
		},
		{
			"id":"4",
			"title":"Spider-Man",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"4-spiderman.jpg",
			"genre":"superhero",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'},{'4':'s'}]
		},
		{
			"id":"5",
			"title":"Capitain America",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"5-capitan.jpg",
			"genre":"drama",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}]
		},
		{
			"id":"6",
			"title":"Fantastic Four",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"6-fantastic.jpg",
			"genre":"superhero",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}]
		},
		{
			"id":"7",
			"title":"Superman",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"7-superman.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}]
		},
		{
			"id":"8",
			"title":"Green Arrow",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"8-green.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}]
		},
		{
			"id":"9",
			"title":"Hex",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"9-hex.jpg",
			"genre":"european",
			"stars": [{'1':'s'},{'2':'s'},{'3':'s'}]
		},
		{
			"id":"10",
			"title":"The Incredible Hulk",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"10-hulk.jpg",
			"stars": [{'1':'s'},{'2':'s'}]
		},
		{
			"id":"11",
			"title":"Inception",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"11-inception.jpg",
			"genre":"action",
			"stars": [{'1':'s'},{'2':'s'}]
		},
		{
			"id":"12",
			"title":"Iron Man",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"12-iron.jpg",
			"genre":"superheroe",
			"stars": [{'1':'s'},{'2':'s'}]
		},
		{
			"id":"13",
			"title":"ShadowMan",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"13-shadow.jpg",
			"genre":"european",
			"stars": [{'1':'s'}]
		},
		{
			"id":"14",
			"title":"Batman Detective",
			"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			"cover":"14-detective.jpg",
			"genre":"action",
			"stars": [{'1':'s'}]
		}
	];

	return {
	  query: function(params) {
	    return filterFilter(comics, params);
	  },
	  get: function(params) {
	    return this.query(params)[0];
	  }
	};
});
*/
app.factory('ComicsDataService', function(filterFilter, $http, $q, urlComicsJson) {
	var comics = [];

	var deferred = $q.defer();
	
	deferred.then(function(data){
		comics = data;
		return {
		  query: function(params) {
		    return filterFilter(comics, params);
		  },
		  get: function(params) {
		    return this.query(params)[0];
		  }
		};
	});

	$http.get(urlComicsJson).success(function(data) {
    deferred.resolve(data);
  });

	return deferred.promise;
});
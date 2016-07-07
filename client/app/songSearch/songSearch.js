angular.module('songSearch', [])

.controller('songSearchController', function ($scope, Search) {
	angular.extend($scope, Search);
	//$scope.input='';
	$scope.audio = null;
	$scope.topTracks = [];
	$scope.events;
	$scope.image;
	$scope.afterSearch = false;
	$scope.dinner = false;
	$scope.callInput = function(input){
		if(input === 'Sam' || input === 'sam' || input === 'Samantha' || input === 'samantha'){
			$scope.dinner = true;
			$scope.afterSearch = false;
		} else {
			$scope.dinner = false;
			var searchArr = Search.searchArtist(input);
			searchArr.then(function(item){
			console.log('get image', item);
			$scope.image = item.images[0].url;
			Search.getTopTracks(item.id).then(function(trackObj){

				console.log(trackObj);
				$scope.topTracks = trackObj;
				$scope.afterSearch = true;

				})
			});
				var searchEvents = Search.upcomingEvents(input, function(resp){
				console.log(resp);
				$scope.events = resp;
			});
		
		}
	};
	$scope.playTrack = function(){
		console.log(this);
		if(!$scope.audio){
		  $scope.audio = new Audio(this.track.preview_url);
       	  $scope.audio.play();
		} else {
			$scope.audio.pause();
			$scope.audio = null;
		}
		
	}

});

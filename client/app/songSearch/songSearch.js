angular.module('songSearch', [])

.controller('songSearchController', function ($scope, Search) {
	angular.extend($scope, Search);
	//$scope.input='';
	$scope.audio = null;
	$scope.topTracks = [];
	$scope.callInput = function(input){
		var searchArr = Search.searchArtist(input);
		searchArr.then(function(item){
			console.log(item);
			Search.getTopTracks(item).then(function(trackObj){

				console.log(trackObj);
				$scope.topTracks = trackObj;

			})
		});

		var searchEvents = Search.upcomingEvents(input, function(resp){
			console.log(resp);
		});
		// searchEvents.success(function(events){
		// 	console.log(events);
		// })
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

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
				// trackObj.forEach(function(track){
				// 	$scope.topTracks.push(track);

				// })
			})
		})
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
	//console.log(topTracks);
// 	document.getElementById('search-form').addEventListener('submit', function (e) {
//     	var x = document.getElementById('searchQuery').value;
//     	//console.log(x);
//      var search = Search.searchArtist(x);
//      search.then(function(resp){
//      	console.log(resp);
//      })
// }, false);

	//Search.getSongs();
});

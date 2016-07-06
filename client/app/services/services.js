angular.module('services', [])

.factory('Search', function ($http) {

  var searchArtist= function (artist) {
     return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist',
    })
    .then(function (resp) {
      return data  = resp.data.artists.items[0].id;
      //console.log(resp.data.artists.items);
    })
    .catch(function(err){
     // console.log(err);
    })
   };

    var getTopTracks= function(id) {
     return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/artists/'+id+'/top-tracks?country=US',
    })
    .then(function (resp) {
    //  console.log(resp);
     return data  = resp.data.tracks;
      //console.log(resp.data.artists.items);
    })
    .catch(function(err){
     // console.log(err);
    })
   };


  return {
    searchArtist: searchArtist,
    getTopTracks: getTopTracks
  }

})
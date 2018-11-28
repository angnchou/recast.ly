var searchYouTube = (options, callback) => {
  var youTubeData = {
    part: 'snippet',
    q: options.query,
    maxResults: options.max, 
    key: options.key,
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: youTubeData,
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.error('error', data);
    }
  });
};

export default searchYouTube;
// window.searchYouTube = searchYouTube;
/*Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
Accept an options object with the following properties:
query - the string to search for
max - the maximum number of videos to get, which should default to 5
key - an authorized YouTube Browser API key
Only GET embeddable videos*/

// var searchYouTube = (options, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: options.key,
//     q: options.query,
//     maxResults: options.max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) => console.error(err));
//     });
// }
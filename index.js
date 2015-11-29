(function(window, $) {
  
  if (!$) {
    return console.error('jQuery required.');
  }

  var clbr = window.clbr = window.clbr || {};

  clbr.imagesApi = function (url) {
    return {
      // Uploads image
      upload: function (file, access_token, fn) {
        var data = new FormData();
        data.append('image', file);

        $.ajax({
            url: url + '/',
            type: 'POST',
            headers: {'Authorization': 'JWT ' + access_token},
            data: data,
            cache: false,
            processData: false,
            contentType: false
          })
          .done(function(result) {
            fn(null, result);
          })
          .fail(function(jqXHR, textStatus, err) {
            fn(err);
          });
      },
      // Gets image by if
      get: function (id, fn) {
        $.ajax({
            url: url + '/' + id,
            type: 'GET'
          })
          .done(function(result) {
            fn(null, result);
          })
          .fail(function(jqXHR, textStatus, err) {
            fn(err);
          });
      },
      // Deletes image by id
      update: function (id, access_token, fn) {
        $.ajax({
            url: url + '/' + id,
            type: 'DELETE',
            headers: {'Authorization': 'JWT ' + access_token}
          })
          .done(function() {
            fn();
          })
          .fail(function(jqXHR, textStatus, err) {
            fn(err);
          });
      }
    };
  };

})(window, window.jQuery);
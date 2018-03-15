      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: 59.979, lng: 30.354}
        });

        var marker = new google.maps.Marker({
          position: {lat: 59.9788, lng: 30.3538},
          map: map,
          icon: 'images/tsn-map-icon.svg',
          title: 'ТСН Печать на ткани',
          visible: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 59.9788, lng: 30.3538}
        });

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
      }


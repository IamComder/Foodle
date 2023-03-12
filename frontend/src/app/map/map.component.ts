import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: google.maps.Map;
  private infowindow!: google.maps.InfoWindow;

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBNf37wByF6CAjiEoEvm5J1lx8-7w9bSRM',
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      console.log("map loaded");
    
      const location = {
        lat: 19.136553114305194,
        lng: 72.91242820060567,
      };
      const element: HTMLElement | null = document.getElementById('map');
      this.map = new google.maps.Map(element!, {
        center: location,
        zoom: 17,
        mapTypeControl: false
      });
    
      console.log(google);
      // add Places API library
      const input = document.getElementById("search-input") as HTMLInputElement;
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", this.map);

       // create infowindow
       this.infowindow = new google.maps.InfoWindow();

      // initial markers
      const marker = new google.maps.Marker({
        position: location,
        map: this.map
      });

      // add marker on autocomplete selection
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log("No details available for input: '" + place.name + "'");
          return;
        }
        const location = {
          lat: place.geometry.location!.lat(),
          lng: place.geometry.location!.lng()
        };
        this.map.setCenter(location);
        const marker = new google.maps.Marker({
          position: location,
          map: this.map
        });

         // create content for infowindow
         const content = `
         <div>
           <h4>${place.name}</h4>
           <p>Address: ${place.formatted_address}</p>
           <p>Phone: ${place.formatted_phone_number}</p>
           <p>Rating: ${place.rating}</p>
         </div>
       `;

       // set content and position of infowindow
       this.infowindow.setContent(content);
       this.infowindow.setPosition(location);

       // open infowindow on map
       this.infowindow.open(this.map);
      });
    });
  }

}

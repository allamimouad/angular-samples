import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, EMPTY, mergeMap, Observable, switchMap } from 'rxjs';

@Component({
	selector: 'app-weather',
	template: `
		<p>
			weather works!
		</p>

		<input type="text" placeholder="City Name" [formControl]="cityName">

		<p>
		weather : {{weather}}
		</p>
	`,
	styles: [
	]
})
export class WeatherComponent implements OnInit {

	private baseUrlWithAppId : string = "https://api.openweathermap.org/data/2.5/weather?appid=8bf830bf72cc4d66d2bae0e83184e879&q=";
	cityName : FormControl = new FormControl('');
	weather : String = '';

	constructor(private httpClient : HttpClient) { 
		
	}

	ngOnInit(): void {
		this.cityName.valueChanges.pipe(
			                            switchMap((cityName: String) => this.getWheatherByCityName(cityName))
		                                )
                                  .subscribe(
                                        res => {
                                              this.weather = res['main'].temp;
                                        },
                                        err => {
                                            console.error("error occured when trying the city ")
                                        }
                                    )
	}

	private getWheatherByCityName(cityName : String) : Observable<any>{

		return this.httpClient.get(this.baseUrlWithAppId + cityName)
	                          .pipe(
                                catchError( 
                                    err => {
                                        if (err.status === 404){
                                            console.log(`error 404, City ${cityName} not found`);
                                            return EMPTY;
                                        }
                                        else{
                                            console.log(`error ${err.status}`);
                                            return EMPTY;
                                        }
                                    }
                                ));
	}

}

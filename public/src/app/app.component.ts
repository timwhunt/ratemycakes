import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'public';
    cakes: any;
    newCake: any;
    theDisplayCake: any;
    newRatings ={};

    constructor(private _httpService: HttpService) {
    };

    ngOnInit() {
        this.newCake = {bakerName: "", imageURL: ""};
        this.getCakes();
    }

    getCakes() {
        let obs = this._httpService.getCakes();
        obs.subscribe((data) => {
            console.log("Got Cakes: ", data);
            if (data["status"] === "success") {
                // Loop through cakes to process
                let cakes = data["data"];
                for (let i = 0; i < cakes.length; i++) {

                    // create empty newComment object with key for cake id
                    this.newRatings[cakes[i]._id] = {rating: 5, comment: ""};

                    // decorate the cake object with the average rating
                    if (cakes[i].ratings.length == 0) {
                        cakes[i].avgRating = "(none)";
                    } else {
                        let sum = 0;
                        for (let j = 0; j < cakes[i].ratings.length; j++) {
                            sum += cakes[i].ratings[j].rating;
                        }
                        cakes[i].avgRating = (sum / cakes[i].ratings.length).toFixed(1);
                    }
                    //
                }
                this.cakes = cakes;
            }
        });
    }

    submitCake() {
        console.log("Submitting cake", this.newCake);
        let obs = this._httpService.newCake(this.newCake);
        obs.subscribe((data) => {
            if (data["status"] === "success") {
                this.newCake = {bakerName: "", imageURL: ""};
                this.getCakes();
            }
        });
    }

    submitRating(cakeId) {
        console.log("Submitting rating for cake " + cakeId);
        let obs = this._httpService.newRating(cakeId, this.newRatings[cakeId]);
        obs.subscribe((data) => {
            if (data["status"] === "success") {
                if (this.theDisplayCake) {
                    this.theDisplayCake["ratings"].push(this.newRatings[cakeId]);
                }
                this.newRatings[cakeId] = {rating: 5, comment: ""};
                this.getCakes();
            }
        })
    };

    displayCake(cake) {
        this.theDisplayCake = cake;
    }

}


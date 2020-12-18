export class Url {
    constructor(
        public countryList : string = "https://api.covid19api.com/countries",
        public wholeWorld : string = "https://api.covid19api.com/world/total",
        public countryWise : string = "https://api.covid19api.com/total/country/"
    ) {}
}
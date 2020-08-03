class DonationService{

    constructor(){
        this.URL = 'http://localhost:3000'
    }

    async getDonation(){
       const response = await fetch(this.URL);
       const donations = await response.json();
       return donations;
    }

    async addDonation(donation){
        for (var value of donation.values()) {
            console.log(value); 
         }
        const response = await fetch(this.URL + '/addImage',{
            method: 'POST',
            body: donation
        });
        
        const data = await response.json();
        console.log(data);
    }
}

export default DonationService;
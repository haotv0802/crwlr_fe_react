import axios from "axios";

class CrawledDataApi {
  static getAllCrawledData_() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(Object.assign([], cralwedData));
      }, 1);
    });
  }

  static getAllCrawledData() {
    return axios.get('http://localhost:9000/crwlr_be/svc/crawler/crawledData');
  }
}


const cralwedData = [{"name":"300pcs 1/4W Metal Film Resistor Assorted Kit 30 Values Total - intl  ","category":"Tools, DIY & Outdoor","vendorName":"itechcool","vendorLocation":"Shenzhen","vendorShipOnTime":97,"vendorPositive":71,"vendorNeutral":10,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/itechcool","vendorTimeOnLazada":7,"vendorRating":4.3,"vendorSize":4},{"name":"A4/A5 Precision Paper Photo Trimmers Cutter Scrapbook Trimmer - intl  ","category":"Stationery & Craft","vendorName":"itechcool","vendorLocation":"Shenzhen","vendorShipOnTime":97,"vendorPositive":71,"vendorNeutral":10,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/itechcool","vendorTimeOnLazada":7,"vendorRating":4.3,"vendorSize":4},{"name":"Angelus SoleBright (Sole Whitener)  ","category":"Fashion","vendorName":"OriginalFook","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":34,"vendorNeutral":2,"vendorNegative":4,"vendorLink":"https://www.lazada.sg/originalfook","vendorTimeOnLazada":23,"vendorRating":5.0,"vendorSize":4},{"name":"AURAMEN Rockin Shine Strong Hold Waterbased Pomade (150ml)  ","category":"Health & Beauty","vendorName":"The Bro Store","vendorLocation":"Singapore","vendorShipOnTime":92,"vendorPositive":4,"vendorNeutral":0,"vendorNegative":0,"vendorLink":"https://www.lazada.sg/the-bro-store","vendorTimeOnLazada":3,"vendorRating":4.0,"vendorSize":3},{"name":"Black and Decker KC4815 Ni-cd Screwdriver 4.8V  ","category":"Tools, DIY & Outdoor","vendorName":"Selffix Pte Ltd","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":184,"vendorNeutral":16,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/selffix-pte-ltd","vendorTimeOnLazada":33,"vendorRating":5.0,"vendorSize":4},{"name":"Black and Decker KC4815KA15 - Piece Screwdriver Set  ","category":"Tools, DIY & Outdoor","vendorName":"Selffix Pte Ltd","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":184,"vendorNeutral":16,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/selffix-pte-ltd","vendorTimeOnLazada":33,"vendorRating":5.0,"vendorSize":4},{"name":"Coke Can Mini Speed RC Radio Remote Control Micro Racing Car Toy Gift(Export)  ","category":"Toys & Games","vendorName":"crystalawaking","vendorLocation":"Hong Kong","vendorShipOnTime":97,"vendorPositive":820,"vendorNeutral":130,"vendorNegative":88,"vendorLink":"https://www.lazada.sg/crystalawaking","vendorTimeOnLazada":26,"vendorRating":4.3,"vendorSize":5},{"name":"Crep Protect Rain & Stain Repel Shoe Spray Bundle  ","category":"Fashion","vendorName":"OriginalFook","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":34,"vendorNeutral":2,"vendorNegative":4,"vendorLink":"https://www.lazada.sg/originalfook","vendorTimeOnLazada":23,"vendorRating":5.0,"vendorSize":4},{"name":"Crep Protect Shoe Cleaning Kit  ","category":"Fashion","vendorName":"OriginalFook","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":34,"vendorNeutral":2,"vendorNegative":4,"vendorLink":"https://www.lazada.sg/originalfook","vendorTimeOnLazada":23,"vendorRating":5.0,"vendorSize":4},{"name":"Dell SE2417HG 24\" Gaming Monitor  ","category":"Computers & Laptops","vendorName":"Boom","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":147,"vendorNeutral":17,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/boom_","vendorTimeOnLazada":35,"vendorRating":4.0,"vendorSize":4},{"name":"Digital LCD Multimeter Voltmeter Ammeter AC/DC/OHM Volt Tester Test - intl  ","category":"Tools, DIY & Outdoor","vendorName":"itechcool","vendorLocation":"Shenzhen","vendorShipOnTime":97,"vendorPositive":71,"vendorNeutral":10,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/itechcool","vendorTimeOnLazada":7,"vendorRating":4.3,"vendorSize":4},{"name":"Electrical Energy-saving Timer Plug Switch Socket (UK Plug)  ","category":"Tools, DIY & Outdoor","vendorName":"crystalawaking","vendorLocation":"Hong Kong","vendorShipOnTime":97,"vendorPositive":820,"vendorNeutral":130,"vendorNegative":88,"vendorLink":"https://www.lazada.sg/crystalawaking","vendorTimeOnLazada":26,"vendorRating":4.3,"vendorSize":5},{"name":"GoPro Hero 5 Black Edition 4K Ultra HD Waterproof Digital Video Action Camera  ","category":"Cameras","vendorName":"Empire 13","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":59,"vendorNeutral":7,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/empire-13","vendorTimeOnLazada":22,"vendorRating":3.0,"vendorSize":4},{"name":"Jason Markk 4oz Essential Shoe Cleaning Kit  ","category":"Fashion","vendorName":"OriginalFook","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":34,"vendorNeutral":2,"vendorNegative":4,"vendorLink":"https://www.lazada.sg/originalfook","vendorTimeOnLazada":23,"vendorRating":5.0,"vendorSize":4},{"name":"Jason Markk Repel Dirt & Water Repellent Pump-Spray (8oz/236ml)  ","category":"Fashion","vendorName":"OriginalFook","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":34,"vendorNeutral":2,"vendorNegative":4,"vendorLink":"https://www.lazada.sg/originalfook","vendorTimeOnLazada":23,"vendorRating":5.0,"vendorSize":4},{"name":"OMRON Blood Pressure Monitor HEM 7121 with AC Adapter  ","category":"Health & Beauty","vendorName":"Value Market","vendorLocation":"Sengkang","vendorShipOnTime":92,"vendorPositive":42,"vendorNeutral":0,"vendorNegative":1,"vendorLink":"https://www.lazada.sg/value-market","vendorTimeOnLazada":15,"vendorRating":5.0,"vendorSize":3},{"name":"Omron Blood Pressure Monitor HEM-7120  ","category":"Health & Beauty","vendorName":"Value Market","vendorLocation":"Sengkang","vendorShipOnTime":92,"vendorPositive":42,"vendorNeutral":0,"vendorNegative":1,"vendorLink":"https://www.lazada.sg/value-market","vendorTimeOnLazada":15,"vendorRating":5.0,"vendorSize":3},{"name":"OMRON HEM 7130 L BP Blood Pressure Monitor with AC Adapter  ","category":"Health & Beauty","vendorName":"Value Market","vendorLocation":"Sengkang","vendorShipOnTime":92,"vendorPositive":42,"vendorNeutral":0,"vendorNegative":1,"vendorLink":"https://www.lazada.sg/value-market","vendorTimeOnLazada":15,"vendorRating":5.0,"vendorSize":3},{"name":"OMRON HEM-7130 Blood Pressure BP Monitor Deluxe  ","category":"Health & Beauty","vendorName":"Value Market","vendorLocation":"Sengkang","vendorShipOnTime":92,"vendorPositive":42,"vendorNeutral":0,"vendorNegative":1,"vendorLink":"https://www.lazada.sg/value-market","vendorTimeOnLazada":15,"vendorRating":5.0,"vendorSize":3},{"name":"Pet Bird Wood Ladder Climb Parrot Macaw Cage Swing Shelf 31cm  ","category":"Pet Supplies","vendorName":"crystalawaking","vendorLocation":"Hong Kong","vendorShipOnTime":97,"vendorPositive":820,"vendorNeutral":130,"vendorNegative":88,"vendorLink":"https://www.lazada.sg/crystalawaking","vendorTimeOnLazada":26,"vendorRating":4.3,"vendorSize":5},{"name":"Pet Dog Cat Hair Brush Comb Grooming  ","category":"Pet Supplies","vendorName":"crystalawaking","vendorLocation":"Hong Kong","vendorShipOnTime":97,"vendorPositive":820,"vendorNeutral":130,"vendorNegative":88,"vendorLink":"https://www.lazada.sg/crystalawaking","vendorTimeOnLazada":26,"vendorRating":4.3,"vendorSize":5},{"name":"Pet Puppy Chew Squeaker Squeaky Plush Sound Ball For Dog-Elephant  ","category":"Pet Supplies","vendorName":"crystalawaking","vendorLocation":"Hong Kong","vendorShipOnTime":97,"vendorPositive":820,"vendorNeutral":130,"vendorNegative":88,"vendorLink":"https://www.lazada.sg/crystalawaking","vendorTimeOnLazada":26,"vendorRating":4.3,"vendorSize":5},{"name":"Redstone 6 steps ladder  ","category":"Tools, DIY & Outdoor","vendorName":"Selffix Pte Ltd","vendorLocation":"Singapore","vendorShipOnTime":97,"vendorPositive":184,"vendorNeutral":16,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/selffix-pte-ltd","vendorTimeOnLazada":33,"vendorRating":5.0,"vendorSize":4},{"name":"Samsung Galaxy J1 Mini Prime 8GB Gold (Export)  ","category":"Mobiles & Tablets","vendorName":"Empire 13","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":59,"vendorNeutral":7,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/empire-13","vendorTimeOnLazada":22,"vendorRating":3.0,"vendorSize":4},{"name":"Silicone Watch Strap for Garmin Vivoactive HR(Black) - intl  ","category":"TV, Audio / Video, Gaming & Wearables","vendorName":"itechcool","vendorLocation":"Shenzhen","vendorShipOnTime":97,"vendorPositive":71,"vendorNeutral":10,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/itechcool","vendorTimeOnLazada":7,"vendorRating":4.3,"vendorSize":4},{"name":"TAKA Jewellery Galaxe Diamond Bracelet (9K White Gold)  ","category":"Watches Sunglasses Jewellery","vendorName":"TAKA Jewellery","vendorLocation":"Singapore","vendorShipOnTime":95,"vendorPositive":18,"vendorNeutral":4,"vendorNegative":3,"vendorLink":"https://www.lazada.sg/taka-jewellery1","vendorTimeOnLazada":26,"vendorRating":4.0,"vendorSize":3},{"name":"TAKA Jewellery Galaxe Diamond Ring (18K White Gold)  ","category":"Watches Sunglasses Jewellery","vendorName":"TAKA Jewellery","vendorLocation":"Singapore","vendorShipOnTime":95,"vendorPositive":18,"vendorNeutral":4,"vendorNegative":3,"vendorLink":"https://www.lazada.sg/taka-jewellery1","vendorTimeOnLazada":26,"vendorRating":4.0,"vendorSize":3},{"name":"TAKA Jewellery Lustre Pearl Earrings (9K White Gold)  ","category":"Watches Sunglasses Jewellery","vendorName":"TAKA Jewellery","vendorLocation":"Singapore","vendorShipOnTime":95,"vendorPositive":18,"vendorNeutral":4,"vendorNegative":3,"vendorLink":"https://www.lazada.sg/taka-jewellery1","vendorTimeOnLazada":26,"vendorRating":4.0,"vendorSize":3},{"name":"TAKA Jewellery Spectra Blue Sapphire Gemstone Earrings (9K White Gold)  ","category":"Watches Sunglasses Jewellery","vendorName":"TAKA Jewellery","vendorLocation":"Singapore","vendorShipOnTime":95,"vendorPositive":18,"vendorNeutral":4,"vendorNegative":3,"vendorLink":"https://www.lazada.sg/taka-jewellery1","vendorTimeOnLazada":26,"vendorRating":4.0,"vendorSize":3},{"name":"Tempered Glass Screen Protector Case for Samsung Galaxy S8(Clear) - intl  ","category":"Mobiles & Tablets","vendorName":"itechcool","vendorLocation":"Shenzhen","vendorShipOnTime":97,"vendorPositive":71,"vendorNeutral":10,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/itechcool","vendorTimeOnLazada":7,"vendorRating":4.3,"vendorSize":4},{"name":"TITAN GEL Male Enhancement Special Lubricant (Fast Effects!)  ","category":"Health & Beauty","vendorName":"The Bro Store","vendorLocation":"Singapore","vendorShipOnTime":92,"vendorPositive":4,"vendorNeutral":0,"vendorNegative":0,"vendorLink":"https://www.lazada.sg/the-bro-store","vendorTimeOnLazada":3,"vendorRating":4.0,"vendorSize":3},{"name":"U8 Bluetooth Smartwatch (For iOS Android & Others)  ","category":"TV, Audio / Video, Gaming & Wearables","vendorName":"The Bro Store","vendorLocation":"Singapore","vendorShipOnTime":92,"vendorPositive":4,"vendorNeutral":0,"vendorNegative":0,"vendorLink":"https://www.lazada.sg/the-bro-store","vendorTimeOnLazada":3,"vendorRating":4.0,"vendorSize":3},{"name":"WAK DOYOK Beard & Hair Growth Cream  ","category":"Health & Beauty","vendorName":"The Bro Store","vendorLocation":"Singapore","vendorShipOnTime":92,"vendorPositive":4,"vendorNeutral":0,"vendorNegative":0,"vendorLink":"https://www.lazada.sg/the-bro-store","vendorTimeOnLazada":3,"vendorRating":4.0,"vendorSize":3},{"name":"Xiaomi Redmi Note 4X 4/64GB (Gold)  ","category":"Mobiles & Tablets","vendorName":"Empire 13","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":59,"vendorNeutral":7,"vendorNegative":7,"vendorLink":"https://www.lazada.sg/empire-13","vendorTimeOnLazada":22,"vendorRating":3.0,"vendorSize":4},{"name":"Xiaomi Redmi Note 4X 4/64GB (Gold)  ","category":"Mobiles & Tablets","vendorName":"Boom","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":147,"vendorNeutral":17,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/boom_","vendorTimeOnLazada":35,"vendorRating":4.0,"vendorSize":4},{"name":"Xiaomi Redmi Note 4X 5.5\" 32GB (Gold)  ","category":"Mobiles & Tablets","vendorName":"Boom","vendorLocation":"Singapore","vendorShipOnTime":96,"vendorPositive":147,"vendorNeutral":17,"vendorNegative":9,"vendorLink":"https://www.lazada.sg/boom_","vendorTimeOnLazada":35,"vendorRating":4.0,"vendorSize":4}];

export default CrawledDataApi;

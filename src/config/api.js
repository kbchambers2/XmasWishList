import jsonp from 'jsonp';
const api_key = "kblh8c5ktm9s8x1qv5o95yyz"

export const getEtsyItem = (listing_id) => {    
    return jsonp.get("https://openapi.etsy.com/v2/listings/" + listing_id + ".js?&api_key=" + api_key, null, function(err, data) {
      if (err) {
        console.error(err.message)
      } else {
       	return data
      }
    })
}

export const getItemPictures = (listing_id) => {    
    return jsonp("https://openapi.etsy.com/v2/listings/" + listing_id + "/images.js?&api_key=" + api_key, null, function(err, data) {
      if (err) {
        console.error(err.message)
      } else {
        return data
      }
    });
}


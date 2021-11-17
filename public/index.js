
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        let inputVal = document.querySelector('#searchBar').value;
        let searchForm = document.getElementById('searchForm')
        fetch(`https://api.coingecko.com/api/v3/coins/${inputVal}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
    searchForm.reset();
    console.log('clicked')
    }
    )
});



function createObj(data) {

    // Initialize and populate Object variables 

    let market = {};
    let social = {};
    let dev = {};

    // Populate Market Object

    market['Name'] = data.name;
    market['Price'] = data.market_data.current_price.usd;
    market['Market Cap'] = data.market_data.market_cap.usd;
    market['Total Volume'] = data.market_data.total_volume.usd;
    market.dod = data.market_data.price_change_24h;
    market.wow = data.market_data.price_change_percentage_7d;
    market.rank = data.market_cap_rank;

    // Populate Social Object

    market.twitter = data.community_data.twitter_followers;
    market.reddit = data.community_data.reddit_subscribers;


}

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
// coins endpoint returns to p
.then(resp => resp.json())
.then(data => {
    // This will be a for loop that goes from /coins/ endpoint
    // looping through each coin in returned array of obj
    let ourObj = {
        name: data.name,
        imageID: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?",
        price: data.market_data.current_price.usd,
        marketCap: data.market_data.market_cap.usd,
        dodChng: data.market_data.price_change_24h,
        weekPctChg: data.market_data.price_change_percentage_7d,
        volTraded: data.market_data.total_volume.usd,
        activeRedditAct: data.community_data.reddit_accounts_active_48h,
        redditAvgComments: data.community_data.reddit_average_comments_48h,
        redditAvgPosts: data.community_data.reddit_average_posts_48h,
        redditSubs: data.community_data.reddit_subscribers,
        twitter: data.community_data.twitter_followers
    }

    function tableCreate() {
        const body = document.body,
              tbl = document.createElement('table');
              tbl.classList.add('styled-table');
              tbod = document.createElement('tbody');
        // tbl.style.width = '100px';
        // tbl.style.border = '1px solid black';
      let thead = tbl.createTHead();
      let header = ['Rank', 'Name', 'Price', 'Market Cap']
      let row = thead.insertRow();
      for(head of header){
          let th = document.createElement('th');
          let title = document.createTextNode(head);
          th.appendChild(title);
          row.appendChild(th);
      }
      tbl.appendChild(tbod);
    //   for(head in ourObj){
    //   }
      // this isnt good for the headers, you should make this a string feed in for ea.

      // do this table population but over an object limited to the base display stuff.
        for (let i = 0; i < 4; i++) {
          const tr = tbod.insertRow();
            for (key in ourObj) {
              const td = tr.insertCell();
              td.appendChild(document.createTextNode(ourObj[key]));
              // for key = image have special handling to create img tag
              // this actually probably makes most sense to do IN the name iteration.
            }
        }
        body.appendChild(tbl);
      }
    
    // let imageid = "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?"
    // let name = data.name;
    //price
    // let price = data.market_data.current_price.usd;
    // let mktcap = data.market_data.market_cap.usd;
    // let dodchng = data.market_data.price_change_24h;

    // this gives you the absolute value of move. 
    // let weekpctchg = data.market_data.price_change_percentage_7d;
    // this gives you the % change    price_change_percentage_7d
    
    // let voltraded = data.market_data.total_volume.usd;
    // social
    // let activeRedditAct = data.community_data.reddit_accounts_active_48h;
    // let redditAvgComments = data.community_data.reddit_average_comments_48h;
    // let redditAvgPosts = data.community_data.reddit_average_posts_48h;
    // let redditSubs = data.community_data.reddit_subscribers;
    // let twitter = data.community_data.twitter_followers;

    // push the fields you want to display into an array.
    let fields = [];
    console.log(ourObj)
    //developer -- what do we even want here?
    // let issuesresolv = 
// fields.push(price,mktcap,dodchng,)
console.log(data)
tableCreate();
    //for now, you are just going through BTC obj.
//     let row = document.createElement('tr')
// for(each of fields){
//     let cell = document.createElement('td');
//     console.log(each);
//     let cellText = document.createTextNode(each);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
// }   
}
    // console.log(data)
)
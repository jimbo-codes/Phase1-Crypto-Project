
// Load Bitcoin data by default 

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(resp => resp.json())
    .then(data => createObj(data))
})

// Search Event Listener

document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    let inputVal = document.querySelector('#searchBar').value;
    let searchForm = document.getElementById('searchForm')
    fetch(`https://api.coingecko.com/api/v3/coins/${inputVal}`)
    .then(resp => resp.json())
    .then(data => {
        createObj(data);
    })
    searchForm.reset();    
}
)

// Helper Functions 

// Create Objects GET request

function createObj(data) {

    // Initialize and populate Object variables 

    let market = {};
    let social = {};
    let dev = {};

    let dataList = [market, social, dev]

    // Populate Market Object

    market['name'] = data.name;
    market['image'] = data.image.small;
    market['price'] = data.market_data.current_price.usd;
    market['market'] = data.market_data.market_cap.usd;
    market['volume'] = data.market_data.total_volume.usd;
    market['dod'] = data.market_data.price_change_24h_in_currency.usd;
    market['wow'] = data.market_data.price_change_percentage_7d;
    market['rank'] = data.market_cap_rank;

    // Populate Social Object

    social['twitter'] = data.community_data.twitter_followers;
    social['reddit'] = data.community_data.reddit_subscribers;
    social['reddit-active-posts'] = data.community_data.reddit_average_posts_48h;
    social['reddit-active-accounts'] = data.community_data.reddit_accounts_active_48h;
    

    // Populate Dev Object

    dev['subs'] = data.developer_data.subscribers;
    dev['forks'] = data.developer_data.forks;
    dev['stars'] = data.developer_data.stars;
    dev['commits'] = data.developer_data.commit_count_4_weeks;

    dataList.forEach(renderObj)
}

// Render Objects

function renderObj(obj) {


    Object.keys(obj).forEach(key => {
        console.log(obj[key]);
        if(key==='image'){
            document.getElementById(`name`).innerHTML = `<div><td><img class = float-left src=${obj[key]} width=\"20px\" height=\"20px\">${obj.name}</td></div>`
        }else {
            let cell = document.getElementById(`${key}`);
            if(obj[key]<0){
                    obj[key] = obj[key].toFixed(1);
                    cell.textContent = obj[key].toLocaleString();
                    cell.classList.add('text-red-500');
                if(key==='wow'){
                    cell.textContent = `${obj[key].toLocaleString()}%`
                }
            }else{
                cell.textContent = obj[key].toLocaleString();
            }
        }
    })
    
}

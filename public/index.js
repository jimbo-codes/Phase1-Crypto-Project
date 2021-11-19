
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
    inputVal = inputVal.replace(' ', '-')
    let searchForm = document.getElementById('searchForm')
    fetch(`https://api.coingecko.com/api/v3/coins/${inputVal}`)
    .then(resp => resp.json())
    .then(data => {
        createObj(data);
    })
    searchForm.reset();
}
)

// Logo Event Listener

const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => alert(`DON'T FORGET TO HOOOOODDDDDLLLL`))

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
    market['dod'] = Math.floor(data.market_data.price_change_24h_in_currency.usd);
    market['wow'] = data.market_data.price_change_percentage_7d.toFixed(1);
    market['rank'] = data.market_cap_rank;

    // Populate Social Object

    social['twitter'] = data.community_data.twitter_followers;
    social['reddit'] = data.community_data.reddit_subscribers;
    social['reddit-active-posts'] = data.community_data.reddit_average_posts_48h.toFixed(1);
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
        if(key==='image'){
            document.getElementById(`name`).innerHTML = `<div><td><img class = float-left src=${obj[key]} width=\"20px\" height=\"20px\">${obj.name}</td></div>`
        }else {
            let cell = document.getElementById(`${key}`);
            if(obj[key]<0){
                    cell.textContent = obj[key].toLocaleString();
                    cell.classList.add('text-red-500');    
            }if(key==='wow'){
                cell.textContent = `${obj[key].toLocaleString()}%`
            }else{
                cell.textContent = obj[key].toLocaleString();
            }
        }
    })
    
}

fetch('https://api.coingecko.com/api/v3/coins/')
.then(resp => resp.json())
.then(data => {
    // set the last table div to hidden until the populate function runs

    // returns an array of objects for each coin    

    // document.getElementById('tableIntro').style.display = 'block'
    // document.getElementById('tableFull').style.display = 'block'
    // data.forEach(renderTable);

// 2. go through each object within the array one item at a time (for x of y)
// pull out the information from each object that you're going to put into the table
// put it into the table, formatted as the others are
// include a display button which is equivalent of search event for the same name
})

function renderTable(ArrObj) {
    
}

//render for the different objects
// create your micro objects from that list programtically, then run jay's populate function (foreach) and include a createrow (insertrow?)


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

<<<<<<< HEAD
// Logo mouse over event

const logo = document.getElementById('logo');
logo.addEventListener('mouseover', () => alert('HODDDDLLLLLL'))
=======
// Logo Event Listener

const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => alert(`DON'T FORGET TO HOOOOODDDDDLLLL`))
>>>>>>> main

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
<<<<<<< HEAD
    market['dod'] = data.market_data.price_change_24h_in_currency.usd;
    market['wow'] = `${data.market_data.price_change_percentage_7d} %`;
=======
    market['dod'] = Math.floor(data.market_data.price_change_24h_in_currency.usd);
    market['wow'] = data.market_data.price_change_percentage_7d.toFixed(1);
>>>>>>> main
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
.then(data => console.log(data))

// create your Div for the "all inclusive" table

//render for the different objects
// create your micro objects from that list programtically, then run jay's populate function (foreach) and include a createrow (insertrow?)
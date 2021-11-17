
document.addEventListener("DOMContentLoaded", () => {
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
    market['24hr Price Change'] = data.market_data.price_change_24h_in_currency.usd;
    market['WoW Price Change'] = data.market_data.price_change_percentage_7d;
    market['Market Cap Rank'] = data.market_cap_rank;

    // Populate Social Object

    social['Twitter Followers'] = data.community_data.twitter_followers;
    social['Reddit Followers'] = data.community_data.reddit_subscribers;
    social['Average 48hr Reddit Posts'] = data.community_data.reddit_average_posts_48h;
    social['Reddit 48hr Active Accounts'] = data.community_data.reddit_accounts_active_48h;

    // Populate Dev Object

    dev['Subscribers'] = data.developer_data.subscribers;
    dev['Forks'] = data.developer_data.forks;
    dev['Stars'] = data.developer_data.stars;
    dev['4 Week Commits'] = data.developer_data.commit_count_4_weeks;

    console.log(market)
    console.log(social)
    console.log(dev)

}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        let inputVal = document.querySelector('#searchBar').value;
        let searchForm = document.getElementById('searchForm')
        fetch(`https://api.coingecko.com/api/v3/coins/${inputVal}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let ourObj = {
                name: data.name,
                imageID: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?",
                price: data.market_data.current_price.usd,
                marketCap: data.market_data.market_cap.usd,
                dodChng: data.market_data.price_change_24h_in_currency.usd,
                weekPctChg: data.market_data.price_change_percentage_7d,
                volTraded: data.market_data.total_volume.usd,
                activeRedditAct: data.community_data.reddit_accounts_active_48h,
                redditAvgComments: data.community_data.reddit_average_comments_48h,
                redditAvgPosts: data.community_data.reddit_average_posts_48h,
                redditSubs: data.community_data.reddit_subscribers,
                twitter: data.community_data.twitter_followers
            }
            console.log(ourObj);
            populateMarket(ourObj);
            // populateSocial(ourObj);
            // populateDeveloper(ourObj);
            function populateMarket(dataObj){
                // these could all be consolidated into a single function w/ id variable
                let id = 'md';
                let testArr =[];
                let popArr = [data.market_data.current_price.usd,data.market_data.price_change_24h_in_currency.usd,data.market_data.price_change_percentage_7d,data.market_data.total_volume.usd,data.market_data.market_cap.usd]
                for(let i=1;i<7;i++){
                    if(i===1){
                    document.getElementById(`${id}${i}`).innerHTML = `<div><td><img class = float-left src=${data.image.small} width=\"20px\" height=\"20px\">${data.name}</td></div>`
                    }
                    else{
                    testArr.push(document.getElementById(`${id}${i}`))
                    for(let j = 0; j<testArr.length; j++){
                        popArr[j] = popArr[j].toLocaleString();
                        // let a = popArr[j];
                        // a = a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
                        
                        testArr[j].textContent = popArr[j];
                    }
                }
            }
            }
            function populateSocial(){
                //define your social headers
                let id = 'soc';
                let testArr =[];
                let popArr = [HERE]
                for(let i=1;i<7;i++){
                    if(i===1){
                    document.getElementById(`${id}${i}`).innerHTML = `<div><td><img class = float-left src=${data.image.small} width=\"20px\" height=\"20px\">${data.name}</td></div>`
                    }
                    else{
                    testArr.push(document.getElementById(`${id}${i}`))
                    for(let j = 0; j<testArr.length; j++){
                        testArr[j].textContent = popArr[j];
                    }
                }
            }
                // RedditAvgComments
                // RedditAvgPosts
                // RedditSubs
                // Twitter (subs?)
            }
            function populateDeveloper(){

            }
        })
    searchForm.reset();
    console.log('clicked')
    }
    )
});

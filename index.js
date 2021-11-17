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

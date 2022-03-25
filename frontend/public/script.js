function loadEvent(){

    async function getBeerData(){
        let response = await fetch ('public/beers.json');
        console.log(response)

        let data = await response.json()
        console.log(data)

        let beerInfo = data.cards
        console.log(beerInfo)

        const beerTitle = beerInfo.map(a => a.title)
        const beerSub = beerInfo.map(a => a.sub)
        const beerText = beerInfo.map(a => a.text)


        let rootelement = document.getElementById("root")

        rootelement.insertAdjacentHTML("beforeend",`
            <div>
                <h1>${beerTitle}</h1>
                <h3>${beerSub}</h3>
                <p>${beerText}</p>
            </div>
        `)

        //for(const beet of data.cards)
    }
    getBeerData()






};
  
window.addEventListener('load', loadEvent);
  
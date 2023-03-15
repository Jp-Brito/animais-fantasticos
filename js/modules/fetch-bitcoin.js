export default function iniFetchBitcoin(){
    fetch('https://blockchain.info/ticker').then(resp => resp.json())
    .then(json => {
        const btc = document.querySelector('.btc-preco')
        btc.innerHTML = (1000 / json.BRL.sell).toFixed(4)
    }).catch(erro => {
        console.log(Error(erro))
    })
}
// https://blockchain.info/ticker
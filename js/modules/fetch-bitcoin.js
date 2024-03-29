export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      const btc = document.querySelector(target);
      btc.innerHTML = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
// https://blockchain.info/ticker

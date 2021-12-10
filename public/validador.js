// const addressContract = '0xfa6e69E9a1539832A68f493a7A6Bd61a2b4486d0';   // Ganache
const addressContract = '0xdA0e9F94923EAcB6D545f01a6469C7ddD6799202';
const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string[]","name":"_hashes","type":"string[]"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const Toast = Swal.mixin({
  toast: true,
  position: 'botton-end',
  showConfirButton: false,
  timer: 2000,
  timerProgressBar: false
});

let web3;
let account;
let MyCoin;

function init() {
  if (typeof window.ethereum !== 'undefined') {
    const metamaskBtn = document.getElementById('enableEthereumButton');
    metamaskBtn.classList.remove('d-none');

    metamaskBtn.addEventListener('click', async() => {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      account = accounts[0];

      metamaskBtn.classList.add('d-none');
      document.getElementById('accountSelected').innerHTML = account;
      document.getElementById('accountSelected').classList.add('border');
     // document.getElementById('addressGetBalance').value = account;

      Toast.fire({
          icon: 'success',
          title: 'Cuenta conectada'
      });

      detectChangeAccount();
      contract();

      //document.getElementById('login').style.display = 'none';
      //document.getElementById('main').classList.remove('d-none');
    });
  }  else {
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡Necesitas tener Metamask instalado!'
    });
  }
}

function detectChangeAccount(){
  window.ethereum.on('accountsChanged', function(accounts) {
    account = accounts[0];
    document.getElementById('accountSelected').innerHTML = account;
   // document.getElementById('addressGetBalance').value = account;

    Toast.fire({
      icon: 'success',
      title: 'Cuenta conectada'
    });
  });
}

function contract() {
  web3 = new Web3(window.ethereum);
  NftRoj = new web3.eth.Contract(abi,addressContract);
  interact();
}

function interact() {
  const btnValidador = document.getElementById('btnValidador');
  btnValidador.addEventListener('click', () => {
    //const address = document.getElementById('addressGetBalance');
    //const value = address.value;
    const value = document.getElementById('accountSelected').textContent;
    //console.log(value);
    NftRoj.methods.walletOfOwner(value).call().then(res => {
      console.log(res);
      if (res.length===0) {
        Toast.fire({
          icon: 'error',
          title: 'Cuenta sin NFTs'
        })
      } else {
        Toast.fire({
          icon: 'success',
          title: 'NFTs IDs: ' + res,
          timer: 5000
        })
        //const valueSpan = document.getElementById('balance');
        //valueSpan.innerHTML = res;
      }
      
    });
  }); 

 /* const transfer = document.getElementById('transferir');
  transfer.addEventListener('click', () => {
    const address = document.getElementById('addressBeneficiaria');
    const addressValue = address.value;

    const amount = document.getElementById('cantidad');
    const amountString = amount.value.toString();
    const amountTransfer = web3.utils.toWei(amountString, 'ether');

    MyCoin.methods.transfer(addressValue, amountTransfer).send({ from: account }).then(res => {
      address.value = '';
      amount.value = 0;

      Toast.fire({
        icon: 'success',
        title: 'Transferencia realizada'
      });
    });
  });
  */

}

window.onload = init();

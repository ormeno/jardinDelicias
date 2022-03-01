// Valores Contrato coleccion 
// Contrato con truffle (2NFT*1000) y con Mint-> 0x1B077FaC8897aD615b9Cef1Ce0D4662733eb77A0 (owner: 0xD3155B5e2B77681e7cf51fDD2E05Eb39cB328784)
const addressContract = '0xc88334E3F5Ce39F8b234E5bbfb825dc6061C3DFd';
const abi = [{"inputs":[{"internalType":"address[]","name":"payees","type":"address[]"},{"internalType":"uint256[]","name":"shares","type":"uint256[]"}],"stateMutability":"payable","type":"constructor","payable":true},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contractIERC20","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ERC20PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"coleccionesId","type":"uint256[]"},{"components":[{"internalType":"string","name":"nombre","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"totalVendidos","type":"uint256"}],"indexed":false,"internalType":"structJardinDelicias.Coleccion[]","name":"coleccionOut","type":"tuple[]"}],"name":"SobreVendido","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"idUpper","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"numNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"precio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"addresspayable","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractIERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractIERC20","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"sobresVendidos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"contractIERC20","name":"token","type":"address"}],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getColeccion","outputs":[{"internalType":"string","name":"nombre","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"totalVendidos","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool","name":"tieneTodos","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"buyEspecial","outputs":[{"internalType":"bool","name":"resultado","type":"bool"}],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","constant":true},{"inputs":[],"name":"buySobre","outputs":[{"internalType":"bool","name":"resultado","type":"bool"}],"stateMutability":"payable","type":"function","payable":true},{"inputs":[],"name":"getBalanceContrato","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"getBalanceAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","constant":true}];
const idNTFEspecial = 999;
const numNFTEsp = 50;

const Toast = Swal.mixin({
/*   toast: true,
  position: 'botton-end',
  showConfirButton: false,
  timer: 2000,
  timerProgressBar: false */
  imageWidth: 425,
  imageHeight: 475,
  imageAlt: 'Custom image'
});

let web3;
let account;
let MyCoin;

function init() {

  validarConnect(document.getElementById('btnComprar'));
  validarConnect(document.getElementById('btnConsEspecial'));
  validarConnect(document.getElementById('btnTuColeccion'));
  validarConnect(document.getElementById('btnEspecial'));
  validarConnect(document.getElementById('btnConsultar'));

  function validarConnect(boton){
    boton.addEventListener('click', () => {    
      const valueAd = document.getElementById('accountSelected').textContent;    
      if (valueAd.length===0) {
          Toast.fire({        
          title: 'Por favor, conecta la wallet'
        })
      }    
    });
  }
  
  if (typeof window.ethereum !== 'undefined') {    
    const metamaskBtn = document.getElementById('enableEthereumButton');
    metamaskBtn.classList.remove('d-none');

    metamaskBtn.addEventListener('click', async() => {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      account = accounts[0];
      console.log('3 account',account);

      metamaskBtn.classList.add('d-none');
      document.getElementById('accountSelected').innerHTML = account;
      document.getElementById('accountSelected').classList.add('border');
     // document.getElementById('addressGetBalance').value = account;

      Toast.fire({
          icon: 'success',
          title: 'Cuenta conectada',
          position: 'top',
          showConfirmButton: false,
          timer: 2000
      });

      detectChangeAccount();
      contract();

      //document.getElementById('login').style.display = 'none';
      //document.getElementById('main').classList.remove('d-none');
    });
  }  else {
     Swal.fire({
      title: '¡Metamask no instalado!',
      position: 'top',
      text: 'Esta web interactua con la blockchain de Polygon, por lo que es necesario que su navegador tenga instalado Metamask'
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

function consultarColeccion(idColeccion) {
  try{
    console.log('consultarColeccion id:', './img/cromos/' + idColeccion + '.png' );
    NftRoj.methods.getColeccion(idColeccion).call().then(res => {
    if (res.nombre==='') {
      Toast.fire({
        icon: 'error',
        title: 'Consulta erronea',
        text: 'Identificador erroneo. Solo valores del 1 al 160'
      })
    } else {
      Toast.fire({
        title: 'Nombre: ' + res.nombre,
        text: 'Total: ' + res.total + ' - Total vendidos: ' + res.totalVendidos,
        imageUrl: './img/cromos/' + idColeccion + '.png'
      })
     }
    }).catch(e=>{
        console.log('Error Promise: ', e);
        Toast.fire({
          icon: 'error',
          title: 'Consulta erronea',
          text: 'Valide que está conectado a la red Polygon y que el identificador está entre el 1 y el 160.'
         })
       }) 
  } catch (e) {
    console.log('Error: ', e);
    Toast.fire({
      icon: 'error',
      title: 'Consulta erronea',
      text: 'Valide que está conectado a la red Polygon y que el identificador está entre el 1 y el 160.'
    })
  } 

}

function interact() {
  const btnConsul = document.getElementById('btnConsultar');  
  btnConsul.addEventListener('click', () => {
      var idColeccion = document.getElementById('idToken').value;
      consultarColeccion(idColeccion)
  }); 

  const btnConsEspecial = document.getElementById('btnConsEspecial');  
  btnConsEspecial.addEventListener('click', () => {
      consultarColeccion(idNTFEspecial)
  }); 

  const btnTuColeccion = document.getElementById('btnTuColeccion');  
  btnTuColeccion.addEventListener('click', () => {
    const addressValueOri = document.getElementById('accountSelected').textContent;
    console.log('addressValueOri:  ', addressValueOri);
    NftRoj.methods.walletOfOwner(addressValueOri).call().then(res => {
      const tienes = [];
      const noTienes = []; 
      for (let x in res[0]) {
        if (res[0][x]==0){
          x++;
          noTienes.push(x);
        } else {
          tienes.push(res[0][x]);
        }
      }
      Toast.fire({
        title: 'ESTOS SON TUS NFTs: ',
        text: tienes,
        confirmButtonText: 'No tienes'
       }).then((result) => {
        if (result.isConfirmed) {
          Toast.fire({
            title: 'NFTs QUE TE FALTAN: ',
            text: noTienes
           })
        }
       })
      
    })
  }); 
   
   
  const btnEspecial = document.getElementById('btnEspecial');  
  btnEspecial.addEventListener('click', () => {
      try{
        const addressValueOri = document.getElementById('accountSelected').textContent;
        console.log('addressValueOri:  ', addressValueOri);
        NftRoj.methods.walletOfOwner(addressValueOri).call().then(res => {
          if (res.tieneTodos) {
            NftRoj.methods.getColeccion(idNTFEspecial).call().then(res2 => {
              if (res2.totalVendidos<numNFTEsp) {
                NftRoj.methods.balanceOf(addressValueOri,idNTFEspecial).call().then(res3 => {
                  if (res3==0) {
                    NftRoj.methods.buyEspecial().send({ from: addressValueOri, to:addressContract}).then(resEsp => {
                      if (resEsp.status) {
                        Toast.fire({
                          icon: 'success',
                          title: '¡¡ ENHORABUENA, SU NFT ESPECIAL !!',
                          //imageUrl: res2.url
                          imageUrl: './img/cromos/999.png'
                         })
                      } else {
                        Toast.fire({
                          icon: 'error',
                          title: 'Transacción erronea'
                        })
                      }
                      }).catch(e=>{
                        console.log('Error Promise: ', e);
                        Toast.fire({
                          icon: 'error',
                          title: 'Transacción erronea'
                         })
                       })
                  } else {
                    Toast.fire({
                      icon: 'error',
                      title: 'Lo sentimos, solo se puede tener un NFT Especial'
                    })
                  }
                })
              } else {
                Toast.fire({
                  icon: 'error',
                  title: 'Lo sentimos, no quedan NFT especiales disponibles'
                })
              }
            })
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Colección incompleta'
            })
          }
        }) 
      } catch (e) {
        console.log('Error: ', e);
        Toast.fire({
          icon: 'error',
          title: 'Consulta erronea',
          text: 'Valide que está conectado a la red Polygon y que el identificador está entre el 1 y el 160.'
        })
      } 
  }); 



   const compr = document.getElementById('btnComprar');
   compr.addEventListener('click', () => {
      const addressValueOri = document.getElementById('accountSelected').textContent;
      console.log('Ori:',addressValueOri);
      // const amountTransfer = web3.utils.toWei(amountString, 'ether');
      const amountToSend = web3.utils.toWei("0", "ether");
      console.log('amountToSend:',amountToSend);
     try {
        NftRoj.methods.buySobre().send({ from: addressValueOri, to:addressContract, value: amountToSend }).then(res => {
        if (res.status) {
          Toast.fire({
            icon: 'success',
            title: '¡¡ ENHORABUENA, COMPRA REALIZADA !!',
            confirmButtonText: '¡¡Mira tu sobre!!'
           }).then((result) => {
            if (result.isConfirmed) {
              Toast.fire({
                  title: 'Nombre: ' + res.events.SobreVendido.returnValues.coleccionOut[0].nombre,
                  text: 'Total: ' + res.events.SobreVendido.returnValues.coleccionOut[0].total + ' - Total vendidos: ' + res.events.SobreVendido.returnValues.coleccionOut[0].totalVendidos,
                 //imageUrl: res.events.SobreVendido.returnValues.coleccionOut[0].url,
                  imageUrl: './img/cromos/' + res.events.SobreVendido.returnValues[1][0] + '.png',
                  confirmButtonText: 'Siguiente'
              }).then((result) => {
                if (result.isConfirmed) {
                  Toast.fire({
                    title: 'Nombre: ' + res.events.SobreVendido.returnValues.coleccionOut[1].nombre,
                    text: 'Total: ' + res.events.SobreVendido.returnValues.coleccionOut[1].total + ' - Total vendidos: ' + res.events.SobreVendido.returnValues.coleccionOut[1].totalVendidos,
                    //imageUrl: res.events.SobreVendido.returnValues.coleccionOut[1].url,
                    imageUrl: './img/cromos/' + res.events.SobreVendido.returnValues[1][1] + '.png',
                    confirmButtonText: 'Siguiente'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Toast.fire({
                        title: 'Nombre: ' + res.events.SobreVendido.returnValues.coleccionOut[2].nombre,
                        text: 'Total: ' + res.events.SobreVendido.returnValues.coleccionOut[2].total + ' - Total vendidos: ' + res.events.SobreVendido.returnValues.coleccionOut[2].totalVendidos,
                        //imageUrl: res.events.SobreVendido.returnValues.coleccionOut[2].url,
                        imageUrl: './img/cromos/' + res.events.SobreVendido.returnValues[1][2] + '.png',
                        confirmButtonText: 'Siguiente'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Toast.fire({
                            title: 'Nombre: ' + res.events.SobreVendido.returnValues.coleccionOut[3].nombre,
                            text: 'Total: ' + res.events.SobreVendido.returnValues.coleccionOut[3].total + ' - Total vendidos: ' + res.events.SobreVendido.returnValues.coleccionOut[3].totalVendidos,
                            //imageUrl: res.events.SobreVendido.returnValues.coleccionOut[3].url,
                            imageUrl: './img/cromos/' + res.events.SobreVendido.returnValues[1][3] + '.png',
                            confirmButtonText: 'Siguiente'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Toast.fire({
                                title: 'Nombre: ' + res.events.SobreVendido.returnValues.coleccionOut[4].nombre,
                                text: 'Total: ' + res.events.SobreVendido.returnValues.coleccionOut[4].total + ' - Total vendidos: ' + res.events.SobreVendido.returnValues.coleccionOut[4].totalVendidos,
                               // imageUrl: res.events.SobreVendido.returnValues.coleccionOut[4].url
                                imageUrl: './img/cromos/' + res.events.SobreVendido.returnValues[1][4] + '.png',
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        } else {
           Toast.fire({
             icon: 'error',
             title: 'Lo sentimos, la transacción ha fallado',
             timer: 5000
          })
          //const valueSpan = document.getElementById('balance');
          //valueSpan.innerHTML = res;
        }
      }).catch(console.log('Error promise buy'))
     } catch (e) {
      console.log('Error: ', e);
    }
      
  });

}

window.onload = init();


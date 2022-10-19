/*Start the Creation of element Product */
const createCardProduct = () =>{
    const cardContainer = document.createElement("div");
    const productImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const nameProduct = document.createElement("h5");
    const ranking =document.createElement("div");
    const startPicOn = document.createElement("img");
    const startPicTw = document.createElement("img");
    const startPicTh = document.createElement("img");
    const startPicFr = document.createElement("img");
    const startPicFv = document.createElement("img");
    const price = document.createElement("h6");
    const buttonViewMore = document.createElement("a");
    const creatingRanking = () =>{
        startPicOn.classList.add("startOne");
        ranking.appendChild(startPicOn);
        startPicTw.classList.add("startTwo");
        ranking.appendChild(startPicTw);
        startPicTh.classList.add("startThree");
        ranking.appendChild(startPicTh);
        startPicFr.classList.add("startFour");
        ranking.appendChild(startPicFr);
        startPicFv.classList.add("startFive");
        ranking.appendChild(startPicFv);
    }
    const creatingCardBody = () =>{
        creatingRanking();
        nameProduct.classList.add("card-title");
        cardBody.appendChild(nameProduct);
        ranking.classList.add("ranking");
        cardBody.appendChild(ranking);
        price.classList.add("card-text");
        cardBody.appendChild(price);
        buttonViewMore.classList.add("btnbtn-primary");
        cardBody.appendChild(buttonViewMore);
    }
    const creatingCard = () =>{
        creatingCardBody();
        productImage.classList.add("card-img-top");
        cardContainer.appendChild(productImage);
        cardBody.classList.add("card-body");
        cardContainer.appendChild(cardBody);
        cardContainer.classList.add("card");
        cardContainer.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero = () =>{
        creatingCard();
        const card0 = document.getElementById('cardCero');
        card0.appendChild(cardContainer);
    }
    const addinToCardOne = () =>{
        creatingCard();
        const card1 = document.getElementById('cardOne');
        card1.appendChild(cardContainer);
    }
    addinToCardCero();
    addinToCardOne();
}
window.onload = createCardProduct();
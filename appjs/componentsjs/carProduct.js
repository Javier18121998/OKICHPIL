/*Start the Creation of element Product */
const textbutton = "VER MÁS";
const createCardProduct = () =>{
    const nameProducts = ["Cacao con Canela", 
                          "Cacao con Vainilla", 
                          "Cacao con Mamey",  
                          "Cacao con Canela", 
                          "Cacao con Nuez", 
                          "Cacao con Mango", 
                          "Cacao con Almendras y Canela",
                          "Chocolate de Cacao con Canela y Pimienta", 
                          "Chocolate de Cacao con Canela"];
    const pricesTo = ["$500,00"];
    const cardContainer = document.createElement("div");
    const productImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const nameProduct = document.createElement("h3");
    const ranking = document.createElement("div");
    const startPicOn = document.createElement("img");
    const startPicTw = document.createElement("img");
    const startPicTh = document.createElement("img");
    const startPicFr = document.createElement("img");
    const startPicFv = document.createElement("img");
    const price = document.createElement("h3");
    const buttonViewMore = document.createElement("a");
    const creatingRanking = () =>{
        startPicOn.src = "../image_Container/productos/star.png";
        startPicOn.classList.add("startOne");
        ranking.appendChild(startPicOn);
        startPicTw.src = "../image_Container/productos/star.png";
        startPicTw.classList.add("startTwo");
        ranking.appendChild(startPicTw);
        startPicTh.src = "../image_Container/productos/star.png";
        startPicTh.classList.add("startThree");
        ranking.appendChild(startPicTh);
        startPicFr.src = "../image_Container/productos/star.png";
        startPicFr.classList.add("startFour");
        ranking.appendChild(startPicFr);
        startPicFv.src = "../image_Container/productos/star.png";
        startPicFv.classList.add("startFive");
        ranking.appendChild(startPicFv);
    }
    const creatingCardBody = () =>{
        creatingRanking();
        nameProduct.textContent = nameProducts[0];
        nameProduct.classList.add("card-title");
        cardBody.appendChild(nameProduct);
        ranking.classList.add("ranking");
        cardBody.appendChild(ranking);
        price.textContent = pricesTo[0];
        price.style.color = "#D4390A";
        price.classList.add("card-text");
        cardBody.appendChild(price);
        buttonViewMore.textContent = textbutton;
        buttonViewMore.classList.add("btn");
        buttonViewMore.classList.add("btn-primary");
        buttonViewMore.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
        cardBody.appendChild(buttonViewMore);
    }
    const creatingCard = () =>{
        creatingCardBody();
        productImage.src = "../image_Container/productos/firstProduct.png";
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
    addinToCardCero();
    const cardContainer1 = document.createElement("div");
    const productImage1 = document.createElement("img");
    const cardBody1 = document.createElement("div");
    const nameProduct1 = document.createElement("h3");
    const ranking1 = document.createElement("div");
    const startPicOn1 = document.createElement("img");
    const startPicTw1 = document.createElement("img");
    const startPicTh1 = document.createElement("img");
    const startPicFr1 = document.createElement("img");
    const startPicFv1 = document.createElement("img");
    const price1 = document.createElement("h3");
    const buttonViewMore1 = document.createElement("a");
    const creatingRanking1 = () =>{
        startPicOn1.src = "../image_Container/productos/star.png";
        startPicOn1.classList.add("startOne");
        ranking1.appendChild(startPicOn1);
        startPicTw1.src = "../image_Container/productos/star.png";
        startPicTw1.classList.add("startTwo");
        ranking1.appendChild(startPicTw1);
        startPicTh1.src = "../image_Container/productos/star.png";
        startPicTh1.classList.add("startThree");
        ranking1.appendChild(startPicTh1);
        startPicFr1.src = "../image_Container/productos/star.png";
        startPicFr1.classList.add("startFour");
        ranking1.appendChild(startPicFr1);
        startPicFv1.src = "../image_Container/productos/starNone.png";
        startPicFv1.classList.add("startFive");
        ranking1.appendChild(startPicFv1);
    }
    const creatingCardBody1 = () =>{
        creatingRanking1();
        nameProduct1.textContent = nameProducts[1];
        nameProduct1.classList.add("card-title");
        cardBody1.appendChild(nameProduct1);
        ranking1.classList.add("ranking");
        cardBody1.appendChild(ranking1);
        price1.textContent = pricesTo[0];
        price1.style.color = "#D4390A";
        price1.classList.add("card-text");
        cardBody1.appendChild(price1);
        buttonViewMore1.textContent = textbutton;
        buttonViewMore1.classList.add("btn");
        buttonViewMore1.classList.add("btn-primary");
        buttonViewMore1.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore1.style.borderColor = "rgb(240, 72, 11)";
        cardBody1.appendChild(buttonViewMore1);
    }
    const creatingCard1 = () =>{
        creatingCardBody1();
        productImage1.src = "../image_Container/productos/secondProduct.png";
        productImage1.classList.add("card-img-top");
        cardContainer1.appendChild(productImage1);
        cardBody1.classList.add("card-body");
        cardContainer1.appendChild(cardBody1);
        cardContainer1.classList.add("card");
        cardContainer1.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero1 = () =>{
        creatingCard1();
        const card1 = document.getElementById('cardOne');
        card1.appendChild(cardContainer1);
    }
    addinToCardCero1();
    const cardContainer2 = document.createElement("div");
    const productImage2 = document.createElement("img");
    const cardBody2 = document.createElement("div");
    const nameProduct2 = document.createElement("h3");
    const ranking2 = document.createElement("div");
    const startPicOn2 = document.createElement("img");
    const startPicTw2 = document.createElement("img");
    const startPicTh2 = document.createElement("img");
    const startPicFr2 = document.createElement("img");
    const startPicFv2 = document.createElement("img");
    const price2 = document.createElement("h3");
    const buttonViewMore2 = document.createElement("a");
    const creatingRanking2 = () =>{
        startPicOn2.src = "../image_Container/productos/star.png";
        startPicOn2.classList.add("startOne");
        ranking2.appendChild(startPicOn2);
        startPicTw2.src = "../image_Container/productos/star.png";
        startPicTw2.classList.add("startTwo");
        ranking2.appendChild(startPicTw2);
        startPicTh2.src = "../image_Container/productos/star.png";
        startPicTh2.classList.add("startThree");
        ranking2.appendChild(startPicTh2);
        startPicFr2.src = "../image_Container/productos/star.png";
        startPicFr2.classList.add("startFour");
        ranking2.appendChild(startPicFr2);
        startPicFv2.src = "../image_Container/productos/star.png";
        startPicFv2.classList.add("startFive");
        ranking2.appendChild(startPicFv2);
    }
    const creatingCardBody2 = () =>{
        creatingRanking2();
        nameProduct2.textContent = nameProducts[2];
        nameProduct2.classList.add("card-title");
        cardBody2.appendChild(nameProduct2);
        ranking2.classList.add("ranking");
        cardBody2.appendChild(ranking2);
        price2.textContent = pricesTo[0];
        price2.style.color = "#D4390A";
        price2.classList.add("card-text");
        cardBody2.appendChild(price2);
        buttonViewMore2.textContent = textbutton;
        buttonViewMore2.classList.add("btn");
        buttonViewMore2.classList.add("btn-primary");
        buttonViewMore2.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore2.style.borderColor = "rgb(240, 72, 11)";
        cardBody2.appendChild(buttonViewMore2);
    }
    const creatingCard2 = () =>{
        creatingCardBody2();
        productImage2.src = "../image_Container/productos/thirdProduct.png";
        productImage2.classList.add("card-img-top");
        cardContainer2.appendChild(productImage2);
        cardBody2.classList.add("card-body");
        cardContainer2.appendChild(cardBody2);
        cardContainer2.classList.add("card");
        cardContainer2.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero2 = () =>{
        creatingCard2();
        const card2 = document.getElementById('cardTwo');
        card2.appendChild(cardContainer2);
    }
    addinToCardCero2();
    const cardContainer3 = document.createElement("div");
    const productImage3 = document.createElement("img");
    const cardBody3 = document.createElement("div");
    const nameProduct3 = document.createElement("h3");
    const ranking3 = document.createElement("div");
    const startPicOn3 = document.createElement("img");
    const startPicTw3 = document.createElement("img");
    const startPicTh3 = document.createElement("img");
    const startPicFr3 = document.createElement("img");
    const startPicFv3 = document.createElement("img");
    const price3 = document.createElement("h3");
    const buttonViewMore3 = document.createElement("a");
    const creatingRanking3 = () =>{
        startPicOn3.src = "../image_Container/productos/star.png";
        startPicOn3.classList.add("startOne");
        ranking3.appendChild(startPicOn3);
        startPicTw3.src = "../image_Container/productos/star.png";
        startPicTw3.classList.add("startTwo");
        ranking3.appendChild(startPicTw3);
        startPicTh3.src = "../image_Container/productos/star.png";
        startPicTh3.classList.add("startThree");
        ranking3.appendChild(startPicTh3);
        startPicFr3.src = "../image_Container/productos/star.png";
        startPicFr3.classList.add("startFour");
        ranking3.appendChild(startPicFr3);
        startPicFv3.src = "../image_Container/productos/star.png";
        startPicFv3.classList.add("startFive");
        ranking3.appendChild(startPicFv3);
    }
    const creatingCardBody3 = () =>{
        creatingRanking3();
        nameProduct3.textContent = nameProducts[3];
        nameProduct3.classList.add("card-title");
        cardBody3.appendChild(nameProduct3);
        ranking3.classList.add("ranking");
        cardBody3.appendChild(ranking3);
        price3.textContent = pricesTo[0];
        price3.style.color = "#D4390A";
        price3.classList.add("card-text");
        cardBody3.appendChild(price3);
        buttonViewMore3.textContent = textbutton;
        buttonViewMore3.classList.add("btn");
        buttonViewMore3.classList.add("btn-primary");
        buttonViewMore3.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore3.style.borderBlock = "rgb(240, 72, 11)";
        cardBody3.appendChild(buttonViewMore3);
    }
    const creatingCard3 = () =>{
        creatingCardBody3();
        productImage3.src = "../image_Container/productos/fourProduct.png";
        productImage3.classList.add("card-img-top");
        cardContainer3.appendChild(productImage3);
        cardBody3.classList.add("card-body");
        cardContainer3.appendChild(cardBody3);
        cardContainer3.classList.add("card");
        cardContainer3.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero3 = () =>{
        creatingCard3();
        const card3 = document.getElementById('cardThree');
        card3.appendChild(cardContainer3);
    }
    addinToCardCero3();
    const cardContainer4 = document.createElement("div");
    const productImage4 = document.createElement("img");
    const cardBody4 = document.createElement("div");
    const nameProduct4 = document.createElement("h3");
    const ranking4 = document.createElement("div");
    const startPicOn4 = document.createElement("img");
    const startPicTw4 = document.createElement("img");
    const startPicTh4 = document.createElement("img");
    const startPicFr4 = document.createElement("img");
    const startPicFv4 = document.createElement("img");
    const price4 = document.createElement("h3");
    const buttonViewMore4 = document.createElement("a");
    const creatingRanking4 = () =>{
        startPicOn4.src = "../image_Container/productos/star.png";
        startPicOn4.classList.add("startOne");
        ranking4.appendChild(startPicOn4);
        startPicTw4.src = "../image_Container/productos/star.png";
        startPicTw4.classList.add("startTwo");
        ranking4.appendChild(startPicTw4);
        startPicTh4.src = "../image_Container/productos/star.png";
        startPicTh4.classList.add("startThree");
        ranking4.appendChild(startPicTh4);
        startPicFr4.src = "../image_Container/productos/star.png";
        startPicFr4.classList.add("startFour");
        ranking4.appendChild(startPicFr4);
        startPicFv4.src = "../image_Container/productos/starNone.png";
        startPicFv4.classList.add("startFive");
        ranking4.appendChild(startPicFv4);
    }
    const creatingCardBody4 = () =>{
        creatingRanking4();
        nameProduct4.textContent = nameProducts[4];
        nameProduct4.classList.add("card-title");
        cardBody4.appendChild(nameProduct4);
        ranking4.classList.add("ranking");
        cardBody4.appendChild(ranking4);
        price4.textContent = pricesTo[0];
        price4.style.color = "#D4390A";
        price4.classList.add("card-text");
        cardBody4.appendChild(price4);
        buttonViewMore4.textContent = textbutton;
        buttonViewMore4.classList.add("btn");
        buttonViewMore4.classList.add("btn-primary");
        buttonViewMore4.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore4.style.borderColor = "rgb(240, 72, 11)";
        cardBody4.appendChild(buttonViewMore4);
    }
    const creatingCard4 = () =>{
        creatingCardBody4();
        productImage4.src = "../image_Container/productos/fiveProduct.png";
        productImage4.classList.add("card-img-top");
        cardContainer4.appendChild(productImage4);
        cardBody4.classList.add("card-body");
        cardContainer4.appendChild(cardBody4);
        cardContainer4.classList.add("card");
        cardContainer4.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero4 = () =>{
        creatingCard4();
        const card4 = document.getElementById('cardFour');
        card4.appendChild(cardContainer4);
    }
    addinToCardCero4();
    const cardContainer5 = document.createElement("div");
    const productImage5 = document.createElement("img");
    const cardBody5 = document.createElement("div");
    const nameProduct5 = document.createElement("h3");
    const ranking5 = document.createElement("div");
    const startPicOn5 = document.createElement("img");
    const startPicTw5 = document.createElement("img");
    const startPicTh5 = document.createElement("img");
    const startPicFr5 = document.createElement("img");
    const startPicFv5 = document.createElement("img");
    const price5 = document.createElement("h3");
    const buttonViewMore5 = document.createElement("a");
    const creatingRanking5 = () =>{
        startPicOn5.src = "../image_Container/productos/star.png";
        startPicOn5.classList.add("startOne");
        ranking5.appendChild(startPicOn5);
        startPicTw5.src = "../image_Container/productos/star.png";
        startPicTw5.classList.add("startTwo");
        ranking5.appendChild(startPicTw5);
        startPicTh5.src = "../image_Container/productos/star.png";
        startPicTh5.classList.add("startThree");
        ranking5.appendChild(startPicTh5);
        startPicFr5.src = "../image_Container/productos/star.png";
        startPicFr5.classList.add("startFour");
        ranking5.appendChild(startPicFr5);
        startPicFv5.src = "../image_Container/productos/star.png";
        startPicFv5.classList.add("startFive");
        ranking5.appendChild(startPicFv5);
    }
    const creatingCardBody5 = () =>{
        creatingRanking5();
        nameProduct5.textContent = nameProducts[5];
        nameProduct5.classList.add("card-title");
        cardBody5.appendChild(nameProduct5);
        ranking5.classList.add("ranking");
        cardBody5.appendChild(ranking5);
        price5.textContent = pricesTo[0];
        price5.style.color = "#D4390A";
        price5.classList.add("card-text");
        cardBody5.appendChild(price5);
        buttonViewMore5.textContent = textbutton;
        buttonViewMore5.classList.add("btn");
        buttonViewMore5.classList.add("btn-primary");
        buttonViewMore5.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore5.style.backgroundColor = "rgb(240, 72, 11)";
        cardBody5.appendChild(buttonViewMore5);
    }
    const creatingCard5 = () =>{
        creatingCardBody5();
        productImage5.src = "../image_Container/productos/sixeProduct.png"
        productImage5.classList.add("card-img-top");
        cardContainer5.appendChild(productImage5);
        cardBody5.classList.add("card-body");
        cardContainer5.appendChild(cardBody5);
        cardContainer5.classList.add("card");
        cardContainer5.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero5 = () =>{
        creatingCard5();
        const card5 = document.getElementById('cardFive');
        card5.appendChild(cardContainer5);
    }
    addinToCardCero5();
    const cardContainer6 = document.createElement("div");
    const productImage6 = document.createElement("img");
    const cardBody6 = document.createElement("div");
    const nameProduct6 = document.createElement("h3");
    const ranking6 = document.createElement("div");
    const startPicOn6 = document.createElement("img");
    const startPicTw6 = document.createElement("img");
    const startPicTh6 = document.createElement("img");
    const startPicFr6 = document.createElement("img");
    const startPicFv6 = document.createElement("img");
    const price6 = document.createElement("h3");
    const buttonViewMore6 = document.createElement("a");
    const creatingRanking6 = () =>{
        startPicOn6.src = "../image_Container/productos/star.png";
        startPicOn6.classList.add("startOne");
        ranking6.appendChild(startPicOn6);
        startPicTw6.src = "../image_Container/productos/star.png";
        startPicTw6.classList.add("startTwo");
        ranking6.appendChild(startPicTw6);
        startPicTh6.src = "../image_Container/productos/star.png";
        startPicTh6.classList.add("startThree");
        ranking6.appendChild(startPicTh6);
        startPicFr6.src = "../image_Container/productos/star.png";
        startPicFr6.classList.add("startFour");
        ranking6.appendChild(startPicFr6);
        startPicFv6.src = "../image_Container/productos/star.png";
        startPicFv6.classList.add("startFive");
        ranking6.appendChild(startPicFv6);
    }
    const creatingCardBody6 = () =>{
        creatingRanking6();
        nameProduct6.textContent = nameProducts[6];
        nameProduct6.classList.add("card-title");
        cardBody6.appendChild(nameProduct6);
        ranking6.classList.add("ranking");
        cardBody6.appendChild(ranking6);
        price6.textContent = pricesTo[0];
        price6.style.color = "#D4390A";
        price6.classList.add("card-text");
        cardBody6.appendChild(price6);
        buttonViewMore6.textContent = textbutton;
        buttonViewMore6.classList.add("btn");
        buttonViewMore6.classList.add("btn-primary");
        buttonViewMore6.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore6.style.borderColor = "rgb(240, 72, 11)";
        cardBody6.appendChild(buttonViewMore6);
    }
    const creatingCard6 = () =>{
        creatingCardBody6();
        productImage6.src = "../image_Container/productos/sevenProduct.png";
        productImage6.classList.add("card-img-top");
        cardContainer6.appendChild(productImage6);
        cardBody6.classList.add("card-body");
        cardContainer6.appendChild(cardBody6);
        cardContainer6.classList.add("card");
        cardContainer6.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero6 = () =>{
        creatingCard6();
        const card6 = document.getElementById('cardSixe');
        card6.appendChild(cardContainer6);
    }
    addinToCardCero6();
    const cardContainer7 = document.createElement("div");
    const productImage7 = document.createElement("img");
    const cardBody7 = document.createElement("div");
    const nameProduct7 = document.createElement("h3");
    const ranking7 = document.createElement("div");
    const startPicOn7 = document.createElement("img");
    const startPicTw7 = document.createElement("img");
    const startPicTh7 = document.createElement("img");
    const startPicFr7 = document.createElement("img");
    const startPicFv7 = document.createElement("img");
    const price7 = document.createElement("h3");
    const buttonViewMore7 = document.createElement("a");
    const creatingRanking7 = () =>{
        startPicOn7.src = "../image_Container/productos/star.png";
        startPicOn7.classList.add("startOne");
        ranking7.appendChild(startPicOn7);
        startPicTw7.src = "../image_Container/productos/star.png";
        startPicTw7.classList.add("startTwo");
        ranking7.appendChild(startPicTw7);
        startPicTh7.src = "../image_Container/productos/star.png";
        startPicTh7.classList.add("startThree");
        ranking7.appendChild(startPicTh7);
        startPicFr7.src = "../image_Container/productos/star.png";
        startPicFr7.classList.add("startFour");
        ranking7.appendChild(startPicFr7);
        startPicFv7.src = "../image_Container/productos/starNone.png";
        startPicFv7.classList.add("startFive");
        ranking7.appendChild(startPicFv7);
    }
    const creatingCardBody7 = () =>{
        creatingRanking7();
        nameProduct7.textContent = nameProducts[7];
        nameProduct7.classList.add("card-title");
        cardBody7.appendChild(nameProduct7);
        ranking7.classList.add("ranking");
        cardBody7.appendChild(ranking7);
        price7.textContent = pricesTo[0];
        price7.style.color = "#D4390A";
        price7.classList.add("card-text");
        cardBody7.appendChild(price7);
        buttonViewMore7.textContent = textbutton;
        buttonViewMore7.classList.add("btn");
        buttonViewMore7.classList.add("btn-primary");
        buttonViewMore7.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore7.style.borderColor = "rgb(240, 72, 11)";
        cardBody7.appendChild(buttonViewMore7);
    }
    const creatingCard7 = () =>{
        creatingCardBody7();
        productImage7.src = "../image_Container/productos/eightProduct.png";
        productImage7.classList.add("card-img-top");
        cardContainer7.appendChild(productImage7);
        cardBody7.classList.add("card-body");
        cardContainer7.appendChild(cardBody7);
        cardContainer7.classList.add("card");
        cardContainer7.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero7 = () =>{
        creatingCard7();
        const card7 = document.getElementById('cardSeven');
        card7.appendChild(cardContainer7);
    }
    addinToCardCero7();
    const cardContainer8 = document.createElement("div");
    const productImage8 = document.createElement("img");
    const cardBody8 = document.createElement("div");
    const nameProduct8 = document.createElement("h3");
    const ranking8 = document.createElement("div");
    const startPicOn8 = document.createElement("img");
    const startPicTw8 = document.createElement("img");
    const startPicTh8 = document.createElement("img");
    const startPicFr8 = document.createElement("img");
    const startPicFv8 = document.createElement("img");
    const price8 = document.createElement("h3");
    const buttonViewMore8 = document.createElement("a");
    const creatingRanking8 = () =>{
        startPicOn8.src = "../image_Container/productos/star.png";
        startPicOn8.classList.add("startOne");
        ranking8.appendChild(startPicOn8);
        startPicTw8.src = "../image_Container/productos/star.png";
        startPicTw8.classList.add("startTwo");
        ranking8.appendChild(startPicTw8);
        startPicTh8.src = "../image_Container/productos/star.png";
        startPicTh8.classList.add("startThree");
        ranking8.appendChild(startPicTh8);
        startPicFr8.src = "../image_Container/productos/star.png";
        startPicFr8.classList.add("startFour");
        ranking8.appendChild(startPicFr8);
        startPicFv8.src = "../image_Container/productos/star.png";
        startPicFv8.classList.add("startFive");
        ranking8.appendChild(startPicFv8);
    }
    const creatingCardBody8 = () =>{
        creatingRanking8();
        nameProduct8.textContent = nameProducts[8];
        nameProduct8.classList.add("card-title");
        cardBody8.appendChild(nameProduct8);
        ranking8.classList.add("ranking");
        cardBody8.appendChild(ranking8);
        price8.textContent = pricesTo[0];
        price8.style.color = "#D4390A";
        price8.classList.add("card-text");
        cardBody8.appendChild(price8);
        buttonViewMore8.textContent = textbutton;
        buttonViewMore8.classList.add("btn");
        buttonViewMore8.classList.add("btn-primary");
        buttonViewMore8.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore8.style.borderColor = "rgb(240, 72, 11)";
        cardBody8.appendChild(buttonViewMore8);
    }
    const creatingCard8 = () =>{
        creatingCardBody8();
        productImage8.src = "../image_Container/productos/nineProduct.png";
        productImage8.classList.add("card-img-top");
        cardContainer8.appendChild(productImage8);
        cardBody8.classList.add("card-body");
        cardContainer8.appendChild(cardBody8);
        cardContainer8.classList.add("card");
        cardContainer8.setAttribute("style", "width: 18rem;");
    }
    const addinToCardCero8 = () =>{
        creatingCard8();
        const card8 = document.getElementById('cardEight');
        card8.appendChild(cardContainer8);
    }
    addinToCardCero8();
    buttonViewMore.addEventListener('mouseover', function(){
        buttonViewMore.style.backgroundColor = "orange";
        buttonViewMore.style.borderColor = "orange";
    });
    buttonViewMore.addEventListener('mouseout', function(){
        buttonViewMore.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore1.addEventListener('mouseover', function(){
        buttonViewMore1.style.backgroundColor = "orange";
        buttonViewMore1.style.borderColor = "orange";
    });
    buttonViewMore1.addEventListener('mouseout', function(){
        buttonViewMore1.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore1.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore2.addEventListener('mouseover', function(){
        buttonViewMore2.style.backgroundColor = "orange";
        buttonViewMore2.style.borderColor = "orange";
    });
    buttonViewMore2.addEventListener('mouseout', function(){
        buttonViewMore2.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore2.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore3.addEventListener('mouseover', function(){
        buttonViewMore3.style.backgroundColor = "orange";
        buttonViewMore3.style.borderColor = "orange";
    });
    buttonViewMore3.addEventListener('mouseout', function(){
        buttonViewMore3.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore3.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore4.addEventListener('mouseover', function(){
        buttonViewMore4.style.backgroundColor = "orange";
        buttonViewMore4.style.borderColor = "orange";
    });
    buttonViewMore4.addEventListener('mouseout', function(){
        buttonViewMore4.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore4.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore5.addEventListener('mouseover', function(){
        buttonViewMore5.style.backgroundColor = "orange";
        buttonViewMore5.style.borderColor = "orange";
    });
    buttonViewMore5.addEventListener('mouseout', function(){
        buttonViewMore5.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore5.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore6.addEventListener('mouseover', function(){
        buttonViewMore6.style.backgroundColor = "orange";
        buttonViewMore6.style.borderColor = "orange";
    });
    buttonViewMore6.addEventListener('mouseout', function(){
        buttonViewMore6.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore6.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore7.addEventListener('mouseover', function(){
        buttonViewMore7.style.backgroundColor = "orange";
        buttonViewMore7.style.borderColor = "orange";
    });
    buttonViewMore7.addEventListener('mouseout', function(){
        buttonViewMore7.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore7.style.borderColor = "rgb(240, 72, 11)";
    });
    buttonViewMore8.addEventListener('mouseover', function(){
        buttonViewMore8.style.backgroundColor = "orange";
        buttonViewMore8.style.borderColor = "orange";
    });
    buttonViewMore8.addEventListener('mouseout', function(){
        buttonViewMore8.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore8.style.borderColor = "rgb(240, 72, 11)";
    });
}
window.onload = createCardProduct();
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
    const pricesTo = ["$500,00", "$600,00", "$400,00"];
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
        price.textContent = pricesTo[1];
        price.style.color = "#D4390A";
        price.classList.add("card-text");
        cardBody.appendChild(price);
        buttonViewMore.textContent = textbutton;
        buttonViewMore.classList.add("btn");
        buttonViewMore.classList.add("btn-primary");
        buttonViewMore.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
        cardBody.appendChild(buttonViewMore);
        buttonViewMore.addEventListener('click', () =>{
        });
        buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore.addEventListener('mouseover', function(){
            buttonViewMore.style.backgroundColor = "orange";
            buttonViewMore.style.borderColor = "orange";
        });
        buttonViewMore.addEventListener('mouseout', function(){            
            buttonViewMore.style.backgroundColor = "rgb(240, 72, 11)";
            buttonViewMore.style.borderColor = "rgb(240, 72, 11)";
        });
    }
    const creatingCard = () =>{
        creatingCardBody();
        productImage.src = "../image_Container/productos/firstProduct.png";
        productImage.classList.add("card-img-top");
        cardContainer.appendChild(productImage);
        cardBody.classList.add("card-body");
        cardContainer.appendChild(cardBody);
        cardContainer.classList.add("card");
        cardContainer.setAttribute("style", "width: 16rem;");
    }
    const addinToCardCero = () =>{
        creatingCard();
        const card1 = document.getElementById('cardOne');
        card1.appendChild(cardContainer);
    }
    addinToCardCero();
    const createHisTablePic = () =>{
        const containerTable = document.createElement("div");
        const firstPic = document.createElement("img");
        const tableBody = document.createElement("div");
        const imgOne = document.createElement("img");
        const imgTwo = document.createElement("img");
        const imgThree = document.createElement("img");
        const imgFour = document.createElement("img");
        const createPicTable = () =>{
            firstPic.src = "../image_Container/productos/firstfirstproduct.png";
            firstPic.classList.add("card-img-top");
        }
        const createTableBody = () =>{
            imgOne.src = "../image_Container/productos/firstProduct.png";
            imgOne.style.border = "0.14rem solid orange";
            imgTwo.src = "../image_Container/productos/firstsecproduct.png";
            imgThree.src = "../image_Container/productos/firstthirdproduct.png";
            imgFour.src = "../image_Container/productos/firstfourtproduct.png";
            tableBody.classList.add("card-body");
            tableBody.classList.add("card-Body");
            tableBody.appendChild(imgOne);
            tableBody.appendChild(imgTwo);
            tableBody.appendChild(imgThree);
            tableBody.appendChild(imgFour);
            imgOne.addEventListener('click', function(){
                imgOne.style.border = "0.14rem solid orange"
                imgTwo.style.border = "none"
                imgFour.style.border = "none"
                imgThree.style.border = "none"
                firstPic.src = "../image_Container/productos/firstfirstproduct.png";
            })
            imgTwo.addEventListener('click', function(){
                imgTwo.style.border = "0.14rem solid orange"
                imgOne.style.border = "none"
                imgFour.style.border = "none"
                imgThree.style.border = "none"
                firstPic.src = "../image_Container/productos/firstsecproduct.png";
                firstPic.style.height = "auto";
            })
            imgThree.addEventListener('click', function(){
                imgThree.style.border = "0.14rem solid orange"
                imgOne.style.border = "none"
                imgFour.style.border = "none"
                imgTwo.style.border = "none"
                firstPic.src = "../image_Container/productos/firstthirdproduct.png";
                firstPic.style.height = "auto";
            })
            
            imgFour.addEventListener('click', function(){
                imgFour.style.border = "0.14rem solid orange"
                imgOne.style.border = "none"
                imgThree.style.border = "none"
                imgTwo.style.border = "none"
                firstPic.src = "../image_Container/productos/firstfourtproduct.png";
                firstPic.style.height = "auto";
            })
        }
        const creattingTable = () =>{
            createTableBody();
            createPicTable();
            containerTable.classList.add("card");
            containerTable.setAttribute("style", "width: 25rem");
            containerTable.appendChild(firstPic);
            containerTable.appendChild(tableBody);
            const pl = window.innerWidth;
            const tr = pl - 4;
            if (tr <= 480) {
                containerTable.setAttribute("style", "width: 17rem");
            }
        }
        const addingTableTo = () =>{
            creattingTable();
            const selferPic = document.getElementById('selferPics');
            selferPic.appendChild(containerTable);
        }
        addingTableTo();
    }
    createHisTablePic();
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
        buttonViewMore1.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore1.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore1.addEventListener('mouseover', function(){
            buttonViewMore1.style.backgroundColor = "orange";
            buttonViewMore1.style.borderColor = "orange";
        });
        buttonViewMore1.addEventListener('mouseout', function(){            
            buttonViewMore1.style.backgroundColor = "rgb(240, 72, 11)";
            buttonViewMore1.style.borderColor = "rgb(240, 72, 11)";
        });
    }
    const creatingCard1 = () =>{
        creatingCardBody1();
        productImage1.src = "../image_Container/productos/secondProduct.png";
        productImage1.classList.add("card-img-top");
        cardContainer1.appendChild(productImage1);
        cardBody1.classList.add("card-body");
        cardContainer1.appendChild(cardBody1);
        cardContainer1.classList.add("card");
        cardContainer1.setAttribute("style", "width: 16rem;");
    }
    const addinToCardCero1 = () =>{
        creatingCard1();
        const card0 = document.getElementById('cardCero');
        card0.appendChild(cardContainer1);
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
        buttonViewMore2.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore2.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore2.addEventListener('mouseover', function(){
            buttonViewMore2.style.backgroundColor = "orange";
            buttonViewMore2.style.borderColor = "orange";
        });
        buttonViewMore2.addEventListener('mouseout', function(){            
            buttonViewMore2.style.backgroundColor = "rgb(240, 72, 11)";
            buttonViewMore2.style.borderColor = "rgb(240, 72, 11)";
        });
    }
    const creatingCard2 = () =>{
        creatingCardBody2();
        productImage2.src = "../image_Container/productos/thirdProduct.png";
        productImage2.classList.add("card-img-top");
        cardContainer2.appendChild(productImage2);
        cardBody2.classList.add("card-body");
        cardContainer2.appendChild(cardBody2);
        cardContainer2.classList.add("card");
        cardContainer2.setAttribute("style", "width: 16rem;");
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
        price3.textContent = pricesTo[2];
        price3.style.color = "#D4390A";
        price3.classList.add("card-text");
        cardBody3.appendChild(price3);
        buttonViewMore3.textContent = textbutton;
        buttonViewMore3.classList.add("btn");
        buttonViewMore3.classList.add("btn-primary");
        buttonViewMore3.style.backgroundColor = "rgb(240, 72, 11)";
        buttonViewMore3.style.borderBlock = "rgb(240, 72, 11)";
        cardBody3.appendChild(buttonViewMore3);
        buttonViewMore3.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore3.style.borderColor = "rgb(240, 72, 11)";
        buttonViewMore3.addEventListener('mouseover', function(){
            buttonViewMore3.style.backgroundColor = "orange";
            buttonViewMore3.style.borderColor = "orange";
        });
        buttonViewMore3.addEventListener('mouseout', function(){            
            buttonViewMore3.style.backgroundColor = "rgb(240, 72, 11)";
            buttonViewMore3.style.borderColor = "rgb(240, 72, 11)";
        });
    }
    const creatingCard3 = () =>{
        creatingCardBody3();
        productImage3.src = "../image_Container/productos/fourProduct.png";
        productImage3.classList.add("card-img-top");
        cardContainer3.appendChild(productImage3);
        cardBody3.classList.add("card-body");
        cardContainer3.appendChild(cardBody3);
        cardContainer3.classList.add("card");
        cardContainer3.setAttribute("style", "width: 16rem;");
    }
    const addinToCardCero3 = () =>{
        creatingCard3();
        const card3 = document.getElementById('cardThree');
        card3.appendChild(cardContainer3);
    }
    addinToCardCero3();
    const spinceHens = () =>{
        const buttonMoreCarousel = document.getElementById('ver-more');
        buttonMoreCarousel.addEventListener('mouseover', function(){
            buttonMoreCarousel.style.cursor = "pointer";
        });
    }
    spinceHens();
    const infloatItems = () =>{
        const borderFb = document.getElementById('Component_28_1');
        const facebook = document.getElementById('Ellipse_88');
        const logoFbItem = document.getElementById('Path_2615');
        const borderIg = document.getElementById('Component_29_1');
        const instagram = document.getElementById('Ellipse_89');
        const logoIgItem1 = document.getElementById('Path_2616');
        const logoIgItem2 = document.getElementById('Path_2617');
        const logoIgItem3 = document.getElementById('Path_2618');
        facebook.addEventListener('mouseover', function(){
            facebook.style.fill = "#ffffff";
            logoFbItem.style.fill = "#ff9002";
            facebook.style.cursor = "pointer";
            borderFb.style.border = "1px solid orange";
            borderFb.style.borderRadius = "50%";
        });
        facebook.addEventListener('mouseout', function(){
            logoFbItem.style.fill = "#ffffff";
            facebook.style.fill = "#ff9002";
            borderFb.style.border = "none";
            borderFb.style.borderRadius = "none";
        });
        facebook.addEventListener('click', function(){
            const goToFacebook = window.open("https://www.facebook.com/", '_blank');
            goToFacebook.focus();
        });
        logoFbItem.addEventListener('mouseover', function(){
            facebook.style.fill = "#ffffff";
            logoFbItem.style.fill = "#ff9002";
            facebook.style.cursor = "pointer";
            borderFb.style.border = "1px solid #ff9002";
            borderFb.style.borderRadius = "50%";
        });
        logoFbItem.addEventListener('mouseout', function(){
            logoFbItem.style.fill = "#ffffff";
            facebook.style.fill = "#ff9002";
            borderFb.style.border = "none";
            borderFb.style.borderRadius = "none";
        });
        instagram.addEventListener('mouseover', function(){
            instagram.style.fill = "#ffffff";
            logoIgItem1.style.fill = "#ff9002";
            logoIgItem2.style.fill = "#ff9002";
            logoIgItem3.style.fill = "#ff9002";
            instagram.style.cursor = "pointer";
            borderIg.style.border = "1px solid #ff9002";
            borderIg.style.borderRadius = "50%";
        });
        instagram.addEventListener('click', function(){
            const goToInstagram = window.open("https://www.instagram.com/", '_blank');
            goToInstagram.focus();
        });
        instagram.addEventListener('mouseout', function(){
            instagram.style.fill = "#ff9002";
            logoIgItem1.style.fill = "#ffffff";
            logoIgItem2.style.fill = "#ffffff";
            logoIgItem3.style.fill = "#ffffff";
            instagram.style.cursor = "pointer";
            borderIg.style.border = "1px solid #ffffff";
            borderIg.style.borderRadius = "50%";
        });
        logoIgItem1.addEventListener('mouseover', function(){
            instagram.style.fill = "#ffffff";
            logoIgItem1.style.fill = "#ff9002";
            logoIgItem2.style.fill = "#ff9002";
            logoIgItem3.style.fill = "#ff9002";
            instagram.style.cursor = "#ff9002";
            borderIg.style.border = "1px solid #ff9002";
            borderIg.style.borderRadius = "50%";
        });
        logoIgItem1.addEventListener('mouseout', function(){
            instagram.style.fill = "#ff9002";
            logoIgItem1.style.fill = "#ffffff";
            logoIgItem2.style.fill = "#ffffff";
            logoIgItem3.style.fill = "#ffffff";
            instagram.style.cursor = "pointer";
            borderIg.style.border = "1px solid #ffffff";
            borderIg.style.borderRadius = "50%";
        });
    }
    infloatItems();
    const defaultChecked = () =>{
        const firstCheckBox = document.getElementById('checkbox')
        firstCheckBox.click()
        firstCheckBox.style.backgroundColor = "#fbfbfb"
        firstCheckBox.style.border = "1px solid #a9c21c"
        firstCheckBox.style.borderRadius = "0";
        firstCheckBox.style.backgroundImage = "../image_Container/producto/checkedwave.png"
    }
    defaultChecked()
}
window.onload = createCardProduct();
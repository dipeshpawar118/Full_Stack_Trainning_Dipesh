document.getElementById("body").setAttribute("class" ,"noPadding" )
document.getElementById("body").style="overflow-y:scroll; overflow-x:hidden;"

let cardCount = 0 ;

let addedIteam = new Set();

function addTocart(num){
 cardCount = cardCount+num;
 let ShopingCartCount = document.getElementById("cartCount")
 if(cardCount==0){
    ShopingCartCount.setAttribute("class" , "")
    ShopingCartCount.innerText = ''
 }else{
    ShopingCartCount.setAttribute("class" , "addToCart")
    ShopingCartCount.innerText = cardCount
 }


 
}

function getHeader(){

let headerForDesktop =  document.createElement("div")
headerForDesktop.setAttribute("class" ,"header navBar-screen3" )

let navBar =  document.createElement("div")
navBar.setAttribute("class" ,"navBar flaxRow" )

let navBarRow =  document.createElement("div")
navBarRow.setAttribute("class" ,"flaxRow" )

let navBarLogoScreen1 =  document.createElement("div")
navBarLogoScreen1.setAttribute("class" ,"nav-bar-logo-screen1" )
navBarLogoScreen1.innerHTML='<i class="fa-sharp fa-regular fa-bars fa-lg" style="color: #0e5aa7;"></i>'
navBarRow.appendChild(navBarLogoScreen1);

let navBarLogo =  document.createElement("div")
navBarLogo.setAttribute("class" ,"nav-bar-main-logo" )
navBarLogo.innerHTML=' <img height="30px" width="30px" src="./assets/image/logo.png" />'
navBarRow.appendChild(navBarLogo);

let navBarLogoScreen3 =  document.createElement("div")
navBarLogoScreen3.setAttribute("class" ,"nav-bar-logo-screen3" )
navBarLogoScreen3.innerHTML=' <img height="100%" width="100%" src="./assets/image/desktopLogo.png" />'
navBarRow.appendChild(navBarLogoScreen3);

navBar.appendChild(navBarRow)


let searchBoxScreen3 =  document.createElement("div")
searchBoxScreen3.setAttribute("class" ,"search-box flaxRow search-box-screen3" )

let serachInput =  document.createElement("input")
serachInput.setAttribute("class" ,"search-Input" )
serachInput.setAttribute("type" ,"text" )
serachInput.setAttribute("placeholder" ,"Search" )
searchBoxScreen3.appendChild(serachInput)

let serachBoxCancel =  document.createElement("div")
serachBoxCancel.setAttribute("class" ,"no-background serach-Icon" )
serachBoxCancel.innerHTML='<i class="fa-sharp fa-regular fa-xmark fa-lg no-background" style="color:  #7c7c7c;"></i>'
searchBoxScreen3.appendChild(serachBoxCancel)

let serachBoxIcon =  document.createElement("div")
serachBoxIcon.setAttribute("class" ,"no-background serach-Icon" )
serachBoxIcon.innerHTML='<i class="fa-solid fa-magnifying-glass no-background" style="color:  #7c7c7c;"></i>'
searchBoxScreen3.appendChild(serachBoxIcon)

navBar.appendChild(searchBoxScreen3)

let navBarLocationScreen3 =  document.createElement("div")
navBarLocationScreen3.setAttribute("class" ,"flaxRow location-box-screen3" )

let navBarLocationIcon =  document.createElement("div")
navBarLocationIcon.innerHTML=' <i class="fa-sharp fa-regular fa-location-dot fa-xl "></i>'
navBarLocationScreen3.appendChild(navBarLocationIcon);

let navBarLocationText =  document.createElement("div")
navBarLocationText.setAttribute("class" ,"location-text-area" )
navBarLocationText.innerHTML=' <div class="text-normal">Deliver to:</div> <div class=" text-bold">Dubai Festival city </div>'
navBarLocationScreen3.appendChild(navBarLocationText);

navBar.appendChild(navBarLocationScreen3)

let navBarProfile =  document.createElement("div")
navBarProfile.setAttribute("class" ,"flaxRow" )

let navBarProfileIcon =  document.createElement("div")
navBarProfileIcon.setAttribute("class" ,"profile-box flaxRow " )
navBarProfileIcon.innerHTML='  <i class="fa-regular fa-circle-user fa-xl " style="color: #0e5aa7;"></i>'
navBarProfile.appendChild(navBarProfileIcon)

let navBarProfileText =  document.createElement("div")
navBarProfileText.setAttribute("class" ,"profile-box-text-screen3" )
navBarProfileText.innerHTML='<div class="text-normal"> <a> Login & Register </a></div>'
navBarProfile.appendChild(navBarProfileText)

let navBarContryImg =  document.createElement("div")
navBarContryImg.setAttribute("class" ,"country-logo" )
navBarContryImg.innerHTML='<img src="./assets/image/AE.avif" height="18px" width="25px" /> '
navBarProfile.appendChild(navBarContryImg)

let navBarCartIcon =  document.createElement("div")
navBarCartIcon.setAttribute("class" ,"shopping-cart-logo" )
navBarCartIcon.innerHTML=`  <div id="cartCount"></div> <i class="fa-regular fa-cart-shopping fa-lg" style="color: #0e5aa7;"></i>`
navBarProfile.appendChild(navBarCartIcon)

navBar.appendChild(navBarProfile)

headerForDesktop.appendChild(navBar)

return headerForDesktop;
}

function getSearchBoxMobile(){
    
let serachBoxCard =  document.createElement("div")
serachBoxCard.setAttribute("class" ,"header-search-card-screen1" )

let  serachBoxRow =  document.createElement("div")
serachBoxRow.setAttribute("class" ,"search-box flaxRow" )

let serachInput =  document.createElement("input")
serachInput.setAttribute("class" ,"search-Input" )
serachInput.setAttribute("type" ,"text" )
serachInput.setAttribute("placeholder" ,"Search" )

serachBoxRow.appendChild(serachInput)

let serachCancelIcon =  document.createElement("div")
serachCancelIcon.setAttribute("class" ,"no-background serach-Icon" )
serachCancelIcon.innerHTML = '  <i class="fa-sharp fa-regular fa-xmark fa-lg no-background" style="color:  #7c7c7c;"></i>'

serachBoxRow.appendChild(serachCancelIcon)

let serachIcon =  document.createElement("div")
serachIcon.setAttribute("class" ,"no-background serach-Icon" )
serachIcon.innerHTML = ' <i class="fa-solid fa-magnifying-glass no-background" style="color:  #7c7c7c;"></i>'

serachBoxRow.appendChild(serachIcon)

serachBoxCard.appendChild(serachBoxRow)

return serachBoxCard
}

function locationCardMobile (){

let locationBoxMobile =  document.createElement("div")
locationBoxMobile.setAttribute("class" ,"flaxRow location-card header" )

let locationBoxRow =  document.createElement("div")
locationBoxRow.setAttribute("class" ,"flaxRow" )

let locationBoxIcon =  document.createElement("div")
locationBoxIcon.innerHTML = '<i class="fa-sharp fa-regular fa-location-dot"></i>'

locationBoxRow.appendChild(locationBoxIcon)

let locationBoxText =  document.createElement("div")
locationBoxText.setAttribute("class" ,"location-text-area" )
locationBoxText.innerHTML = '<span class="text-bold">Deliver to:</span> <span class="text-normal">Dubai Festival city </span>'

locationBoxRow.appendChild(locationBoxText)

let locationBoxChange =  document.createElement("div")
locationBoxChange.innerHTML = '<span class="text-bold">Change</span>'

locationBoxMobile.appendChild(locationBoxRow)
locationBoxMobile.appendChild(locationBoxChange)

return locationBoxMobile
}

function getMainContener(){

    let mainContener =  document.createElement("div")
    mainContener.setAttribute("class" ,"main-contener" )
    mainContener.appendChild(getSideBox())
    mainContener.appendChild(getContent())


    return mainContener;
}

function getSideBox() {

    let sideBox = document.createElement("div")
    sideBox.setAttribute("class", "side-content-box")

    let sideBoxType = [
        { heading: 'Deals', content: ["Today's,Deals"] },
        { heading: 'Category', content: ["Pet Supplies", "Smartphones, Tablets & Wearables", "Stationery & School Supplies", "Toys & Outdoor", "Automotive", "Electronics & Appliances", "Home & Garden"] },
        { heading: 'Brand', content: ["Theodor", "Generic", "MARGOUN", "Spigen", "Zolo", "Apple", "Remson"] }
    ]

    for (let i = 0; i < sideBoxType.length; i++) {

        let sideNavHeading = document.createElement("div")
        sideNavHeading.setAttribute("class", "side-nav-heading")

        let sideNavHeadingText = document.createElement("div")
        sideNavHeadingText.innerHTML = `<b>${sideBoxType[i].heading}</b>`

        sideNavHeading.appendChild(sideNavHeadingText)

        let sideNavIcon = document.createElement("div")
        sideNavIcon.setAttribute("class", "side-nav-heading-icon")
        sideNavIcon.innerHTML = '-'

        sideNavHeading.appendChild(sideNavIcon)

        sideBox.appendChild(sideNavHeading)

        let sideNavContent = document.createElement("div")
        sideNavContent.setAttribute("class", "side-nav-content")
        for (let j = 0; j < sideBoxType[i].content.length; j++) {
            let sideNavContentText = document.createElement("h4")
            sideNavContentText.setAttribute("class", "noPadding  side-nav-content-text")
            sideNavContentText.innerText = sideBoxType[i].content[j]
            sideNavContent.appendChild(sideNavContentText)
        }

        if (sideBoxType[i].content.length > 2) {
            let sideNavContentText = document.createElement("h4")
            sideNavContentText.setAttribute("class", "noPadding  side-nav-content-link")
            sideNavContentText.innerText = " Show More"
            sideNavContent.appendChild(sideNavContentText)
        }

        sideBox.appendChild(sideNavContent)

    }

    return sideBox

}

function getContent(){
    let mainContentBox = document.createElement("div")
    mainContentBox.setAttribute("class", "main-content-box") 
    mainContentBox.appendChild(getCategory())
    mainContentBox.appendChild(getProductCard())

    return mainContentBox;

}

function getCategory(){
    let categoryBox = document.createElement("div")
    categoryBox.setAttribute("class", "category") 

    let categoryTitle = document.createElement("div")
    categoryTitle.setAttribute("class", "category-title")
    categoryTitle.innerHTML= '<b class="no-background"> Shop by Category</b>'
    
    categoryBox.appendChild(categoryTitle);

    let categoryTypes = document.createElement("div")
    categoryTypes.setAttribute("class", "flaxRow category-types")

    let categoryType = ["Fashion accessories & luqqae" ,"Home" , "Garden" , "SmartPhone"];

    categoryType.map((category) => {

        let categoryTypesbox = document.createElement("div")
        categoryTypesbox.setAttribute("class", "category-type-box")

        let categoryTypesinnerbox = document.createElement("div")
        categoryTypesinnerbox.setAttribute("class", "category-inner-box")

        let categoryTypesText = document.createElement("div")
        categoryTypesText.setAttribute("class", "category-box-text")
        categoryTypesText.innerText = category;

        categoryTypesinnerbox.appendChild(categoryTypesText);

        categoryTypesbox.appendChild(categoryTypesinnerbox);

        categoryTypes.appendChild(categoryTypesbox);
    })

    categoryBox.appendChild(categoryTypes);
    return categoryBox;
}

function getProductCard(){

    let productCardList =  document.createElement("div")
    productCardList.setAttribute("class" ,"product-card-list" )

    let products = [ 
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : "./assets/image/1901653_main.jpg"},
]

    products.map((product , index )=>{

    let productCard =  document.createElement("div")
    productCard.setAttribute("class" ,"product-card" )

    let productCardBackground =  document.createElement("div")
    productCardBackground.setAttribute("class" ,"product-card-background" )

    let productCardTop =  document.createElement("div")
    productCardTop.setAttribute("class" ,"product-card-section-top" )
    productCardBackground.appendChild(productCardTop)

    let productCardMiddle =  document.createElement("div")
    productCardMiddle.setAttribute("class" ,"product-card-section-middle" )

    let productCardMiddleImg =  document.createElement("a")
    productCardMiddleImg.setAttribute("class" ,"product-card-img-box" )

    let productImg =  document.createElement("img")
    productImg.setAttribute("class" ,"product-Image" )
    productImg.setAttribute("alt" ,"iphone image" )
    productImg.setAttribute("src" , product.img)

    productCardMiddleImg.appendChild(productImg)
    productCardMiddle.appendChild(productCardMiddleImg);

    productCardBackground.appendChild(productCardMiddle)

    let productTextBox=  document.createElement("div")
    productTextBox.setAttribute("class" ,"product-text-box" )

    let productTextTitle=  document.createElement("div")
    productTextTitle.setAttribute("class" ,"productTitle" )
    productTextTitle.innerText = product.title

    productTextBox.appendChild(productTextTitle)

    let productTextSubTitle=  document.createElement("div")
    productTextSubTitle.setAttribute("class" ,"product-subTitle flaxRow" )

    let productTextSubTitleIcon=  document.createElement("div")
    productTextSubTitleIcon.innerHTML = '<i class="fa-solid fa-certificate" style="color: #0e5aa7;"></i>'
    productTextSubTitle.appendChild(productTextSubTitleIcon);

    let productTextSubTitleText=  document.createElement("div")
    productTextSubTitleText.setAttribute("class" ,"product-subTitle-text" )
    productTextSubTitleText.innerText =  'Fulfilled by Carrfore';

    productTextSubTitle.appendChild(productTextSubTitleText);
     
    productTextBox.appendChild(productTextSubTitle)

    let productPrice=  document.createElement("div")
    productPrice.setAttribute("class" ,"product-price" )
    productPrice.innerHTML =  `<b>AED <span>${product.price}</span></b>`
   
    productTextBox.appendChild(productPrice)

    productCardBackground.appendChild(productTextBox)

    let productAddCart=  document.createElement("div")
    productAddCart.setAttribute("class" ,"product-addCart" )
    productAddCart.setAttribute("id" ,"productAddCart" )


    let productAddCartIcon=  document.createElement("div")
    productAddCartIcon.setAttribute("class" ,"product-addCart-icon" )
    productAddCartIcon.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #ffffff; background-color: red;"></i>'

    productAddCartIcon.onclick = function(  ){
        console.log(addedIteam.has(index) + " -- "+index)
        if(addedIteam.has(index)){
            alert( product.title+ "item removed in cart ")
            addTocart(-1 )
            addedIteam.delete(index)
            productAddCartIcon.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #ffffff; background-color: red;"></i>'

        }else {
            productAddCartIcon.innerHTML = '<i class="fa-solid fa-minus fa-lg" style="color: #ffffff; background-color: red;"></i>'
            addedIteam.add(index)
            alert( product.title+ "item added in cart ")
            addTocart(+1 )
        }

        
    }
   
    productAddCart.appendChild(productAddCartIcon)

    productCardBackground.appendChild(productAddCart)

    productCard.appendChild(productCardBackground);
    productCardList.appendChild(productCard)

    })

    return productCardList;
}




let mainContener =  document.createElement("div")
mainContener.setAttribute("class" ,"main-contener" )

 let root = document.getElementById("root")
 root.appendChild(getHeader())
 root.appendChild(getSearchBoxMobile())
 root.appendChild(locationCardMobile())
 root.appendChild(getMainContener())
 root.appendChild(mainContener)



//  let AddTocart = document.getElementById("productAddCart")
//  AddTocart.addEventListener('click' , 'addTocart()')
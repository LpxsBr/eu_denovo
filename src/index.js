var element = ['prod', 'tec', 'main']

let num = 0

function scrollToNextSection(){
    document.getElementById(element[num]).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    num += 1;
    if(element.length == num){
        num = 0;
    }
}

var bannerImage = document.getElementById('banner-image')

let imgCounter = 0


function addBannerImportant(el, value) {
    el.setAttribute('style', `
    background-image: url(./assets/banner/10001.jpg);`);
}    

// bannerImage.style.backgroundImage = './../assets/banner/'+images[imgCounter]


const images = [
    '10001.jpg',
    '10002.jpg',
    '10003.jpg',
    '10004.jpg',
    '10005.jpg',
    '10006.jpg',
    '10007.jpg'
]

const headeline = [
    'Developer','Trainee','ERP','GCWeb','Project Management' ,'Typescript','Javascript','Angular','Node','React','React Native' ,'Laravel','SQL'
]

addBannerImportant(bannerImage, images[imgCounter])

function nextBanner() {

    imgCounter++

    if(imgCounter >= images.length - 1){
        imgCounter = 0
    }

    return addBannerImportant(bannerImage, images[imgCounter])


    console.log(images[imgCounter])

    // bannerImage.style.backgroundImage = './../assets/banner/'+images[imgCounter]
}
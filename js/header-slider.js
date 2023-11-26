const leftBtn = document.getElementById("header-slider-left")
const rightBtn = document.getElementById("header-slider-right")
const currentTitleElement = document.getElementById("current-header-title")
const currentDescriptionElement = document.getElementById("current-header-description")
const slideList = document.getElementById("header-slider")

const slides = [
    {
        index:1, 
        title:"Geleceğin İnşaası, Çevre Dostu Adımlar",
        description:"Sürdürülebilirlik ilkesini benimseyerek, çevre dostu inşaat adımlarıyla geleceği inşa ediyoruz.",
        imageUrl:"https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg"
    },{
        index:2,
        title:"Test Proje 2",
        description:"Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri 2",
        imageUrl:"https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg"
    },{
        index:3,
        title:"Test Proje 3",
        description:"Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri 3",
        imageUrl:"https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1696636800&semt=ais"
    },{
        index:4,
        title:"Test Proje 4",
        description:"Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri 4",
        imageUrl:"https://img.freepik.com/premium-photo/business-people-meeting_53876-21725.jpg"
    }
]

var currentElementIndex = 0

const slideCreator = (slide,index)=>{
    const slideTag =  `
        <div data-index="${index}" class="header-slider__slides__slide">
            <img class="header-slider__slides__slide__image" src="${slide.imageUrl}" alt="">
            <h6 class="header-slider__slides__slide__title">${slide.title}</h6>
        </div>
    `;

    return slideTag;
}

const slideWriter = (slideElements)=>{
    slideList.innerHTML = "";
    slideElements.forEach((slide,i) => {
        slideList.innerHTML += slideCreator(slide,i)
    });
}

const activeElementSelector = ()=>{
    for(let i = 0;i<slideList.children.length;i++){
        const element = slideList.children[i]
        if(element.getAttribute("data-index") <= currentElementIndex){
            element.classList.add("active")
            currentTitleElement.innerHTML = slides[i].title
            currentDescriptionElement.innerHTML = slides[i].description
        }else {
            element.classList.remove("active")
        }     
    }
}



slideWriter(slides)
activeElementSelector()

const nextSlide = ()=> {
    if(currentElementIndex < slides.length-1){
        currentElementIndex += 1
        activeElementSelector()
    }
}

const prevSlide = ()=> {
    if(currentElementIndex > 0){
        currentElementIndex -= 1
        activeElementSelector()
    }
}

leftBtn.addEventListener("click",prevSlide)
rightBtn.addEventListener("click",nextSlide)
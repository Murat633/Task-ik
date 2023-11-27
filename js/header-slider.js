const hLeftbtn = document.getElementById("header-slider-left")
const hRightBtn = document.getElementById("header-slider-right")
const hSlideList = document.getElementById("header-slide-list")
const headerbg = document.getElementById("header-bg")


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
        imageUrl:"https://img.freepik.com/premium-photo/business-people-meeting_53876-21725.jpg"
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

var hCurrentElementIndex = 0

const hSlideCreator = (slide,index)=>{
    const slideTag =  `
    <div id="header-slide" data-h-s-index="${index}" class="header__content-slider__slide__content">
        <h1 class="header__content-slider__slide__content__title">${slide.title}</h1>
        <p  class="header__content-slider__slide__content__description">
            ${slide.description}
        </p>
        <div>
            <a href="#" class="header__content-slider__slide__content__button">Projelerimiz ></a>
        </div>
    </div>
    `;

    return slideTag;
}

const hSlideWriter = (slideElements)=>{
    hSlideList.innerHTML = "";
    slideElements.forEach((slide,i) => {
        hSlideList.innerHTML += hSlideCreator(slide,i)
    });
}

const hActiveElementSelector = ()=>{
    for(let i = 0;i<hSlideList.children.length;i++){
        const element = hSlideList.children[i]
        const index = element.getAttribute("data-h-s-index")
        if(index == hCurrentElementIndex){
            element.classList.add("active")
            headerbg.style = `background-image:url(${slides[index].imageUrl});`
        }else {
            element.classList.remove("active")
        }     
    }
}



hSlideWriter(slides)
hActiveElementSelector()

const hNextSlide = ()=> {
    if(hCurrentElementIndex < slides.length-1){
        hCurrentElementIndex += 1
        hActiveElementSelector()
    }
}

const hPrevSlide = ()=> {
    if(hCurrentElementIndex > 0){
        hCurrentElementIndex -= 1
        hActiveElementSelector()
    }
}

hLeftbtn.addEventListener("click",hPrevSlide)
hRightBtn.addEventListener("click",hNextSlide)
const COMPETENCES_URL = "https://raw.githubusercontent.com/brunoxkk0/Brunoxkk0Dev/services/competences.json";
const PROJECTS_URL =    "https://raw.githubusercontent.com/brunoxkk0/Brunoxkk0Dev/services/projects.json";
const COURSES_URL =     "https://raw.githubusercontent.com/brunoxkk0/Brunoxkk0Dev/services/courses.json";

const chunkArray = (arr, size) =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];


$(document).ready(() => {

    const competenceItems = document.querySelectorAll("#competenceCarousel .carousel")[0];
    const competenceItemTemplate = competenceItems.innerHTML;

    competenceItems.innerHTML = "";

    $.get(COMPETENCES_URL, (data) => {

        const elements = JSON.parse(data);
        let inner = "";

        for (let competence in elements) {
            if (elements[competence]) {
                inner += competenceItemTemplate
                    .replaceAll("{{competence$name}}", elements[competence].name)
                    .replaceAll("{{competence$icon}}", elements[competence].icon)
                    .replaceAll("{{competence$bg$color}}", `--competence_color: ${elements[competence].color}`)

            }
        }

        competenceItems.innerHTML = inner;

        $('#competenceCarousel .carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-left"></i></div>`,
            nextArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-right"></i></div>`,
            mobileFirst: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    })

    const projectItems = document.querySelectorAll("#projectCarousel .carousel")[0];
    const projectItemTemplate = projectItems.innerHTML;

    projectItems.innerHTML = "";

    $.get(PROJECTS_URL, (data) => {

        const elements = JSON.parse(data);
        let inner = "";

        const chunkedElements = chunkArray(elements, 3);

        for (let project in chunkedElements) {

            inner += "<div class='chunkItemContainer'> <div class='chunkItemContainerColumn'>"

            for (let item in chunkedElements[project]) {
                if (chunkedElements[project][item]) {
                    inner += projectItemTemplate
                        .replaceAll("{{project$img}}", chunkedElements[project][item].img)
                        .replaceAll("{{project$title}}", chunkedElements[project][item].title)
                        .replaceAll("{{project$description}}", chunkedElements[project][item].description)
                        .replaceAll("{{project$url}}", chunkedElements[project][item].url)
                }
            }

            inner += "</div> </div>"
        }

        projectItems.innerHTML = inner;

        $('#projectCarousel .carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-left"></i></div>`,
            nextArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-right"></i></div>`,
            dots: true,
            dotsClass: "slickDots",
            mobileFirst: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    })


    const courseItems = document.querySelectorAll("#coursesCarousel .carousel")[0];
    const courseItemTemplate = courseItems.innerHTML;

    courseItems.innerHTML = "";

    $.get(COURSES_URL, (data) => {

        const elements = JSON.parse(data);
        let inner = "";

        console.log(elements)

        const chunkedElements = chunkArray(elements, 2);

        for (let course in chunkedElements) {

            inner += "<div class='chunkItemContainer'> <div class='chunkItemContainerColumn'>"

            for (let item in chunkedElements[course]) {
                if (chunkedElements[course][item]) {
                    inner += courseItemTemplate
                        .replaceAll("{{course$title}}", chunkedElements[course][item].title)
                        .replaceAll("{{course$description}}", chunkedElements[course][item].description)
                        .replaceAll("{{course$conclusion}}", new Date(chunkedElements[course][item].conclusion).toLocaleDateString("pt-br"))
                        .replaceAll("{{course$time}}", chunkedElements[course][item].time)
                        .replaceAll("{{course$brand}}", chunkedElements[course][item].brand)
                        .replaceAll("{{course$url}}", chunkedElements[course][item].url)
                }
            }

            inner += "</div> </div>"
        }

        courseItems.innerHTML = inner;

        $('#coursesCarousel .carousel').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-left"></i></div>`,
            nextArrow: `<div class="slickArrows"><i class="fa-solid fa-chevron-right"></i></div>`,
            dots: true,
            dotsClass: "slickDots",
            mobileFirst: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    })

})
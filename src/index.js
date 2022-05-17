const COMPETENCES_URL = "https://raw.githubusercontent.com/brunoxkk0/brunoxkk0_dev/service/competences.json";
const PROJECTS_URL = "https://raw.githubusercontent.com/brunoxkk0/brunoxkk0_dev/service/projects.json";
const COURSES = [
    {
        title: 'Learn Java Course',
        description: 'Learn the basics of the popular Java language in this introductory course.',
        conclusion: new Date("2016-12-11"),
        time: 4,
        brand: './src/imgs/brands/codecademy.png',
        url: 'https://www.codecademy.com/profiles/brunoxkk0/certificates/d3f89367b558583e361640f778191345'
    },
    {
        title: 'Fundamentos do JasperReport e JasperStudio F1',
        description: 'Como Desenvolver Relatórios em Java com o JasperReports e o JasperStudio.',
        conclusion: new Date("2021-12-22"),
        time: 9,
        brand: './src/imgs/brands/udemy.png',
        url: 'https://www.udemy.com/certificate/UC-001248b3-041b-4a6c-b8f0-d930903a6176/'
    },
    {
        title: 'Introdução ao Angular 8',
        description: 'Nesse curso você aprenderá os conceitos e técnicas necessárias para começar a desenvolver aplicações usando Angular 8.',
        conclusion: new Date("2022-03-30"),
        time: 5,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/93BCDDB1'
    },
    {
        title: 'Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces',
        description: 'Explore na prática o TypeScript, uma das linguagens de frontend mais robustas e recomendadas na atualidade. Para isso, o expert apresenta uma série de exemplos práticos que abordam as principais estruturas da linguagem: Classes, Tipos e Interfaces.',
        conclusion: new Date("2022-03-26"),
        time: 2,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/56F5527E'
    },
    {
        title: 'Introdução a criação de websites com HTML5 e CSS3',
        description: 'Nesse curso o especialista vai contar um pouco sobre a história do HTML5 e do CSS3, explicar como funciona a estrutura básica dessas tecnologias, sua semântica, principais elementos e comandos.',
        conclusion: new Date("2022-03-18"),
        time: 6,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/5A6D3E37'
    },
    {
        title: 'Introdução ao Git e ao GitHub',
        description: 'Nesse curso vamos aprender um pouco da história do Git e como ele se tornou essencial para otimizar projetos dos desenvolvedores. Também vamos conhecer seus principais comandos, como funciona a plataforma e como ela pode simplificar o seu trabalho.',
        conclusion: new Date("2022-03-17"),
        time: 5,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/4A85E31C'
    },
    {
        title: 'Introdução ao Spring Framework',
        description: 'Nesse curso você vai começar a entrar no mundo de um dos maiores frameworks para Java Web no mercado atual. Vai aprender a criar e configurar a base que todo projeto que utiliza Spring precisa.',
        conclusion: new Date("2022-05-12"),
        time: 3,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/4C65DD7C/'
    },
    {
        title: 'Conheça Tudo Sobre a LGPD: Primeiras Noções',
        description: 'Aprenda a importância de uma legislação de proteção de dados (Lei nº 13.709/2018) para a sociedade moderna e, de forma introdutória e sem juridiquês, os principais conceitos trazidos pela LGPD.',
        conclusion: new Date("2022-03-15"),
        time: 2,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/F420B199'
    },
    {
        title: 'SQL SERVER - Criando suas primeiras consultas',
        description: 'Aprenda desde a instalação e configuração do ambiente com SQL Server e realize suas primeiras consultas SQL na prática.',
        conclusion: new Date("2022-04-28"),
        time: 4,
        brand: './src/imgs/brands/dio.png',
        url: 'https://www.dio.me/certificate/AC05AD60'
    }

]


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

    $.get(PROJECTS_URL, (data) => {

        const elements = COURSES; //JSON.parse(data);
        let inner = "";

        const chunkedElements = chunkArray(elements, 2);

        for (let course in chunkedElements) {

            inner += "<div class='chunkItemContainer'> <div class='chunkItemContainerColumn'>"

            for (let item in chunkedElements[course]) {
                if (chunkedElements[course][item]) {
                    inner += courseItemTemplate
                        .replaceAll("{{course$title}}", chunkedElements[course][item].title)
                        .replaceAll("{{course$description}}", chunkedElements[course][item].description)
                        .replaceAll("{{course$conclusion}}", chunkedElements[course][item].conclusion.toLocaleDateString("pt-br"))
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
            autoplay: false,
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
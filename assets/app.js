// ----- Canvas Slider Header Start -----
document.querySelectorAll('.slideh').forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
function movecanvas() {
    document.querySelectorAll('.slideh').forEach((slide) => {
        slide.style.transform = `translateX(-100%)`;
    });
}
document.querySelectorAll('.canvaslide').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        let id = slide.getAttribute('id');
        if (id == 1) {
            movecanvas();
            document.querySelector('.moblie').classList.add('active');
            document.querySelector('.moblie').classList.remove('hide');
        } else if (id == 2) {
            movecanvas();
            document.querySelector('.tvav').classList.add('active');
            document.querySelector('.tvav').classList.remove('hide');
        } else if (id == 3) {
            movecanvas();
            document.querySelector('.app').classList.add('active');
            document.querySelector('.app').classList.remove('hide');
        } else if (id == 4) {
            movecanvas();
            document.querySelector('.cad').classList.add('active');
            document.querySelector('.cad').classList.remove('hide');
        } else if (id == 5) {
            movecanvas();
            document.querySelector('.acc').classList.add('active');
            document.querySelector('.acc').classList.remove('hide');
        } else if (id == 6) {
            movecanvas();
            document.querySelector('.sup').classList.add('active');
            document.querySelector('.sup').classList.remove('hide');
        }
    });
});
let idx = false;
document.querySelectorAll('.backbtncanvas').forEach((slide) => {
    slide.addEventListener('click', () => {
        idx = true;
        document.querySelectorAll('.slideh').forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100}%)`;
        });
        document.querySelectorAll('.allhide').forEach((div) => {
            div.classList.add('hide');
            div.classList.remove('active');
        });
    });
});
const setoffcanvas = () => {
    if (!idx) {
        document.querySelectorAll('.slideh').forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100}%)`;
        });
    }
};
// ----- Canvas Slider Header End -----
// ----- Recommended Slider Start -----
let productslist = document.querySelector('#productslist');
async function products() {
    try {
        const res = await fetch('../products.json');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        // ensure productslist is found (in case script ran before DOM)
        productslist = productslist || document.querySelector('#productslist');
        addRCMproducts(data);
    } catch (error) {
        console.error('Failed to fetch products.json:', error);
    }
}
function addRCMproducts(data) {
    productslist.innerHTML = ``;
    data.forEach((pro, i) => {
        if (i == 0) {
            productslist.innerHTML += `
            <li class="col-10 col-sm-6 col-md-6 col-lg-3 pros position-absolute" id="pros1" data-aos-duration="1500" data-aos="fade-right">
                <div class="px-2">
                    <div class="pro-img d-flex justify-content-center">
                        <a href="#">
                            <img class="img-fluid" src="${pro.image}" alt="">
                        </a>
                    </div>
                    <div class="pro-content py-3">
                        <h4 class="mb-2">${pro.name}</h4>
                        <h4>${pro.price}</h4>
                    </div>
                </div>
            </li>
        `;
        } else {
            productslist.innerHTML += `
            <li class="col-10 col-sm-6 col-md-6 col-lg-3 pros position-absolute" data-aos-duration="1500" data-aos="fade-right">
                <div class="px-2">
                    <div class="pro-img d-flex justify-content-center">
                        <a href="#">
                            <img class="img-fluid" src="${pro.image}" alt="">
                        </a>
                    </div>
                    <div class="pro-content py-3">
                        <h4 class="mb-2">${pro.name}</h4>
                        <h4>${pro.price}</h4>
                    </div>
                </div>
            </li>
        `;
        }
    });
    let pros = document.querySelectorAll('.pros');
    let pros1 = document.getElementById('pros1');
    let pros1width = pros1.offsetWidth;
    let counter = 0;
    let totalscroll = 0;
    let rightbtn = document.getElementById('silder-btn-right');
    let leftbtn = document.getElementById('silder-btn-left');
    let barsilder = document.getElementById('progress-bar-slider');
    let barcount = 0;
    if (screen.width <= 575) {
        totalscroll = 9;
    } else if (screen.width >= 576 && screen.width <= 768) {
        totalscroll = 8;
    } else if (screen.width >= 769 && screen.width <= 992) {
        totalscroll = 8;
    } else if (screen.width >= 993 && screen.width <= 1200) {
        totalscroll = 6;
    } else {
        totalscroll = 6;
    }
    if (counter == 0) {
        leftbtn.setAttribute('disabled', '');
        let initial = ((barcount + 1) / (totalscroll + 1)) * 100;
        barsilder.style.width = `${initial}%`;
    }
    pros.forEach((pro, i) => {
        pro.style.left = `${i * pros1width}px`;
    });
    function slidepros() {
        pros.forEach((pro, i) => {
            pro.style.transform = `translateX(-${counter * pros1width}px)`;
        });
    }
    function barwidthexpand(barcount) {
        let barwidth = ((barcount + 1) / (totalscroll + 1)) * 100;
        barsilder.style.width = `${barwidth}%`;
    }
    document.getElementById('silder-btn-right').addEventListener('click', () => {
        counter++;
        barcount++;
        if (counter != 0) {
            leftbtn.removeAttribute('disabled');
        }
        if (counter == totalscroll) {
            rightbtn.setAttribute('disabled', '');
        }
        slidepros();
        barwidthexpand(barcount);
    });
    document.getElementById('silder-btn-left').addEventListener('click', () => {
        counter--;
        barcount--;
        if (counter == 0) {
            leftbtn.setAttribute('disabled', '');
        }
        if (counter != totalscroll) {
            rightbtn.removeAttribute('disabled');
        }
        slidepros();
        barwidthexpand(barcount);
    });
}
products();
// ----- Recommended Slider End -----
// ----- Explore Stories Satrt -----
let exsto = document.querySelectorAll('.exsto');
let exsto1 = document.getElementById('exsto-1');
let exstowidth = exsto1.offsetWidth;
exsto.forEach((ex, i) => {
    ex.style.left = `${i * exstowidth}px`;
});
let counter = 0;
let totalscroll = 0;
let rightbtn = document.getElementById('stories-btn-right');
let leftbtn = document.getElementById('stories-btn-left');
let barsilder = document.getElementById('progress-bar-slider2');
let barcount = 0;
if (screen.width <= 575) {
    totalscroll = 3;
} else if (screen.width >= 576 && screen.width <= 768) {
    totalscroll = 2;
} else if (screen.width >= 769 && screen.width <= 992) {
    totalscroll = 2;
} else if (screen.width >= 993 && screen.width <= 1200) {
    totalscroll = 1;
} else {
    totalscroll = 1;
}
if (counter == 0) {
    leftbtn.setAttribute('disabled', '');
    let initial = ((barcount + 1) / (totalscroll + 1)) * 100;
    barsilder.style.width = `${initial}%`;
}
function slidepross() {   
    exsto.forEach((ex)=>{
        ex.style.transform = `translateX(-${counter * exstowidth}px)`;
    });
}
function barwidthexpands(barcount) {
    let barwidth = ((barcount + 1) / (totalscroll + 1)) * 100;
    barsilder.style.width = `${barwidth}%`;
}
document.getElementById('stories-btn-right').addEventListener('click', () => {
    counter++;
    barcount++;
    if (counter != 0) {
        leftbtn.removeAttribute('disabled');
    }
    if (counter == totalscroll) {
        rightbtn.setAttribute('disabled', '');
    }
    slidepross();
    barwidthexpands(barcount);
});
document.getElementById('stories-btn-left').addEventListener('click', () => {
    counter--;
    barcount--;
    if (counter == 0) {
        leftbtn.setAttribute('disabled', '');
    }
    if (counter != totalscroll) {
        rightbtn.removeAttribute('disabled');
    }
    slidepross();
    barwidthexpands(barcount);
});
// ----- Explore Stories End -----
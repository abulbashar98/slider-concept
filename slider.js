
const imageUrl = ['images/girl-g5df9cfdef_1.jpg', 'images/girl-g72d808955_1920.jpg', 'images/hijab-g92590154b_1920.jpg', 'images/portrait-gcb0db0c5d_1920.jpg', 'images/woman-g29dce9c7c_1920.jpg', 'images/woman-g44c39a549_1920.jpg', 'images/woman-g8fa85b79d_1920.jpg', 'images/woman-g92fd82923_1920.jpg', 'images/woman-gc0177875f_1920.jpg', 'images/young-woman-gaa6011695_1920.jpg'];

let imgIndex = 0;
const slider = document.getElementById('slider-img');
setInterval(() => {


    if (imgIndex >= imageUrl.length) {
        imgIndex = 0
    }
    console.log(imgIndex)
    const url = imageUrl[imgIndex];
    slider.setAttribute('src', url)

    imgIndex++;
}, 1000)
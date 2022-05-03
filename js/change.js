let back = 0
let fontSize = 0
let pro = 0
function changeBackground() {
    var color = []
    color[4] = '#ee7752'
    color[1] = '#e73c7e'
    color[2] = '#23a6d5'
    color[3] = 'black'
    color[0] = '#23d5ab'

    back = (back + 1) % 5
    document.body.style.background = color[back]
}

function changeFontSize() {
    var size = []
    size[0] = '16px'
    size[1] = '18px'
    size[2] = '20px'

    back = (back + 1) % 3
    document.body.style.fontSize = size[back]
}

function changeImg() {
    var img = []
    img[0] = 'Profile.jpg'
    img[1] = 'profile2.jpeg'

    pro = (pro + 1) % 2
    document.getElementById('profile').src = "./media/" + img[pro]


}
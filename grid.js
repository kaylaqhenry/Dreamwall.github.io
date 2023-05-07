// This code only runs on the browser

if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')

    // Manipulating the DOM here
}
var elements = document.getElementsByClassName("column");
function four() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}

var dreamWords = new Array(12);
let adventure = ["Adventure/banshy_ Plainfield, Massachusetts by Kyle Finn Dempsey.jpeg","Adventure/fab71170-c986-4daa-a09e-9b1939f01807.jpeg","Adventure/fe1bd01f-66fd-4018-a02c-e6a2d1ef3479.jpeg", "Adventure/5a7e751629195ce22bd226f1a7654884.jpg", "Adventure/8bb07528f5c9244a2b7603cfd77fa69f.jpg", "Adventure/169e4ed9157e9f830f32c1b802ab9d79.jpg", "Adventure/8654a8fb8339bc0a6b860c709244fc3d.jpg", "Adventure/a48108abdb75ca7ef875705ad4f85e3e.jpg", "Adventure/bb106508c07abc8c698a6d883d97a7bf.jpg", "Adventure/bfb149d48d254498057eba50d7cab9e9.jpg", "Adventure/c977ae2468b0de16fa5a3d16fe6eb4f7.jpg", "Adventure/ce401315e5ccc2bd974fb8649d6078c2.jpg"];
let business = ["Business/CEO Aesthetic.jpeg","Business/The 10 Hardest Things About Being An Entrepreneur - Red Soles and Red Wine.jpeg","Business/𝐍𝐚𝐞𝐞 𝐋𝐢.jpeg", "Business/8b660d6b5682dd73b31d2cad02dcccce.jpg", "Business/6124fe77f3657023bc3d8314b07b1e7e.jpg", "Business/a3f6d8f970f4ca1be9112ffa9d40cf68.jpg", "Business/bd64dc2d1f990350891717aa114077c2.jpg", "Business/c1fb177ceaa66ef8762cbdf45a4b7c45.jpg", "Business/dbeae2b20d6a01dd1fd9dc0c432a1a1c.jpg", "Business/f1ba4dcce0268327ee57b9f44aa46c99.jpg", "Business/how to survive law school and a job.jpeg"];
let faith = ["Faith/Faith Over Fear - Instagram @faithfilledyou.png","Faith/God First.jpeg","Faith/Pray More Worry Less.jpeg", "Faith/8eee527a38d3d22da41a1a91e9d7bc68.jpg", "Faith/9a8534c8efe13c1fa7fe95085ec45ffa.jpg", "Faith/428f4fa93a0809c409b636cbc3d9d07d.jpg", "Faith/085590dae1c05c1ce64e94b95fe4ac77.jpg", "Faith/a6e4d3f6fc8b41b47b3ac5131ed1af6a.jpg", "Faith/bbd8ee1b57fb5799fb02af8b883224d2.jpg", "Faith/f1704b29fcdc4dd328522a32a96bb425.jpg"];
let fitness = ["Fitness/7bc21995-730a-4c86-8b69-265a80998187.jpeg","Fitness/11_03Am.jpeg","Fitness/gym motivation aesthetics _ Gym motivation wallpaper, Gym wallpaper, Gym.jpeg", "Fitness/2ba71e839f17a003ba53e7e6b48dc992.jpg", "Fitness/2c02d6dd10c120a2d0840d5db548bcce.jpg", "Fitness/3aa2c69cd8033cb447e244bac2975c68.jpg", "Fitness/7730be1f79d5e26e9cb3c9c2b7d5f922.jpg", "Fitness/dc70e0cedfdc183253cf2593155516ec.jpg", "Fitness/f19ea65f5225cc3b015e4dd2131740e3.jpg"];
let friendship = ["Friendship/957b52c3-b417-4479-bb17-78b561952646.jpeg","Friendship/Aesthetic.jpeg","Friendship/aesthetic shadow photo.jpeg", "Friendship/8fa729cf23c785944a62d0e588a6e919.jpg", "Friendship/6456a31bfe70045a71f83fea5182c91d.jpg", "Friendship/57170ce07a59578e76a20dceb31beb72.jpg", "Friendship/880267e6453a6007fd3aff11fe6bd93e.jpg", "Friendship/ba83f1e294464dd34dca2cabf5b2e058.jpg", "Friendship/c58c5c7b1d831e76b9070fe61e2688a6.jpg", "Friendship/eb2c5d1f528742cf50a57f8dfeb62c47.jpg", "Friendship/f292ab66b04e6ac46dae6f830912c401.jpg"];
let graduation = ["Graduation/5a3af741-094c-4118-998c-b7dd7a39fce6.jpeg","Graduation/170b9d3b-7c95-44a1-afa2-2b1641fd1572.jpeg","Graduation/grad.jpeg", "Graduation/2c29e1daabb3d742882ba85026a0c0cc.jpg", "Graduation/2d7a5e3a765a366cb2ce9f57d5b3da36.jpg", "Graduation/2fb3be6bd6228adff16f405271c80020.jpg", "Graduation/3e0f4aa20f357aa1941ca7e9d335be7e.jpg", "Graduation/9f5f11359f9170a9b6894235319a9956.jpg", "Graduation/6392f11547fbc452a5e079ca70cce8ed.jpg", "Graduation/ab5be039408292cfca816f777a0c2b08.jpg", "Graduation/e311ee0aa08859e0c5b25e1c4f6b5360.jpg", "Graduation/fe69b8c7595712791358811a60231bc6.jpg"];
let house = ["House/20 French Country-Style Homes with European Elegance.jpeg","House/Avignon Villa Rental _ Avignon Serenity Suite _ Haven In.jpeg","House/Gallery of Tacuri House _  Gabriel Rivera Arquitectos  - 9.jpeg", "House/7e854d83bfc170e9bf2e1dce62461757.jpg", "House/9d5456414af7e89deec67c3a13a1a92b.jpg", "House/61b97a6632f2d7a0227351a977a26060.jpg", "House/713b158b34553963365205024ed1f1d9.jpg", "House/776a5481c9e89088b4c8530cbdd63fab.jpg", "House/7078c7bb6e2281677004d80f22a02637.jpg", "House/f80376fbcb443a66d45b0c13da2e2314.jpg"];
let love = ["Love/How to Buy an Engagement Ring_ A Guide From A to Z.jpeg", "Love/65 Elderly Couples That Prove Love Has No Age Limit.jpeg", "Love/Michael B_ Jordan Thanks His 'Love' Lori Harvey for Birthday Tribute as He Turns 34.jpeg", "Love/Pin on How to be happy in marriage.jpeg", "Love/44943b7acbec1ce75f83e51ac0612d2b.jpg","Love/cd2709ebf6f81909583fc28a72dac563.jpg", "Love/e06d0f64fc9ab54fb21b2824268e5a92.jpg", "Love/eec8ed36-a91b-4eee-b42b-2e93548948d2.jpeg", "Love/FINDING TRUTH WITH LOU ESCOBAR — Plastik Magazine.jpeg", "Love/2a7e726b3d0dc0b70e8c55b810139009.jpg", "Love/03ec86ead9d9a5e5e87788e5ac046bd7.jpg", "Love/7b4e43ee45d711bcf02eb0da221b821d.jpg"]
let money = ["Money/cashapp money hack.jpeg","Money/ellaaa_aaa.jpeg","Money/Telegram_ Join Group Chat.jpeg", "Money/1f718598833ddfc996af06e1a24c0ca8.jpg", "Money/3e49043b9d09ae180b1e6af3ba10cd3d.jpg", "Money/132d3508eec61de45230298f44cde385.jpg", "Money/0511c76aae54919d156db49fb7a4882b.jpg", "Money/5229eb9a8b97f76b8d62e2231fcabda7.jpg", "Money/ac71b358772853202b2a337dc9c679ab.jpg"];
let selfCare = ["Self Care/Tumblr.png","Self Care/leaves.jpeg","Self Care/book.jpeg", "Self Care/2d9409c7d18fe2a345e0ea76a976a6a1.jpg", "Self Care/4e7ee871d7aea9703b59d49687638f89.jpg", "Self Care/24d9a6a68d5bf179d01ec97f27f020a8.jpg", "Self Care/948540af5ac4cd4a1e1dadf25f421603.jpg", "Self Care/adadcc5a4477774bdef3ba0b84658f57.jpg", "Self Care/b7ea5539b18a51d8ef66195dd19cd76b.jpg", "Self Care/d26feb62a2cd1ad7b9bc233ac6eb3408.jpg"];
let travel = ["Travel/a0f9fb99-9386-403e-8136-63a8bb1946bd.jpeg","Travel/Pin page.jpeg","Travel/turtle.jpeg", "Travel/2ac06126b0ca8aab9cdde1a7e155015d.jpg", "Travel/29d50a0b477ba0382743a49d4425dec8.jpg", "Travel/410f5f9d975208560e0fd2bc72068736.jpg", "Travel/869645fae32fbe92098e6ac28f1ec48e.jpg", "Travel/b99e61dbed15d899ce1118399b0b02a3.jpg", "Travel/b1259a0e61baa8e32bc115dae375de14.jpg", "Travel/c70d04ccdd01e0c377ed6517d96617a7.jpg", "Travel/d09fc243f0ac466c5a115d4860ca37ea.jpg", "Travel/e1b76365c5c728504167638249ec82d1.jpg"];
var gallery = new Array();

function choosePic(folder) {
    var randomNum = Math.floor(Math.random() * folder.length);

    if (gallery.includes(folder[randomNum])){
        console.log("here");
        choosePic(folder);
    }else{
        gallery.push(folder[randomNum]);
    }
    return
}

function buildGallery(wordList){

    var galleryIndex = 16;
    var listLength = 0;

    while(galleryIndex > 0){
        if (listLength === wordList.length){
            listLength = 0;
        }
        choosePic(wordList[listLength]);
        galleryIndex--;
        listLength++;
    }
    return gallery;
}
var words = [];
function showImage(){
    words = buildList();
    dreamWords = buildGallery(words);
    
    //column 1
    document.getElementById("PlaceHolder_1").src = dreamWords[0];
    document.getElementById("PlaceHolder_2").src = dreamWords[1];
    document.getElementById("PlaceHolder_3").src = dreamWords[2];
    document.getElementById("PlaceHolder_4").src = dreamWords[3];
    
    //column 2
    document.getElementById("PlaceHolder_5").src = dreamWords[4];
    document.getElementById("PlaceHolder_6").src = dreamWords[5];
    document.getElementById("PlaceHolder_7").src = dreamWords[6];
    document.getElementById("PlaceHolder_8").src = dreamWords[7];
    //column 3

    document.getElementById("PlaceHolder_9").src = dreamWords[8];
    document.getElementById("PlaceHolder_10").src = dreamWords[9];
    document.getElementById("PlaceHolder_11").src = dreamWords[10];
    document.getElementById("PlaceHolder_12").src = dreamWords[11];   
    
    //column 4
    document.getElementById("PlaceHolder_13").src = dreamWords[12];
    document.getElementById("PlaceHolder_14").src = dreamWords[13];
    document.getElementById("PlaceHolder_15").src = dreamWords[14];
    document.getElementById("PlaceHolder_16").src = dreamWords[15];
}

//list selector
let selectedWords = [];

function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
    document.getElementById('div1').innerHTML = ' ';

    document.querySelector('button').addEventListener('click', uncheckAll)
    document.getElementById("div1").innerHTML = " ";
}

function save(){
    let item = document.forms[0].dreamword;
    
    for(let i = 0;i < item.length;i++){

        if(item[i].checked) {
            console.log(item[i].checked);
            selectedWords[i] = item[i].value;
        }
    }
    sessionStorage.setItem('selectedWords', selectedWords);
}

function buildList(){
    let selectedWords = sessionStorage.getItem("selectedWords");
    console.log(selectedWords);
    if(selectedWords.includes("Love")) {
        words.push(love);
    }
    if(selectedWords.includes("Travel")) {
        words.push(travel);
    }
    if (selectedWords.includes("Friendship")){
        words.push(friendship);
    }
    if (selectedWords.includes("Graduation")){
        words.push(graduation);
    }
    if(selectedWords.includes("Fitness")) {
        words.push(fitness);
    }
    if (selectedWords.includes("Faith")){
        words.push(faith);
    }
    if (selectedWords.includes("House")){
        words.push(house);
    }
    if (selectedWords.includes("Money")){
        words.push(money);
    }
    if (selectedWords.includes("Business")){
        words.push(business);
    }
    if (selectedWords.includes("Self Care")){
        words.push(selfCare);
    }
    if (selectedWords.includes("Adventure")){
        words.push(adventure);
    }
    
    return words;
}

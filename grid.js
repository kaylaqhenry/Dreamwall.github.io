// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images

// Four images side by side

function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}


var dreamWords = new Array(12);
let adventure = ["Adventure/banshy_ Plainfield, Massachusetts by Kyle Finn Dempsey.jpeg","Adventure/fab71170-c986-4daa-a09e-9b1939f01807.jpeg","Adventure/fe1bd01f-66fd-4018-a02c-e6a2d1ef3479.jpeg"];
let business = ["Business/CEO Aesthetic.jpeg","Business/The 10 Hardest Things About Being An Entrepreneur - Red Soles and Red Wine.jpeg","Business/𝐍𝐚𝐞𝐞 𝐋𝐢.jpeg"];
let faith = ["Faith/Faith Over Fear - Instagram @faithfilledyou.png","Faith/God First.jpeg","Faith/Pray More Worry Less.jpeg"];
let fitness = ["Fitness/7bc21995-730a-4c86-8b69-265a80998187.jpeg","Fitness/11_03Am.jpeg","Fitness/gym motivation aesthetics _ Gym motivation wallpaper, Gym wallpaper, Gym.jpeg"];
let friendship = ["Friendship/957b52c3-b417-4479-bb17-78b561952646.jpeg","Friendship/Aesthetic.jpeg","Friendship/aesthetic shadow photo.jpeg"];
let graduation = ["Graduation/5a3af741-094c-4118-998c-b7dd7a39fce6.jpeg","Graduation/170b9d3b-7c95-44a1-afa2-2b1641fd1572.jpeg","Graduation/grad.jpeg"];
let house = ["House/20 French Country-Style Homes with European Elegance.jpeg","House/Avignon Villa Rental _ Avignon Serenity Suite _ Haven In.jpeg","House/Gallery of Tacuri House _  Gabriel Rivera Arquitectos  - 9.jpeg"];
let love = ["Love/How to Buy an Engagement Ring_ A Guide From A to Z.jpeg", "Love/65 Elderly Couples That Prove Love Has No Age Limit.jpeg", "Love/Michael B_ Jordan Thanks His 'Love' Lori Harvey for Birthday Tribute as He Turns 34.jpeg", "Love/Pin on How to be happy in marriage.jpeg"]
let money = ["Money/cashapp money hack.jpeg","Money/ellaaa_aaa.jpeg","Money/Telegram_ Join Group Chat.jpeg"];
let selfCare = ["Self Care/Tumblr.png","Self Care/leaves.jpeg","Self Care/book.jpeg"];
let travel = ["Travel/a0f9fb99-9386-403e-8136-63a8bb1946bd.jpeg","Travel/Pin page.jpeg","Travel/turtle.jpeg"];
function choosePic(folder) {
    var randomNum = Math.floor(Math.random() * folder.length);

    if (dreamWords.includes(folder[randomNum])){
        choosePic(folder);
    }
   return folder[randomNum]
}

function buildGallery(wordList){
    var gallery = new Array();
    var galleryIndex = 12;
    var listLength = 0;

    while(galleryIndex > 0){
        if (listLength === wordList.length){
            listLength = 0;
        }
        gallery.push(choosePic(wordList[listLength]));
        galleryIndex--;
        listLength++;
    };
    return gallery;
}

var words = [love, graduation,travel, faith];
function showImage(){
    dreamWords = buildGallery(words);
    
    //column 1
    document.getElementById("PlaceHolder_1").src = dreamWords[0];
    document.getElementById("PlaceHolder_2").src = dreamWords[1];
    document.getElementById("PlaceHolder_3").src = dreamWords[2];
    
    //column 2
    document.getElementById("PlaceHolder_4").src = dreamWords[3];
    document.getElementById("PlaceHolder_5").src = dreamWords[4];
    document.getElementById("PlaceHolder_6").src = dreamWords[5];
    
    //column 3
    document.getElementById("PlaceHolder_7").src = dreamWords[6];
    document.getElementById("PlaceHolder_8").src = dreamWords[7];
    document.getElementById("PlaceHolder_9").src = dreamWords[8];
    
    //column 4
    document.getElementById("PlaceHolder_10").src = dreamWords[9];
    document.getElementById("PlaceHolder_11").src = dreamWords[10];
    document.getElementById("PlaceHolder_12").src = dreamWords[11];
    
}
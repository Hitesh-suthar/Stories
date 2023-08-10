const container = document.getElementsByClassName("container");
const image = document.getElementById("image");
const heading = document.getElementById("heading");
const about = document.getElementById("about");
const timeBar = document.getElementById("time-bar");
const shareBtn = document.getElementById("shareBtn");
let postIndex = -1;
const data = [
    {
        img: "Mahadev.jpg",
        heading: "12 Jyotirlinga",
        about: "Know the Names, Places List and importance of 12 Jyotirlinga Before Visiting"
    }, 
    {
        img: "Somnath.jpg",
        heading: "Somnath Jyotirlinga",
        about: "Somnath is the first Jyotirlinga in India among the rest of the Jyotirlinga temples. The temple is built in the Chalukya style of temple architecture. This pious temple is built at the shore of the Arabian ocean on the western corner of the Indian subcontinent. Somnath is among the most revered pilgrimage sites in the country."
    },
    {
        img: "Mallikarjuna.jpg",
        heading: "Mallikarjuna Jyotirlinga",
        about: "Mallikarjuna Jyotirlinga in Srisailam in Andhra Pradesh is known as Kashi of the South. According to the Shiv Puran, the Mallikarjuna jyotirlinga is the united form of both Shiva and Parvati. The word Mallika introduces Goddess Parvati, whereas Arjun refers to God Shiv."
    },
    {
        img: "Mahakaleshwar.jpg",
        heading: "Mahakaleshwar Jyotirlinga",
        about: "The Mahakaleswar in Ujjain is the most powerful jyotirlinga and divine among the 12 Jyotirlingas. Mahakaleshwar jyotirlinga is also among the seven Mukti-Sthal (place) in India. According to Hindu mythology, Mahakaal is an avatar of Lord Shiva, and devotees from various regions of India visit here to praise the lord Mahakaleshwar.  "
    },
    {
        img: "Omkareshwar.jpg",
        heading: "Omkareshwar Jyotirlinga",
        about: "Resided on an Om-shaped island called Shivapuri on the banks of Narmada River, Madhya Pradesh. Denoting the Lord of the Om Sound. Omkareshwar Jyotirlinga is a revered Hindu temple, which is the center of intense faith. "
    },
    {
        img: "Vaidyanath.jpg",
        heading: "Vaidyanath Jyotirlinga",
        about: "Vaidyanath Dham or Baba Baidyanath Temple is one of the most famous Jyotirlingas in India and also known as Baba Dham. The temple is located in Deoghar, Jharkhand, India. According to Hindu mythology, Once Ravana praised Shiva and asked him to visit Lanka. "
    },
    {
        img: "Bhimashankar.jpg",
        heading: "Bhimashankar Jyotirlinga",
        about: "According to Dwadasha Jyotirlinga Stotram, Bhimashankar is the sixth jyotirlinga among the 12 Jyotirlingas in India. Located on the banks of River Bhima, this black rock structure temple holds a major religious significance among Hindus."
    },    
    {
        img: "Rameshwaram.jpg",
        heading: "Rameshwaram Jyotirlinga",
        about: "Rameshwaram owns the 7th position among the sequence of 12 jyotirlingas. The temple has a magnificent Dravidian style of architecture. Rameshwaram temple is located in a small town, which is situated in Pamban Island in Tamil Nadu. There are twenty-two water bodies present in the temple complex."
    },    {
        img: "Nageshwar.jpg",
        heading: "Nageshwar Jyotirlinga",
        about: "On the coast of Saurashtra in Gujarat, between Gomati Dwarka and Bet Dwarka. Nageshwar is one of the most famous Jyotirlinga temples in India as it signifies the power of protection from all types of poisons. The temple is built with pink stone and the idol is Dakshinamurti."
    },    
    {
        img: "Kashi-Vishwanath.jpg",
        heading: "Kashi-Vishwanath Jyotirlinga",
        about: "Kashi Vishwanath is one of the most important Jyotirlingas in India among the rest. Millions of Devotees visit here every year to seek the blessing of the Almighty. According to the history of India, the temple was plundered several times as it was made up of absolute gold."
    },    
    {
        img: "Trimbakeshwar.jpg",
        heading: "Trimbakeshwar Jyotirlinga",
        about: "Located on the banks of the River Godavari, near Brahmagiri Mountain, Nasik. Trimbakeshwar holds an eminent spiritual importance as it is among the four Hindu cities where the Kumbh Mela is held every 12 years."
    },    
    {
        img: "Kedarnath.jpg",
        heading: "Kedarnath Jyotirlinga",
        about: "Located on the Garhwal Himalayan range near the Mandakini River in Uttarakhand, Kedarnath is important among all the Jyotirlingas. It is also one of the major Dham in Chardham Gangotri Yamutori and Badrinath. It is believed that it was built by the five Pandava brothers of the Mahabharata."
    },    
    {
        img: "Grishneshwar.jpg",
        heading: "Grishneshwar Jyotirlinga",
        about: "Grishneshwar jyotirlinga is referred to as the lord of compassion. It is the last jyotirlinga among the 12 jyotirlingas in India. The temple is splendidly constructed with red and black stones. The temple has 5 storied Shikhara-style construction, the mountain peak style of architecture."
    },       
    {
        img: "Har-Har-Mahadev.jpg",
        heading: "🕉️ Namah Shivay!",
        about: ""
    }
]

function loadData(index) {
    image.src = "assets/" + data[index].img;
    heading.innerHTML = data[index].heading;
    about.innerHTML = data[index].about;
}

function onload() {
    for (let i = 0; i < data.length; i++) {
        let ele = document.createElement("div");
        ele.className = "bar";
        ele.id = i;
        timeBar.appendChild(ele);
    }
    postIndex++;
    loadData(postIndex);
    const bar = document.getElementById(postIndex);
    const ele = document.createElement("div");
    ele.className = "bar-over";
    bar.appendChild(ele);
}

function next() {
    postIndex++;
    loadData(postIndex);
    const bar = document.getElementById(postIndex);
    const ele = document.createElement("div");
    ele.className = "bar-over";
    bar.appendChild(ele);
}

function previous() {
    const bar = document.getElementById(postIndex);
    bar.removeChild(bar.firstChild);
    postIndex--;
    loadData(postIndex);
}

window.addEventListener("load", onload);

container[0].addEventListener("click", (event) => {
    let x = event.clientX;
    let left = container[0].offsetLeft;
    let width = container[0].offsetWidth;
    if (x > left + width * 0.3 && postIndex < data.length - 1) {
        next();
    }
    else if (x < left + width * 0.3 && postIndex > 0) {
        previous();
    }
});

async function AndroidNativeShare(Title, URL) {
    if (typeof navigator.share === 'undefined' || !navigator.share) {
        alert('Your browser does not support Android Native Share');
    } else {
        const TitleConst = Title;
        const URLConst = URL;
        try {
            await navigator.share({ title: TitleConst, url: URLConst });
        } catch (error) {
            console.log('Error sharing: ' + error);
            return;
        }
    }
}

shareBtn.addEventListener("click", () => {
    AndroidNativeShare(document.title, window.location.href);
});
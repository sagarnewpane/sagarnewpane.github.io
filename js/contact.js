let links = document.querySelectorAll(".link li");
let img = document.querySelector(".link-logo img");
let linkLogo = document.querySelector(".link-logo");
let a = document.querySelector('.link-logo a')
let click_msg = document.querySelector('.link-logo .click-msg');
let custom_text = document.querySelector('.link-logo .custom-text');
let text = "Click the icon to";
let text2 = "Alternatively, you can";

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        let id = this.getAttribute("id");
        linkLogo.style.display = "block";
        if(id === "github") {
            img.src = "images/github.svg";
            img.id = 'gihub';
            click_msg.innerHTML = `${text} visit the Github Profile.`;
            a.href = "https://github.com/sagarnewpane";
            a.target = "blank";
            custom_text.innerHTML = `${text2} search the username - sagarnewpane`;

        } else if(id === "linkedin") {
            img.src = "images/linkedin.svg";
            img.id = 'linkedin';
            click_msg.innerHTML = `${text} visit the LinkedIn Profile.`;
            a.href = "https://www.linkedin.com/in/sagarnewpane";
            a.target = "blank";
            custom_text.innerHTML = `${text2} search the username - sagarnewpane`;
        }else if(id === "whatsapp") {
            img.src = "images/whatsapp.png";
            img.id = 'whatsapp';
            click_msg.innerHTML = `${text} chat on WhatsApp.`;
            a.href = "https://wa.me/9779815911506";
            a.target = "blank";
            custom_text.innerHTML = `${text2} add the contact number - +977 9815911506`;
        }else if(id === "email") {
            img.src = "images/gmail.png";
            img.id = 'email';
            click_msg.innerHTML = `${text} mail me.`;
            a.href = "mailto:sdreamnepal@gmail.com"
            a.target = "blank";
            custom_text.innerHTML = `${text2} mail me at - sreamnepal@gmail.com`;
        }
        else if(id === "phone") {
            img.src = "images/phone.png";
            img.id = 'phone';
            a.href ='#';
            click_msg.innerHTML = `${text} copy phone number.`;
            custom_text.innerHTML = `${text2} call me at - 9815911506`;
        }
    });
}

// copies phone number
let phone = document.querySelectorAll('img');
for(let i = 0; i < phone.length; i++) {
phone[i].addEventListener("click",function(){
    if(this.getAttribute("id")=='phone'){
        console.log('Clicked');
        const num = '9815911506';
        alert('Phone number copied.')
        navigator.clipboard.writeText(num);
    }
});
};

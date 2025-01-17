document.addEventListener("DOMContentLoaded", function () {
    let likebutton = document.getElementById("like-button");
    let likecount = document.getElementById("like-count");
    let likebutton2 = document.getElementById("like-button2");
    let message = document.getElementById("message");
    let subscribe = document.getElementById("subscribe");
    let opencomment = document.getElementById("opencomment");
    let comment = document.getElementById("comment");
    let name = document.getElementById("name");
    let about = document.getElementById("about");
    let socialicons = document.getElementById("social-icons");
    let buttons = document.getElementById("buttons");
    let socialshare = document.getElementById("social-share");
    let sentcomment = document.getElementById("sentcomment");
    let commentcount = document.getElementById("commentcount");
    let usercomment = document.getElementById("usercomment");
    let countshare = document.getElementById("countshare");

    message.addEventListener("click", function(){
        let message = prompt("Enter the message:");
        alert(message !== null && message.trim() !== "" ? "Message sent: " + message : "Please enter the message.");
    });

    subscribe.addEventListener("click", function () {
    subscribe.textContent = subscribe.textContent === "Subscribe" ? "Unsubscribe!" : "Subscribe";
    subscribe.style.backgroundColor = subscribe.textContent === "Subscribe" ? "rgba(2, 2, 230, 0.917)" : "rgba(16, 3, 2, 0.44)";
    subscribe.style.color = subscribe.textContent === "Subscribe" ? "black" : "rgb(166, 166, 192)";  
    });

    likebutton.addEventListener("click", function() {
        likecount.textContent = "1k";
        likebutton.style.display = "none";
        likebutton2.style.display = "";
        likebutton2.classList.add("clicked");
    });
    
    likebutton2.addEventListener("click", function() {
        likecount.textContent = "999";
        likebutton.style.display = "";
        likebutton2.style.display = "none";
    });
    
    const elements = [name, about, socialicons, buttons, socialshare];
    opencomment.addEventListener("click", function () {
        if (comment.classList.contains("active")) {
            comment.classList.remove("active");
            setTimeout(() => {
                comment.style.display = "none";
            }, 500);
        }
        else {
            comment.style.display = "flex";
            setTimeout(() => {
                comment.classList.add("active");
            }, 0);
        }
        elements.forEach(element => {
            element.style.display = element.style.display === "none" ? "" : "none";
        });
    });

    sentcomment.addEventListener("click", function () {
        elements.forEach(element => {
            element.style.display = element.style.display === "none" ? "" : "none";
        });
        comment.classList.remove("active");
        setTimeout(() => {
            comment.style.display = "none";
        }, 500);
        
        if (usercomment.value.trim()) {
            let count = parseInt(commentcount.textContent);
            commentcount.textContent = count < 1000 ? count + 1 : "1k";
            alert("Your comment: " + usercomment.value);
            usercomment.value = "";
        }
        else {
            alert("You didn't write a comment");
            console.log(commentcount.textContent);
        }        
    });

    document.getElementById("sharebutton").addEventListener('click', function () {
        if (navigator.share) {
            navigator.share({
                title: "abdukholiqov husniddin",
                text: "Organize this page to get to know my profile.",
                url: "https://abdukholiqovhusniddin.github.io/about-me/"
            })
            .then(() => alert("Share was successful."), countshare.textContent = parseInt(countshare.textContent) + 1)
            .catch((error) => alert("Sharing failed", error));
        }
        else {
            alert('Your device does not support the Share API.');
        }
    });
});

var blog_replies = ["This is reply 1", "This is reply 2"];

function init() {
    if (blog_replies.length < 1) {
        document.getElementById("replies_to").style.display = "none";
    }
}

function reply() {
    document.getElementById("reply_entry").style.display = "block";
    document.getElementById("post_reply").style.display = "block";
    document.getElementById("username_entry").style.display = "block";
    document.getElementById("reply_button").style.display = "none";
}

function post_reply() {
    i = blog_replies.length;
    reply_id = "reply" + i;

    var username = document.getElementById("username_entry_text").value;
    var reply = document.getElementById("reply_entry_text").value;

    if (username != "" && reply != "") {
        blog_replies.push(reply);
        document.getElementById("replies_to").style.display = "block";

        var text_username = document.createTextNode(username);
        var p_username = document.createElement("p");
        var div_username = document.createElement("div");
        div_username.setAttribute("class", "post_username");
        p_username.appendChild(text_username);
        div_username.appendChild(p_username);

        var text_reply = document.createTextNode(reply);
        var p_reply = document.createElement("p");
        var div_reply_container = document.createElement("div");
        div_reply_container.setAttribute("class", "reply_text_container");
        p_reply.appendChild(text_reply);
        div_reply_container.appendChild(p_reply);

        var div_reply = document.createElement("div");
        div_reply.setAttribute("class", "reply");
        div_reply.setAttribute("id", reply_id);
        div_reply.appendChild(div_username);
        div_reply.appendChild(div_reply_container);

        var replies = document.getElementById("replies");
        replies.appendChild(div_reply);

        document.getElementById("reply_entry").style.display = "none";
        document.getElementById("post_reply").style.display = "none";
        document.getElementById("username_entry").style.display = "none";
        document.getElementById("reply_button").style.display = "block";
        document.getElementById("reply_entry_text").value = "";
    }
    else if (username == "" && reply == "") {
        alert("Please enter a username and reply");
    }
    else if (username == "") {
        alert("Please enter a username");
    }
    else if (reply == "") {
        alert("Please enter a reply");
    }
}

init();

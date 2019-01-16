// Create your global variables below:
var blog_titles = ['Recovery from broken legs', 'Muscle tearing and NEED HELP!'];
var blog_usernames = ['blog_user1', 'blog_user2'];
//var blog_contents = ['This is my blog post.', 'This is my blog post.'];


function search() {
    var search_text = document.getElementById("search_bar").value;
    var post = document.getElementById("blog");
    var no_results = true;
    for (i = 0; i < blog_titles.length; i++) {
        if (!(blog_titles[i].toLowerCase().indexOf(search_text.toLowerCase()) >= 0) && !(blog_usernames[i].toLowerCase().indexOf(search_text.toLowerCase()) >= 0)) {
            var x = document.getElementById("post" + i);
            x.style.display = "none";
        }
        else {
            var x = document.getElementById("post" + i);
            x.style.display = "block";
            no_results = false;
        }
    }
    if (no_results) {
        var y = document.getElementById("no_results_post");
        y.style.display = "block";
    }
    else {
        var y = document.getElementById("no_results_post");
        y.style.display = "none";
    }
    document.getElementById("clear_button").disabled = false;
}

function clear_search() {
    for (i = 0; i < blog_titles.length; i++) {
        var x = document.getElementById("post" + i);
        x.style.display = "block";
    }
    document.getElementById("clear_button").disabled = true;
    document.getElementById("no_results_post").style.display = "none";
    document.getElementById("search_bar").value = "";
}

function publish() {

    i = blog_titles.length;
    var title_id = "title" + i;
    var user_id = "username" + i;
    var post_id = "post" + i;

    var title = document.getElementById("title_entry_text").value;
    var username = document.getElementById("username_entry_text").value;
    var content = document.getElementById("content_entry_text").value;

    if (title != "" && username != "" && content != "") {
        blog_titles.push(title);
        var text_title = document.createTextNode(title);
        var p_title = document.createElement("p");
        var a_title = document.createElement("a");
        var div_title = document.createElement("div");
        a_title.setAttribute("href", "blog_content.html");
        div_title.setAttribute("class", "title");
        div_title.setAttribute("id", title_id);
        p_title.appendChild(text_title);
        a_title.appendChild(p_title);
        div_title.appendChild(a_title);

        blog_usernames.push(username);
        var text_username = document.createTextNode(username);
        var p_username = document.createElement("p");
        var div_username = document.createElement("div");
        div_username.setAttribute("class", "username");
        div_username.setAttribute("id", user_id);
        p_username.appendChild(text_username);
        div_username.appendChild(p_username);

        var container = document.createElement("div");
        container.setAttribute("class", "post");
        container.setAttribute("id", post_id);
        container.appendChild(div_title);
        container.appendChild(div_username);

        var element = document.getElementById("blog");
        element.appendChild(container);

        document.getElementById("title_entry_text").value = "";
        document.getElementById("username_entry_text").value = "";
        document.getElementById("content_entry_text").value = "";
    }
    else if (title == "" && username == "" && content == "") {
        alert("Please enter a title, username, and content");
    }
    else if (title == "" && username == "") {
        alert("Please enter a title and username");
    }
    else if (title == "" && content == "") {
        alert("Please enter a title and content");
    }
    else if (username == "" && content == "") {
        alert("Please enter a username and content");
    }
    else if (title == "") {
        alert("Please enter a title");
    }
    else if (username == "") {
        alert("Please enter a username");
    }
    else if (content == "") {
        alert("Please enter content");
    }
}


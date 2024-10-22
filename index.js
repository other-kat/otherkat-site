// create a new 'Date' object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

console.log(currentDateTime); // output: "10/22/2024, 2:28:15 PM" (will vary depending on your time zone)

$.get('https://blog.otherkat.com/feed.xml', function (data) {
    $(data).find("item").each(function (index) {
        var post = $(this);
        let date = new Date(post.find("pubDate").text());
        index < 5 && $('#blog').append(
        	`<a href="${post.find("link").text()}">${ (date.getMonth() + 1) + "/" + date.getFullYear().toString().slice(-2)}: ${post.find("title").text()} →</a> <br>`
        )
    });
});
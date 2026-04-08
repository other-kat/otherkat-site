---
layout: home
---

<div class="row">
        <div class="column left">

<h2>updates</h2>
 <div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:3  %}
		⚇<b> {{ post.title }} ( {{ post.postdate }} )</b> ⚇ {{ post.content }}
		<br>
		{% endfor %}
<a href="/updates/">see more...</a>

</div></div>

<div class="column right">

<p><h2>upcoming</h2></p>

<p>more performances coming soon</p>

<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<div id="blog"></div>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>

$.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://blog.otherkat.com/feed.xml'), function (response) {
    const data = response.contents;
    const xml = $(data);

    xml.find("item").each(function (index) {
        var post = $(this);
        let date = new Date(post.find("pubDate").text());

        if (index < 5) {
            $('#blog').append(
                `<a href="${post.find("link").text()}">
                ${(date.getMonth() + 1)}/${date.getFullYear().toString().slice(-2)}:
                ${post.find("title").text()} →
                </a><br>`
            );
        }
    });
});

</script>


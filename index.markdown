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

<iframe src="https://blog.otherkat.com/" width="80%" height="50%"></iframe>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>


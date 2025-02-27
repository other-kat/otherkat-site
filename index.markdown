---
layout: home
---

<h2>updates</h2>
 <div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:3  %}
		⚇<b> {{ post.title }} ( {{ post.postdate }} )</b> ⚇ {{ post.content }}
		<br>
		{% endfor %}

<h2>recent performances</h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
<br>
<a href="/performances/2024-07-14-shedding-at-gallery-puzić"><img src="/assets/img/shedding/performance.jpg" height="187.5" width="250"/></a> <a href="/performances/2022-03-21-a-river-of-no-one-with-the-dap-lab"><img src="/assets/img/ariverofnoone/betweentheriver.png" height="187.5" width="250"/></a> <a href="/performances/2019-12-07-mourning-for-a-dead-moon-with-the-dap-lab"><img src="/assets/img/mourningforadeadmoon/Moon_Scene4.jpg" height="187.5" width="250"/></a>
<br><br>
<b><a href="/performances">see more...</a></b>

<h2>works</h2>
 <div id="post">
		{% assign works = site.works | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in works limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
<br>
<a href="/works/2023-12-02-i-want-you-to-haunt-me"><img src="/assets/img/swimming/swimmingsmall.png" height="187.5" width="250"/></a> <a href="/works/2023-12-02-i'll-never-look-this-good-again"><img src="/assets/img/illneverlookthisgoodagain/clothesonsmall.png" height="187.5" width="250"/></a> <a href="/works/2019-02-18-wave-movements"><img src="/assets/img/waves/wave1.png" height="187.5" width="250"/></a>
<br><br>
<b><a href="/works">see more...</a></b>

<h2>writings</h2>
 <div id="post">
		{% assign writings = site.writings | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in writings limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
<br>
<b><a href="/writings">see more...</a></b>

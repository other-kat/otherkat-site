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
<a href="/performances/2025-04-16-peter-and-the-wolf-and-the-hedgehog-with-agnes-cameron-and-the-peckham-chamber-orchestra.html"><img src="/assets/img/updates/pwhsized.png" height="187.5" width="250"/></a> <a href="/works/2023-12-02-i'll-never-look-this-good-again"><img src="/assets/img/illneverlookthisgoodagain/clothesonsmall.png" height="187.5" width="250"/></a> <a href="/performances/2019-12-07-mourning-for-a-dead-moon-with-the-dap-lab"><img src="/assets/img/mourningforadeadmoon/Moon_Scene4.jpg" height="187.5" width="250"/></a>
<br><br>
<b><a href="/performances">see more...</a></b>

<h2>recent installations</h2>
 <div id="post">
		{% assign installation = site.installation | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in installation limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
<br>
<a href="/installation/2024-07-14-shedding-at-gallery-puzić"><img src="/assets/img/shedding/performance.jpg" height="187.5" width="250"/></a> <a href="/installation/2021-10-23-shedding-femme-at-detritus.html"><img src="/assets/img/sheddingfemme/sheddingfemmesized.png" height="187.5" width="250"/></a> <a href="/installation/2018-09-11-she-:-they-:-he.html"><img src="/assets/img/shetheyhim/shetheyhesized.png" height="187.5" width="250"/></a>
<br><br>
<b><a href="/works">see more...</a></b>


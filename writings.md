---
layout: page
title: writings
permalink: /writings/
---

<h2><a href="/writings">writings</a></h2>
 <div id="post">
		{% assign writings = site.writings | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in writings limit:50  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br>
		{% endfor %}
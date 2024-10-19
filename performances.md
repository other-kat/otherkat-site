---
layout: page
title: performances
permalink: /performances/
---

<h2><a href="/performances">performance list</a></h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br>
		{% endfor %}
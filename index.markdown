---
layout: home
---

<h2>updates</h2>
 <div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:2  %}
		⚇ {{ post.title }} ⚇ - {{ post.content }}
		{% endfor %}

<h2>recent performances</h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
<br><br>
<b><a href="/performances">see more...</a></b>

<h2>works</h2>
<a href="https://docs.google.com/spreadsheets/d/1JqpBOtxf0bm9doWVSXUzWrlF9gB2g6pVTU80cvIqGaI/edit?gid=0#gid=0"><img src="/assets/img/decs/fra.png" height="50" width="50" align="right"/>
 <div id="post">
		{% assign works = site.works | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in works limit:3  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
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
<br><br>
<b><a href="/writings">see more...</a></b>

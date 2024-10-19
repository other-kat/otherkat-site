---
layout: page
title: works
permalink: /works/
---

<h2><a href="https://blog.otherkat.com>home">home</a></h2>
<h2>works -- </h2>
 <div id="works">
		{% assign works = site.works | sort: date | reverse %}
		{% for works in works limit:5  %}
		    {{ works.title }} --
			{{ works.date | date: "%d/%m/%Y" }}
			{{ works.content }}
		{% endfor %}
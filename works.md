---
layout: page
title: works
permalink: /works/
---

<h2>academic writing</h2>

<a href="/writings/2023-11-27-Your-Post-Goes-Against-Our-Community-Guidelines">Your Post Goes Against Our Community Guidelines: an I Love Or Hate Everyday (2022-2023) - Autoethnography</a>

<h2>collected works</h2>
 <div id="post">
		{% assign works = site.works | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in works limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br>
		{% endfor %}

<h2>performance list</h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br>
		{% endfor %}
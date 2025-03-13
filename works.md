---
layout: page
title: works
permalink: /works/
---

<h2>standalone works</h2>
 <div id="post">
		{% assign works = site.works | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in works limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}

<h2>performance's</h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}

<h2>scores</h2>
<div id="post">
		{% assign scores = site.scores | sort: date | reverse %}
		{% for post in scores limit:100  %}
		{% if scores.status == 'Easy' %}
		{% endif %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.postdate | date: "%Y" }}</a><br><br>
		{% endfor %}

<h2>software</h2>
 <div id="post">
		{% assign software = site.software | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in software limit:100  %}
<a href="{{ post.url }}">{{ post.title }}</a><br><br>
		{% endfor %}

<h2>experiments / workshops</h2>
 <div id="post">
		{% assign rehearsals = site.rehearsals | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in rehearsals limit:100  %}
<a href="{{ post.url }}">{{ post.title }}</a><br><br>
		{% endfor %}

<h2>writing</h2>

<a href="/writings/2023-11-27-Your-Post-Goes-Against-Our-Community-Guidelines">Your Post Goes Against Our Community Guidelines: an I Love Or Hate Everyday (2022-2023) - Autoethnography</a>
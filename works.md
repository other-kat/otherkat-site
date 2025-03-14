---
layout: page
title: works
permalink: /works/
---

<h2>performances</h2>
 <div id="post">
		{% assign performances = site.performances | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in performances limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}

<h2>standalone works</h2>
 <div id="post">
		{% assign works = site.works | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in works limit:100  %}
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

<h2>sounds</h2>
<div id="post">
	<p><a href="https://porchcollapse0000.bandcamp.com/album/noise-drones-palestine-action-fundraiser?from=embed">Acoustic Swam (Under Chemical Sisters With Agnes Cameron and Lydia Phillips)</a></p>
	<p><a href="https://other-kat.bandcamp.com/track/digital-forestry-wav?from=embed">digital_forestry.wav</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/rathausbells-wav?from=embed">rathausbells.wav</a></p>
	<p><a href="https://other-kat.bandcamp.com/track/internal-revolution-wav?from=embed">internal_revolution.wav</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/26-05-24-wav?from=embed">26_05_24.wav</a></p>
	<p><a href="https://other-kat.bandcamp.com/track/shower-thoughts?from=embed">shower_thoughts</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/swimming-in-a-puddle?from=embed">Swimming In A Puddle</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/rough-cuts?from=embed">Rough Cuts</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/the-river-of-no-one-original-score?from=embed">the river of no one - Original Score</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/x-body-original-score?from=embed">X-Body: Original Score</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/environments-ii?from=embed">Environments II</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/environments?from=embed">Environments</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/songs-to-sleep-i?from=embed">Songs To Sleep: I</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/reaching?from=embed">Reaching</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/body-works?from=embed">Body Works</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/coral?from=embed">Coral</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/i-wish-i-was-a-lizard?from=embed">I Wish I Was A Lizard</a></p>
	<p><a href="https://other-kat.bandcamp.com/album/tit-envy?from=embed">Tit Envy</a></p>
	<p><a href="https://other-kat.bandcamp.com/track/n-i-k?from=embed">NIK</a></p>
</div><br>

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
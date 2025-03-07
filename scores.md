---
layout: score
title: /scores/
permalink: /scores/
---

  <h1>kat<a href="/manifesto/">⚇</a>
  <nav>
      <a href="/">home</a>
  	 <a href="/about/">about</a>
  	 <a href="/sounds/">sounds</a>
  </nav>

<article>
<p>collection of my scores for ensembles.</p>
<p>i'm happy for my work to be played, <a href="/contact/">just let me know!</a></p>
</article>

<br>
 <div id="post">
		{% assign scores = site.scores | sort: date | reverse %}
		{% for post in scores limit:100  %}
		{% if scores.status == 'Easy' %}
		{% endif %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.postdate | date: "%Y" }}</a><br><br>
		{% endfor %}
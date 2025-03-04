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
<p>categorised by how accessible they are to play.</p>
</article>

<h1><i>easy</i></h1>
<br>
 <div id="post">
		{% assign scores = site.scores | sort: date | reverse %}
		{% if post.status == 'easy' %}
		{% endif %}
		{% for post in scores limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.postdate | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}

<h1><i>medium</i></h1>
<br>
<p>to be written... </p>
<br>

<h1><i>hard</i></h1>
<br>
<p>to be written... </p>
<br>
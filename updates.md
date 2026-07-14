---
layout: page
title: updates
permalink: /updates/
---

<div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:50  %}
		⚇<b> {{ post.title }} ( {{ post.postdate }} )</b> ⚇ {{ post.content }}
		<br>
		{% endfor %}
</div>
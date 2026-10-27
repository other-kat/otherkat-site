---
layout: home
---

Kat Macdonald is a London-based sound and media artist exploring collective practice, embodiment and technology. She is the founder of the <a href="https://lclo.otherkat.com">London Community Laptop Orchestra</a> and a long time member of the <a href="https://dap-lab.brunel.ac.uk/arch.html">Design And Performance Lab (DAP Lab)</a>. 

Her work uses pedagogy, open scoring and collective activations as a method to draw attention to social systems and infrastructures that lie unacknowledged in everyday life. Through noticing these forces, we can then make decisions around how we orientate ourselves around them.

<div class="row">
        <div class="column left">

<h2>updates</h2>
 <div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:3  %}
		⚇<b> {{ post.title }} ( {{ post.postdate }} )</b> ⚇ {{ post.content }}
		<br>
		{% endfor %}
<a href="/updates/">see more...</a>

</div></div>

<div class="column right">

<p><h2>upcoming</h2></p>

<!-- <p><a href="https://peckhamdigital.org/">⚇ noisy spaces @ pekcham digital festival ⚇</a></p>
<p><b>location: peckham, london</b></p>
<p><b>date: <mark>23rd october</mark></b></p> -->

<p>more performances coming soon</p>

<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<iframe src="https://blog.otherkat.com/" width="80%" height="50%"></iframe>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>


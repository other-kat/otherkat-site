---
layout: home
---

**Kat Macdonald** is a London-based sound and performance artist exploring collective practice, desire and public space through technology, transmission and performance. She is the founder of the <a href="https://lclo.otherkat.com">London Community Laptop Orchestra</a> and a long time member of the <a href="https://dap-lab.brunel.ac.uk/arch.html">Design And Performance Lab (DAP Lab)</a>. **Her work has been shown** internationally at festivals such as DRHA, Lumbung Radio Assembly, Intimidades Públicas (ICNOVA), The World Transformed, and <a href="/bio/#exhibitions">more.</a>

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

<p><a href="">⚇ ??? ⚇</a></p>
<p><b>location: london</b></p>
<p><b>date: <mark>22-24th may</mark></b></p>

<p><a href="https://binprojects.net/">⚇ radio set (as bin projects) @ low stakes high spirits ⚇</a></p>
<p><b>location: st giles crypt, peckham, london</b></p>
<p><b>date: <mark>11th june</mark></b></p>

<p><a href="https://www.benjijeffrey.com/ensembleugh">⚇ ensembleugh debut (with lclo) ⚇</a></p>
<p><b>location: st giles, peckham, london</b></p>
<p><b>date: <mark>18th june</mark></b></p>

<p><a href="https://otherkat.com/temporaryspace/">⚇ temporary space portable gallery ⚇</a></p>
<p><b>location: burgess park, london</b></p>
<p><b>date: <mark>june</mark></b></p>

<!-- <p>more performances coming soon</p> -->
<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<iframe src="https://blog.otherkat.com/" width="80%" height="50%"></iframe>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>


---
layout: home
---

Kat Macdonald is a London-based sound and media artist exploring collective practice, embodiment and technology. She is the founder of the <a href="https://lclo.otherkat.com">London Community Laptop Orchestra</a>.

Her work uses pedagogy, open scoring and collective activations as a method to draw attention to social systems and infrastructures that lie unacknowledged in everyday life.

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

<p><a href="https://www.tickettailor.com/events/kingscollegelondoncentrefordigitalculture/2514502">⚇ drawing your own maps @ kcl ⚇</a></p>
<p><b>location: reach space, strand campus, ldn </b></p>
<p><b>date: <mark>4th december</mark></b></p>

<p><a href="https://www.are.na/editorial/introducing-the-are-na-annual-vol-8">⚇ are.na annual vol 8 ⚇</a></p>
<p><b>location: <a href="https://store.are.na/products/are-na-annual-vol-8-score?variant=68385378828439">store.are.na</a>, online</b></p>
<p><b>date: <mark>11th december</mark></b></p>

<p><a href="https://www.bklynlibrary.org/calendar/what-new-york-city-central-library-info-20261214-0530pm">⚇ ny(c)clo @ info commons lab ⚇</a></p>
<p><b>location: brooklyn public library, central library, nyc</b></p>
<p><b>date: <mark>14th december</mark></b></p>

<p><a href="https://naiveyearly.com/#home">⚇ naive yearly 2027 ⚇</a></p>
<p><b>location: athens, greece</b></p>
<p><b>date: <mark>15-17th april</mark></b></p>

<!-- <p>more performances coming soon</p> -->

<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<iframe src="https://blog.otherkat.com/" width="80%" height="50%"></iframe>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>


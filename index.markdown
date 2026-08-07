---
layout: home
---

**Kat Macdonald** is a London-based sound and performance artist exploring collective practice and public space through technology, transmission and alternative pedagogies. She is the founder of the <a href="https://lclo.otherkat.com">London Community Laptop Orchestra</a> and a long time member of the <a href="https://dap-lab.brunel.ac.uk/arch.html">Design And Performance Lab (DAP Lab)</a>. **Her work has been shown** internationally at festivals such as DRHA, Lumbung Radio Assembly, Intimidades Públicas (ICNOVA), The World Transformed, and <a href="/bio/#exhibitions">more.</a>

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

<p><a href="https://www.instagram.com/p/Dbc5KR0DXP8/">⚇ algofund by peckham digital (under bin projects) ⚇</a></p>
<p><b>location: vespers club, peckham, london</b></p>
<p><b>date: <mark>27th august</mark></b></p>

<p><a href="https://www.southbankcentre.co.uk/whats-on/get-your-hands-dirty-with-creative-tech/">⚇ london community laptop orchestra @ creative intelligence ⚇</a></p>
<p><b>location: queen elizabeth hall, southbank centre, london</b></p>
<p><b>date: <mark>13th september</mark></b></p>

<p><a href="https://thephotographersgallery.org.uk/whats-on/i-miss-the-internet">⚇ i miss the internet @ the photographers gallery ⚇</a></p>
<p><b>location: ramillies street, london</b></p>
<p><b>date: <mark>17th september</mark></b></p>

<p><a href="https://peckhamdigital.org/">⚇ noisy spaces @ pekcham digital festival ⚇</a></p>
<p><b>location: peckham, london</b></p>
<p><b>date: <mark>october</mark></b></p>

NOISY SPACES @ PECKHAM DIGITAL FESTIVAL

<!-- <p>more performances coming soon</p> -->
<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<iframe src="https://blog.otherkat.com/" width="80%" height="50%"></iframe>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>


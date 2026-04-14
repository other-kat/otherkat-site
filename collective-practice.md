---
layout: page
title: works
permalink: /collective-practice/
---

<h2>collective practice ☈</h2>

<p>---</p>

<p>Having worked with choregrapher & technologist <a href="https://en.wikipedia.org/wiki/Johannes_Birringer">Johannes Birringer</a>, her practice develops on his thoery of <a href="https://dap-lab.brunel.ac.uk/METAKIMOSPHERES_Birringer.pdf">Metakimospheres</a>; "kinetic atmospheres or environments staged for visitors that pass through them, listen to them and feel them". Kat's research into collective practice looks at activations of agency through the creation of what she calles 'landscapes of desire', spaces in which audiences are activated to participate by tapping into curosity, rather than artifically constructed rules and boundaries.</p>

<p>---</p>

<section id="collective practice works" class="section">
    <button class="accordion"><article>works</article></button>
	<div class="panel">
	<br>
 <div id="post">
		{% assign collective = site.collective | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in collective limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
</div>
</div></section>

<section id="collective practice writing" class="section">
    <button class="accordion"><article>writing</article></button>
	<div class="panel">
	<br>

<p><a href="https://blog.otherkat.com/collections/blog/2026/03/18/why-a-laptop-orchestra.html">BLOG - Why A Laptop Orchestra - 18/03/2026</a></p>

</div></section> 

<section id="collective practice sounds" class="section">
    <button class="accordion"><article>sounds</article></button>
	<div class="panel">
	<br>

<iframe style="border: 0; width: 100%; height: 340px;" src="https://bandcamp.com/EmbeddedPlayer/album=1992473751/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/the-river-of-no-one-original-score">the river of no one - Original Score by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=986813751/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/x-body-original-score">X-Body: Original Score by kat</a></iframe>

</div></section>

<script>
function toggleSection(id, btn) {

    const sections = document.querySelectorAll('[id^="section"]');
    sections.forEach(sec => sec.style.display = 'none');
    const buttons = document.querySelectorAll('.sel');
    buttons.forEach(b => b.classList.remove('active'));
    const current = document.getElementById(id);
    current.style.display = 'block';
    btn.classList.add('active');
}
</script>

<script>
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
</script>
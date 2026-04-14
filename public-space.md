---
layout: page
title: works
permalink: /public-space/
---

<h2>public space ☈</h2>

<p>---</p>

<p>Recently, as an extention of Kat's early work and her research in collective practice and desire, she has been researching and making work around public space. Looking into how public space is defined and how it is used in contemporary cities. Particularly, Kat is interested in how space is governed and regulated by states and private companies to limit public freedoms. Her work focuses on methods of using sound to understand the relationship between people and public space through coding, field recording, sound editing, radio and methods of urban study.</p>

<p>Part of this has manifested in her work with radio broadcasting, exploring radiophonic soundscape through 'listening through the architecture' of a space.</p>

<p>---</p>

<section id="public works" class="section">
    <button class="accordion"><article>works</article></button>
	<div class="panel">
	<br>
 <div id="post">
		{% assign space = site.space | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in space limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
</div>
</div></section>

<section id="public writing" class="section">
    <button class="accordion"><article>writing</article></button>
	<div class="panel">
	<br>

<p><a href="/writing/2026-01-15-narrowcasting---a-multi-band-narrative.html">Narrowcasting - A Multi-Band Narrative - 15/01/2026</a></p>

<p><a href="https://blog.otherkat.com/collections/blog/2026/03/23/objects-and-landscapes.html">BLOG - Objects And Landscapes - 23/03/2026</a></p>

</div></section>

<section id="public sounds" class="section">
    <button class="accordion"><article>sounds</article></button>
	<div class="panel">
	<br>

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3755397469/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/track/digital-forestry-wav">digital_forestry.wav by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=3220256511/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/rathausbells-wav">rathausbells.wav by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=244193756/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/26-05-24-wav">26_05_24.wav by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 208px;" src="https://bandcamp.com/EmbeddedPlayer/album=2528187894/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/rough-cuts">Rough Cuts by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=3770452780/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/environments-ii">Environments II by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=293523769/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/environments">Environments by kat</a></iframe>
<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=4172223964/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/songs-to-sleep-i">Songs To Sleep: I by kat</a></iframe>

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
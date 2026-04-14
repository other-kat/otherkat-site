---
layout: page
title: works
permalink: /technology-identity/
---

<h2>technology & identity ☈</h2>

<p>---</p>

<p>Working with choregrapher <a href="https://zhixu.org/about">Zhi Xu</a>, Kat began exploring work around identity, specifically the performativity of culture and gender. Through this she began exploring questions of authenticity as it relates to desire. What constructs of desire are perpetuate and exacerbated under capitalism? How can we cultivate a more honest relationship to our own desires? Through what methods can desire be encouraged rather than forced?</p>

<p>---</p>

<section id="desire works" class="section">
    <button class="accordion"><article>works</article></button>
	<div class="panel">
	<br>
 <div id="post">
		{% assign desire = site.desire | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in desire limit:100  %}
<a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a><br><br>
		{% endfor %}
</div>
</div></section>

<section id="desire writing" class="section">
    <button class="accordion"><article>writing</article></button>
	<div class="panel">
	<br>

<p><a href="https://blog.otherkat.com/collections/blog/2025/11/23/self-genealogy.html">BLOG - Self-Genealogy - 23/11/2025</a></p>

<p><a href="https://blog.otherkat.com/collections/blog/2025/11/16/topping-from-the-lap.html">BLOG - Sex, Games and Transexualism - 16/11/2025</a></p>

<p><a href="https://blog.otherkat.com/collections/blog/2025/09/18/politics-friction-trans-identity.html">BLOG - Politics / Friction / Trans Identity - 18/09/2025</a></p>

<p><a href="/writing/2023-11-27-Your-Post-Goes-Against-Our-Community-Guidelines.html">Your Post Goes Against Our Community Guidelines: an I Love Or Hate Everyday (2022-2023) retrospective - 27/11/2023</a></p>

<p><a href="/writing/2023-09-21-reinventing-trans-girlhood.html">Reinventing Trans Girlhood for DIVA Magazine - 21/09/2023</a></p>

<p><a href="/writing/2023-07-28-style-against-beauty.html">Style Against Beauty & Why I’ve Stopped Chasing for G(END)ER SWAP - 28/07/2023</a></p>

</div></section>

<section id="desire sounds" class="section">
    <button class="accordion"><article>sounds</article></button>
	<div class="panel">
	<br>

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=598089467/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/track/internal-revolution-wav">internal_revolution.wav by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3836473507/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/track/shower-thoughts">shower_thoughts by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2571616401/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/swimming-in-a-puddle">Swimming In A Puddle by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=2893270393/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/reaching">Reaching by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=1256152004/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/body-works">Body Works by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=2147509501/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/coral">Coral by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=4082538420/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/i-wish-i-was-a-lizard">I Wish I Was A Lizard by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=1800306990/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/album/tit-envy">Tit Envy by kat</a></iframe>

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2257852684/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://other-kat.bandcamp.com/track/n-i-k">N I K by kat</a></iframe>

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
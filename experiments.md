---
layout: page
title: works
permalink: /experiments/
---

<h2>experiments ☈</h2>

<p>---</p>

<p>This is a folder for experiments that have yet to take shape or are not directly relevant into Kat's current research.</p>

<p>---</p>

<div id="post">
		{% assign experiments = site.experiments | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in experiments limit:100  %}
<a href="{{ post.url }}">{{ post.title }}</a><br><br>
		{% endfor %}
</div>
</div>

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
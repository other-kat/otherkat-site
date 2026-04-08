---
layout: home
---

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

<p>more performances coming soon</p>

<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<div id="blog"></div>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>

<script>
console.log("script is running");
</script>

<script>
console.log("starting fetch...");

fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://blog.otherkat.com/feed.xml'))
  .then(res => {
    console.log("response:", res);
    return res.text();
  })
  .then(str => {
    console.log("got XML:", str.slice(0, 200)); // preview first 200 chars

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");

    const items = xml.querySelectorAll("item");
    console.log("items found:", items.length);

    const container = document.getElementById("blog");

    if (!container) {
      console.error("NO #blog ELEMENT FOUND");
      return;
    }

    items.forEach((item, index) => {
      if (index < 2) {
        const title = item.querySelector("title")?.textContent;
        const link = item.querySelector("link")?.textContent;
        const dateText = item.querySelector("pubDate")?.textContent;

        console.log("post:", title);

        if (!title || !link || !dateText) return;

        const date = new Date(dateText);

        container.innerHTML += `
          <a href="${link}">
            ${(date.getMonth()+1)}/${date.getFullYear().toString().slice(-2)}:
            ${title} →
          </a><br>
        `;
      }
    });
  })
  .catch(err => {
    console.error("FETCH FAILED:", err);
  });
</script>


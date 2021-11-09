---
title: "UVa ILP Blog"
layout: textlay
excerpt: "UVa ILP - Blog"
sitemap: false
permalink: /blog/
---

# UVa ILP Blog 

<br>
<ul class="posts">
	{% for post in site.posts %}
	<li> <h4>{{ post.date | date: "%F" }} <a href="{{ post.url }}">{{ post.title }}</a> by <a href="{{ post.homepage }}">{{ post.author }}</a></h4>
	</li>
	{% endfor %}
</ul>
<br><br><br><br>

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
	<li> <h4>{{ post.date | date: "%F" }} <a href="{{ post.url }}">{{ post.title }}</a></h4>
	<h5>TL;DR: {{ post.tldr }}</h5>
	<br>
	</li>
	{% endfor %}
</ul>
<br><br><br>

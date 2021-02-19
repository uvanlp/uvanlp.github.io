---
title: "UVa ILP - Publications"
layout: gridlay
excerpt: "UVa ILP -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

<!-- ## Full List -->

{% for publi in site.data.publist %}

  <b>{{ publi.title }}</b> <br/>
  <em> {{ publi.authors }} </em> <br/>
  {{ publi.pub }}, {{publi.year}} <br/>
  <a href="{{ publi.link.url }}">{{ publi.link.display }}</a> &nbsp; <a href="{{ publi.code.url }}">{{ publi.code.display }}</a>

{% endfor %}

<br>
This page only contains the publications from the UVa NLP group. For Yangfeng Ji's publications before 2019, please refer to [his academic webpage](http://yangfengji.net/publication/).


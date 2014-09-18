---
layout: post
title:  "Freya Tweak Tool"
date:   2014-09-17 16:21:26
categories: jekyll update
---

Since the release of Elementary OS Beta 1 I've been searching and waiting for Elementary Tweak Tools to become available. After searching for while I stumbled receantly upon [lmelinux.net](http://lmelinux.net/2014/08/11/get-elementary-tweaks-working-freya-beta-1/) There I found three methods of installing the tweak tool.

[My helpful screenshot]({{ site.url }}/assets/tweaks-post.png)

<br>

This version is actually the latest and constently being maintained, so if you are going install Tweaks this one would be the one to try first.

{% highlight html %}
sudo add-apt-repository ppa:mpstark/elementary-tweaks-daily
sudo apt-get update
sudo apt-get install elementary-tweaks
{% endhighlight %}

This second method also works on most Freya systems, its a patched version of the old Tweaks. Give it a try.

{% highlight html %}
sudo add-apt-repository ppa:bmeznarsic/tweaks-freya
sudo apt-get update
sudo apt-get install elementary-tweaks
{% endhighlight %}

This last method is actally the official ppa for the tweaks tool, I've actaully tried this one but It didnt work for me, its been a while so maybe it got fixed.

{% highlight html %}
sudo add-apt-repository ppa:versable/elementary-tweaks-isis
sudo apt-get update
sudo apt-get install elementary-tweaks
{% endhighlight %}
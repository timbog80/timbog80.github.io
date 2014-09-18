---
layout: post
title:  "Freya Tweak Tool"
date:   2014-09-17 16:21:26
categories: jekyll update
---

Since the release of Elementary OS Beta 1 I've been searching and waiting for Elementary Tweak Tools to become available. After searching for while I stumbled upon `lmelinux.net` There I found three methods of installing the tweak tool.

<br>

[Tweak Tools Screenshot]({{ site.url }}/assets/tweaks-post.png)

<br>

This version is actually the latest and contently being maintained, so if you are going install Tweaks this one would be the one to try first.

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

This last method is the `official ppa` for the tweaks tool, I've actually tried this one but It didn't work for me, its been a while so maybe it got fixed.

{% highlight html %}
sudo add-apt-repository ppa:versable/elementary-tweaks-isis
sudo apt-get update
sudo apt-get install elementary-tweaks
{% endhighlight %}
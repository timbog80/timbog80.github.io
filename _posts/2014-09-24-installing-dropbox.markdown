---
layout: post
title:  "Installing Dropbox"
date:   2014-09-24
categories: jekyll update
---

Before you can actually install `Dropbox` to your system you first have to install the plugin for the office environment pantheon. If you are on Luna you will get an icon on the top right of the wing-panel. Currently the icon does not appear on Freya.

{% highlight bash %}
sudo apt-get install pantheon-files-plugin-dropbox
{% endhighlight %}

After installing the plugin you can install Dropbox itself:

{% highlight bash %}
sudo apt-get install nautilus-dropbox
{% endhighlight %}

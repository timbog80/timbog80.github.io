---
layout: post
title:  "Flash Plugin"
date:   2014-09-27
categories: jekyll update
---

Before you can install `Freshplayer` you must have `pepperflash plugin` installed. Open you terminal and paste the command. Note if you are using chrome then there is no need for `Freshplayer`. Chrome has its own flash plugin built in. This is only needed if you are using `firefox`.

{% highlight bash %}
sudo apt-get install pepperflashplugin-nonfree
{% endhighlight %}

Once installed, update it.

{% highlight bash %}
sudo update-pepperflashplugin-nonfree --install
{% endhighlight %}

Now that you've installed Pepper Flash, add the Fresh Player ppa & install the plugin.

{% highlight bash %}
sudo add-apt-repository ppa:nilarimogard/webupd8
{% endhighlight %}

Update & Install the plugin

{% highlight bash %}
sudo apt-get update
{% endhighlight %}

{% highlight bash %}
sudo apt-get install freshplayerplugin
{% endhighlight %}

Source - [maketecheasier](http://www.maketecheasier.com/useful-ppas-for-ubuntu/)
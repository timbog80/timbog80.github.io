---
layout: post
title:  "Double Chrome Icon Fix"
date:   2014-09-25
categories: jekyll update
---

After installing Chrome on a fresh install of elementary OS Freya you might notice that after opening chrome you get two icons. To fix this you have to input one simple line in the terminal.

{% highlight html %}
sudo scratch-text-editor /usr/share/applications/google-chrome.desktop
{% endhighlight %}

Now you'll see a `scratch` window pop up. Under `[Desktop Entry]` paste the following line of code:

{% highlight html %}
StartupWMClass=Google-chrome-stable
{% endhighlight %}

After all that close chrome if opened, and remove the chrome icon from the plank. Then re-lock it back to the plank.
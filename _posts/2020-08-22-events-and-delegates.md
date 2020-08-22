---
layout: post
title: 'Events and Delegates'
categories:
---

# Events and Delegates in C

<br >

Events and Delegates in C# are advanced concepts. I have used it in WPF projects a long time again. Now when I want to use it again, they still make me confused. I read the [microsoft official documnetation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/events/how-to-publish-events-that-conform-to-net-framework-guidelines) again. It give me one example which is abstract. I found some [video tutorials](https://www.youtube.com/watch?v=jQgwEsJISy0) on youtube which are more concrete and easy to understand.

So what are events and delegates?

Events:

- A mechanism for communication between objects. It means when something happens in some objects, it can notify other objects about that.
- It can help build Loosely Coupled Applications. Loosely Coupled Applications are application that its components and classes are not tighted together.
- Helps extending applications. Loosely Coupled Applications are easy to extend without breaking or changing one or more exsiting functions or capabilities.

Let's see some code example.

<br />
    C#:

    {% highlight ruby %}
    public class VideoEncoder
    {
        public void Encode(Video video)
        {
            // Encoding logic
            // ..
            _mailService.Send(new Mail());
        }
    }
    {% endhighlight %}

<br />

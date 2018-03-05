# This Project is NOT abandoned!
I regularly check for issues / PR and such. 

## How to use
1. Include manlyScroll.min.js in your header
2. Give your infiniteScrolling Element the class 'infinite-scroll' (as last class)
3. Give your Paginator the class 'paginator' (as first class)

When your pages are ordered like 

    www.manly.com/example?foo=bar&amp;page=2

, it works automaticly.

## Example:

Your searchResult Pages have the URL like:
    
    www.yourPage.com/search.html?results=foo
    www.yourPage.com/search.html?results=foo&page=2
    www.yourPage.com/search.html?results=foo&page=3
    
and so on. Your HTML of your search page should look like this:

```
<h1>...</h1>
<div class="class-1 class-2 infinite-scroll>
    content (which also will be ajax called
</div>
<ul class="pagination class-3 class 4">...</ul>

```
Sidenotes: 
- It is not important where the pagination is, it will be hidden anyways
- It is important that infinite-scroll is last class and paginator is first class
- Sadly, paginator must be ul atm. DOM Parser won't work under firefox & safari properly.
I will work on this later


## Why ManlyScroll?
- Ready to use <2 minutes. Stopwatch it mate!
- No knowledge in Ugandan vodoo magic or virgin blood required like in similar projects (Or god forbid... 
Time needed to read 40 Pages of documentation for implementation of a simple feature...)
- Fulfills a large portion of standard use cases for pagination and scroll scenarios
- No Bullshit included. One purpose, one tool.
- Even my mom achieved to implement it...
- OpenSource and well supported by me. You want a feature / have any improvement ideas. Fork it or write it! 


## Why so manly?
You ever wanted to add a very simple feature like infinite scrolling, don't want to
enlarge your project with jquery or a "easy to use" framework
with 40+ Pages of documentation and features like finding 
cure to cancer while infinite scrolling?

Sorry mate, I don't have the time for that between my oil wrestling sessions with
**bears** and sparring with **north american crocodiles**!

So... the solution? Time to call the **manly**handyman!

He is not sexy, he doesn't exactly smell good, he also doesn't really behave like a 
gentelman. But damn he is your pick when the job has to be done. 

    ManlyScroll is reliable
    ManlyScroll is not complicated
    ManlyScroll doesn't talk, ManlyScroll does his job

##### Imagine the bearded guy chopping wood in the snowy canadian forest...

##### This is ManlyScroll for you...

## What makes this project so manly?

This project was coded after repairing my motorcycle, chopping wood with an axe 
and only listening to best of hard rock classics.

![alt text](https://pbs.twimg.com/media/Bjz-192CYAAROrX.png)


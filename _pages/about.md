---
permalink: /
title: "Matthew Ding"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello everyone, my name is Matthew. I'm currently a senior-year undergraduate studying computer science and astrophysics at the University of California, Berkeley. Welcome to my website!

I am broadly interested in theoretical computer science research. I am currently working on proving complexity results of quantum Hamiltonians. In the past I've worked on combinatorial graph algorithms, distributed protocols, and streaming algorithms.


Publications
======
  <ul>{% for post in site.publications reversed%}
    {% if post.venue != "(In submission)" %}
        {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}</ul>


Manuscripts
======
  <ul>{% for post in site.publications reversed %}
    {% if post.venue == "(In submission)" %}
        {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}</ul>


Teaching
======

  <ul>{% for post in site.teaching reversed %}
    {% include archive-single.html %}
  {% endfor %}</ul>


Notes
======
<ul>
<b>CS 270: Combinatorial Algorithms and Data Structures (UC Berkeley, Spring 2023)</b>

<a href="http://matthew-ding.github.io/files/lec12.pdf">Lecture 12 Notes: Linear probing with 5-wise independence, symmetrization, approximate membership</a>
</ul>

<br/>
<br/>
<em>"We shall not cease from exploration. And the end of all our exploring will be to arrive where we started and know the place for the first time."</em>

—T.S. Eliot, from “Little Gidding”, Four Quartets (1943)
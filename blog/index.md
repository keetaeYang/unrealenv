---
layout: blog_index
title: "블로그"
permalink: /blog/
pagination:
  enabled: true
  offset: 3
---
<div class="card-wrapper">
{% for post in paginator.posts %}
  <article class="post-item card">
    <div class="post-container">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a class="btn" href="{{ post.url | relative_url }}">더 읽기</a>
    </div>
  </article>
{% endfor %}
</div>


<div class="pagination">
  {% if paginator.previous_page %}
    <a class="prev" href="{{ paginator.previous_page_path | relative_url }}">이전</a>
  {% endif %}
  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span class="current">{{ page }}</span>
    {% else %}
      <a class="page" href="{{ paginator.paginate_path | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}
  {% if paginator.next_page %}
    <a class="next" href="{{ paginator.next_page_path | relative_url }}">다음</a>
  {% endif %}
</div>

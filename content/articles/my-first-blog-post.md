---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
author:
  name: Benjamin
  bio: All about Benjamin
  image: https://via.placeholder.com/50x50
---

## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info

<div class="p-4 mb-4 text-white bg-blue-500">
  This is HTML inside markdown that has a class of note
</div>

<InfoBox>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</InfoBox>

<Author :author="author"></Author>
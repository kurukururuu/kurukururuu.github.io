---
title: "Taming the Tailwind Headache: Practical Solutions for a Smoother CSS Workflow"
description: "Tailwind’s cluttered HTML meets practical solutions for a cleaner, more productive workflow."
published: 2025/09/15
slug: "taming-the-tailwind-headache"
---

## A little bit of intro

Tailwind CSS was my first CSS framework. I started using it around 2018, and I was immediately drawn to its utility-first approach. The idea of composing styles directly in the HTML felt amazing. However, as my projects grew in complexity, I began to notice some challenges that came with using Tailwind. I will talk about one of the most common complaints about Tailwind and how I managed to overcome it.

### The Problem: Cluttered/Spaghettied HTML

For me, one of the most common complaints about Tailwind is the cluttered HTML it produces. With so many utility classes, the HTML can quickly become overwhelming and hard to read. This can make it difficult to maintain and update the code, especially for larger projects.

Let's take a look at this example:

```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="A beautiful scenery">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case Study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
```

There are several problems with this approach:
#### **1. Readability**
The HTML is cluttered with numerous utility classes, making it hard to quickly understand the structure and purpose of the elements.
If we compare it to a more traditional approach using semantic class names, the difference is clear:
```html
<div class="card">
  <div class="card-content">
    <div class="card-image">
      <img src="image.jpg" alt="A beautiful scenery">
    </div>
    <div class="card-text">
      <div class="card-category">Case Study</div>
      <a href="#" class="card-title">Finding customers for your new business</a>
      <p class="card-description">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
```

#### 2. **Maintainability**
If you need to change a style, you have to hunt through the HTML to find all instances of the relevant classes, which can be time-consuming and error-prone.
I usually look into the dev tools to find the class I want to change, but it can be a hassle.
With semantic class names, we can simply use find feature in our code editor to locate and update styles more efficiently.

#### 3. **Reusability**
The lack of semantic class names makes it difficult to reuse components across different parts of the application.
The same thing goes for reusing styles. If you want to apply the same styles to multiple elements, you have to repeat the same utility classes, leading to code duplication.
With semantic class names, you can create reusable components that can be easily styled and maintained.

### Solutions
How do I deal with this problem? There is one strategy that have worked for me:
#### **Use @apply directive**
Tailwind provides an `@apply` directive that allows you to create custom CSS classes by applying multiple utility classes. This can help reduce the clutter in your HTML and make it more readable.
Instead of writing all the utility classes in the HTML, you can create a CSS file and define your custom classes using `@apply`.

```css
/* styles.css */
.card {
  @apply max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl;
}
.card-content {
  @apply md:flex;
}
.card-image {
  @apply md:flex-shrink-0;
}
.card-image img {
  @apply h-48 w-full object-cover md:h-full md:w-48;
}
.card-text {
  @apply p-8;
}
.card-category {
  @apply uppercase tracking-wide text-sm text-indigo-500 font-semibold;
}
.card-title {
  @apply block mt-1 text-lg leading-tight font-medium text-black hover:underline;
}
.card-description {
  @apply mt-2 text-gray-500;
}
```

### Outro
There are other strategies besides using `@apply`, such as extracting components, using plugins, or even combining Tailwind with traditional CSS. The key is to find a middle ground that works for you and your team.

See you in the next post!

---
**[Also check my other articles](/articles/)**
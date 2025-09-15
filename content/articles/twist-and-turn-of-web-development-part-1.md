---
title: "Twists and Turns of Web Development (Part 1) - Memory Leaks"
description: "Exploring memory leaks in web development and how to prevent them"
published: 2025/08/01
slug: "twist-and-turn-of-web-development-part-1"
---

Over the years, working on both personal and professional web projects, I've come across a few challenges related to memory management in browsers. Memory leaks can be subtle and sometimes hard to spot, but understanding how they happen and why they matter has helped me write more reliable code. I want to share some of what I've learned about memory leaks in browsers, why they're important to watch out for, and some common scenarios where they can occur. We'll also look at ways to detect and fix these issues in our own projects.

## Memory Leaks in Browsers

From what I know, memory leaks occur when our application allocates memory but fails to release it when it's no longer needed. Since I'm working with JavaScript, I understand that it automatically frees memory by removing objects that are no longer reachable. Then I also learned how the garbage collector works. It seems the garbage collector can only clean up objects if there are no lingering references, so keeping unnecessary references can prevent memory from being released.

### From working with GitHub Copilot to exploring suggested solutions
There is one time when I asked GitHub Copilot about processing multiple images in JavaScript, it suggested using `WeakSet`. This led me to explore how `WeakSet` differs from a regular `Set`, particularly in terms of memory management.

Suppose we want to process images only once when they load, and avoid reprocessing if the load event fires multiple times. Here's how `WeakSet` can help:

```typescript
// Example: Track processed images with WeakSet
const processedImages = new WeakSet<HTMLImageElement>();

function onImageLoad(event: Event) {
  const img = event.target as HTMLImageElement;
  if (processedImages.has(img)) {
    // Already processed, do nothing
    return;
  }
  // Do something with the image, e.g., update src
  img.src = img.src + "&extraParam=1";
  // Mark as processed
  processedImages.add(img);
}

// Usage in HTML (e.g. in a template or directly in DOM)
<img src="image.jpg" onload="onImageLoad(event)" />
<img src="image2.jpg" onload="onImageLoad(event)" />
```

### Why Does This Prevent Memory Leaks?

Using a `WeakSet` here is a smart move because:

1. **No Unnecessary References**: `WeakSet` doesn't hold onto image elements after they're removed from the DOM, so the browser can clean them up when they're no longer needed.
2. **Automatic Cleanup**: We don't have to worry about removing images from the set ourselves—once an image is gone, it's automatically forgotten.
3. **Less Code, Fewer Bugs**: Since cleanup happens behind the scenes, there's less chance of accidentally keeping old references around and causing leaks.

### What If We Use a Regular Set?

If we use a regular `Set`, things work differently:

```typescript
// ❌ This can lead to memory leaks
const processedImages = new Set<HTMLImageElement>();

function onImageLoad(event: Event) {
  const img = event.target as HTMLImageElement;
  processedImages.add(img); // This keeps a strong reference to img
}
```

With a regular `Set`, those image elements stay in memory even after they're removed from the page. Over time, this can add up and slow things down, especially if we're working with lots of images.

### When to Use `WeakSet` vs. Regular `Set`
- Use `WeakSet` when we want to track objects without preventing their garbage collection. This is ideal for scenarios like event listeners or temporary caches.
- Use a regular `Set` when we need to maintain a strong reference to objects for the lifetime of our application, such as managing a pool of reusable objects.

### Can't we just use Objects or Arrays?
Usually, we always consider using plain objects or arrays to track processed images. However, this approach can lead to memory leaks if we forget to delete properties when images are removed from the DOM. Using `WeakSet` is safer because it automatically handles cleanup without requiring us to remember to remove references.

### Conclusion
A little bit of outro, but I hope this gives us a clearer understanding of how memory leaks can occur in web development, especially when working with JavaScript. By using one of the tools like `WeakSet`, we can write cleaner, more efficient code that helps prevent memory issues.

---
**[Also check my other articles](/articles/)**
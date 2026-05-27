# Bootstrap 5 Setup

Bootstrap has been added to your `package.json`. After `pnpm install`, add the import to your main CSS or entry file.

## Import (choose one)

### CSS only (recommended for most cases)
```css
/* src/styles/tokens.css — add at top */
@import 'bootstrap/dist/css/bootstrap.min.css';
```

### SCSS (if you want to override variables)
```bash
pnpm add -D sass
```
```scss
/* src/styles/bootstrap-custom.scss */
$primary: var(--color-accent);    /* maps to your brand accent */
$body-bg: var(--color-bg);
$body-color: var(--color-text);

@import 'bootstrap/scss/bootstrap';
```

## Note on Tailwind coexistence

Bootstrap and Tailwind reset styles conflict. If you're using both:
- Scope Bootstrap: `@layer bootstrap { @import 'bootstrap/...' }`
- Or remove Tailwind and use Bootstrap exclusively

For landing pages, using one CSS framework is recommended.

## Useful Bootstrap components for landing pages

```html
<!-- Hero -->
<section class="py-5 text-center">
  <h1 class="display-4 fw-bold">{{TAGLINE}}</h1>
  <a href="#contact" class="btn btn-primary btn-lg mt-3">Start a project</a>
</section>

<!-- Card grid -->
<div class="row g-4">
  <div class="col-md-4">
    <div class="card h-100">...</div>
  </div>
</div>
```

# Adding Sections

## Pattern

Every section follows the same structure:

```
src/components/sections/
  SectionName/
    SectionName.tsx       (or .astro / .vue)
    index.ts              (re-export)
```

Data lives in `src/lib/`, not inside the component.

## Example: Works / Portfolio section

**1. Add data file**

```ts
// src/lib/projects.ts
export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'scoring' | 'mixing' | 'artist';
  year: number;
  cover: string;       // path to /public/images/projects/
  previewAudio?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'film-1',
    title: 'Beneath the Surface',
    client: 'Visinema',
    category: 'scoring',
    year: 2025,
    cover: '/images/projects/beneath-the-surface.jpg',
  },
];
```

**2. Add component**

```tsx
// src/components/sections/Works/Works.tsx
import { PROJECTS } from '@/lib/projects';

export function Works() {
  return (
    <section id="works" className="py-24 md:py-32">
      <div className="container-page">
        <p className="label-uppercase mb-4">Selected Works</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-bg p-6 hover:bg-surface transition-colors">
              {/* cover image, title, client, year */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**3. Add to page**

```tsx
// src/app/page.tsx (Next.js) or src/App.tsx (Vite+React)
import { Works } from '@/components/sections/Works/Works';

// Add <Works /> between <Hero /> and <Services />
```

## Rules (from DESIGN.md)

- Section padding: `py-24 md:py-32`
- Container: `container-page` class
- Eyebrow label: `label-uppercase` class before heading
- All colors via tokens, no hardcoded hex
- Run `/ui-designer` skill before submitting new section to Claude

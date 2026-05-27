import fs from 'fs-extra';
import path from 'path';

const TEMPLATE_EXT = '.tmpl';

/**
 * Replaces `{{VAR_NAME}}` placeholders in a string with values from `vars`.
 * Unknown placeholders are left unchanged.
 */
function interpolate(content: string, vars: Record<string, string>): string {
  return content.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}

/**
 * Recursively copies a template directory to a destination.
 * Files with `.tmpl` extension have `{{VAR}}` placeholders interpolated.
 * The `.tmpl` extension is stripped from the output filename.
 */
async function copyTemplate(
  src: string,
  dest: string,
  vars: Record<string, string>,
) {
  const stat = await fs.stat(src);

  if (stat.isDirectory()) {
    const entries = await fs.readdir(src);
    await fs.ensureDir(dest);
    for (const entry of entries) {
      await copyTemplate(
        path.join(src, entry),
        path.join(dest, entry.replace(TEMPLATE_EXT, '')),
        vars,
      );
    }
    return;
  }

  const raw = await fs.readFile(src, 'utf8');
  const output = src.endsWith(TEMPLATE_EXT) ? interpolate(raw, vars) : raw;
  await fs.ensureDir(path.dirname(dest));
  await fs.writeFile(dest.replace(TEMPLATE_EXT, ''), output, 'utf8');
}

/**
 * Generates a complete landing page project from scaffold templates.
 *
 * Merges two template layers:
 * 1. `templates/shared/` — framework-agnostic AI system files (DESIGN.md, GUARDRAILS.md, skills, scripts)
 * 2. `templates/frameworks/{framework}/` — framework-specific source code
 *
 * @param templatesDir - Absolute path to the `templates/` directory
 * @param targetDir    - Absolute path to the output directory (must be empty or non-existent)
 * @param vars         - Template variables to interpolate (e.g. BRAND_NAME, PRIMARY_COLOR)
 * @param framework    - Framework identifier: `nextjs` | `astro` | `vite-react` | `vanilla`
 * @throws If targetDir exists and is not empty
 */
export async function generateProject(
  templatesDir: string,
  targetDir: string,
  vars: Record<string, string>,
  framework: string,
) {
  if (await fs.pathExists(targetDir)) {
    const files = await fs.readdir(targetDir);
    if (files.length > 0) throw new Error(`Directory "${targetDir}" is not empty.`);
  }

  const sharedDir = path.join(templatesDir, 'shared');
  await copyTemplate(sharedDir, targetDir, vars);

  const frameworkDir = path.join(templatesDir, 'frameworks', framework);
  await copyTemplate(frameworkDir, targetDir, vars);
}

# Deploy

## Problema actual

El builder *legacy* (Jekyll) de GitHub Pages empezó a fallar con un
`"Page build failed."` sin log y duración 0 ms. El sitio siguió sirviendo el
último build correcto, por eso `/v3` funciona y `/v4` da 404.

El contenido de la rama `gh-pages` está bien: 180 archivos, 8 MB, `.nojekyll`
presente, sin symlinks ni submódulos, y los videos ya estaban en el último build
que sí funcionó.

## Solución: construir desde GitHub Actions

`github-pages-workflow.yml` construye el sitio en CI y lo publica directamente,
sin pasar por el builder legacy. Da logs reales y elimina el paso manual del
worktree de `gh-pages`.

**No pude instalarlo yo**: el token de esta sesión no tiene el scope `workflow`,
así que GitHub rechaza cualquier push que cree archivos en `.github/workflows/`.

### Para activarlo (2 minutos)

```bash
mkdir -p .github/workflows
git mv deploy/github-pages-workflow.yml .github/workflows/pages.yml
git commit -m "Deploy Pages desde Actions"
git push
```

Luego en **Settings → Pages → Build and deployment → Source**, cambiar de
*Deploy from a branch* a **GitHub Actions**.

A partir de ahí, cada push a `v3-ecosystem` publica el sitio.

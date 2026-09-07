import type { Project, ProjectCategory } from './projects';

/**
 * Filtre la liste des projets par catégorie et par statut.
 *
 * - `category` vide → toutes les catégories.
 * - `includePlanned` faux (défaut) → les projets « à faire » sont exclus
 *   (visibles uniquement en dev, cf. `projects.svelte`).
 */
export function filterProjects(
	projects: Project[],
	opts: { category?: ProjectCategory | ''; includePlanned?: boolean } = {}
): Project[] {
	const { category = '', includePlanned = false } = opts;

	return projects.filter(
		(project) =>
			(includePlanned || project.status !== 'planned') &&
			(category === '' || project.category === category)
	);
}

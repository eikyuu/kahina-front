import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
    {
        path: '',
        title: 'Kahina - Accueil',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'foo',
        title: 'Foo',
        loadComponent: () =>
            import('./pages/foos/foos.component').then((m) => m.FoosComponent),
    },
    {
        path: 'storybook',
        title: 'Storybook',
        loadComponent: () =>
            import('./ui/storybook.component').then((m) => m.StorybookComponent),
    },
    {
        path: 'anime/:slug',
        title: 'Anime',
        loadComponent: () =>
            import('./pages/anime/anime.component').then((m) => m.AnimeComponent),
    },
    {
        path: 'themes/:slug',
        title: 'Kahina - Themes',
        loadComponent: () => import('./pages/themes/themes.component').then((m) => m.ThemesComponent),
    },
    {
        path: 'genre/:slug',
        title: 'Kahina - animes par genre',
        loadComponent: () => import('./pages/genre/genre.component').then((m) => m.GenreComponent),
    },
    {
        path: 'character/:type/:slug',
        title: 'Kahina - Figure',
        loadComponent: () => import('./pages/figure/figure.component').then((m) => m.FigureComponent),
    },
    {
        path: 'characters/:type/:slug',
        title: 'Kahina - characters',
        loadComponent: () => import('./pages/figures/figures.component').then((m) => m.FiguresComponent),
    },
    {
        path: 'reviews/:slug',
        title: 'Kahina - reviews',
        loadComponent: () => import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
    },
    {
        path: 'relations/:slug',
        title: 'Kahina - relations',
        loadComponent: () => import('./pages/relations/relations.component').then((m) => m.RelationsComponent),
    },
    {
        path: 'posters/:slug',
        title: 'Kahina - posters',
        loadComponent: () => import('./pages/posters/posters.component').then((m) => m.PostersComponent),
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: '**',
        pathMatch: 'full',
        title: '404',
        loadComponent: () =>
            import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    },
];
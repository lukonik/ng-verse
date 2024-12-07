import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'doc',
    loadComponent: () =>
      import('./features/doc-container-page/doc-container-page.component').then(
        (d) => d.DocContainerPageComponent
      ),
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./features/button-page/button-page.component').then(
            (b) => b.ButtonPageComponent
          ),
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./features/accordion-page/accordion-page.component').then(
            (b) => b.AccordionPageComponent
          ),
      },
      {
        path: 'outside-click',
        loadComponent: () =>
          import(
            './features/outside-click-page/outside-click-page.component'
          ).then((b) => b.OutsideClickPageComponent),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./features/pagination-page/pagination-page.component').then(
            (p) => p.PaginationPageComponent
          ),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./features/checkbox-page/checkbox-page.component').then(
            (c) => c.CheckboxPageComponent
          ),
      },
      {
        path: 'radio-button',
        loadComponent: () =>
          import(
            './features/radio-button-page/radio-button-page.component'
          ).then((c) => c.RadioButtonPageComponent),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./features/select-page/select-page.component').then(
            (c) => c.SelectPageComponent
          ),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./features/dialog-page/dialog-page.component').then(
            (d) => d.DialogPageComponent
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./features/skeleton-page/skeleton-page.component').then(
            (d) => d.SkeletonPageComponent
          ),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./features/switch-page/switch-page.component').then(
            (d) => d.SwitchPageComponent
          ),
      },
      {
        path: 'tab',
        loadComponent: () =>
          import('./features/tab-page/tab-page.component').then(
            (d) => d.TabPageComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'doc',
    pathMatch: 'full',
  },
];

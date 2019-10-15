import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'panel',
    title: 'Panel',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'produit',
            title: 'produit',
            type: 'collapse',
            children: [
              {
                id: 'ajouter un produit',
                title: 'ajouter un produit',
                type: 'item',
                url: '/create-produit',
                external: true
              },
              {
                id: 'liste des produits',
                title: 'liste des produits',
                type: 'item',
                url: '/produit-list',
                external: true
              },
              {
                id: 'details des produits',
                title: 'details des produits',
                type: 'item',
                url: '/produit-details/:id',
                external: true
              }
            ]
          },
          {
            id: 'fournisseur',
            title: 'fournisseur',
            type: 'collapse',
            children: [
              {
                id: 'ajouter un fournisseur',
                title: 'ajouter fournisseur',
                type: 'item',
                url: '/create-fournisseur',
                external: true
              },
              {
                id: 'liste des fournisseurs',
                title: 'liste des fournisseurs',
                type: 'item',
                url: '/fournisseur-list',
                external: true
              },
              {
                id: 'details des fournisseurs',
                title: 'details des fournisseurs',
                type: 'item',
                url: '/fournisseur-details/:id',
                external: true
              }
            ]
          }, {
            id: 'client',
            title: 'client',
            type: 'collapse',
            children: [
              {
                id: 'ajouter un client',
                title: 'ajouter client',
                type: 'item',
                url: '/create-client',
                external: true
              },
              {
                id: 'liste des clients',
                title: 'liste des clients',
                type: 'item',
                url: '/client-list',
                external: true
              },
              {
                id: 'details des clients',
                title: 'details des clients',
                type: 'item',
                url: '/client-details/:id',
                external: true
              }
            ]
          }, {
            id: 'commande',
            title: 'commande',
            type: 'collapse',
            children: [
              {
                id: 'ajouter un commande',
                title: 'ajouter commande',
                type: 'item',
                url: '/create-commande',
                external: true
              },
              {
                id: 'liste des commandes',
                title: 'liste des commandes',
                type: 'item',
                url: '/commande-list',
                external: true
              },
              {
                id: 'details des commandes',
                title: 'details des commandes',
                type: 'item',
                url: '/commande-details/:id',
                external: true
              }
            ]
          }, {
            id: 'stock',
            title: 'stock',
            type: 'collapse',
            children: [
              {
                id: 'ajouter un stock',
                title: 'ajouter stock',
                type: 'item',
                url: '/create-stock',
                external: true
              },
              {
                id: 'liste des stocks',
                title: 'liste des stocks',
                type: 'item',
                url: '/stock-list',
                external: true
              },
              {
                id: 'details  des stocks',
                title: 'details des stocks',
                type: 'item',
                url: '/stock-details/:id',
                external: true
              }
            ]
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

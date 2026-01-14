import {Component, effect, ElementRef, OnChanges, OnDestroy, viewChild} from '@angular/core';

import * as ReactDOMClient from 'react-dom/client';
import * as React from 'react';
import Preview, {Preview1} from './react-components';

@Component({
  selector: 'app-react-integration',
  imports: [],
  templateUrl: './react-integration.html',
  styleUrl: './react-integration.css',
})
export class ReactIntegration implements OnChanges, OnDestroy {
  containerRef = viewChild<ElementRef>('reactContainer');

  private root?: ReactDOMClient.Root;
  private props = { text: 'Hello from React!' };

  constructor() {
    effect(() => {
      if (this.containerRef()) {
        this.root = ReactDOMClient.createRoot(this.containerRef()?.nativeElement);
        this.renderReactComponent();
      }
    });
  }

  ngOnChanges() {
    if (this.root) {
      this.renderReactComponent();
    }
  }

  private renderReactComponent() {
    this.root?.render(React.createElement(Preview1, this.props));
  }

  ngOnDestroy() {
    this.root?.unmount();
  }

}

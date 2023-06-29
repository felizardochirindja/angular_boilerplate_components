import { ConfirmModalConfig } from './confirm-modal.types';
import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject, Observable } from 'rxjs';
import { ConfirmModalComponent } from '../confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  private notifier: Subject<string> = new Subject();

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  open(content: TemplateRef<any>, config: ConfirmModalConfig): Observable<string> {
    const componentFactory = this.resolver.resolveComponentFactory(ConfirmModalComponent)

    const contentViewRef = content.createEmbeddedView(null)
    
    const component = componentFactory.create(this.injector, [
      contentViewRef.rootNodes
    ])

    component.instance.config = config;

    component.instance.closed.subscribe(() => {
      this.notifier?.complete()
    })

    component.instance.submited.subscribe(() => {
      this.notifier?.next('confirm')
      this.notifier?.complete()
    })

    component.hostView.detectChanges()

    this.document.body.appendChild(component.location.nativeElement)

    return this.notifier.asObservable()
  }
}

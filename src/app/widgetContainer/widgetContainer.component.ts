import {
    Component, Input,
    ViewContainerRef,
    Compiler,
    ComponentFactory,
    ComponentFactoryResolver,
    ModuleWithComponentFactories,
    ComponentRef,
    ReflectiveInjector,
    NgModuleFactoryLoader
} from '@angular/core';

@Component({
  selector: 'WidgetContainer',
  templateUrl: './widgetContainer.component.html'
})
export class WidgetContainer {

  constructor(
    private viewref: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private loader: NgModuleFactoryLoader,
    private compiler: Compiler) {
    }

  loadWidget(path) {
    this.loader.load(path)
      .then((modFac) => {
        return this.compiler.compileModuleAndAllComponentsAsync<any>(modFac.moduleType)
          .then((factory: ModuleWithComponentFactories<any>) => {
            console.log(factory.componentFactories);
            return factory.componentFactories[0];
          })
          .then(cmpFactory => {
            let modRef = modFac.create(this.viewref.parentInjector);
            this.viewref.createComponent(cmpFactory, 0, modRef.injector);
          });
      })
  }
}

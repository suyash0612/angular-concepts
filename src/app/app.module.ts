import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './directives/parent/parent.component';
import { ChildComponent } from './directives/parent/child/child.component';
import { FriendComponent } from './directives/friend/friend.component';
import { NgContentchildComponent } from './ng-contentchild/ng-contentchild.component';
import { NgChildComponent } from './ng-contentchild/ng-child/ng-child.component';
import { NgNameComponent } from './ng-contentchild/ng-name/ng-name.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DemoComponent } from './lifecycle-hooks/demo/demo.component';
import { SampleDirective } from './CustomDirectives/sample.directive';
import { PropVsHostBindingComponent } from './prop-vs-host-binding/prop-vs-host-binding.component';
import { BindingDemoComponent } from './prop-vs-host-binding/binding-demo/binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateComponent,
    NgContainerComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    FriendComponent,
    NgContentchildComponent,
    NgChildComponent,
    NgNameComponent,
    LifecycleHooksComponent,
    DemoComponent,
    SampleDirective,
    PropVsHostBindingComponent,
    BindingDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

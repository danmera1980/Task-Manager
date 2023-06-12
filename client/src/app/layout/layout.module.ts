import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";
import { MaterialModule } from "@app/style/material.module";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout.routing";

@NgModule({
  declarations: [ FooterComponent, HeaderComponent, NavigationComponent, LayoutComponent],
  imports: [CommonModule, SharedModule, MaterialModule, LayoutRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}

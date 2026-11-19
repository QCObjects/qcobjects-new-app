"use strict";

import { Package, type IQCObjectsElement, View } from "qcobjects";

Package("org.quickcorp.custom.views", [

  class CardView extends View {
    done (...args: never[]) {
      const _ret_ = super.done(args);
      const component = this.component;
      if (component !== undefined && component.body !== undefined) {
        (component.body as IQCObjectsElement).style.display = "block";
        (component.body as IQCObjectsElement).style.width = "100px";
        (component.body as IQCObjectsElement).style.height = "100px";
      }
      return _ret_;
    }
  }
]);

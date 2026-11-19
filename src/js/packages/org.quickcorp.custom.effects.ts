"use strict";

import { Package, TransitionEffect } from "qcobjects";

Package("org.quickcorp.custom.effects", [

  class MainTransitionEffect extends TransitionEffect {
    duration = 780;
    defaultParams: /* partial by design; base class supplies the rest */ any = {
      alphaFrom: 0,
      alphaTo: 1
    };

    effects = ["Fade", "MoveYInFromBottom"];
    fitToHeight = true;
  },

  class SlideLeftTransitionEffect extends TransitionEffect {
    duration = 450;

    effects = ["Fade", "MoveXInFromLeft"];
    fitToWidth = true;
  },

  class SlideRightTransitionEffect extends TransitionEffect {
    duration = 450;

    effects = ["Fade", "MoveXInFromRight"];
    fitToWidth = true;
  }
  
]);

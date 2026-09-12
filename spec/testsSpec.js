#!/usr/bin/env node
/* eslint-disable no-undef */

const {
  Class,
  ClassFactory,
  New,
  Component,
  Effect,
  logger
} = require("qcobjects");
const { NotificationComponent } = require("qcobjects-sdk");

describe("QCObjects Main Test", function () {
  it("Class Declaration Test Spec", function () {
    const Main = Class("Main", Object, {});

    expect(Main).toEqual(ClassFactory("Main"));
    logger.debug("Class Declaration Test Spec... OK");
  });

  it("Main intance Test Spec", function () {
    const Main = ClassFactory("Main");
    const __main__ = New(Main, {});
    expect(typeof __main__.__instanceID).toEqual("number");
    expect(typeof __main__.__classType).toEqual("string");
    logger.debug("Main intance Test Spec... OK");
  });

  it("Existence of Component Class", function () {
    expect(Component).toEqual(ClassFactory("Component"));
    logger.debug("Existence of Component Class... OK");
  });

  it("Existence of Effect Class", function () {
    expect(Effect).toEqual(ClassFactory("Effect"));
    logger.debug("Existence of Effect Class... OK");
  });

  it("global exposes QCObjects classes", function () {
    expect(typeof global.Component).toEqual("function");
    expect(typeof global.Class).toEqual("function");
    logger.debug("global as QCObjects global... OK");
  });

  it("Existence of QCObjects SDK", function () {
    expect(typeof require("qcobjects-sdk")).toEqual("object");
    expect(typeof NotificationComponent).toEqual("function");
    logger.debug("Existence of QCObjects SDK... OK");
  });
});
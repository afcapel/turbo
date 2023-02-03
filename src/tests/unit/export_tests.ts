import * as Turbo from "../../index"

test("Turbo interface", () => {
  expect(typeof Turbo.start).toEqual("function")
  expect(typeof Turbo.registerAdapter).toEqual("function")
  expect(typeof Turbo.visit).toEqual("function")
  expect(typeof Turbo.connectStreamSource).toEqual("function")
  expect(typeof Turbo.disconnectStreamSource).toEqual("function")
  expect(typeof Turbo.renderStreamMessage).toEqual("function")
  expect(typeof Turbo.clearCache).toEqual("function")
  expect(typeof Turbo.setProgressBarDelay).toEqual("function")
  expect(typeof Turbo.setConfirmMethod).toEqual("function")
  expect(typeof Turbo.setFormMode).toEqual("function")
  expect(typeof Turbo.cache).toEqual("object")
  expect(typeof Turbo.navigator).toEqual("object")
  expect(typeof Turbo.session).toEqual("object")
})

const service = require('./service');

test("#randomRgbColor", () => {
  service.randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});
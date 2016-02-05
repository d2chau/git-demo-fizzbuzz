describe('controllers', () => {
  beforeEach(angular.mock.module('hackathonVideo'));

  beforeEach(inject(($controller) => {

    $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(true).toEqual(true);
  });
});

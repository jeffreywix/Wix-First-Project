'use strict';

describe('Controller: MainCtrl', function () {

  var scope;

  beforeEach(module('wixApp')); //makes the module available

  beforeEach(inject(function ($controller, $rootScope) { //getting what we actually need
    scope = $rootScope.$new();
    var wix = {
      addEventListener: function() {}
    };
    wix.Utils = jasmine.createSpyObj('utils', ['getInstanceId', 'getInstance', 'getViewMode']);
    wix.Events = {
      SETTINGS_UPDATED: 'updated'
    }
    $controller('MainCtrl', {$scope: scope, $wix: wix});
  }));

  it('should update the message when event occurs', function() {
    expect(scope.message).toBeUndefined();
    scope.handleEvent('message');
    expect(scope.message).toEqual('message');
  });
});

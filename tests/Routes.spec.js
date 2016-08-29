describe('Routes', function () {
  // var state can be defined here
  var $state, state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function () {
    // var state cannot be reassigned here.
    // Must be gotten from `$state` in `it` block
    it('should have the correct url', function () {
      state = $state.get('settings');
      expect(state.url).toEqual('/settings');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('SettingsController');
    });
  });

  describe('UserSettings', function () {
    it('should have the correct url', function () {
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

  describe('NotificationsSettings', function () {
    it('should have the correct url', function () {
      state = $state.get('settings.notifications');
      expect(state.url).toEqual('/notifications');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });
});

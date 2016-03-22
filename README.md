# Writing tests for routing

## Objectives

- Integrate unit tests for our routing configurations

## Instructions

We've got our three states setup in this repo - settings, user settings and notification settings.

Our settings state should get its template from `views/settings.html` and use the `SettingsController`.

Our user settings state should get its template from `views/settings/user.html` and use the `UserSettingsController`.

Our notification settings state should get its template from `views/settings/notifications.html` and use the `NotificationsSettingsController`.

Using the knowledge from our previous README, add our tests to ensure that all of our URLs are correct, that we're using the correct controller and that the templateUrl is correct.
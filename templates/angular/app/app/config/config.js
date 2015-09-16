import { exceptionHandlerDecorator } from 'config/decorators';
import { constants }                 from 'config/constants';

export default angular.module('%APP_NAME%.config', [])
  .constant(constants)
  .config(config)
  .decorator('$exceptionHandler', exceptionHandlerDecorator);

function config($compileProvider, $httpProvider, $locationProvider, $logProvider, ENV) {

  if (ENV === 'production') {
    // Enable for performance boost on production
    $compileProvider.debugInfoEnabled(false);

    // Disable console.log outputs for production
    $logProvider.debugEnabled(false);
  }

  // Combine close $http calls together and run $digest once
  $httpProvider.useApplyAsync(true);

  // Allows to access application URLs without the # sign
  $locationProvider.html5Mode(true);
}

config.$inject = ['$compileProvider', '$httpProvider', '$locationProvider', '$logProvider', 'ENV'];
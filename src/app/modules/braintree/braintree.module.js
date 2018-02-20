// Modules
import CommonModule from '../common/common.module';
import CoreModule from '../core/core.module';

// Services
import BraintreeDataService from './services/braintree-data.service';
import BraintreeConfigService from './services/braintree-config.service';
import BraintreeAppService from './services/braintree-app.service';

// Container Components
import CustomerComponent from './components/container/customer/customer.component';
import CreditCardComponent from './components/container/creditcard/creditcard.component';
import DropinComponent from './components/container/dropin/dropin.component';
import PaypalComponent from './components/container/paypal/paypal.component';
import PaypalButtonComponent from './components/container/paypal-button/paypal-button.component';
import SubscriptionPlansComponent from './components/container/subscription-plans/subscription-plans.component';
import SubscriptionPlansCustomComponent from './components/container/subscription-plans-custom/subscription-plans-custom.component';
import SubscriptionOverviewComponent from './components/container/subscription-overview/subscription-overview.component';
import PaymentMethodsComponent from './components/container/payment-methods/payment-methods.component';
import BillingOverviewComponent from './components/container/billing-overview/billing-overview.component';

// Presentation Components
import UICreditCardFormComponent from './components/presentation/creditcard-form/creditcard-form.component';
import UICustomerFormComponent from './components/presentation/customer-form/customer-form.component';
import UIMessageBoxComponent from './components/presentation/message-box/message-box.component';
import UISubscriptionPlanComponent from './components/presentation/subscription-plan/subscription-plan.component';
import UISubscriptionDetailsComponent from './components/presentation/subscription-details/subscription-details.component';
import UISubscriptionOverviewComponent from './components/presentation/subscription-overview/subscription-overview.component';
import UISubscriptionProgressComponent from './components/presentation/subscription-progress/subscription-progress.component';
import UISubscriptionNavigationComponent from './components/presentation/subscribe-navigation/subscribe-navigation.component';
import UIPaymentMethodComponent from './components/presentation/payment-method/payment-method.component';

// View Components (Route Components)
import HomeViewComponent from './components/view/braintree-home/braintree-home.component';
import SubscribeViewComponent from './components/view/subscribe/subscribe-view.component';

let ngModule = angular.module('braintree-angular-spa.modules.braintree', [
	CommonModule.name,
	CoreModule.name
]);

/**
 * App Module
 */
ngModule
	.config(braintreeConfig)
	.run(braintreeRun)
	// Services
	// TODO: Rename to braintreeDataService
	.service('braintreeDataService', BraintreeDataService)
	.service('braintreeConfigService', BraintreeConfigService)
	.service('braintreeAppService', BraintreeAppService)

	// Container components
	.component('braintreeBillingOverview', BillingOverviewComponent)
	.component('braintreeCustomer', CustomerComponent)
	.component('braintreeCreditCard', CreditCardComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeSubscriptionPlans', SubscriptionPlansComponent)
	.component('braintreeSubscriptionPlansCustom', SubscriptionPlansCustomComponent)
	.component('braintreeSubscriptionOverview', SubscriptionOverviewComponent)
	.component('braintreePaymentMethods', PaymentMethodsComponent)
	.component('braintreePaypal', PaypalComponent)
	.component('braintreePaypalButton', PaypalButtonComponent)

	// Presentational components
	.component('uiBraintreeCustomerForm', UICustomerFormComponent)
	.component('uiBraintreeCreditcardForm', UICreditCardFormComponent)
	.component('uiBraintreeMessageBox', UIMessageBoxComponent)
	.component('uiBraintreeSubscriptionDetails', UISubscriptionDetailsComponent)
	.component('uiBraintreeSubscriptionNavigation', UISubscriptionNavigationComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlanComponent)
	.component('uiBraintreeSubscriptionProgress', UISubscriptionProgressComponent)
	.component('uiBraintreeSubscriptionOverview', UISubscriptionOverviewComponent)
	.component('uiBraintreePaymentMethod', UIPaymentMethodComponent)

	// View components
	.component('braintreeHome', HomeViewComponent)
	.component('braintreeSubscribeView', SubscribeViewComponent);


/* @ngInject */
function braintreeConfig($locationProvider, $routeProvider, $translateProvider) {
	$translateProvider
		.translations('en', require('../../../assets/locales/lang-en.json'))
		.translations('pt', require('../../../assets/locales/lang-pt.json'))
		.translations('es', require('../../../assets/locales/lang-es.json'))
		.translations('de', require('../../../assets/locales/lang-de.json'))
		.useSanitizeValueStrategy(null)
		.preferredLanguage('en')
		.fallbackLanguage('en');

	$locationProvider.html5Mode(false);

	// Route configs
	// -----------------------------------------------------
	$routeProvider
		.when('/', {
			template: '<braintree-subscription-plans-custom></braintree-subscription-plans-custom>',
		})
		.when('/billing-overview', {
			template: '<braintree-billing-overview></braintree-billing-overview>',
		})
		.when('/cards', {
			template: '<braintree-credit-card></braintree-credit-card>',
		})
		.when('/drop-in', {
			template: '<braintree-dropin></braintree-dropin>',
		})
		.when('/customer', {
			template: '<braintree-customer></braintree-customer>',
		})
		.when('/payment-methods', {
			template: '<braintree-payment-methods></braintree-payment-methods>',
		})
		.when('/paypal', {
			template: '<braintree-paypal></braintree-paypal>',
		})
		.when('/subscribe', {
			template: '<braintree-subscription-plans-custom></braintree-subscription-plans-custom>',
		})
		.when('/subscription-overview', {
			template: '<braintree-subscription-overview></braintree-subscription-overview>',
		})
}

/* @ngInject */
function braintreeRun($rootScope){
	$rootScope.$on("$locationChangeStart", function(event, next, current) {

	});
}

export default ngModule;

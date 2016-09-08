import template from './subscription-plans.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class SubscriptionPlansComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.plans = [];
		this.state = {
			error: false,
			loading: false,
			nextRoute: ''
		};

		this.customer = null;
		this.selectedSubscription = {};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		if(!this.customer.clientToken) {
			this.braintreeDataService.setup();
		}

		this._getAllSubscriptionPlans();
	}

	_getAllSubscriptionPlans() {
		this.state.loading = true;
		this.loadingText = 'Fetching subscription plans...';

		this.braintreeDataService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
				this.state.loading = false;
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';
				this.state.loading = false;
				this.state.error = true;
			}
		);
	}

	// Public viewModel methods
	// --------------------------------------------------
	chooseSubscriptionPlan(subscriptionPlanModel) {
		//console.log('plan chosen', subscriptionPlanModel);
		this.braintreeDataService.initSelectedSubscriptionData();
		this.braintreeDataService.updateSelectedSubscription(subscriptionPlanModel);

		this.state.nextRoute = ROUTES.CUSTOMER;

		this.routeTo(ROUTES.CUSTOMER);
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	routeTo(path){
		this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {

	},
	template: template,
	controller: SubscriptionPlansComponent
};

export default component;

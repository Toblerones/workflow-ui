import Ember from 'ember';

export default Ember.Route.extend({
	auth: Ember.inject.service(),

	activate: function() {
		if (this.get('auth.isLoggedIn')) {
			this.transitionTo('dashboard.search');
		}
	},

	model: function() {
		var data = this.store.createRecord('login', {
			
		});
		return data;
	},

	deactivate: function() {
		this.destroy();
	}
});

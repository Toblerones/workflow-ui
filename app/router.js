import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('wsi', function() {
        this.route('e', {
            path: 'e/:cmd'
        });
    });

	this.route('dashboard');
	this.route('login');
	this.route('logout');
});

export default Router;

import DS from 'ember-data';

export default DS.Model.extend(Ember.Validations, {
    userId: DS.attr('string'),
    password: DS.attr('string'),

    validations: {
    	userId: {
    		presence: true
    	},
    	password: {
    		presence: true
    	}
    }
});

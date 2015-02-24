var Container = function() { this.services = {}; };
Container.prototype = {
	services: {},
	
	set: function(name, instance) {
		if(this.services[name] !== undefined) {
			throw new Error('The "'+name+'" service already exist');
		}
		this.services[name] = instance;
		return this;
	},
	get: function(name, error) {
		if(this.services[name] === undefined) {
			if(error !== false) {
				throw new Error('The "'+name+'" service does not exist');
			} else {
				return undefined;
			}
		}
		return this.services[name];
	},
};


module.exports = Container;

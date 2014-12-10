var jobHelpers = require('jobHelpers')();

module.exports = function()
{
	//declare base object
	var jobHarvest = function() {};
	//-------------------------------------------------------------------------

	jobHarvest.work = function (creep)
	{
		//avoid hostiles
		if (jobHelpers.avoidHostile(creep))
			return;

		//continue if no nearby hostiles
		if(creep.energyCapacity === 0 || creep.energy < creep.energyCapacity) {
			var sources = creep.pos.findNearest(Game.SOURCES);
			creep.moveTo(sources);
			creep.harvest(sources);
		}
		else {
			var target = creep.pos.findNearest(Game.MY_SPAWNS);

			creep.moveTo(target);
			creep.transferEnergy(target);
		}
	}
	//-------------------------------------------------------------------------
	//return populated object
	return jobHarvest;
}
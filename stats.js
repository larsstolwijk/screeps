/**
 * require("stats").COMMAND
 */
module.exports = {

    log:function(){

        if((Game.time % 25) == 0){
            console.log("- INFO -");
            console.log("> Flags        " + _.size(Game.flags));
            console.log("> Rooms        " + _.size(Game.rooms));
            console.log("> Spawns       " + _.size(Game.spawns));
            console.log("> Structures   " + _.size(Game.structures));
            console.log("> Creeps       " + _.size(Game.creeps));
            console.log("> Time         " + Game.time);
            console.log("> GCL          Level " + Game.gcl.level + " Progress " + (Game.gcl.progressTotal-Game.gcl.progress) );

            for (var roomName in Game.rooms) {
                var room = Game.rooms[roomName];
                if(room === undefined) continue;

                console.log("> Controller   " + roomName + " Level " + room.controller.level + " Progress, " + (room.controller.progressTotal-room.controller.progress) + " to go for next level.");
            }

            console.log("-----");
        }

        if((Game.time % 2500) == 0){
            Game.notify("> Creeps       " + _.size(Game.creeps));
            Game.notify("> GCL          Level " + Game.gcl.level + " Progress " + (Game.gcl.progressTotal-Game.gcl.progress));
        }
    },

};

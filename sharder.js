const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
    token: "",
    totalShards: 1,
    shardArgs: [...process.argv, ...["--sharded"]]
});
manager.spawn();
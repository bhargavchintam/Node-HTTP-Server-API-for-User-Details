var fs = require("fs");
console.log("File Content ");
fs.stat("example.txt", function (error, stats)
{
    fs.open("example.txt", "r", function (error, fd)
	{
        var buffer = new Buffer.alloc(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer)
		{
                var data = buffer.toString("utf8");
                console.log(data);
        });
    });
});
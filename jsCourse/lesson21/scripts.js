let player = {
    age: 99,
    name: 'ABC',
    isActive: true,
    outfit: {
        size: "m",
    }
};

console.log(player);

console.log(player.name);

player.isActive = false;

console.log(player.isActive);

console.log(player.outfit.size);

player.outfit.size = "L";
console.log(player.outfit.size);
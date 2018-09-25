import randomeFunc from "./randomeFunc";

let showEnemy = false;

export default (
  ctx,
  canvas,
  player,
  enemy,
  powerdot,
  pscore,
  gscore,
  image
) => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Verbana";

  ctx.fillStyle = "white";
  ctx.fillText(`Человек: ${pscore}    Сопливчик: ${gscore}`, 2, 20);

  if (
    player.x <= enemy.x + 12 &&
    player.y <= enemy.y + 32 &&
    enemy.x <= player.x + 12 &&
    enemy.y <= player.y + 32
  ) {
    if (powerdot.ghosteat) {
      pscore++;
    } else {
      gscore++;
    }
    enemy.x = randomeFunc(canvas.width - 62);
    enemy.y = randomeFunc(canvas.height - 62);
    player.x = 10;
    player.y = 30;
    powerdot.pcountdoun = 0;
  }

  if (
    player.x <= powerdot.x &&
    player.y <= powerdot.y &&
    powerdot.x <= player.x + 20 &&
    powerdot.y <= player.y + 20
  ) {
    powerdot.powerup = false;
    powerdot.pcountdoun = 500;
    powerdot.ghostNum = enemy.pacX;
    enemy.pacX = 384;
    powerdot.ghosteat = true;
  }

  if (powerdot.ghosteat) {
    powerdot.pcountdoun--;
    if (powerdot.pcountdoun <= 0) {
      powerdot.ghosteat = false;
      enemy.pacX = powerdot.ghostNum;
      enemy.speed = randomeFunc(3);
    }
  }
  if (!powerdot.powerup) {
    powerdot.x = randomeFunc(canvas.width - 62);
    powerdot.y = randomeFunc(canvas.height - 62);
    powerdot.powerup = true;
  }
  if (!showEnemy) {
    enemy.pacX = randomeFunc(5) * 64;
    enemy.speed = randomeFunc(3);
    enemy.x = randomeFunc(canvas.width - 62);
    enemy.y = randomeFunc(canvas.height - 62);
    showEnemy = true;
  } else {
    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.arc(powerdot.x, powerdot.y, 8, 0, Math.PI * 2, true);
    ctx.fill();
  }

  if (enemy.moving <= 0) {
    enemy.moving = randomeFunc(30) * 3;
    enemy.speed = randomeFunc(3);
    enemy.dirX = 0;
    enemy.dirY = 0;

    if (powerdot.ghosteat) {
      enemy.speed = enemy.speed * -1; //or !enemy.speed
    }

    if (enemy.moving % 2) {
      enemy.dirX = player.x < enemy.x ? -enemy.speed : enemy.speed;
    } else {
      enemy.dirY = player.y < enemy.y ? -enemy.speed : enemy.speed;
    }
  }

  enemy.moving--;
  enemy.x += enemy.dirX;
  enemy.y += enemy.dirY;
  enemy.pacY = enemy.pacY === 0 ? (enemy.pacY = 32) : (enemy.pacY = 0);

  ctx.drawImage(
    image,
    player.pacX,
    player.pacY,
    32,
    32,
    player.x,
    player.y,
    player.size,
    player.size
  );
  ctx.drawImage(
    image,
    enemy.pacX,
    enemy.pacY,
    32,
    32,
    enemy.x,
    enemy.y,
    enemy.size,
    enemy.size
  );

  return { pscore, gscore };
};

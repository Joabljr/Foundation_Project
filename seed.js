const Character = require("./server/db/Character");
const db = require("./server/db/database");

async function seed() {
  await db.sync({ force: true });
  console.log("db is synced!");

  const characters = await Promise.all([
    Character.create({
      name: "Mr. Nothing",
      image: "Images/Mr.Nothing_Specialist.png",
      role: "Specialist",
      description:
        "Mr. Nothing, a man of Kou-wu City, Yan. Learned martial arts from a young age. Became quite skilled, but was forced into exile after offending local powers.",
    }),
    Character.create({
      name: "W",
      image:
        "Images/w_and_w_arknights_drawn_by_neg_101neg__sample-7251489c7e486d2572b7afd393e8aa75.jpg",
      role: "Sniper",
      description:
        "Truthfully, I've thought up countless possibilities about coming back here, looking out at the same scenery that she saw that day...It's all too outrageous, 'Doctor.'",
    }),
    Character.create({
      name: "Carnelian",
      image: "Images/Carnelian_Winter Skin.png",
      role: "Caster",
      description:
        "Leithania traditional women's windbreaker, matched with a pair of fur shawls and velvet gloves, without fear of any low temperature environment.",
    }),
    Character.create({
      name: "Blemishine",
      image: "Images/Maria_Defender.png",
      role: "Defender",
      description:
        "Witch Feast character script Horrorlair Order customized costume/ Moon Catastrborn. The actor who has divided the moon.",
    }),
    Character.create({
      name: "Pallas",
      image: "Images/pallas_and_pallas_arknights_drawn_by_azling.jpg",
      role: "Guard",
      description:
        "Series of selected models / Heritage. The traditional costumes of Minoan sacrifices have been turned into Minoans' fashion style again after modern renewal.",
    }),
    Character.create({
      name: "Indigo",
      image: "Images/Indigo_Mage.png",
      role: "Caster",
      description:
        "Handmade in Lungmen, with thin and comfortable material. It has purple that the customer likes as base colour. Embellished to be casual yet dignified.",
    }),
    Character.create({
      name: "Saria",
      image: "Images/saria_mountain_robin_saria_and_kafka_arknights.jpg",
      role: "Defender",
      description:
        "Strength is not the essence of combat. Strength should not be used with haste. In the midst of the tempest, only those on guard stay standing.",
    }),
    Character.create({
      name: "Leonhardt",
      image: "Images/Leonhardt_mage.png",
      role: "Caster",
      description:
        "Leonhardt's winter wear/ Hope Cruise. Victorian style with exquisite material. Ensuring comfort with built-in lining lets the outfit look simple but uncomplicated.",
    }),
    Character.create({
      name: "Thorns",
      image: "Images/Thorns_Guard.png",
      role: "Guard",
      description:
        "I.T's brand UNDER GARDEN collaboration clothing/Comodo. With a black and white basic colour combination, the third colour can be freely chosen.",
    }),
    Character.create({
      name: "Andreana",
      image: "Images/Andreana_Sniper.png",
      role: "Sniper",
      description:
        "EPOQUE sub-brand [Passe] series of selected models/ Silent Arrow. The classic Iberian style has been modified by the customer's own designs.",
    }),
    Character.create({
      name: "Jaye",
      image: "Images/Jayce_Specialist.png",
      role: "Specialist",
      description:
        "Durable material that is loose and comfortable, while fitting and breathable. With a good fit, it ensures aesthetic and suits all kinds of outdoor activities.",
    }),
    Character.create({
      name: "FEater",
      image: "Images/feater_leizi_and_mr_nothing_arknights.jpg",
      role: "Specialist",
      description:
        "The costume FEater wore in a popular Lungmen movie. Using an undershirt allowing for ease of movement and a traditional buttoned jacket.",
    }),
  ]);

  console.log(`seeded ${characters.length} characters`);
}

async function runSeed() {
  console.log("seeding..");
  try {
    await seed();
  } catch (error) {
    console.error(error);
    process.exitCOde = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;

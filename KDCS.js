/* global module */

// load methods defined in mafia
const {
    autosell,
    availableAmount,
    cliExecute,
    setProperty,
    getProperty,
    item,
    visitUrl,
    runChoice,
    print,
    printHtml,
    wait
} = require('kolmafia');

const steps = {
    /*
    -------------------------------
    | PRE-ASCENSION               |
    -------------------------------
    */
    preAscension: function() {
        cliExecute("/whitelist Alliance From Heck");
        cliExecute("stash take 1 snow suit");
        cliExecute("use 1 diabolic pizza cube");
        cliExecute("/whitelist Old CW's Germ Free Clan");
	
	    
	setProperty("_kdcs_next_step", "kdcs postAscension");
        printHtml(`
		<br>
        	-------------------------------
        	ASCEND Normal Community Service
        	Blender, Pastamancer, Astral Trousers, Astral Pilsners
        	--------------------------------
		<br>
        	Then run:
		kdcs postAscension'
        `);
    },

    postAscension: function() {
        
        // vote at the voting booth
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
		
        
        //get consults 
        cliExecute("fortune cwbot pizza batman thick");
        wait(5);
        cliExecute("fortune cwbot pizza batman thick");
         wait(5);
        cliExecute("fortune cwbot pizza batman thick");
        
        
        // accept meatsmith quest
        visitUrl('shop.php?whichshop=meatsmith&action=talk');
        runChoice(1);

        // visit the toot oriole
        visitUrl("tutorial.php?action=toot");

        cliExecute("use 1 letter from King Ralph XI");
        cliExecute("use 1 pork elf goodies sack");
     
        autosell(availableAmount(Item.get("hamethyst")), Item.get("hamethyst"));
        autosell(availableAmount(Item.get("baconstone")), Item.get("baconstone"));
        
        // sell all but 2 porqouises if we have 3 or more
        if (availableAmount(Item.get("porquoise")) > 2) {
        autosell(availableAmount(Item.get("porquoise"))-2, Item.get("porquoise"));
        }
        
        // manual visit to fireworks shop to allow purchases
        visitUrl('clan_viplounge.php?action=fwshop');    

        cliExecute("buy using storage 1 borrowed time");
        cliExecute("buy using storage 1 1952 Mickey Mantle card");
        cliExecute("buy using storage 1 non-Euclidean angle");

        cliExecute("pull 1 snow suit");
        cliExecute("pull 1 borrowed time");
        cliExecute("pull 1 non-Euclidean angle");
        cliExecute("pull 1 1952 Mickey Mantle card");
        cliExecute("Pull 1 staff of simmering hatred");

        cliExecute("breakfast");
        cliExecute("detective solver");
        cliExecute("numberology 69");
        cliExecute("saber familiar");
        cliExecute("backupcamera reverser on");
        cliExecute("backupcamera ml");
        cliExecute("retrocape mysticality thrill");
        cliExecute("maximize mys, equip garbage shirt, equip familiar scrapbook, equip fourth of may, equip lil doctor, equip eight days a week pill keeper");
        cliExecute("cargo 284");
        cliExecute("use 1 borrowed time");
        cliExecute("use 1 bird-a-day calendar");
        cliExecute("use 1 astral six-pack");
        cliExecute("boombox meat");
        cliExecute("autosell Newbiesport Tent");
        cliExecute("create fish hatchet");
        cliExecute("familiar plastic pirate skull");
        cliExecute("equip miniature crystal ball");

        cliExecute("buy 1 toy accordion");
        cliExecute("buy 1 glittery mascara");
        cliExecute("buy 1 dramatic range");
        cliExecute("use 1 dramatic range");
        cliExecute("acquire turtle totem");
        cliExecute("acquire saucepan");

	setProperty("_kdcs_next_step", "kdcs summons");
	    
        printHtml(`
		<br>
		// Map Monster - Haunted Pantry - Possessed Can of Tomatoes  (Feel Envy, Chest X-Ray)
		// Map Monster - Haunted Kitchen - Possessed Silverware Drawer (Feel Envy, Chest X-Ray)
		// Map Monster - Skeleton Store – Novelty tropical skeleton (Feel Envy, Chest X-Ray)
		<br>
		Then run:
		kdcs summons`);
    },

	
    summons: function() {
				
	//let's grab that guaranteed sausage goblin
	cliExecute("equip kramco sausage-o-matic");
	cliExecute("/aa CS_Kills");
	visitUrl("adventure.php?snarfblat=240");
		
        cliExecute("cast 1 advanced cocktailcrafting");
        cliExecute("cast 1 advanced saucecrafting");
        cliExecute("cast 1 eye and a twist");
        cliExecute("maximize MP");
        cliExecute("Council");

	setProperty("_kdcs_next_step", "kdcs buffs");
	    
        printHtml(`
		<br>
		// Do Coil wire test
		<br>
   		Then run:
		kdcs buffs`);
    	},

	
    buffs: function() {
        cliExecute("familiar hovering sombrero");
        cliExecute("equip miniature crystal ball");

        cliExecute("shower lukewarm");
        cliExecute("cast 1 inscrutable gaze");
        cliExecute("chew 1 non-Euclidean angle");
        cliExecute("daycare mysticality");
        cliExecute("telescope look high");
        cliExecute("monorail");
        cliExecute("use 1 votive of confidence");
        cliExecute("use 1 glittery mascara");

        cliExecute("cast 1 advanced cocktailcrafting");
        cliExecute("cast 1 advanced saucecrafting");
        cliExecute("cast 1 feel excitement");
        cliExecute("cast 1 the magical mojomuscular melody");
        cliExecute("cast 1 get big");
        cliExecute("cast 1 manicotti meditation");
        cliExecute("cast 1 Stevedave's Shanty of Superiority");
        cliExecute("Cast 1 sauce contemplation");
        cliExecute("Cast 1 Carol of the Thrills");
        cliExecute("Cast 1 Carol of the bulls");
        cliExecute("Cast 1 Seek out a bird");
        cliExecute("Cast 1 blood bond");
        cliExecute("Cast 1 leash of linguini");
        cliExecute("Cast 1 empathy of the newt");
        cliExecute("Cast 1 Singer's Faithful Ocelot");
        cliExecute("Cast 1 Astral Shell");
        cliExecute("Cast 1 Elemental Saucesphere");
        cliExecute("Cast 1 blood bubble");
        cliExecute("Cast 1 polka of plenty");
        cliExecute("equip powerful glove");
        cliExecute("cast 1 cheat code: triple size");
        cliExecute("beach head 10");
        cliExecute("beach head 11");
        cliExecute("equip off-hand familiar scrapbook");
        cliExecute("use 1 a ten-percent bonus");

        cliExecute("Create 1 ointment of the occult ");
        cliExecute("Create 1 tomato juice of powerful power");
        cliExecute("Use 1 ointment of the occult ");
        cliExecute("Use 1 tomato juice of powerful power");

        cliExecute("pillkeeper free familiar");
        cliExecute("pool aggressive");
        cliExecute("swim laps");

        cliExecute("mood cs");
        cliExecute("Bastille Myst");

	setProperty("_kdcs_next_step", "kdcs postBuff");
	    
        printHtml(`
    		<br>
    		// Daycare - scavenge
   	 	// Cook Pizza :
    		// - Magical Ice Cubes
    		// - Antique Packet of Ketchup
    		// - Little Paper Umbrella
    		// - 1952 Mickey Mantle Card
    		<br>
    		Then run:
		kdcs postBuff`);
    	},

	
    postBuff: function() {
        cliExecute("eat 1 diabolic pizza");

        cliExecute("maximize mys, equip garbage shirt, equip familiar scrapbook, equip fourth of may, equip draftsman, equip backup camera");
        cliExecute("backupcamera ml");

        cliExecute("soak");

	cliExecute("/aa CS_WitchessWitch");
        cliExecute("reminisce witchess witch");

	/*
        printHtml(`
    		<br>
    		// beat up witchess witch
    		<br>
   		Then run:
		kdcs preMushroom`)
    },

    preMushroom: function() {		
	*/

        cliExecute("maximize mys, equip garbage shirt, equip familiar scrapbook, equip fourth of may, equip draftsman, equip battle broom, equip hewn moon-rune spoon");
		
	cliExecute("create 1 magical sausage");
	cliExecute("eat 1 magical sausage");

	setProperty("_kdcs_next_step", "mox");
	    
        printHtml(`
		<br>	
    		// Fight mushroom
    		// pick mushroom
		// Equip Lil Doctor Bag
    		// Go to NEP
    		// Reject quest
    		// Try and cast Feel Prides as late as possible, and make sure Familiar Scrapbook is equipped when you do.
    		<br>
   		Then run:
		kdcs mox`);
    },

	
    mox: function() {
        cliExecute("create 1 oil of expertise");
        cliExecute("use 1 oil of expertise");
        cliExecute("mood apathetic");
        cliExecute("maximize mox");

	setProperty("_kdcs_next_step", "mus");
	    
        printHtml(`
		<br>	
    		// Do mox test (1)
    		<br>
    		Then run:
		kdcs mus`)
    },

	
    mus: function() {
        cliExecute("maximize mus");

	setProperty("_kdcs_next_step", "mys");
	    
        printHtml(`/
		<br>	
   		// Do mus test (1)
    		// Do HP test (1)
    		<br>
    		Then run:
		kdcs mys`);
    },

	
    mys: function() {
        cliExecute("maximize mys");

	setProperty("_kdcs_next_step", "hot");
	    
        printHtml(`
		<br>	
    		// Do mys test (1)
    		<br>
    		Then run:
		kdcs hot`);
    },

	
    hot: function() {
        
	// go foam/mist/saber a crate
        cliExecute("equip fourth of may cosplay saber");
        cliExecute("equip industrial fire extinguisher");
    	cliExecute("equip vampyric cloake");
	setProperty("choiceAdventure1387",2);
	cliExecute("/aa CS_HotResPrep");
	visitUrl("adventure.php?snarfblat=240");
	    
	cliExecute("familiar exotic parrot");
        cliExecute("equip snow suit");
        cliExecute("spacegate vaccine 1");
        cliExecute("cast 1 feel peaceful");
	cliExecute("cast 1 astral shell");
	cliExecute("cast 1 elemental saucesphere");
        cliExecute("beach head 1");
	cliExecute("maximize hot res");

	setProperty("_kdcs_next_step", "noncombat");
	    
        printHtml(`
		<br>
    		// Do hot res test (1)
    		<br>
   		Then run:
		kdcs noncombat`);
    },

	
    noncombat: function() {
        cliExecute("familiar disgeist");
        cliExecute("equip snow suit");
        cliExecute("buy 1 porkpie-mounted popper");
        cliExecute("create 1 shoe gum");
        cliExecute("use 1 shoe gum");
        cliExecute("cast 1 CHEAT CODE: Invisible Avatar");
        cliExecute("Cast 1 Feel Lonely");
        cliExecute("Cast 1 The Sonata of Sneakiness");
        cliExecute("Cast 1 Smooth Movement");
        cliExecute("use 1 shady shades");
        cliExecute("maximize -combat");
        cliExecute("genie effect disquiet riot");

	setProperty("_kdcs_next_step", "fam");
	    
        printHtml(`<br>
    		// do -combat test (1)
    		<br>
    		Then run:
		kdcs fam`);
    },

	
    fam: function() {
        cliExecute("cast 2 ode to booze");
        cliExecute("drink 6 astral pilsner");
        cliExecute("spoon platypus");
        cliExecute("maximize familiar weight");
        cliExecute("cast 1 empathy of the newt");
        cliExecute("use 1 silver face paint ");

	// go shower/saber a crate
	cliExecute("equip fourth of may cosplay saber");
	setProperty("choiceAdventure1387",2);
	cliExecute("/aa CS_ShowerSaber");
	visitUrl("adventure.php?snarfblat=240");

	setProperty("_kdcs_next_step", "weapon");
	    
        printHtml(`
		<br>
		// Do familiar weight test (32)
		<br>
		Then run:
		kdcs weapon`);
    },

	
    weapon: function() {
	cliExecute("acquire seal-skull helmet")
        cliExecute("familiar exotic parrot");
        cliExecute("equip snow suit");
        cliExecute("maximize spooky res");
        cliExecute("cast 1 feel peaceful");
        cliExecute("cast 1 elemental saucesphere");
        cliExecute("cast 1 astral shell");
        cliExecute("soak");
        cliExecute("cast 1 deep dark visions");
        cliExecute("cast 1 cannelloni cocoon");

	// go shower/saber an Ungulith
	cliExecute("equip fourth of may cosplay saber");
	cliExecute("/aa CS_ShowerSaber");
	setProperty("choiceAdventure1387", 3)
        cliExecute("reminisce ungulith");

	/*
        printHtml(`
		<br>
        	// ungulith fight
		// meteor shower
        	// use the force, drop your things
        	<br>
        	Then run:
		kdcs weaponEnd`);
    },

    weaponEnd: function() {
		*/
		
        cliExecute("maximize weapon damage");
        cliExecute("boombox fists");
        cliExecute("use 1 corrupted marrow");
        cliExecute("use 1 yeg's motel toothbrush");
        cliExecute("cast 1 visit your favorite bird");
        cliExecute("cast 1 seek out a bird");
        cliExecute("cast 1 song of the north ");
        cliExecute("cast 1 carol of the bulls");
        cliExecute("cast 1 blood frenzy");
        cliExecute("cast 1 rage of the reindeer");
        cliExecute("cast 1 scowl of the auk");
        cliExecute("cast 1 blessing of the war snapper");
        cliExecute("acquire 1 disco mask");
        cliExecute("hatter 9");
        cliExecute("beach head 6");
        cliExecute("pool aggressive");
        cliExecute("cast 1 bow-legged swagger");

	setProperty("_kdcs_next_step", "spell");
	    
        printHtml(`
        	<br>
		// do weapon dmg test (1)
        	<br>
        	Then run:
		kdcs spell`);
    },
	
	
    spell: function() {
        
        cliExecute("Cast 1 simmer");
		
	// go shower/saber a crate
 	cliExecute("equip fourth of may cosplay saber");
	setProperty("choiceAdventure1387",2);
	cliExecute("/aa CS_ShowerSaber");
	visitUrl("adventure.php?snarfblat=240");

		/*
        printHtml(`
		<br>
		// Fight crate at noob cave
            	// cast meteor shower
            	// use the force, find 2 and meet here
            	<br>
           	Then run:
	   	kdcs spellEnd`);
    },

    spellEnd: function() {
		*/
		
        cliExecute("cast 1 song of sauce");
        cliExecute("cast 1 carol of the hells");
        cliExecute("cast 1 arched eyebrow of the archmage");
        cliExecute("cast 1 spirit of cayenne");
        cliExecute("pool strategic");
        cliExecute("beach head 7");
        cliExecute("maximize spell damage");

	setProperty("_kdcs_next_step", "item");
	    
        printHtml(`
		<br>
            // do spell test (34)
           <br>
            Then run:
	   kdcs item`);
    },
    item: function() {
        cliExecute("soak");
        cliExecute("hermit clover");
        cliExecute("use 1 clover");
	
	// go get the cylcops eyedrops
	visitUrl('adventure.php?snarfblat=19');
		
        cliExecute("use 1 cyclops eyedrops");
        cliExecute("equip vampyric cloake");
        cliExecute("equip fourth of may cosplay saber");
        cliExecute("familiar hovering sombrero");
        cliExecute("equip snow suit");
        cliExecute("equip off-hand familiar scrapbook");

	// set auto-attack to bowl straight up, cast bat form and attack
	cliExecute("/aa CS_BlackCrayonPirate");
        cliExecute("reminisce black crayon pirate");

		/*
        printHtml(`
		<br>
		// black crayon pirate fight
		// bowl straight up
		// become a bat
		// attack
		<br>
		Then run:
		kdcs itemEnd`);
    },

    itemEnd: function() {
		*/
	    
        cliExecute("maximize item drop, -equip broken champagne bottle");
        cliExecute("cast 1 feel lost");
        cliExecute("cast 1 steely-eyed squint");
        cliExecute("genie effect infernal thirst");
        cliExecute("fortune buff item");
        cliExecute("cast 1 fat leon's phat loot lyric");
        cliExecute("cast 1 singer's faithful ocelot");
        cliExecute("cast 1 the spirit of taking ");
        cliExecute("use 1 bag of grain");
        cliExecute("genie effect frosty");

	setProperty("_kdcs_next_step", "postrun");
	    
        printHtml(`
		<br>
		// do item test (1)
		<br>
		// final service
		<br>
		Then run:
		kdcs postRun`);
    },

    /*
    -----------------------
    | Post-Run Stuff      |
    -----------------------
    */
    postRun: function() {
        cliExecute("/whitelist Alliance From Heck");
        cliExecute("unequip snow suit");
        cliExecute("stash put 1 snow suit");
        cliExecute("boombox meat");
        cliExecute("mood apathetic");
        cliExecute("pull all");
        cliExecute("use 1 cold medicine cabinet");
        cliExecute("buy 1 clockwork maid");
        cliExecute("use 1 clockwork maid");
        cliExecute("uneffect feeling lost");
        cliExecute("create 1 bitchin meatcar");
        cliExecute("breakfast");
        cliExecute("epicmall");
        cliExecute("philter");

        setProperty("_locketMonstersFought", getProperty("_locketMonstersFought") + ",-1");
    }
};

function main(arg="") {
    // If ran without arguments, and _kdcs_next_step blank, assume pre-ascension
    if (arg === "" && getProperty("_kdcs_next_step") === "") {
        setProperty("_kdcs_next_step", "preAscension");
    }
    // If there's an argument passed, run that
    // Otherwise run what _kdcs_next_step says
    const step = arg !== "" ? arg : getProperty("_kdcs_next_step");
    // See if the passed in step matches any of the functions named in the steps object
    if (steps.hasOwnProperty(step)) {
        // if a valid step was passed in, call the corresponding method
        steps[step]();
    } else {
        print(`Unrecognized step '${step}'. First step is preAscension.`, 'red');
    }
}

// make sure mafia knows what function to call
module.exports.main = main;

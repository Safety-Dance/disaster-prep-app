const water = {
    id: 'water',
    title: 'Water',
    image: '',
    overview: `The CDC recommends storing a three-day supply of water for your household, for drinking and sanitation purposes. This means you will need one gallon of water per person (and pet!) per day. If anyone in your home is pregnant or ill, or if you live in a hot climate, you might want to consider storing more.`,
    options: [{
        id: 'waterOne',
        description: `Store my water!`,
        tips: `You can buy pre-packaged water, or food-safe containers to store your own tap water. It's a good idea to keep water in a few different places, like your garage, car, or storage closet.`
    }, {
        id: 'waterTwo',
        description: `Filter my water!`,
        tips: `Make sure you also have a plan for where you will get the water you are going to filter. There are many affordable options for water filters--just make sure yours is rated to 0.1 micron absolute filtration.`
    }, {
        id: 'waterThree',
        description: `Treat my water!`,
        tips: `Make sure you also have a plan for where you will get the water you are going to treat. Two good treatment options are household bleach (add 1/8 teaspoon to a gallon of water and wait 30 minutes before using) or water treatment tablets (follow the directions on the package). You can also boil your water for one full minute to make it safe to drink.`
    }],
    // for citation later: https://www.cdc.gov/healthywater/emergency/drinking/creating-storing-emergency-water-supply.html
};

const food = {
    id: 'food',
    title: 'Food',
    image: '',
    overview: `Store at least a three-day supply of non-perishable food for everyone in your household. Make sure you will also have access to any needed can-openers, cooking/eating utensils, etc.`,
    options: [{
        id: 'foodOne',
        description: `My pantry is always fully stocked!`,
        tips: `Have access to food that your family already eats. Make sure you have enough food that can be eaten without cooking, and avoid overly-salty foods that will make you thirsty. Prioritize high-calorie, highly nutritious foods.`
    }, {
        id: 'foodTwo',
        description: `I will store freeze-dried meals!`,
        tips: `Make sure also you have a pot and fuel source for cooking, and enough extra water to boil. `
    }, {
        id: 'foodThree',
        description: `I will store ready-to-eat, portable dry goods!`,
        tips: `Think of snacks your family already eats! Things like granola bars, nuts and dried fruits, and jerky are easy to store in rodent-proof containers and take with you if you have to evacuate.`
    }],
};

const electricity = {
    id: 'electricity',
    title: 'Electricity',
    image: '',
    overview: `In an emergency, you will likely be without electricity for a period of time, so do not assume you will have access to power. You should use devices (like your phone) sparingly to preserve battery, but it's also a good idea to have backup power options.`,
    options: [{
        id: 'electricityOne',
        description: `I will keep a supply of batteries and/or power bricks!`,
        tips: `Keep your spare batteries somewhere easily accessible--you may have to find them in the dark! If you opt for rechargeable batteries, make sure you recharge them regularly even if they haven't been used.`
    }, {
        id: 'electricityTwo',
        description: `I will use a solar panel!`,
        tips: `Small, portable solar panels are becoming much more accessible and affordable. The benefit is that they never run out of energy, but keep in mind that they charge batteries relatively slowly, and only when the sun is shining.`
    }, {
        id: 'electricityThree',
        description: `I will use a generator!`,
        tips: `Do some research to determine what size of generator you need. Keep in mind you will also need to have backup fuel stored to power your generator.`
    }],
};

const communication = {
    id: 'communication',
    title: 'Communication',
    image: '',
    overview: `You may not be home when a disaster occurs, so you should have a plan in place for every member of your household to get back to your home (or to a safe meeting place) and get into contact with each other. In case of a region-wide emergency, decide on an out-of-area contact you will all call to check in. Make sure you all have the phone number memorized.`,
    options: [{
        id: 'communicationOne',
        description: `I will locate my nearest emergency communication hub!`,
        tips: `Portland maintains a series of emergency communication/assistance hubs called Basic Earthquake Emergency Communication Nodes, or BEECN. You can find your nearest BEECN site by entering your zipcode on their website: https://www.portlandoregon.gov/pbem/article/483656`
    }, {
        id: 'communicationTwo',
        description: `I will maintain an emergency/weather radio!`,
        tips: `An emergency/weather radio can help you find out what your local conditions are like. You can even purchase radios that have a hand crank in case the battery dies.`
    }, {
        id: 'communicationThree',
        description: `I will build a network with my neighbors!`,
        tips: `Your community can be your strongest lifeline. In the event of a major disaster, it will be more difficult for first responders to get to you--but your neighbors are nearby. Get to know your neighbors and consider creating a neighborhood emergency plan.`
    }],
};

const shelter = {
    id: 'shelter',
    title: 'Shelter',
    image: '',
    overview: `If your home remains intact after a disaster, it is likely your safest location to shelter in place. But if your home is now unsafe, you will need a portable way to stay out of the elements and keep warm.`,
    options: [{
        id: 'shelterOne',
        description: `I will use a tent or tarp!`,
        tips: `Any tent you choose should be big enough for all members of your household, but small enough to carry. Make sure you set up camp away from structures that may collapse.`
    }, {
        id: 'shelterTwo',
        description: `I will use ponchos and emergency blankets!`,
        tips: `Staying dry is key to staying warm, and preventing hypothermia is essential. Ponchos and emergency blankets are small, lightweight, and easy to carry.`
    }, {
        id: 'shelterThree',
        description: `I will identify my nearest community building!`,
        tips: `Identify some public buildings where you might be able to go if your home is unsafe. This could include local libraries, religious buildings, community centers, etc. Also make a plan for how you will get there.`
    }],
};

const firstaid = {
    id: 'firstaid',
    title: 'First Aid',
    image: '',
    overview: `Your first-aid kit should contain enough supplies for everyone in your household, at a minimum. If anyone needs daily medication or vision correction, keep a backup supply in your kit. Think about any other special needs of people in your household. It is also a good idea to have a small first-aid guide stored in your kit.`,
    options: [{
        id: 'firstAidOne',
        description: `I will buy a pre-assembled first-aid kit!`,
        tips: `There are many options for pre-assembled first-aid kits. Make sure yours has enough supplies for the size of your household. Note that many of these kits do not contain medications--you may want to consider adding a few basics like anti-inflammatories and antihistamines.`
    }, {
        id: 'firstAidTwo',
        description: `I will assemble my own first-aid kit!`,
        tips: `Consider what you will store your first-aid kit in--it should be portable and ideally waterproof. You may wish to use pre-assembled kits as a basic guide, and modify according to your needs.`
    }, {
        id: 'firstAidThree',
        description: `I will update my existing first-aid kit!`,
        tips: `Make a plan to regularly check your kit and replace any items that have been used up or expired. Make sure you are thinking about potential major injuries, not just everyday cuts and scrapes.`
    }],
};

const sanitation = {
    id: 'sanitation',
    title: 'Sanitation',
    image: '',
    overview: `Sanitation is often overlooked in planning for a disaster, but it is essential to keeping yourself and your family healthy. Think about everyday items you may need for hygiene (toiletries, etc), and what you will do if plumbing fails.`,
    options: [{
        id: 'sanitationOne',
        description: `I will use bucket toilets!`,
        tips: `Five-gallon buckets with lids are a cheap and simple way to contain your waste if plumbing is out of order. You can also purchase toilet seats that fit onto a bucket.`
    }, {
        id: 'sanitationTwo',
        description: `I will use sanitizing wipes/gel/sprays!`,
        tips: `Hand sanitizer is an easy way to clean your hands and body when water is scarce. Wipes are convenient, but create waste that you will need to store somewhere.`
    }, {
        id: 'sanitationThree',
        description: `I will store a supply of hygiene products and heavy-duty garbage bags!`,
        tips: `Think about what is needed for your household specifically. This could include feminine hygiene products, diapers, or even just a few sets of clean underwear.`
    }],
};

export const categoriesArray = [
    water,
    food,
    shelter,
    communication,
    firstaid,
    electricity,
    sanitation
];
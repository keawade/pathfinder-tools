var mongoose = require('mongoose')

var characterSchema = new mongoose.Schema({
  user: String,
  general: {
    player: String,
    character: {
      name: String,
      alignment: String,
      classes: String,
      diety: String,
      homeland: String,
      race: String,
      size: String,
      gender: String,
      age: String,
      height: String,
      weight: String,
      hair: String,
      eyes: String
    }
  },
  abilities: {
    str: {
      score: Number,
      temp: Number
    },
    dex: {
      score: Number,
      temp: Number
    },
    con: {
      score: Number,
      temp: Number
    },
    int: {
      score: Number,
      temp: Number
    },
    wis: {
      score: Number,
      temp: Number
    },
    cha: {
      score: Number
      temp: Number
    },
  },
  offense: {
    bab: Number,
    initiative__mod: Number,
    speed: {
      base: Number,
      armor: Number,
      fly: {
        speed: Number,
        manueverability: String
      },
      swim: Number,
      climb: Number,
      burrow: Number
    },
    cmb__mod: Number,
    cmb__temp: Number,
    weapons: [{
      name: String,
      attackbonus: Number,
      damage: Number,
      critical: {
        range: Number,
        multiplier: Number
      },
      damage__type: String,
      ammo: {
        name: String,
        quantity: Number
      }
    }]
  },
  defense: {
    armor: {
      ac__bonus: Number,
      ac__shieldbonus: Number,
      ac__natural: Number,
      ac__deflectmod: Number
    },
    saves: {
      fortitude: {
        base: Number,
        magicmod: Number,
        miscmod: Number,
        tempmod: Number
      },
      reflex: {
        base: Number,
        magicmod: Number,
        miscmod: Number,
        tempmod: Number
      },
      will: {
        base: Number,
        magicmod: Number,
        miscmod: Number,
        tempmod: Number
      }
    },
    resistances: [{
      resist__type: String,
      resist__amount: Number
    }],
    immunities: [String],
    cmd: {
      miscmod: Number,
      tempmod: Number
    },
    spellresistance: Number,
    damagereduction: Number,
    hp: {
      total: Number,
      current: Number,
      wounds: String,
      nonlethal: Number
    }
  },
  skills: {
    acrobatics: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    appraise: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    bluff: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    climb: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    craft: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    diplomacy: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    disabledevice: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    disguise: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    escapeartist: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    fly: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    handleanimal: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    heal: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    intimidate: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    knowledge: {
      arcana: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      dungeoneering: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      engineering: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      geography: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      history: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      local: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      nature: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      nobility: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      planes: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      },
      religion: {
        ranks: Number,
        class: Boolean,
        racial: Number,
        trait: Number,
        misc: Number,
        note: String
      }
    },
    linguistics: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    perception: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    perform: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    profession: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    ride: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    sensemotive: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    sleightofhand: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    spellcraft: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    stealth: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    survival: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    swim: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    },
    usemagicdevice: {
      ranks: Number,
      class: Boolean,
      racial: Number,
      trait: Number,
      misc: Number,
      note: String
    }
  },
  feats: [{
    name: String,
    type: String,
    description: String
  }],
  traits: [{
    name: String,
    type: String,
    description: String
  }],
  special: [{
    name: String,
    type: String,
    description: String
  }],
  spells: {
    known: {
      0th: Number,
      1st: Number,
      2nd: Number,
      3rd: Number,
      4th: Number,
      5th: Number,
      6th: Number,
      7th: Number,
      8th: Number,
      9th: Number
    },
    dc: {
      0th: Number,
      1st: Number,
      2nd: Number,
      3rd: Number,
      4th: Number,
      5th: Number,
      6th: Number,
      7th: Number,
      8th: Number,
      9th: Number
    },
    perday: {
      0th: Number,
      1st: Number,
      2nd: Number,
      3rd: Number,
      4th: Number,
      5th: Number,
      6th: Number,
      7th: Number,
      8th: Number,
      9th: Number
    },
    mods: String,
    specialty: String,
    list: {
      spelllike: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String,
        atwill: Boolean
      }],
      0th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      1st: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      2nd: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      3rd: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      4th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      5th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      6th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      7th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      8th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }],
      9th: [{
        name: String,
        school: String,
        subschool: String,
        prepared: Number,
        cast: Number,
        note: String,
        description: String
      }]
    }
  },
  inventory: {
    money: {
      platinum: Number,
      gold: Number,
      silver: Number,
      copper: Number
    },
    treasure: String,
    items: {
      ac__item: {
        name: String,
        ac__bonus: Number,
        itemtype: String,
        checkpenalty: Number,
        spellfailure: Number,
        weight: Number,
        description: String
      },
      gear: {
        name: String,
        geartype: String,
        location: String,
        quantity: Number,
        weight: Number, // per item
        description: String
      }
    }
  },
  notes: String
})

var character = mongoose.model('character', characterSchema)
module.exports = character

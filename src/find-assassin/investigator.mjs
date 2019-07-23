import getRandomInteger from './../utils/get-random-integer.mjs';

export default class {
  constructor ({ suspects, places, weapons }) {
    this.suspects = suspects;
    this.places = places;
    this.weapons = weapons;
    this.suspect = suspects[getRandomInteger(suspects.length - 1)];
    this.likelyPlace = places[getRandomInteger(places.length - 1)];
    this.likelyWeapon = weapons[getRandomInteger(weapons.length - 1)];
    this.result = undefined;
    this.correct = false;
    this.iterations = 0;
  }

  async startInvestigation (assassin, place, weapon) {
    var result;
    while (!this.correct) {
      this.iterations += 1;
      this.createTheory();
      this.checkTheory(assassin, place, weapon);
      result = this.validateResult();
    }
    return { result, iterations: this.iterations };
  }

  createTheory() {
    this.suspect = this.result === 1 ? this.suspects[getRandomInteger(this.suspects.length - 1)] : this.suspect;
    this.likelyPlace = this.result === 2 ? this.places[getRandomInteger(this.places.length - 1)] : this.likelyPlace;
    this.likelyWeapon = this.result === 3 ? this.weapons[getRandomInteger(this.weapons.length - 1)] : this.likelyWeapon;
  }

  checkTheory (assassin, place, weapon) {
    if (assassin !== this.suspect && place !== this.likelyPlace && weapon !== this.likelyWeapon) {
      this.result = getRandomInteger(1, 3);
    } else if (assassin !== this.suspect && place !== this.likelyPlace) {
      this.result = getRandomInteger(1, 2);
    } else if (place !== this.likelyPlace && weapon !== this.likelyWeapon) {
      this.result = getRandomInteger(2, 3);
    } else if (assassin !== this.suspect && weapon !== this.likelyWeapon) {
      var random = getRandomInteger(1, 3);
      while (random === 2) {
        random = getRandomInteger(1, 3);
      }
      this.result = random;
    } else if (assassin !== this.suspect) {
      this.result = 1;
    } else if (place !== this.likelyPlace) {
      this.result = 2;
    } else if (weapon !== this.likelyWeapon) {
      this.result = 3;
    } else {
      this.result = 0;
    }
  }

  validateResult () {
    switch (this.result) {
    case 0:
      this.correct = true;
      return `${this.suspect} assassinou Bill Gates em ${this.likelyPlace} com um(a) ${this.likelyWeapon}`;
    case 1:
      this.suspects = this.suspects.filter(s => s !== this.suspect);
      break;
    case 2:
      this.places = this.places.filter(p => p !== this.likelyPlace);
      break;
    case 3:
      this.weapons = this.weapons.filter(w => w !== this.likelyWeapon);
      break;
    }
    return false;
  }
}

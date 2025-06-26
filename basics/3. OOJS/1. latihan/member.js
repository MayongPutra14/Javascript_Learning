class Member {
  #point = 0;
  discountGold = 0.2;
  discountSilver = 0.1;

  addPoint(jumlah) {
    this.#point += jumlah;
  }

  getDiscount(member) {
    if (member instanceof GoldMember) {
      return this.discountGold;
    } else if (member instanceof SilverMember) {
      return this.discountSilver;
    }
  }
}

class GoldMember extends Member {}

class SilverMember extends Member {}

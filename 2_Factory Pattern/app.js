function GroupMember() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMemberShip(name);
    } else if (type === 'standard') {
      member = new StandardMemberShip(name);
    } else if (type === 'super') {
      member = new SuperMemberShip(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.salaray}`);
    };

    return member;
  };
}

const SimpleMemberShip = function (name) {
  this.name = name;
  this.salaray = '$7';
};

const StandardMemberShip = function (name) {
  this.name = name;
  this.salaray = '$15';
};

const SuperMemberShip = function (name) {
  this.name = name;
  this.salaray = '$30';
};

const members = [];
const groupMember = new GroupMember();

members.push(groupMember.createMember('John Smith', 'simple'));
members.push(groupMember.createMember('Lina Johnson', 'standard'));
members.push(groupMember.createMember('Sara Williams', 'super'));
members.push(groupMember.createMember('Steven Smith', 'super'));

// console.log(members);

members.forEach(function (member) {
  member.define();
});

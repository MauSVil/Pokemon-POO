// class Attack {
//   constructor(attack_type, directed_to, power) {
//     this.attack_type = attack_type,
//     this.directed_to = directed_to,
//     this.power = power
//   }
// }

contador = 0;

class Pokemon {
  constructor(name,hard_attack_name,hard_attack_power,soft_attack_name,soft_attack_power){
    this.name = name,
    this.total_life = 100,
    this.total_stamina = 30,
    this.hard_attack_name = hard_attack_name,
    this.soft_attack_name = soft_attack_name,
    this.hard_attack_power = hard_attack_power,
    this.soft_attack_power = soft_attack_power,
    this.can_attack = true,
    this.is_alive = true
  }

  checkLife(){
    if(this.total_life<=0){
      this.can_attack = false;
      this.is_alive = false
    }
    else{
      this.can_attack = true;
    }
  }

  attack(p2){
    var attack = prompt(`Escoje entre
      1: Hard Attack,
      2: Soft Attack`)
    attack = Number(attack)
    switch (attack) {
      case 1:
        p2.total_life = p2.total_life-this.hard_attack_power
        this.total_stamina = this.total_stamina - 20
        console.log(`El total de stamina hasta el momento de ${this.name} es: ${this.total_stamina}`);
        break;
      case 2:
        p2.total_life = p2.total_life-this.soft_attack_power
        this.total_stamina = this.total_stamina - 10
        console.log(`El total de stamina hasta el momento de ${this.name} es: ${this.total_stamina}`);
        break;
      default:
    }
    console.log(`${this.name} ha atacado a ${p2.name} dejandolo con ${p2.total_life}`);
  }

  staminaRecovery(){
    this.total_stamina += this.total_stamina * 0.75
  }
}


pikachu = new Pokemon("pikachu", "Impactrueno", 70, "Hacerse bolita", 10)
charizard = new Pokemon("charizard", "Escupir fuego" , 90, "Tornado", 5)

fight = function(p1,p2){
  if (p1.is_alive && p2.is_alive) {
    contador = contador + 1
    // console.log(contador);
    if (contador % 2 == 0){
      console.log(`Turno de ${p1.name}`);
      p1.checkLife()
      if(p1.can_attack === true){
        p1.attack(p2)
      }
      else{
        console.log(`Ya perdio ${p1.name}`);
      }
    }
    else{
      console.log(`Turno de ${p2.name}`);
      p2.checkLife()
      if(p2.can_attack === true){
        p2.attack(p1)
      }
      else{
        console.log(`Ya perdio ${p2.name}`);
      }
    }
    repeat = setTimeout(() => {
      fight(pikachu,charizard)
    }, 1000)
  }
}

fight(pikachu,charizard)

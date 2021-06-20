import { Column, OneToMany } from 'typeorm';
import Descriptive from './descriptive';
import Screen from './screen';

class Scenario implements Descriptive {
  @Column()
  description: string;

  @Column()
  currentScreen: Screen;

  @OneToMany(() => Screen)
  screens: Screen[];

  constructor(description: string) {
    this.description = description;
  }
}

export default Scenario;

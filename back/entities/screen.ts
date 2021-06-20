import { Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';
import Descriptive from './descriptive';

@Entity()
class Screen implements Descriptive {
  @ObjectIdColumn()
  id: ObjectID | undefined;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

export default Screen;

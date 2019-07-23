import { Injectable } from '@angular/core';
import { EntityBaseDataService } from '../entity-base-data.service';
import { Aluno } from '../../models/aluno/aluno';

@Injectable()
export class AlunoDataService extends EntityBaseDataService<Aluno> {}

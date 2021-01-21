import { Lancamento } from './lamcamento.model';

export class Funcionario {

    constructor(public nome: string,
                public email: string,
                public cpf: string,
                public perfil: string,
                public valorHor?: string,
                public qtdHorasTrabalhoDia?: string,
                public atdHorasAlmoco?: string,
                public lancamento?: Lancamento[],
                public id?: string) {} 
}
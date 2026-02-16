
import{bancos} from './bancos'


const getBancoId = (id) => bancos.find ( (banco) => banco.id===id);
console.log(getBancoId(1));